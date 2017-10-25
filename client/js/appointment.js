/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


if (localStorage.getItem('usertype') == 'Super Admin') {
  $('.notforadmin').hide();
  $('.foradmin').show();
} else {
  $('.notforadmin').show();
  $('.foradmin').hide();
}
function createorUpdateAppointment(from,obj){
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
    var appointment_time = $("#appointment_time").val();
    if(from && from == "delete"){
      appointment_details = obj;
      appointment_date = obj.appointment_date;
      appointment_time =  obj.appointment_time;
      functionname = 'update/'+obj.id;
    }
    if (appointment_details) {
      var timedate = moment(appointment_date + ' ' + appointment_time).format("YYYY-MM-DD HH:mm");
      appointment_details += '&appointment="'+timedate+'"';
    };
    if (appointment_date !== '' && appointment_time !== '') {
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
                  
                  $('#appointment_success').show();
                  setTimeout(function () {
                      $('#appointment_success').hide();
                      renderUsersGrid();
                  }, 2000);
                }
                else {
                    $('#appointment_error').html(data.error);
                    $('#appointment_error').show();
                    $('#appointment_date').val('');
                    $('#appointment_time').val('');
                    $('#appointment_id').val('');
                }
            }
        });
    } else if (appointment_date == '') {
        $('#appointment_date_error').html('Please Select Date.');
        $('#appointment_date_error').show();
    } else if (appointment_time == '') {
        $('#appointment_time_error').html('Please Select Time.');
        $('#appointment_time_error').show();
       
    }
}
function getAppointmentdeatils(id){
  $('#appointment_time').val("");
  $('#appointment_date').val("");
  $('#appointment_id').val("");
  $('#status1').val("");
  $('#active').val("");
  $.ajax({
      type: "get",
      url: site_url + 'User_appointment/read/'+id,
      success: function (result) {
        var data = $.parseJSON(result);
        if (data.success) {
          console.log("correct login");
          $('.modal').modal('hide');
          if (data.appointment) {
            $('#appointment_time').val(data.appointment.date);
            $('#appointment_date').val(data.appointment.time);
            $('#appointment_id').val(data.appointment.id);
            $('#status1').val(data.appointment.status);
            $('#active').val(data.appointment.active);
          } 
        } 
      }
    });
}
function getappointmentTimesforSlots(date,start,end,duration,slots){
  var times = [];
  var startdatentime = moment(date + " " + start);
  var enddatentime = moment(date + " " + end);
  var days = enddatentime.diff(startdatentime);
  var minutes = moment.duration(days).asMinutes();
  var counter = minutes/duration;
  if (counter && counter>0) {
    for (var i = 0; i < counter-1; i++) {
      if (i == 0) {
        times.push(start);
        slots.push(start);
      }else{
        times.push(moment.utc(times[i-1],'hh:mm').add(duration,'minutes').format('hh:mm'));
        slots.push(moment.utc(times[i-1],'hh:mm').add(duration,'minutes').format('hh:mm'));

      };
    };
  };
  return slots;
}
function getappointmentsettings(date){
  $('#appointment_time')
              .find('option')
              .remove()
              .end()
              .append($("<option></option>")
                            .attr("value","")
                            .text("Select Slot")); 
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
          if (slots && slots.length>0) {
            $.each(slots, function(key, value) {   
              $('#appointment_time').append($("<option></option>")
                            .attr("value",value)
                            .text(value)); 
            });
          };
        }; 
      }
    });
}
$(document).ready(function () {
  var dayaftertomorrow = new Date();
  dayaftertomorrow.setDate(dayaftertomorrow.getDate()+2);
  var date = dayaftertomorrow.getFullYear() + '-' + (dayaftertomorrow.getMonth() + 1) + '-' + dayaftertomorrow.getDate()
  getappointmentsettings(date);
  $('#appointment_date').datepicker({
        format: "yyyy-mm-dd",
        startDate: "+2d"
    }).on('changeDate', function(e) {
      if (e && e.date) {
        var date1 = e.date.getFullYear() + '-' + (e.date.getMonth() + 1) + '-' + e.date.getDate();
        getappointmentsettings(date1)
      };
      
       
    });
});


