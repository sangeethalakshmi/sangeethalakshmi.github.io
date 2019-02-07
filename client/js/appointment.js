/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var appointmentslist = [];
function createorUpdateAppointment(from,obj,details){
  var functionname =  "";
  $('#appointment_date_error').html("");
  $('#appointment_time_error').html("");
  if($('#appointment_id').val() == ""){
    functionname = 'create';
  }else{
    functionname = 'update/'+$('#appointment_id').val();
  }
    var appointment_details = $('#appointmentform').serialize();
    var appointment_date = $("input[name=appointment_date]:checked").val();
    var appointment_time = $("input[name=appointment_time]:checked").val();
    if(from && from == "delete"){
      appointment_details = details;
      appointment_date = obj.appointment_date;
      appointment_time =  obj.appointment_time;
      functionname = 'update/'+obj.id;
    }
    if (appointment_details) {
      var timedate = moment(appointment_date + ' ' + appointment_time).format("YYYY-MM-DD HH:mm");
      appointment_details += '&appointment='+timedate;
      if ( functionname == 'create') {
        var userdetails = JSON.parse(localStorage.getItem('user'));
        appointment_details += '&user_id='+ userdetails.id;
        if (localStorage.getItem('usertype') != 'User' ){
          appointment_details += '&userType='+ userdetails.role;
        }else{
          appointment_details += '&userType='+ localStorage.getItem('usertype');
        };
        appointment_details += '&cancelled_by=NULL';
      }else{
        if ($('#status1').val() == "CANCELLED") {
          if (localStorage.getItem('usertype') != 'User') {
            appointment_details += '&cancelled_by=Super Admin';
          }else{
            appointment_details += '&cancelled_by=User';
          }
        }
      };
    };
    if (appointment_date && appointment_date != '' && appointment_time && appointment_time != '') {
        $.ajax({
            type: "POST",
            url: site_url + "User_appointment/"+functionname,
            data: appointment_details,
            success: function (result) {
                var data = $.parseJSON(result);
                if (data.success) {
                  if(functionname =='create'){
                    $('#appointment_success').html('Add User appointment Successfully.');
                    
                  }else{
                    $('#appointment_success').html('Update User appointment Successfully.');
                  }
                  renderAppointmentsGrid();
                  $('#appointment_success').show();
                  setTimeout(function () {
                      $('#appointment_success').hide();
                  }, 2000);
                }
                else {
                    $('#appointment_error').html(data.error);
                    $('#appointment_error').show();
                    $('#appointment_date').val('');
                    $('#description').val('');
                    $('input[name=appointment_time]').attr('checked',false);
                    $('#appointment_id').val('');
                }
            }
        });
    } else if (appointment_date == '' || !appointment_date) {
        $('#appointment_date_error').html('Please Select Date.');
        $('#appointment_date_error').show();
    } else if (appointment_time == '' || !appointment_time) {
        $('#appointment_time_error').html('Please Select Time.');
        $('#appointment_time_error').show();
       
    }
}

