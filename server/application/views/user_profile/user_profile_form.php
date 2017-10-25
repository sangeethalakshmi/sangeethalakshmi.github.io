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
        <h2 style="margin-top:0px">User_profile <?php echo $button ?></h2>
        <form action="<?php echo $action; ?>" method="post">
	    <div class="form-group">
            <label for="varchar">Full Name <?php echo form_error('full_name') ?></label>
            <input type="text" class="form-control" name="full_name" id="full_name" placeholder="Full Name" value="<?php echo $full_name; ?>" />
        </div>
	    <div class="form-group">
            <label for="varchar">Phone Number <?php echo form_error('phone_number') ?></label>
            <input type="text" class="form-control" name="phone_number" id="phone_number" placeholder="Phone Number" value="<?php echo $phone_number; ?>" />
        </div>
	    <div class="form-group">
            <label for="varchar">Email Address <?php echo form_error('email_address') ?></label>
            <input type="text" class="form-control" name="email_address" id="email_address" placeholder="Email Address" value="<?php echo $email_address; ?>" />
        </div>
	    <div class="form-group">
            <label for="int">Role <?php echo form_error('role') ?></label>
            <input type="text" class="form-control" name="role" id="role" placeholder="Role" value="<?php echo $role; ?>" />
        </div>
	    <div class="form-group">
            <label for="varchar">Status <?php echo form_error('status') ?></label>
            <input type="text" class="form-control" name="status" id="status" placeholder="Status" value="<?php echo $status; ?>" />
        </div>
	    <div class="form-group">
            <label for="int">Active <?php echo form_error('active') ?></label>
            <input type="text" class="form-control" name="active" id="active" placeholder="Active" value="<?php echo $active; ?>" />
        </div>
	    <div class="form-group">
            <label for="int">Deleted <?php echo form_error('deleted') ?></label>
            <input type="text" class="form-control" name="deleted" id="deleted" placeholder="Deleted" value="<?php echo $deleted; ?>" />
        </div>
	    <div class="form-group">
            <label for="timestamp">Created At <?php echo form_error('created_at') ?></label>
            <input type="text" class="form-control" name="created_at" id="created_at" placeholder="Created At" value="<?php echo $created_at; ?>" />
        </div>
	    <div class="form-group">
            <label for="datetime">Updated At <?php echo form_error('updated_at') ?></label>
            <input type="text" class="form-control" name="updated_at" id="updated_at" placeholder="Updated At" value="<?php echo $updated_at; ?>" />
        </div>
	    <input type="hidden" name="id" value="<?php echo $id; ?>" /> 
	    <button type="submit" class="btn btn-primary"><?php echo $button ?></button> 
	    <a href="<?php echo site_url('user_profile') ?>" class="btn btn-default">Cancel</a>
	</form>
    </body>
</html>