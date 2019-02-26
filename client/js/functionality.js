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
function doAfterSucess(result){
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
        doAfterSucess(result)
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

window.fbAsyncInit = function() {
    // FB JavaScript SDK configuration and setup
    FB.init({
      appId      : 'XXXXXXXXXXXXX', // FB App ID
      cookie     : true,  // enable cookies to allow the server to access the session
      xfbml      : true,  // parse social plugins on this page
      version    : 'v2.8' // use graph api version 2.8
    });
    
    // Check whether the user already logged in
    FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
            //display user data
            getFbUserData();
        }
    });
};

// Load the JavaScript SDK asynchronously
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "js/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// Facebook login with JavaScript SDK
function fbLogin() {
    FB.login(function (response) {
        if (response.authResponse) {
            // Get and display the user profile data
            getFbUserData();
        } else {
            document.getElementById('status').innerHTML = 'User cancelled login or did not fully authorize.';
        }
    }, {scope: 'email'});
}

// Fetch the user profile data from facebook
function getFbUserData(){
    FB.api('/me', {locale: 'en_US', fields: 'id,first_name,phone,email'},
    function (response) {
      if (response && response.id) {
        // Save user data
          saveUserData(response,'facebook');
      }else{
        $('#login_error').html('Login fail. Please try later');
        $('#login_error').show();
      };
        
    });
}
// Logout from facebook
function fbLogout() {
    FB.logout(function() {
        document.getElementById('fbLink').setAttribute("onclick","fbLogin()");
        document.getElementById('fbLink').innerHTML = '<img src="fblogin.png"/>';
        document.getElementById('userData').innerHTML = '';
        document.getElementById('status').innerHTML = 'You have successfully logout from Facebook.';
    });
}


// Save user data to the database
function saveUserData(userData,type){
  var userDetails = {"userData": JSON.stringify(userData)}
  if (type) {
    if (type == "facebook") {
      userDetails['oauth_provider'] = 'facebook'
    };
  };
  
  $.ajax({
            type: "POST",
            url: site_url + "user_profile/authenticateSocialProvider",
            data: JSON.stringify(userData),
            success: function (result) {
               doAfterSucess(result);
            }
        });
    //$.post('userData.php', {oauth_provider:'facebook',userData: JSON.stringify(userData)}, function(data){ return true; });
}
