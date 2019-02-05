/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 function appendSlotTimesSelectbox(name){
    var select = '<select class="form-control col-sm-1"  name="'+name+'" required><option value="09:00">9:00 AM</option><option value="09:15">9:15 AM</option><option value="09:30">9:30 AM</option><option value="09:45">9:45 AM</option><option value="10:00">10:00 AM</option><option value="10:15">10:15 AM</option><option value="10:30">10:30 AM</option><option value="10:45">10:45 AM</option><option value="11:00">11:00 AM</option><option value="11:15">11:15 AM</option><option value="11:30">11:30 AM</option><option value="11:45">11:45 AM</option><option value="12:00">12:00 PM</option><option value="12:15">12:15 PM</option><option value="12:30">12:30 PM</option><option value="12:45">12:45 PM</option><option value="13:00">1:00 PM</option><option value="17:00">5:00 PM</option><option value="17:15">5:15 PM</option><option value="17:30">5:30 PM</option><option value="17:45">5:45 PM</option><option value="18:00">6:00 PM</option><option value="18:15">6:15 PM</option><option value="18:30">6:30 PM</option><option value="18:45">6:45 PM</option><option value="19:00">7:00 PM</option><option value="19:15">7:15 PM</option><option value="19:30">7:30 PM</option><option value="19:45">7:45 PM</option><option value="20:00">8:00 PM</option></select>';
    return select;
};
function appendSlotDurationSelectbox(name){
    var select = '<select class="form-control col-sm-1"  name="'+name+'" required><option value="10">10 min</option><option value="15">15 min</option><option value="20">20 min</option><option value="25">25 min</option><option value="30">30 min</option><option value="35">35 min</option><option value="40">40 min</option><option value="45">45 min</option><option value="50">50 min</option><option value="55">55 min</option><option value="60">60 min</option></select>';
    return select;
};
function getSettingsList() {
    $('#defaultsettingsform').html("");
    $.ajax({
        type: "get",
        url: site_url + 'Appointment_default_settings/index',
        success: function(result) {
            var data = $.parseJSON(result);
            if (data && data.settings) {
                var dayssettings = [];
                dayssettings.push({
                    "day": "Sunday",
                    "slots": []
                });
                dayssettings.push({
                    "day": "Monday",
                    "slots": []
                });
                dayssettings.push({
                    "day": "Tuesday",
                    "slots": []
                });
                dayssettings.push({
                    "day": "Wednesday",
                    "slots": []
                });
                dayssettings.push({
                    "day": "Thursday",
                    "slots": []
                });
                dayssettings.push({
                    "day": "Friday",
                    "slots": []
                });
                dayssettings.push({
                    "day": "Saturday",
                    "slots": []
                });
                if (data.settings.defaultSettings && data.settings.defaultSettings.length > 0) {
                    var defaultSettings = data.settings.defaultSettings;
                    defaultSettings.forEach(function(
                        defaultset) {
                        var indexlength = 5;
                        if (defaultset &&
                            defaultset.day) {
                            dayssettings.forEach(function(dayset) {
                                if (dayset && (dayset.day).toLowerCase() == (
                                        defaultset.day).toLowerCase()) {
                                    for (var i = 1; i <= indexlength; i++) {
                                      var dayslotobj = {
                                            "start": "",
                                            "end": "",
                                            "duration": ""
                                        };
                                        if (dayset &&
                                            defaultset ['start_' + i]) {
                                            dayslotobj['start'] =
                                                defaultset ['start_' + i];
                                        };
                                        if (dayset &&
                                            defaultset ['end_' + i]) {
                                            dayslotobj['end'] =
                                                defaultset ['end_' + i];
                                        };
                                        if (dayset &&
                                            defaultset ['start_' + i + '_duration']) {
                                            dayslotobj['duration'] =
                                                defaultset ['start_' + i + '_duration'];
                                        };
                                        if (dayslotobj['start'] != "" || dayslotobj['end'] != "" || (dayslotobj['duration'] != "" && dayslotobj['duration'] != "0")) {
                                            dayset.slots.push(dayslotobj);
                                        };
                                        
                                    };

                                };
                            });
                        };
                    });
                };
                //defaultsettingsform
                if (dayssettings && dayssettings.length>0) {
                  dayssettings.forEach(function  (daysset,index) {
                    if (daysset && daysset.day) {
                      $('#defaultsettingsform').append('<div class="col-sm-12 hs_margin_30 '+daysset.day+'"></div>');
                        if (daysset && daysset.slots && daysset.slots.length>0) {
                            daysset.slots.forEach(function  (slot,index) {
                                if (index == 0) {
                                    $('.'+daysset.day).append('<div class="form-group"><label class="control-label col-lg-3 col-md-3 col-sm-12" for="appointment_time">'+daysset.day+'</label><div class="col-lg-3 col-md-3 col-sm-12 '+daysset.day+'_start_slot_'+index+'"></div><div class="col-lg-3 col-md-3 col-sm-12 '+daysset.day+'_end_slot_'+index+'"></div><div class="col-lg-3 col-md-3 col-sm-12 '+daysset.day+'_slot_duration_'+index+'"></div></div>')
                                    if (daysset.slots.length<4) {
                                        $('.'+daysset.day).append('<a class="adddayslotsbutton" onclick="addDefaultSettings(\'' + daysset.day + '\')"><i class="fa fa-plus-circle"></i></a>');
                                    };
                                }else{
                                     $('.'+daysset.day).append('<div class="form-group"><label class="control-label col-lg-3 col-md-3 col-sm-12" for="appointment_time"></label><div class="col-lg-3 col-md-3 col-sm-12 '+daysset.day+'_start_slot_'+index+'"></div><div class="col-lg-3 col-md-3 col-sm-12 '+daysset.day+'_end_slot_'+index+'"></div><div class="col-lg-3 col-md-3 col-sm-12 '+daysset.day+'_slot_duration_'+index+'"></div><a class="removedayslotsbutton" onclick="removeDefaultSettings(\'' + daysset.day + '\','+index+')"><i class="fa  fa-times-circle"></i></a></div>')

                                };
                                if (slot) {
                                    $('.'+daysset.day+'_start_slot_'+index).append(appendSlotTimesSelectbox(daysset.day+'_start_slot_'+index));
                                    $('.'+daysset.day+'_end_slot_'+index).append(appendSlotTimesSelectbox(daysset.day+'_end_slot_'+index));
                                    $('.'+daysset.day+'_slot_duration_'+index).append(appendSlotDurationSelectbox(daysset.day+'_slot_duration_'+index));
                                    if (slot.start) {
                                        $('.'+daysset.day+'_start_slot_'+index+' .form-control').val(slot.start);
                                    };
                                    if(slot.end){
                                        $('.'+daysset.day+'_end_slot_'+index+' .form-control').val(slot.end);
                                    }
                                     if(slot.duration){
                                        $('.'+daysset.day+'_slot_duration_'+index+' .form-control').val(slot.duration);
                                    }
                                };
                            });
                        }else{
                            $('.'+daysset.day).append('<div class="form-group"><label class="control-label col-lg-3 col-md-3 col-sm-12" for="appointment_time">'+daysset.day+'</label><div class="col-lg-3 col-md-3 col-sm-12 '+daysset.day+'_start_slot_0"></div><div class="col-lg-3 col-md-3 col-sm-12 '+daysset.day+'_end_slot_0"></div><div class="col-lg-3 col-md-3 col-sm-12 '+daysset.day+'_slot_duration_0"></div></div>');
                            $('.'+daysset.day+'_start_slot_0').append(appendSlotTimesSelectbox(daysset.day+'_start_slot_0'));
                            $('.'+daysset.day+'_end_slot_0').append(appendSlotTimesSelectbox(daysset.day+'_end_slot_0'));
                            $('.'+daysset.day+'_slot_duration_0').append(appendSlotDurationSelectbox(daysset.day+'_slot_duration_0'));
                        };
                    };
                    
                  });
                };
                //general settings form
                if (data.settings.generalSettings && data.settings.generalSettings.length > 0) {
                    var general = data.settings.generalSettings;
                    if (general && general[0]) {
                        if (general[0].show_appointments_before_days) {
                            $('#show_appointments_before_days').val(general[0].show_appointments_before_days)
                        };
                        if (general[0].cancellation_time_days) {
                            $('#cancellation_time_days').val(general[0].cancellation_time_days)
                        };
                        if (general[0].id) {
                            $('#general_id').val(general[0].id)
                        };
                        if (general[0].lock_attempts) {
                            $('#lock_attempts').val(general[0].lock_attempts)
                        };
                    };
                };
            };
        }
    });
};
function addDefaultSettings (classname){
    if(classname && $('.'+classname+' select') && $('.'+classname+' select').length>0){
        var indexcount = $('.'+classname+' select').length/3;
        $('.'+classname).append('<div class="form-group"><label class="control-label col-lg-3 col-md-3 col-sm-12" for="appointment_time"></label><div class="col-lg-3 col-md-3 col-sm-12 '+classname+'_start_slot_'+indexcount+'"></div><div class="col-lg-3 col-md-3 col-sm-12 '+classname+'_end_slot_'+indexcount+'"></div><div class="col-lg-3 col-md-3 col-sm-12 '+classname+'_slot_duration_'+indexcount+'"></div></div>');
         $('.'+classname+'_start_slot_'+indexcount).append(appendSlotTimesSelectbox(classname+'_start_slot_'+indexcount));
        $('.'+classname+'_end_slot_'+indexcount).append(appendSlotTimesSelectbox(classname+'_end_slot_'+indexcount));
        $('.'+classname+'_slot_duration_'+indexcount).append(appendSlotDurationSelectbox(classname+'_slot_duration_'+indexcount));
    }
}
function removeDefaultSettings (classname,index) {
    if (classname && index) {
        if ($('.'+classname) && $('.'+classname)[0] && $('.'+classname)[0].children &&  $('.'+classname)[0].children[index]) {
            $('.'+classname)[0].children[index].remove()
        };
    };
}
function UpdategeneralSettings () {
    $('#general_success').html('');
     $('#general_error').html('');
     $('#general_success').hide();
     $('#general_error').hide();
    var daysbefore = $('#show_appointments_before_days').val();
    var cancelbefore = $('#cancellation_time_days').val();
    var lockattempts = $('#lock_attempts').val();
    if ((daysbefore == null || daysbefore == '0') || (cancelbefore == null || cancelbefore == '0') || (lockattempts == null || lockattempts == '0')) {
        $('#general_error').html('Please Enter valid values to all fields.');
        $('#general_error').show();
    }else{
        var generaldetails = $('#generalsettingsform').serialize();
         $.ajax({
            type: "POST",
            url: site_url + "Appointment_default_settings/UpdategeneralSettings",
            data: generaldetails,
            success: function (result) {
                var data = $.parseJSON(result);
                if (data.success) {
                    $('#general_success').html('Update settings Successfully.');
                    $('#general_success').show();
                  setTimeout(function () {
                      $('#general_success').hide();
                      
                  }, 2000);
                }
                else {
                    $('#general_error').html(data.error);
                    $('#general_error').show();
                    $('#show_appointments_before_days').val('');
                    $('#cancellation_time_days').val('');
                    $('#lock_attempts').val('');
                    $('#general_id').val('');
                }
            }
        });
    };

}
function UpdateDefaultSettings () {
    var default_settings = $('#defaultsettingsform').serializeArray();
    var default_settings1 = [{"day":"Sunday","end_1":"","end_2":"","end_3":"","end_4":"","end_5":"","start_1":"","start_1_duration":"","start_2":"","start_2_duration":"","start_3":"","start_3_duration":"","start_4":"","start_4_duration":"","start_5":"","start_5_duration":""},
        {"day":"Monday","end_1":"","end_2":"","end_3":"","end_4":"","end_5":"","start_1":"","start_1_duration":"","start_2":"","start_2_duration":"","start_3":"","start_3_duration":"","start_4":"","start_4_duration":"","start_5":"","start_5_duration":""},
        {"day":"Tuesday","end_1":"","end_2":"","end_3":"","end_4":"","end_5":"","start_1":"","start_1_duration":"","start_2":"","start_2_duration":"","start_3":"","start_3_duration":"","start_4":"","start_4_duration":"","start_5":"","start_5_duration":""},
        {"day":"Wednesday","end_1":"","end_2":"","end_3":"","end_4":"","end_5":"","start_1":"","start_1_duration":"","start_2":"","start_2_duration":"","start_3":"","start_3_duration":"","start_4":"","start_4_duration":"","start_5":"","start_5_duration":""},
        {"day":"Thursday","end_1":"","end_2":"","end_3":"","end_4":"","end_5":"","start_1":"","start_1_duration":"","start_2":"","start_2_duration":"","start_3":"","start_3_duration":"","start_4":"","start_4_duration":"","start_5":"","start_5_duration":""},
        {"day":"Friday","end_1":"","end_2":"","end_3":"","end_4":"","end_5":"","start_1":"","start_1_duration":"","start_2":"","start_2_duration":"","start_3":"","start_3_duration":"","start_4":"","start_4_duration":"","start_5":"","start_5_duration":""},
        {"day":"Saturday","end_1":"","end_2":"","end_3":"","end_4":"","end_5":"","start_1":"","start_1_duration":"","start_2":"","start_2_duration":"","start_3":"","start_3_duration":"","start_4":"","start_4_duration":"","start_5":"","start_5_duration":""}];
    default_settings1.forEach(function  (set) {
        default_settings.forEach(function  (def) {
            if (def && def.name && set && set.day && (def.name).indexOf(set.day) > -1) {
                var name1 = def.name.split('_');
                if (name1 && name1[3]) {
                    name1[3] = parseInt(name1[3]) +1;
                    if ((def.name).indexOf('start') > -1) {
                    set['start_'+ name1[3]] = def.value;
                    };
                    if ((def.name).indexOf('end') > -1) {
                        set['end_'+ name1[3]] = def.value;
                    };
                    if ((def.name).indexOf('duration') > -1) {
                        set['start_'+ name1[3]+'_duration'] = def.value;
                    };
                };
                    
            };
        });
    });
    $.ajax({
        type: "POST",
        url: site_url + "Appointment_default_settings/update",
         data: {default_settings:default_settings1},
        success: function (result) {
            var data = $.parseJSON(result);
            if (data.success) {
                $('#default_success').html('Update User Successfully.');
                $('#default_success').show();
                setTimeout(function () {
                    getSettingsList();
                }, 2000);
            }
            else {
                getSettingsList();
            }
        }
    });
   
}
$(document).ready(function () {
    getSettingsList()
});


