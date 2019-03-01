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
  if($('#emp_id').val() == ""){
    functionname = 'create';
  }else{
    functionname = 'update/'+$('#emp_id').val();
  }
    var user_details = $('#usercreateorupdateform').serialize();
    var full_name = $("#full_name").val();
    var email_address = $("#email_address").val();
    if(from && from == "delete"){
      user_details = obj;
      full_name = obj.full_name;
      email_address =  obj.email;
      functionname = 'update/'+obj.id;
    }
    if (email_address !== '' && full_name !== '') {
        $.ajax({
            type: "POST",
            url: site_url + "Admin/"+functionname,
            data: user_details,
            success: function (result) {
                var data = $.parseJSON(result);
                if (data && data.status) {
                  $('#user_success').html(data.success);
                  $('#user_success').show();
                  setTimeout(function () {
                      $('#user_success').hide();
                      renderUsersGrid();
                  }, 2000);
                }
                else {
                    $('#user_error').html(data.success);
                    $('#user_error').show();
                    setDefaultvalues();
                }
            }
        });
    } else if (email_address == '') {
        $('#email_address_error').html('Please Enter Email.');
        $('#email_address_error').show();
    } else if (full_name == '') {
        $('#full_name_error').html('Please Enter Name.');
        $('#full_name_error').show();
       
    }
}
function setDefaultvalues(){
  $('#full_name').val("");
  $('#email_address').val("");
  $('#phone_number').val("");
  $('#emp_id').val("");
  $('#password').val("");
  $('#status1').val("");
  $('#active').val("");
  $( "#employee" ).prop( "checked", true );
}
function getAddUserForm(){
  $('.listscreen').hide();
  $('.addscreen').show();
  setDefaultvalues();
}
function deleteUserConfirmDetails(id) {
  if (confirm('Are you sure want to delete?')) {
    data = userslist[id];
    var obj = {
      'full_name': data.full_name,
      'email_address': data.email,
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
function getEmployeedeatils(id){
  $('.listscreen').hide();
  $('.addscreen').show();
  setDefaultvalues();
  $.ajax({
      type: "get",
      url: site_url + 'Admin/read/'+id,
      success: function (result) {
        var data = $.parseJSON(result);
        if (data.success) {
          console.log("correct login");
          $('.modal').modal('hide');
          if (data.user) {
            $('#full_name').val(data.user.full_name);
            $('#email_address').val(data.user.email);
            $('#phone_number').val(data.user.phone_number);
            $('#emp_id').val(data.user.id);
            $('#status1').val(data.user.status);
            $('#active').val(data.user.active);
            $('#password').val(data.user.password);
            if(data.user.role == 'Admin'){
              $( "#admin" ).prop( "checked", true );
            }else{
              $( "#employee" ).prop( "checked", true );
            }
          } 
        } 
      }
    });
}
function renderUsersGrid(){
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
        name: 'role',
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
    url: site_url + 'Admin/getEmployees',
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
 
  // initialize jqxDataTable
  $("#usersjqxDataTable").jqxDataTable({
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
    columns: [
       {
        text: 'Phone',
        datafield: 'phone_number',
        filterable: true,
        hidden:true,
        width:'10%'
      }, {
        text: 'Email',
        datafield: 'email',
        filterable: true,
        width:'28%',
        hidden:true
      }, {
        text: 'Role',
        filterable: false,
        datafield: 'role',width:'7%',
        hidden:true
      },
      {
        text: 'Status',
        filterable: false,
        datafield: 'status',width:'10%',
        hidden:true
      },
      {
        text: 'Created',
        filterable: false,
        datafield: 'created_at',
        cellsformat: 'yyyy-MM-dd',
        align: 'right',
        cellsalign: 'right',
        width:'15%',
        hidden:true
      },
      {
        text: 'Id',
        filterable: false,
        datafield: 'id',hidden:true
      }, 
          {
            filterable: false,
            text: 'Details', align: 'center', dataField: 'full_name',
            cellsRenderer: function (row, column, value, rowData) {
                var container = '<div class="col-xs-12 nopadding">'
                var leftcolumn = '<div class="col-xs-12 text-center nopadding col-sm-1">';
                var rightcolumn = '<div class="col-xs-12 text-left col-sm-7">';
                var lastcolumn = '<div class="col-xs-12 text-left col-sm-4">';
                var image =  '<div style="margin: 10px;"><img width="60" height="60" style="display: block;" src="images/testimonial/avatar.jpeg"/></div>';
                var full_name = "<div style='margin: 10px;'><b>Name:</b>" + rowData.full_name + "</div>";
                var Email = "<div style='margin: 10px;'><b>Email:</b> " + rowData.email + "</div>";
                var createdat = "<div style='margin: 10px;'><b>Created at:</b> " + moment(rowData.created_at).format('ddd, MMM D') + "</div>";
                var editbutton = '<div class="text-left gridicons" style="margin: 10px;"><b>Edit:    </b><a  href="javascript:void(0)" onClick="getEmployeedeatils('+rowData.id+');"><i class="fa fa-pencil"></i></a></div>';
                var status = "<div style='margin: 10px;'> " + rowData.status + "</div>";

                leftcolumn +=image;
                leftcolumn += status;
                leftcolumn += "</div>";
                
                var phone = "<div style='margin: 10px;'><b>Phone:</b> " + rowData.phone_number + "</div>";
                var Role = "<div style='margin: 10px;'><b>Role:</b> " + rowData.role + "</div>";
                var deletebutton = '<div class="text-left gridicons" style="margin: 10px;"><b>Delete:   </b><a href="javascript:void(0)" onClick="deleteUserConfirmDetails('+row+');"><i class="glyphicon glyphicon-trash"></i></a></div>';
                
                rightcolumn += full_name;
                rightcolumn += Email;
                rightcolumn += createdat;
                rightcolumn += phone;
                rightcolumn += "</div>";
                lastcolumn += Role;
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
$(document).ready(function () {
  renderUsersGrid();
});
