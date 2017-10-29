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
  if($('#user_id').val() == ""){
    functionname = 'create';
  }else{
    functionname = 'update/'+$('#user_id').val();
  }
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
        $.ajax({
            type: "POST",
            url: site_url + "user_profile/"+functionname,
            data: user_details,
            success: function (result) {
                var data = $.parseJSON(result);
                if (data.success) {
                  if(functionname =='create'){
                    $('#user_success').html('Add user Successfully.');
                  }else{
                    $('#user_success').html('Update User Successfully.');
                  }
                  
                  $('#user_success').show();
                  setTimeout(function () {
                      $('#user_success').hide();
                      if (window.location.pathname && window.location.pathname.indexOf("Registerform.html")>-1) {
                        window.location.href="index.html"
                      }else{;
                        renderUsersGrid();
                      }
                  }, 2000);
                }
                else {
                    $('#user_error').html(data.error);
                    $('#user_error').show();
                    $('#email_address').val('');
                    $('#full_name').val('');
                    $('#user_id').val('');
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
function getAddUserForm(){
  $('.listscreen').hide();
  $('.addscreen').show();
  $('#full_name').val("");
  $('#email_address').val("");
  $('#phone_number').val("");
  $('#user_id').val("");
  $('#role').val("");
  $('#status').val("");
  $('#active').val("");
}
function deleteUserConfirmDetails(id,data) {
  if (confirm('Are you sure want to delete?')) {
    var obj = {
      'full_name': data.full_name,
      'email_address': data.email_address,
      'phone_number':data.phone_number,
      'id':data.id,
      'role': data.role,
      'status': data.status,
      'active':0
    };
    updateUser('delete',obj);
  }
}
function getuserdeatils(id){
  $('.listscreen').hide();
  $('.addscreen').show();
  $('#full_name').val("");
  $('#email_address').val("");
  $('#phone_number').val("");
  $('#user_id').val("");
  $('#role').val("");
  $('#status1').val("");
  $('#active').val("");
  $.ajax({
      type: "get",
      url: site_url + 'user_profile/read/'+id,
      success: function (result) {
        var data = $.parseJSON(result);
        if (data.success) {
          console.log("correct login");
          $('.modal').modal('hide');
          if (data.user) {
            $('#full_name').val(data.user.full_name);
            $('#email_address').val(data.user.email_address);
            $('#phone_number').val(data.user.phone_number);
            $('#user_id').val(data.user.id);
            $('#role').val(data.user.role);
            $('#status1').val(data.user.status);
            $('#active').val(data.user.active);
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
        name: 'email_address',
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
    url: site_url + 'user_profile/getUsers',
    filter: function () {
      // update the grid and send a request to the server.
      $("#usersjqxgrid").jqxGrid('updatebounddata', 'filter');
    },
    sort: function () {
      // update the grid and send a request to the server.
      $("#usersjqxgrid").jqxGrid('updatebounddata', 'sort');
    },
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
  $("#usersjqxgrid").jqxGrid({
    width: '100%',
    source: dataadapter,
    filterable: true,
    sortable: true,
    autoheight: true,
    pageable: true,
    pagesize: 10,
    pagesizeoptions: ['5', '10', '15'],
    virtualmode: true,
    rendergridrows: function (obj) {
      return obj.data;
    },
    columns: [{
        text: 'Name',
        datafield: 'full_name',
        width:'20%'
      }, {
        text: 'Phone',
        datafield: 'phone_number',
        width:'15%'
      }, {
        text: 'Email',
        datafield: 'email_address',
        width:'25%'
      }, {
        text: 'Role',
        datafield: 'role',width:'7%'
      },
      {
        text: 'Status',
        datafield: 'status',width:'10%'
      },{
        text: 'Id',
        datafield: 'id',hidden:true
      },
      {
        text: 'Created',
        datafield: 'created_at',
        cellsformat: 'yyyy-MM-dd',
        align: 'right',
        cellsalign: 'right',
        width:'15%'
      },
      {
            text: 'Edit',
            datafield: 'edit',
            columntype: 'image',
             width:'7%',
            cellsrenderer: function () {
              return '<div class="text-center gridicons"><a href="javascript:void(0)"><i class="fa fa-pencil"></i></a></div>';
            }
          },{
            text: 'Delete',
            datafield: 'delete',
            columntype: 'image',
             width:'7%',
            cellsrenderer: function () {
              return '<div class="text-center gridicons"><a href="javascript:void(0)"><i class="glyphicon glyphicon-trash"></i></a></div>';
            }
          }
      
    ],
    ready: function () {
      $('#usersjqxgrid').on('cellclick', function (event) {
        var data = $('#usersjqxgrid').jqxGrid('getrowdata', event.args.rowindex);
        if (event.args.datafield === 'delete' && (event.args.rowindex || event.args.rowindex === 0)) {
          if (data.id)
            deleteUserConfirmDetails(data.id,data);
        }else if (event.args.datafield === 'edit' && (event.args.rowindex || event.args.rowindex === 0)) {
          if (data.id)
            getuserdeatils(data.id);
        };
      });
    }
  });
}
$(document).ready(function () {
  setTimeout(function  (argument) {
    // body...
  },1000);
  if (window.location.pathname && window.location.pathname.indexOf("registerform.html")>-1) {
    getAddUserForm()
  }else{;
    renderUsersGrid();
  }
});
