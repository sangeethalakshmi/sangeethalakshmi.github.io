/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 function appendSlotTimesSelectbox(name){
    var select = '<select class="form-control col-sm-1"  name="'+name+'" required><option value="05:00">5:00 AM</option><option value="05:15">5:15 AM</option><option value="05:30">5:30 AM</option><option value="05:45">5:45 AM</option><option value="06:00">6:00 AM</option><option value="06:15 AM">6:15</option><option value="6:30 AM">6:30 AM</option><option value="06:45">6:45 AM</option><option value="07:00">7:00 AM</option><option value="07:15">7:15 AM</option><option value="07:30">7:30 AM</option><option value="07:45">7:45 AM</option><option value="08:00">8:00 AM</option><option value="08:15">8:15 AM</option><option value="08:30">8:30 AM</option><option value="08:45">8:45 AM</option><option value="09:00">9:00 AM</option><option value="09:15">9:15 AM</option><option value="09:30">9:30 AM</option><option value="09:45">9:45 AM</option><option value="10:00">10:00 AM</option><option value="10:15">10:15 AM</option><option value="10:30">10:30 AM</option><option value="10:45">10:45 AM</option><option value="11:00">11:00 AM</option><option value="11:15">11:15 AM</option><option value="11:30">11:30 AM</option><option value="11:45">11:45 AM</option><option value="12:00">12:00 PM</option><option value="12:15">12:15 PM</option><option value="12:30">12:30 PM</option><option value="12:45">12:45 PM</option><option value="13:00">1:00 PM</option><option value="13:15">1:15 PM</option><option value="13:30">1:30 PM</option><option value="13:45">1:45 PM</option><option value="14:00">2:00 PM</option><option value="14:15">2:15 PM</option><option value="14:30">2:30 PM</option><option value="14:45">2:45 PM</option><option value="15:00">3:00 PM</option><option value="15:15">3:15 PM</option><option value="15:30">3:30 PM</option><option value="15:45">3:45 PM</option><option value="16:00">4:00 PM</option><option value="16:15">4:15 PM</option><option value="16:30">4:30 PM</option><option value="16:45">4:45 PM</option><option value="17:00">5:00 PM</option><option value="17:15">5:15 PM</option><option value="17:30">5:30 PM</option><option value="17:45">5:45 PM</option><option value="18:00">6:00 PM</option><option value="18:15">6:15 PM</option><option value="18:30">6:30 PM</option><option value="18:45">6:45 PM</option><option value="19:00">7:00 PM</option><option value="19:15">7:15 PM</option><option value="19:30">7:30 PM</option><option value="19:45">7:45 PM</option><option value="20:00">8:00 PM</option><option value="20:15">8:15 PM</option><option value="20:30">8:30 PM</option><option value="20:45">8:45 PM</option><option value="21:00">9:00 PM</option><option value="21:15">9:15 PM</option><option value="21:30">9:30 PM</option><option value="21:45">9:45 PM</option><option value="22:00">10:00 PM</option><option value="22:15">10:15 PM</option><option value="22:30">10:30 PM</option><option value="22:45">10:45 PM</option><option value="23:00">11:00 PM</option><option value="23:15">11:15 PM</option><option value="22:30">11:30 PM</option><option value="22:45">11:45 PM</option></select>';
    return select;
};
function appendSlotDurationSelectbox(name){
    var select = '<select class="form-control col-sm-1"  name="'+name+'" required><option value="15">15 min</option><option value="20">20 min</option><option value="25">25 min</option><option value="30">30 min</option><option value="35">35 min</option><option value="40">40 min</option><option value="45">45 min</option><option value="50">50 min</option><option value="55">55 min</option><option value="60">60 min</option></select>';
    return select;
};
function getSettingsList() {
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
                    "day": "Wedensday",
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
                                        dayset.slots.push(dayslotobj);
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
                      $('#defaultsettingsform').append('<div class="row hs_margin_30 '+daysset.day+'"></div>');
                        if (daysset && daysset.slots && daysset.slots.length>0) {
                            daysset.slots.forEach(function  (slot,index) {
                                if (index == 0) {
                                    $('.'+daysset.day).append('<div class="col-sm-12"><label class="control-label col-lg-3 col-md-3 col-sm-12" for="appointment_time">'+daysset.day+'</label><div class="col-lg-3 col-md-3 col-sm-12 '+daysset.day+'_start_slot_'+index+'"></div><div class="col-lg-3 col-md-3 col-sm-12 '+daysset.day+'_end_slot_'+index+'"></div><div class="col-lg-3 col-md-3 col-sm-12 '+daysset.day+'_slot_duration_'+index+'"></div></div>')
                                }else{
                                     $('.'+daysset.day).append('<div class="col-sm-12"><label class="control-label col-lg-3 col-md-3 col-sm-12" for="appointment_time"></label><div class="col-lg-3 col-md-3 col-sm-12 '+daysset.day+'_start_slot_'+index+'"></div><div class="col-lg-3 col-md-3 col-sm-12 '+daysset.day+'_end_slot_'+index+'"></div><div class="col-lg-3 col-md-3 col-sm-12 '+daysset.day+'_slot_duration_'+index+'"></div><a onclick="removeDefaultSettings(\'' + daysset.day + '\','+index+')"><i class="fa  fa-times-circle"></i></a></div>')

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
                            $('.'+daysset.day).append('<div class="col-sm-12"><label class="control-label col-lg-3 col-md-3 col-sm-12" for="appointment_time">'+daysset.day+'</label><div class="col-lg-3 col-md-3 col-sm-12 '+daysset.day+'_start_slot_0"></div><div class="col-lg-3 col-md-3 col-sm-12 '+daysset.day+'_end_slot_0"></div><div class="col-lg-3 col-md-3 col-sm-12 '+daysset.day+'_slot_duration_0"></div></div>');
                            $('.'+daysset.day+'_start_slot_0').append(appendSlotTimesSelectbox(daysset.day+'_start_slot_0'));
                            $('.'+daysset.day+'_end_slot_0').append(appendSlotTimesSelectbox(daysset.day+'_end_slot_0'));
                            $('.'+daysset.day+'_slot_duration_0').append(appendSlotDurationSelectbox(daysset.day+'_slot_duration_0'));
                        };
                    };
                    if (daysset.slots.length<4) {
                        $('.'+daysset.day).append('<a onclick="addDefaultSettings(\'' + daysset.day + '\')"><i class="fa fa-plus-circle"></i></a>');
                    };
                  });
                };
                
            };
        }
    });
};
function addDefaultSettings (classname){
    if(classname && $('.'+classname+' select') && $('.'+classname+' select').length>0){
        var indexcount = $('.'+classname+' select').length/3;
        $('.'+classname).append('<div class="col-sm-12"><label class="control-label col-lg-3 col-md-3 col-sm-12" for="appointment_time"></label><div class="col-lg-3 col-md-3 col-sm-12 '+classname+'_start_slot_'+indexcount+'"></div><div class="col-lg-3 col-md-3 col-sm-12 '+classname+'_end_slot_'+indexcount+'"></div><div class="col-lg-3 col-md-3 col-sm-12 '+classname+'_slot_duration_'+indexcount+'"></div></div>');
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
function UpdateDefaultSettings () {
    var default_settings = $('#defaultsettingsform').serializeArray();
    var default_settings1 = [{"day":"Sunday","end_1":"","end_2":"","end_3":"","end_4":"","end_5":"","start_1":"","start_1_duration":"","start_2":"","start_2_duration":"","start_3":"","start_3_duration":"","start_4":"","start_4_duration":"","start_5":"","start_5_duration":""},
        {"day":"Monday","end_1":"","end_2":"","end_3":"","end_4":"","end_5":"","start_1":"","start_1_duration":"","start_2":"","start_2_duration":"","start_3":"","start_3_duration":"","start_4":"","start_4_duration":"","start_5":"","start_5_duration":""},
        {"day":"Tuesday","end_1":"","end_2":"","end_3":"","end_4":"","end_5":"","start_1":"","start_1_duration":"","start_2":"","start_2_duration":"","start_3":"","start_3_duration":"","start_4":"","start_4_duration":"","start_5":"","start_5_duration":""},
        {"day":"Wedensday","end_1":"","end_2":"","end_3":"","end_4":"","end_5":"","start_1":"","start_1_duration":"","start_2":"","start_2_duration":"","start_3":"","start_3_duration":"","start_4":"","start_4_duration":"","start_5":"","start_5_duration":""},
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


