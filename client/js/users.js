/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var userslist = [];
function updateUser(from,obj){
  var functionname =  "";
  $('#full_name_error').html("");
  $('#email_address_error').html("");
  $('#password_error').html('');
  functionname = 'create';
  var user_details = $('#usercreateorupdateform').serialize();
  var full_name = $("#full_name").val();
  var email_address = $("#email_address").val();
  if(from && from == "delete"){
    user_details = obj;
    full_name = obj.full_name;
    email_address =  obj.email_address;
    functionname = 'update/'+obj.id;
  }
  if (email_address !== '' && full_name !== '') {
      if (functionname == "create") {
        if($("#password").val() == ""){
          $('#password_error').html('Please enter password.');
          $('#password_error').show();
          return;
        }
      }
      $.ajax({
          type: "POST",
          url: site_url + "user_profile/"+functionname,
          data: user_details,
          success: function (result) {
              var data = JSON.parse(result);
              if(data && data.status) {
                $('#user_success').html(data.success);
                $('#user_success').show();
                setTimeout(function () {
                    $('#user_success').hide();
                    if (window.location.pathname && window.location.pathname.indexOf("registerform.html")>-1) {
                      window.location.href="index.html";
                    }else{;
                      if (localStorage.getItem('usertype') == 'User') {
                        window.location.href="index.html";
                      }else{
                        renderUsersGrid();
                      }
                    }
                }, 2000);
              }else {
                  $('#user_error').html(data.success);
                  $('#user_error').show();
                  $('#email_address').val('');
                  $('#full_name').val('');
                  $('#phone_number').val('');
              }
          }
      });
  } else if (full_name == '') {
    $('#full_name_error').html('Please Enter Name.');
    $('#full_name_error').show();
  }else if (email_address == '') {
      $('#email_address_error').html('Please Enter Email.');
      $('#email_address_error').show();
  } 
}
function getAddUserForm(){
  $('.listscreen').hide();
  $('.addscreen').show();
  $('.detailsscreen').hide();
  $('#full_name').val("");
  $('#email_address').val("");
  $('#phone_number').val("");
}
function deleteUserConfirmDetails(id) {
  data = userslist[id];
  if (confirm('Are you sure want to delete?')) {
    var obj = {
      'full_name': data.full_name,
      'email_address': data.email_address,
      'phone_number':data.phone_number,
      'id':data.id,
      'role': data.role,
      'status': data.status,
      'active':0,
      'deleted':1
    };
    updateUser('delete',obj);
  }
}
function getuserdeatils(id){
  $('.listscreen').hide();
  $('.addscreen').hide();
  $('.detailsscreen').show();
  $('.notforadmin').show();
  $('.foradmin').hide();
  $('#usernameindetails').text('');
  $('#emailindetails').text('');
  $('#phoneindetails').text('');
  $('#genderindetails').text('');
  $('#dobindetails').text('');
  $('#full_name').val("");
  $('#email_address').val("");
  $('#phone_number').val("");
  $('#ageindetails').text("");
  if(localStorage.getItem('usertype') != 'User'){
    $('.notforadmin').hide();
    $('.foradmin').show();
  }
  $.ajax({
      type: "get",
      url: site_url + 'user_profile/read/'+id,
      success: function (result) {
        var data = $.parseJSON(result);
        if (data.success) {
          if (data.user) {
            $('#usernameindetails').text(data.user.full_name);
            $('#emailindetails').text(data.user.email_address);
            $('#phoneindetails').text(data.user.phone_number);
            $('#genderindetails').text(data.user.gender);
            $('#dobindetails').text(data.user.DOB);
            var age = moment().diff(data.user.DOB, 'years',false);
            $('#ageindetails').text(age);
          } 
        } 
      }
    });
}
function renderUsersGrid(){
  $('.listscreen').show();
  $('.detailsscreen').hide();
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
        name: 'email_address',
        type: 'string'
      }, {
        name: 'password',
        type: 'string'
      },
      {
        name: 'status',
        type: 'string'
      },
      {
        "name":"created_at",
        "type":"date"
      },
      {name:"id",
      type:"number"}],
    cache: false,
    url: site_url + 'user_profile/getUsers',
    beforeprocessing: function (data) {
      if (data != null && data.length > 0) {
        source.totalrecords = data[0].totalRecords;
        userslist = data;
      }
    }
  };
  var dataadapter = new $.jqx.dataAdapter(source, {
    loadComplete: function (data) { },
    loadError: function (xhr, status, error) { }    
});
 
  // initialize jqxGrid
  $("#usersjqxDataTable").jqxDataTable({
    width:'100%',
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
    columns: [
       {
        text: 'Phone',
        datafield: 'phone_number',
        width:'15%',
        hidden:true,filterable: true
      }, {
        text: 'Email',
        datafield: 'email_address',
        width:'25%',
        hidden:true,filterable: true
      }, {
        text: 'Password',
        datafield: 'password',width:'7%',
        hidden:true,
        filterable: false
      },
      {
        text: 'Status',
        hidden:true,
        filterable: false,
        datafield: 'status',width:'10%'
      },{
        text: 'Id',
        datafield: 'id',hidden:true,
        filterable: false
      },
      {
        text: 'Created',
        datafield: 'created_at',
        cellsformat: 'yyyy-MM-dd',
        align: 'right',
        cellsalign: 'right',
        width:'15%',
        hidden:true,
        filterable: false
      },
      {
        filterable: false,
        text: 'Details', align: 'center', datafield: 'full_name',
        cellsRenderer: function (row, column, value, rowData) {
          var container = '<div class="col-xs-12 nopadding">'
          var leftcolumn = '<div class="col-xs-12 text-center nopadding col-sm-1">';
          var rightcolumn = '<div class="col-xs-12 text-left col-sm-7">';
          var lastcolumn = '<div class="col-xs-12 text-left col-sm-4">';
          var image =  '<div style="margin: 10px;"><img width="60" height="60" style="display: block;" src="images/testimonial/avatar.jpeg"/></div>';
          var full_name = "<div style='margin: 10px;'><b>Name:</b>" + rowData.full_name + "</div>";
          var Email = "<div style='margin: 10px;'><b>Email:</b> " + rowData.email_address + "</div>";
          var createdat = "<div style='margin: 10px;'><b>Created at:</b> " + moment(rowData.created_at).format('ddd, MMM D') + "</div>";
          var editbutton = '<div class="text-left gridicons" style="margin: 10px;"><a  href="javascript:void(0)" onClick="getuserdeatils('+rowData.id+');" class="btn btn-default btn-sm"><i class="fa fa-expand"></i>&nbsp;Details&nbsp;</a></div>';
          var status = "<div style='margin: 10px;'> " + rowData.status + "</div>";

          leftcolumn +=image;
          leftcolumn += status;
          leftcolumn += "</div>";
          
          var phone = "<div style='margin: 10px;'><b>Phone:</b> " + rowData.phone_number + "</div>";
          var Role = "<div style='margin: 10px;'><b>Password:</b> " + rowData.password+ "</div>";
          var deletebutton = '<div class="gridicons" style="margin: 15px 10px;"><a href="javascript:void(0)" onClick="deleteUserConfirmDetails('+row+');" class="btn btn-default btn-sm"><i class="fa fa-ban"></i>&nbsp;&nbsp;Block</a></div>';
          
          rightcolumn += full_name;
          rightcolumn += Email;
          rightcolumn += createdat;
          rightcolumn += phone;
          rightcolumn += "</div>";
          //lastcolumn += Role;
          lastcolumn += editbutton;
          lastcolumn += deletebutton;
          lastcolumn += "</div>";
          container += leftcolumn;
          container += rightcolumn;
          container += lastcolumn;
          container += "</div>";
          return container;
        }
      }
    ]
  });
}
function cancelUser(){
  if (localStorage.getItem('usertype') == 'User') {
    window.location.href="index.html";
  }else{
    renderUsersGrid();
  }
}
$(document).ready(function () {
  setTimeout(function  (argument) {
    // body...
  },1000);
  if (window.location.pathname && window.location.pathname.indexOf("registerform.html")>-1) {
    getAddUserForm()
  }else{
    if (localStorage.getItem('usertype') == 'User') {
      var userdetails = JSON.parse(localStorage.getItem('user'));
      getuserdeatils(userdetails.id);
    }else{
      renderUsersGrid();
    }
    
  }
});
