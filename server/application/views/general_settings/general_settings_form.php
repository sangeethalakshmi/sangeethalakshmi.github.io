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
        <h2 style="margin-top:0px">General_settings <?php echo $button ?></h2>
        <form action="<?php echo $action; ?>" method="post">
	    <div class="form-group">
            <label for="int">Show Appointments Before Days <?php echo form_error('show_appointments_before_days') ?></label>
            <input type="text" class="form-control" name="show_appointments_before_days" id="show_appointments_before_days" placeholder="Show Appointments Before Days" value="<?php echo $show_appointments_before_days; ?>" />
        </div>
	    <div class="form-group">
            <label for="int">Lock Attempts <?php echo form_error('lock_attempts') ?></label>
            <input type="text" class="form-control" name="lock_attempts" id="lock_attempts" placeholder="Lock Attempts" value="<?php echo $lock_attempts; ?>" />
        </div>
	    <div class="form-group">
            <label for="int">Cancellation Time Days <?php echo form_error('cancellation_time_days') ?></label>
            <input type="text" class="form-control" name="cancellation_time_days" id="cancellation_time_days" placeholder="Cancellation Time Days" value="<?php echo $cancellation_time_days; ?>" />
        </div>
	    <input type="hidden" name="id" value="<?php echo $id; ?>" /> 
	    <button type="submit" class="btn btn-primary"><?php echo $button ?></button> 
	    <a href="<?php echo site_url('general_settings') ?>" class="btn btn-default">Cancel</a>
	</form>
    </body>
</html>