function getappointmentTimesforSlots(date,start,end,duration,slots){
  var times = [];
  var startdatentime = moment(date + " " + start);
  var enddatentime = moment(date + " " + end);
  var days = enddatentime.diff(startdatentime);
  var minutes = moment.duration(days).asMinutes();
  var counter = minutes/duration;
  if (counter && counter>0) {
    for (var i = 0; i < counter; i++) {
      if (i == 0) {
        //times.push(start);
        //slots.push(start);
        times.push(moment.utc(start,'hh:mm').format('hh:mm'));
        slots.push(moment.utc(start,'hh:mm').format('hh:mm'));
      }else{
        times.push(moment.utc(times[i-1],'hh:mm').add(duration,'minutes').format('hh:mm'));
        slots.push(moment.utc(times[i-1],'hh:mm').add(duration,'minutes').format('hh:mm'));

      };
    };
  };
  return slots;
}
function getappointmentsettings(date){
  $('.appointmenttimebtngroup').html("");
  $('input[type=radio][name=appointment_time]').remove();           
  $.ajax({
      type: "get",
      url: site_url + 'User_appointment/getDefaultAppointmetSettings',
      data:{'date':date},
      success: function (result) {
        var data = $.parseJSON(result);
        if (data.success) {
          var slots  = [];
          if (data.user && data.user.start_1 && data.user.end_1 && data.user.start_1_duration) {
              slots = getappointmentTimesforSlots(date,data.user.start_1,data.user.end_1,data.user.start_1_duration,slots);
          };
          if (data.user && data.user.start_2 && data.user.end_2 && data.user.start_2_duration) {
              slots = getappointmentTimesforSlots(date,data.user.start_2,data.user.end_2,data.user.start_2_duration,slots);
          };
          if (data.user && data.user.start_3 && data.user.end_3 && data.user.start_3_duration) {
              slots = getappointmentTimesforSlots(date,data.user.start_3,data.user.end_3,data.user.start_3_duration,slots);
          };
          if (data.user && data.user.start_4 && data.user.end_4 && data.user.start_4_duration) {
              slots = getappointmentTimesforSlots(date,data.user.start_4,data.user.end_4,data.user.start_4_duration,slots);
          };
          if (data.user && data.user.start_5 && data.user.end_5 && data.user.start_5_duration) {
              slots = getappointmentTimesforSlots(date,data.user.start_5,data.user.end_5,data.user.start_5_duration,slots);
          };
          var bookedslots = [];
          if (data.bookedslots && data.bookedslots.length>0) {
            data.bookedslots.forEach(function  (booked) {
              if (booked && booked.time) {
                bookedslots.push(booked.time);
              };
            });
          };
          slots = slots.filter(function(val) {
            return bookedslots.indexOf(val) == -1;
          });
          $('.appointmenttimebtngroup').html("");
          if (slots && slots.length>0) {
            $.each(slots, function(key, value) { 
              $('.appointmenttimebtngroup').append('<label class="btn btn-default"><input type="radio" id="_'+value+'" name="appointment_time" value="'+value+'" />'+value+'</label>')
            });
          };
        }; 
      }
    });
}
function getAddAppointmentForm(){
  $('.listscreen').hide();
  $('.addscreen').show();
  $('input[name=appointment_time]').attr('checked',false);
  $('#appointment_date').val("");
  $('#appointment_id').val("");
  $('#status').val("");
  $('#active').val("");
  loadAddAppointmentform('addform');
}
function deleteAppointmentConfirmDetails(id) {
  data = appointmentslist[id];
  var text = "delete";
  if (localStorage.getItem('usertype') == 'User') {
    text = "cancel";
  };
  if (confirm('Are you sure want to '+text+'?')) {
    var obj = {
      "id":data.id,
      'appointment_time':moment(data.appointment_time).format("HH:mm"),
      'appointment_date':moment(data.appointment_time).format("YYYY-MM-DD")
    };
    appointment_details = 'id='+data.id+'&user_id='+data.user_id+'&full_name='+ data.full_name+'&email_address='+ data.email+'&phone_number='+ data.phone_number;
    if (text == "cancel") {
      appointment_details += '&status=CANCELLED&deleted=0&active=1'
    }else if (text == 'delete') {
      appointment_details += '&status='+ data.status+'&deleted=1&active=0';
    };
    createorUpdateAppointment('delete',obj,appointment_details);
  }
}

