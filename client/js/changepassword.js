$(document).ready(function () {
    hideMessagesBlock();
});
function hideMessagesBlock(){
    $('#success_msg').hide();
    $('#error_msg').hide();
    $('#success_msg').html('');
    $('#error_msg').html('');
}
function varifyBeforeCheckPassword(newpwd, confirmpwd){
    if (newpwd != confirmpwd) {
        if (newpwd.length > 0 && confirmpwd.length > 0){
            if(newpwd == confirmpwd){
                 return true;
            }else{
                $('#error_msg').html('Please enter same password');
                $('#error_msg').show();
            }
        }
        return false;
    }
}
function updateUserPassword(){
    hideMessagesBlock();
    var email_address = $("#email_address").val();
    var newpwd = $("#new_password").val();
    var confirmpwd = $("#confirm_password").val();
    var postdata = $('#change_password').serialize();
    if (email_address !== ''){
        $.ajax({
            type: "POST",
            url: site_url + "user_profile/changepassword",
            data: postdata,
            beforeSend:function(){
                return varifyBeforeCheckPassword(newpwd, confirmpwd);
            },
            success: function (response) {
                var data = JSON.parse(response);
                if(data && data.status) {
                    $('#success_msg').html(data.success);
                    $('#success_msg').show();
                    setTimeout(function () {
                        $('#success_msg').hide();
                        window.location.href="index.html";
                    }, 2000);
                } else {
                    $('#error_msg').html(data.success);
                    $('#error_msg').show();
                }
            }
        })
    }else{
        $('#error_msg').html('Please enter email');
        $('#error_msg').show();
    }
}