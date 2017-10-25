<!doctype html>
<html>
    <head>
        <title>harviacode.com - codeigniter crud generator</title>
        <link rel="stylesheet" href="<?php echo base_url('assets/bootstrap/css/bootstrap.min.css') ?>"/>
        <style>
            body{
                padding: 15px;
            }
        </style>
    </head>
    <body>
        <h2 style="margin-top:0px">User_profile Read</h2>
        <table class="table">
	    <tr><td>Full Name</td><td><?php echo $full_name; ?></td></tr>
	    <tr><td>Phone Number</td><td><?php echo $phone_number; ?></td></tr>
	    <tr><td>Email Address</td><td><?php echo $email_address; ?></td></tr>
	    <tr><td>Role</td><td><?php echo $role; ?></td></tr>
	    <tr><td>Status</td><td><?php echo $status; ?></td></tr>
	    <tr><td>Active</td><td><?php echo $active; ?></td></tr>
	    <tr><td>Deleted</td><td><?php echo $deleted; ?></td></tr>
	    <tr><td>Created At</td><td><?php echo $created_at; ?></td></tr>
	    <tr><td>Updated At</td><td><?php echo $updated_at; ?></td></tr>
	    <tr><td></td><td><a href="<?php echo site_url('user_profile') ?>" class="btn btn-default">Cancel</a></td></tr>
	</table>
        </body>
</html>