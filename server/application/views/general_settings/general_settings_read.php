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
        <h2 style="margin-top:0px">General_settings Read</h2>
        <table class="table">
	    <tr><td>Show Appointments Before Days</td><td><?php echo $show_appointments_before_days; ?></td></tr>
	    <tr><td>Lock Attempts</td><td><?php echo $lock_attempts; ?></td></tr>
	    <tr><td>Cancellation Time Days</td><td><?php echo $cancellation_time_days; ?></td></tr>
	    <tr><td></td><td><a href="<?php echo site_url('general_settings') ?>" class="btn btn-default">Cancel</a></td></tr>
	</table>
        </body>
</html>