function getAppointmentdeatils(id){
  $('.appointmentdatebtngroup').html("");
  $('input[type=radio][name=appointment_date]').remove();
  $('.listscreen').hide();
  $('.addscreen').show();
  $('input[name=appointment_time]').attr('checked',false);
  $('input[name=appointment_date]').attr('checked',false);
  $('#appointment_date').val("");
  $('#appointment_id').val("");
  $('#status1').val("");
  $('#active').val("");
  $('#appointment_error').html('');
  $('#appointment_error').hide();
  $('#appointment_success').html('');
  $('#appointment_success').hide();
  var dayaftertomorrow = moment();
  var startDate = moment();
  var endDate = moment().add(9, 'days');
  $.ajax({
      type: "get",
      url: site_url + 'User_appointment/read/'+id,
      success: function (result) {
        var data1 = $.parseJSON(result);
        var disableday = 6;
        var weekdaynumbers = {"Sunday" : 0,"Monday" : 1,"Tuesday" : 2,"Wednesday" : 3,"Thursday" : 4,"Friday" : 5,"Saturday" : 6}
       if (data1.success) {
          console.log("correct login");
          $('.modal').modal('hide');
          if (data1.appointment) {
            $.ajax({
              type: "get",
              url: site_url + 'User_appointment/getGeneralAppointmetSettings',
              success: function (result) {
                var data = $.parseJSON(result);
                if (data.success) {
                  if (data.generalSettings) {
                    var statrtdays = 0;
                    var enddays = 0;
                    if (data.generalSettings.show_appointments_before_days) {
                        statrtdays = parseInt(data.generalSettings.show_appointments_before_days);
                        if (statrtdays) {
                          dayaftertomorrow = moment(data1.appointment.date)
                        };
                        startDate = dayaftertomorrow;
                    };
                    if (data.generalSettings.show_appointment_upto) {
                        enddays = parseInt(data.generalSettings.show_appointment_upto);
                        if (enddays) {
                          endDate = moment(data1.appointment.date).add(enddays, 'days');
                        }else{
                          endDate = moment(data1.appointment.date).add(data.generalSettings.show_appointment_upto, 'days');
                        };
                    };
                    if (data.generalSettings.leave_on) {
                        disableday = weekdaynumbers[data.generalSettings.leave_on];
                    };
                    
                  };
                }
                var availdates = enumerateDaysBetweenDates(startDate, endDate);
                if (availdates && availdates.length>0) {
                  $.each(availdates, function(availdate, availvalue) { 
                    $('.appointmentdatebtngroup').append('<label class="btn btn-default"><input type="radio" id="_'+availvalue.YYYYMMDD+'" name="appointment_date" value="'+availvalue.YYYYMMDD+'" />'+availvalue.dddmmmdo+'</label>')
                  });
                };
                getappointmentsettings(data1.appointment.date);
                if (localStorage.getItem('usertype') && localStorage.getItem('usertype') != 'User') {
                  $('.showhiddenstatus').hide();
                  $('.hidehiddenstatus').show();
                }else{
                  $('.showhiddenstatus').show();
                  $('.hidehiddenstatus').hide();
                };
                $('#status1').val(data1.appointment.status);
                
                setTimeout(function  () {
                 
                  $('#_'+data1.appointment.date).attr('checked',true);
                  $('#_'+data1.appointment.date).parent().addClass('active');
                  $("#appointmentdatebtngroup :input").change(function() {
                    if (this && this.value) {
                      //var date1 = e.date.getFullYear() + '-' + (e.date.getMonth() + 1) + '-' + e.date.getDate();
                      getappointmentsettings(this.value)
                    };
                  });
                    $('.appointmenttimebtngroup').append('<label class="btn btn-default active"><input type="radio" id="_'+data1.appointment.time+'" name="appointment_time" value="'+data1.appointment.time+'" />'+data1.appointment.time+'</label>')
                    $('#_'+data1.appointment.time).attr('checked',true);
                    $('#description').val(data1.appointment.description);
                    $('#appointment_id').val(data1.appointment.id);
                $('#active').val(data1.appointment.active);
                },500);
                }
            });
          } 
        } 
      }
    });
}
function renderAppointmentsGrid(){
  $('.listscreen').show();
  $('.addscreen').hide();
  var source = {
    datatype: "json",
    datafields: [{
        name: 'full_name',
        type: 'string'
      }, {
        name: 'phone_number',
        type: 'string'
      }, {
        name: 'email',
        type: 'string'
      }, {
        name: 'appointment_time',
        type: 'date'
      },
      {
        name: 'status',
        type: 'string'
      },{name:"id",
      type:"number"},
      {name:"user_id",
      type:"number"},{name:"days",
      type:"number"}],
        cache: false,
    url: site_url + 'User_appointment/getAppointments',
    beforeprocessing: function (data) {
      if (data != null && data.length > 0) {
        source.totalrecords = data[0].totalRecords;
        appointmentslist = data;
      }
    }
  };
  var columns = [ {
        text: 'Phone',
        datafield: 'phone_number',
        width:'13%',
        filterable: true,
        hidden:true,
      }, {
        text: 'Email',
        datafield: 'email',
        width:'24%',
        filterable: true,
        hidden:true,
      }, {
        text: 'Appointment',
        datafield: 'appointment_time',width:'19%',
        filterable: true,
        hidden:true,
      },
      {
        text: 'Status',
        datafield: 'status',width:'10%',
        filterable: true,
        hidden:true,
      },
      {
        text: 'Id',
        datafield: 'id',hidden:true,
        filterable: false
      },{
        text: 'UserId',
        datafield: 'user_id',hidden:true,
        filterable: false
      },  
          {
          filterable: false,
            text: 'Details', align: 'center', datafield: 'full_name',
            cellsRenderer: function (row, column, value, rowData) {
              var container = '<div class="col-xs-12 nopadding">'
              var leftcolumn = '<div class="col-xs-12 text-center nopadding col-sm-1">';
              var rightcolumn = '<div class="col-xs-12 text-left col-sm-7">';
              var lastcolumn = '<div class="col-xs-12 text-center col-sm-4">';
              var image =  '<div style="margin: 10px;"><img width="60" height="60" style="margin:auto;" src="images/testimonial/avatar.jpeg"/></div>';
              var full_name = "<div style='margin: 10px;'><b>" + rowData.full_name + "</b></div>";
              var Email = "<div style='margin: 10px;'>" + rowData.email+"(" + rowData.phone_number + ")</div>";
              var appointment = "<div style='margin: 10px;'>" + moment(rowData.appointment_time).format('ddd, MMM D, LT') + "</div>";
              
              var status = "<div style='margin: 10px;'> " + rowData.status + "</div>";
              var editbutton = '<div class="gridicons" style="margin: 15px 10px;"><a  href="javascript:void(0)" onClick="getAppointmentdeatils('+rowData.id+');" class="btn btn-default btn-sm">&nbsp;&nbsp;&nbsp;<i class="fa fa-pencil"></i> Edit&nbsp;&nbsp;&nbsp;</a></div>';
              var deletebutton = '';
              if (localStorage.getItem('usertype') == 'Super Admin') {
                 deletebutton = '<div class="gridicons" style="margin: 15px 10px;"><a href="javascript:void(0)" onClick="deleteAppointmentConfirmDetails('+row+');" class="btn btn-default btn-sm"><i class="glyphicon glyphicon-trash"></i> Delete</a></div>';
              }else{
                if (rowData.days >= 2) {
                  if (rowData.status.toLowerCase() == "created") {
                    deletebutton = '<div class="gridicons" style="margin: 15px 10px;"><a href="javascript:void(0)" onClick="deleteAppointmentConfirmDetails('+row+');" class="btn btn-default btn-sm"><i class="fa fa-times-circle-o"></i> Cancel</a></div>'
                  }
                }
              }
              leftcolumn +=image;
              leftcolumn += status;

              rightcolumn += full_name;
              rightcolumn += Email;
              rightcolumn += appointment;

              lastcolumn += editbutton;
              lastcolumn += deletebutton;

              leftcolumn += "</div>";
              rightcolumn += "</div>";
              lastcolumn += "</div>";
              container += leftcolumn;
              container += rightcolumn;
              container += lastcolumn;
              container += "</div>";
              return container;
            }
          }
      
    ];
  var dataadapter = new $.jqx.dataAdapter(source,
  {
      formatData: function (data) {
       var userdetails = JSON.parse(localStorage.getItem('user'));
          data.userId = userdetails.id;
          data.userType = localStorage.getItem('usertype');
          return data;
      }
       
  });
  
  // initialize jqxDataTable
  $("#appointmentsDataTable").jqxDataTable({
    width: '100%',
    pageable: true,
    pagerButtonsCount: 10,
    pageSize: 3,
    serverProcessing: true,
    source: dataadapter,
    altRows: true,
    filterable: true,
    filterMode: 'simple',
    theme: 'energyblue',
    showHeader: false,
    columnsResize: true,
    columns: columns

  });


}

