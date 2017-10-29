/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var site_url = "http://localhost:8888/sangeethalakshmi.github.io/server/index.php/"
if(localStorage.getItem('usertype') == 'Super Admin'){
  $('.notforadmin').hide();
  $('.foradmin').show();
}else{
  $('.notforadmin').show();
  $('.foradmin').hide();
}
if (localStorage.getItem('usertype') && localStorage.getItem('usertype').length>0) {
  $('.showlogoutbutton').show();
  $('.showloginbutton').hide();
}else{
  $('.showlogoutbutton').hide();
  $('.showloginbutton').show();
};
function doLogin(from){

  var url = 'user_profile/loginUser';
  if (from && from == "adminlogin") {
     url = 'Admin/loginEmployee';
  };
  var login_details = $('#loginform').serialize();
  var loginemail = $('#user_email').val();
  var loginpassword = $('#user_pwd').val();
  if (loginemail !== '' && loginpassword !== '') {
    $.ajax({
      type: "post",
      url: site_url + url,
      data: login_details,
      success: function (result) {
        var data = $.parseJSON(result);
        if (data.success) {
          $('.modal').modal('hide');
          if (data.user) {
             localStorage.setItem('user', JSON.stringify(data.user));
            if (data.user.role) {
              localStorage.setItem('usertype', data.user.role);
              if (data.user.role == 'Super Admin') {
                
                $('.foradmin').show();
                $('.notforadmin').hide();
              }
            } else {
               localStorage.setItem('usertype', 'User');
              $('.foradmin').hide();
              $('.notforadmin').show();
            }
            $('.showlogoutbutton').show();
            $('.showloginbutton').hide();
          }
          window.location.href = 'index.html';

        } else {
          $('#login_error').html(data.error);
          $('#login_error').show();
        }
      }
    });
    return false;
  }
  else if (loginemail == '') {
    $('#login_error').html('Please Enter User Email.');
    $('#login_error').show();
  } else {
    $('#login_error').html('Please Enter User Password.');
    $('#login_error').show();
  }
}
$('#userloginbutton').click(function () {
  doLogin();
});

function doLogout (){
  localStorage.removeItem('usertype');
  localStorage.removeItem('user');
  window.location.href = 'index.html';
};

