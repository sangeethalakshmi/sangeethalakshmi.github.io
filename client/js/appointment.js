/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



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
    var appointment_date = $("#appointment_date").val();
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
        if (localStorage.getItem('usertype') != 'User' && $('#status1').val() == "CANCELLED") {
          appointment_details += '&cancelled_by=Super Admin';
        }else{
          appointment_details += '&cancelled_by=User';
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
              // $('#appointment_time').append($("<option></option>")
              //               .attr("value",value)
              //               .text(value)); 
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
function deleteAppointmentConfirmDetails(id,data,type) {
  var text = "delete";
  if (type == "cancel") {
    text = "cancel";
  };
  if (confirm('Are you sure want to '+text+'?')) {
    var obj = {
      "id":data.id,
      'appointment_time':moment(data.appointment_time).format("HH:mm"),
      'appointment_date':moment(data.appointment_time).format("YYYY-MM-DD")
    };
    appointment_details = 'id='+data.id+'&user_id='+data.user_id+'&full_name='+ data.full_name+'&email_address='+ data.email+'&phone_number='+ data.phone_number;
    if (type == "cancel") {
      appointment_details += '&status=CANCELLED&deleted=0&active=1'
    }else if (type == 'delete') {
      appointment_details += '&status='+ data.status+'&deleted=1&active=0';
    };
    createorUpdateAppointment('delete',obj,appointment_details);
  }
}

function getAppointmentdeatils(id){
  $('.listscreen').hide();
  $('.addscreen').show();
  $('input[name=appointment_time]').attr('checked',false);
  $('#appointment_date').val("");
  $('#appointment_id').val("");
  $('#status1').val("");
  $('#active').val("");
  $('#appointment_error').html('');
  $('#appointment_error').hide();
  $('#appointment_success').html('');
  $('#appointment_success').hide();
  $.ajax({
      type: "get",
      url: site_url + 'User_appointment/read/'+id,
      success: function (result) {
        var data = $.parseJSON(result);
        if (data.success) {
          console.log("correct login");
          $('.modal').modal('hide');
          if (data.appointment) {
            $('#appointment_date').val(data.appointment.date);
            $('#description').val(data.appointment.description);
            $('#_'+data.appointment.time).attr('checked',true);
            $('#appointment_id').val(data.appointment.id);
            $('#active').val(data.appointment.active);
            if (localStorage.getItem('usertype') && localStorage.getItem('usertype') != 'User') {
              $('.showhiddenstatus').hide();
              $('.hidehiddenstatus').show();
            }else{
              $('.showhiddenstatus').show();
              $('.hidehiddenstatus').hide();
            };
            $('#status1').val(data.appointment.status);
            getappointmentsettings(data.appointment.date);
            setTimeout(function  () {
                $('.appointmenttimebtngroup').append('<label class="btn btn-default active"><input type="radio" id="_'+data.appointment.time+'" name="appointment_time" value="'+data.appointment.time+'" />'+data.appointment.time+'</label>')
                $('#_'+data.appointment.time).attr('checked',true);
            },500);
           

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
      type:"number"}],
        cache: false,
    url: site_url + 'User_appointment/getAppointments',
    filter: function () {
      // update the grid and send a request to the server.
      $("#appointmentsjqxgrid").jqxGrid('updatebounddata', 'filter');
    },
    sort: function () {
      // update the grid and send a request to the server.
      $("#appointmentsjqxgrid").jqxGrid('updatebounddata', 'sort');
    },
    beforeprocessing: function (data) {
      if (data != null && data.length > 0) {
        source.totalrecords = data[0].totalRecords;
        userslist = data;
      }
    }
  };
  var columns = [{
        text: 'Name',
        datafield: 'full_name',
        width:'20%'
      }, {
        text: 'Phone',
        datafield: 'phone_number',
        width:'13%'
      }, {
        text: 'Email',
        datafield: 'email',
        width:'24%'
      }, {
        text: 'Appointment',
        datafield: 'appointment_time',width:'19%'
      },
      {
        text: 'Status',
        datafield: 'status',width:'10%'
      },
      {
        text: 'Id',
        datafield: 'id',hidden:true
      },{
        text: 'UserId',
        datafield: 'user_id',hidden:true
      },  {
            text: 'Edit',
            datafield: 'edit',
            columntype: 'image',
             width:'7%',
            cellsrenderer: function () {
              return '<div class="text-center gridicons"><a href="javascript:void(0)"><i class="fa fa-pencil"></i></a></div>';
            }
          }
      
    ];
    if (localStorage.getItem('usertype') == 'Super Admin') {
      columns.push({
            text: 'Delete',
            datafield: 'delete',
            columntype: 'image',
             width:'7%',
            cellsrenderer: function () {
              return '<div class="text-center gridicons"><a href="javascript:void(0)"><i class="glyphicon glyphicon-trash"></i></a></div>';
            }
          })
    }else{
       columns.push({
            text: 'Cancel',
            datafield: 'cancel',
            columntype: 'image',
             width:'7%',
            cellsrenderer: function () {
              return '<div class="text-center gridicons"><a href="javascript:void(0)"><i class="fa fa-times-circle"></i></a></div>';
            }
          });
    };
  var dataadapter = new $.jqx.dataAdapter(source,
  {
      formatData: function (data) {
       var userdetails = JSON.parse(localStorage.getItem('user'));
          data.userId = userdetails.id;
          data.userType = localStorage.getItem('usertype');
          return data;
      }
       
  });
 
  // initialize jqxGrid
  $("#appointmentsjqxgrid").jqxGrid({
    width: '100%',
    source: dataadapter,
    filterable: true,
    sortable: true,
    autoheight: true,
    pageable: true,
    pagesize: 10,
     theme: 'energyblue',
    //pagesizeoptions: ['5', '10', '15'],
    virtualmode: true,
    rendergridrows: function (obj) {
      return obj.data;
    },
    columns: columns,
    ready: function () {
      $('#appointmentsjqxgrid').on('cellclick', function (event) {
        var data = $('#appointmentsjqxgrid').jqxGrid('getrowdata', event.args.rowindex);
        if ((event.args.datafield === 'delete' || event.args.datafield === 'cancel') && (event.args.rowindex || event.args.rowindex === 0)) {
          if (data.id)
            deleteAppointmentConfirmDetails(data.id,data,event.args.datafield);
        }else if (event.args.datafield === 'edit' && (event.args.rowindex || event.args.rowindex === 0)) {
          if (data.id)
            getAppointmentdeatils(data.id);
        };
      });
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
      var dayaftertomorrow = new Date();
      dayaftertomorrow.setDate(dayaftertomorrow.getDate()+3);
      var date = dayaftertomorrow.getFullYear() + '-' + (dayaftertomorrow.getMonth() + 1) + '-' + dayaftertomorrow.getDate();
      var startDate = "+3d";
      var endDate = "+10d";
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
                      dayaftertomorrow = new Date()
                      dayaftertomorrow.setDate(dayaftertomorrow.getDate()+statrtdays);
                      date = dayaftertomorrow.getFullYear() + '-' + (dayaftertomorrow.getMonth() + 1) + '-' + dayaftertomorrow.getDate();
                    };
                    startDate = '+'+data.generalSettings.show_appointments_before_days+'d';
                };
                if (data.generalSettings.show_appointment_upto) {
                    enddays = parseInt(data.generalSettings.show_appointment_upto);
                    if (enddays && statrtdays) {
                      var daysapply = enddays+statrtdays;
                      endDate = '+'+daysapply+'d';
                    }else{
                      endDate = '+'+data.generalSettings.show_appointment_upto+'d';
                    };
                };
                if (data.generalSettings.leave_on) {
                    disableday = weekdaynumbers[data.generalSettings.leave_on];
                };
                
              };
              getappointmentsettings(date);
            }
            $('#appointment_date').datepicker({
                format: "yyyy-mm-dd",
                startDate:startDate,
                endDate:endDate,
                 autoclose: true,
                 beforeShowDay: function(day) {
                    var day = day.getDay();
                    if (day == disableday) {
                        return false;
                    } else {
                        return true;
                    }
                 }
            }).on('changeDate', function(e) {
              if (e && e.date) {
                var date1 = e.date.getFullYear() + '-' + (e.date.getMonth() + 1) + '-' + e.date.getDate();
                getappointmentsettings(date1)
              };
            });
            $("#appointment_date").datepicker("setDate", dayaftertomorrow);
            setTimeout(function  () {
              $('.showhiddenstatus').show();
              $('.hidehiddenstatus').hide();
            },1000);
          }
      });
      
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
  

});