var enumerateDaysBetweenDates = function(startDate, endDate) {
  var now = startDate, dates = [];
 while (now.isSameOrBefore(endDate)) {
        dates.push({'YYYYMMDD':now.format('YYYY-MM-DD'),"dddmmmdo":now.format('ddd, MMM D')});
        now.add(1, 'days');
    }
  return dates;
};
function getDateRangesForGivenDates(){
  var dayaftertomorrow = moment().add(2, 'days');
  var date = dayaftertomorrow.format('YYYY-MM-DD');
  var startDate = moment().add(2, 'days');
  var endDate = moment().add(9, 'days');
  
  var disableday = 6;
  var weekdaynumbers = {"Sunday" : 0,"Monday" : 1,"Tuesday" : 2,"Wednesday" : 3,"Thursday" : 4,"Friday" : 5,"Saturday" : 6}

  $.ajax({
    type: "get",
    url: site_url + 'User_appointment/getGeneralAppointmetSettings',
    success: function (result) {
      var data = $.parseJSON(result);
      if (data.success) {
        if (data.generalSettings) {
          var statrtdays = 0;
          var enddays = 0;
          if (data.generalSettings.show_appointments_before_days) {
              statrtdays = parseInt(data.generalSettings.show_appointments_before_days);
              if (statrtdays) {
                dayaftertomorrow = moment().add(statrtdays, 'days')
                date = dayaftertomorrow.format('YYYY-MM-DD');
              };
              startDate = dayaftertomorrow;
          };
          if (data.generalSettings.show_appointment_upto) {
              enddays = parseInt(data.generalSettings.show_appointment_upto);
              if (enddays && statrtdays) {
                var daysapply = enddays+statrtdays;
                endDate = moment().add(daysapply, 'days');
              }else{
                endDate = moment().add(data.generalSettings.show_appointment_upto, 'days');
              };
          };
          if (data.generalSettings.leave_on) {
              disableday = weekdaynumbers[data.generalSettings.leave_on];
          };
          
        };
      }
      var availdates = enumerateDaysBetweenDates(startDate, endDate);
      if (availdates && availdates.length>0) {
        $.each(availdates, function(availdate, availvalue) { 
          $('.appointmentdatebtngroup').append('<label class="btn btn-default"><input type="radio" id="_'+availvalue.YYYYMMDD+'" name="appointment_date" value="'+availvalue.YYYYMMDD+'" />'+availvalue.dddmmmdo+'</label>')
        });
      };
      getappointmentsettings(date);
      setTimeout(function  () {
        $('.showhiddenstatus').show();
        $('.hidehiddenstatus').hide();
        $('#_'+date).attr('checked',true);
        $('#_'+date).parent().addClass('active');
        $("#appointmentdatebtngroup :input").change(function() {
          if (this && this.value) {
            //var date1 = e.date.getFullYear() + '-' + (e.date.getMonth() + 1) + '-' + e.date.getDate();
            getappointmentsettings(this.value)
          };
        });
      },1000);
    }
});
}
function loadAddAppointmentform(from){
  $('#appointment_success').html('');
  $('#appointment_success').hide();
  $('#appointment_error').html('');
  $('#appointment_error').hide();
  $('#appointment_date').val('');
  $('#description').val('');
  $('input[name=appointment_time]').attr('checked',false);
  $('#appointment_id').val('');
  $('.listscreen').hide();
  $('.addscreen').hide();
  if (from && from == 'listform') {
    $('.listscreen').show();
    renderAppointmentsGrid();
  }else{
    $('.listscreen').hide();
      $('.addscreen').show();
     
      getDateRangesForGivenDates();
  };
  
};
$(document).ready(function () {
  if (localStorage.getItem('usertype')) {
    if (localStorage.getItem('usertype') != 'User') {
      loadAddAppointmentform('listform');
    }else{
      if (window.location.pathname && window.location.pathname.indexOf('myappointments.html')>-1) {
        loadAddAppointmentform('listform');
      }else{
        loadAddAppointmentform('addform');
      };
      
    };
  }else{
    $('#myModal').modal('show');
  };
  //Our appointments slider1
  if($('#our_appointments_slider').length > 0){
    var appointments_owl = $("#our_appointments_slider");
    appointments_owl.owlCarousel({
      autoplay:false,
      //center:true,
      loop:false,
      autoplayTimeout:2000,
      items:1,
      dots:false,
      margin:20,
      stagePadding:0,
      smartSpeed:450,
      responsive:{
        0:{
          items:1
        },
        580:{
          items:1
        },
        700:{
          items:1
        },
        1024:{
          items:1
        },
        1200:{
          items:1
        },
        1480:{
          items:1
        }
      }
    });
    
    
    // Custom Navigation Events
    $(".our_appointments1 > .customNavigation > .next").click(function(){
      appointments_owl.trigger('next.owl.carousel');
    });
    $(".our_appointments1 > .customNavigation > .prev").click(function(){
      appointments_owl.trigger('prev.owl.carousel');
    });

    
    
  }
  
  
  $('.appointmentitem').on('click', function(event){
    var $this = $(this);
    $('.appointmentitem').removeAttr('style').removeClass('clicked');
    if($this.hasClass('clicked')){
      $this.removeAttr('style').removeClass('clicked');
    } else{
      $this.css('background','#7fc242').addClass('clicked');
    }
  });

});


