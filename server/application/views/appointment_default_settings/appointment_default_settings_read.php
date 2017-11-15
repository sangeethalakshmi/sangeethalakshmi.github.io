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
        <h2 style="margin-top:0px">Appointment_default_settings Read</h2>
        <table class="table">
	    <tr><td>Day</td><td><?php echo $day; ?></td></tr>
	    <tr><td>Start 1</td><td><?php echo $start_1; ?></td></tr>
	    <tr><td>End 1</td><td><?php echo $end_1; ?></td></tr>
	    <tr><td>Start 2</td><td><?php echo $start_2; ?></td></tr>
	    <tr><td>End 2</td><td><?php echo $end_2; ?></td></tr>
	    <tr><td>Start 3</td><td><?php echo $start_3; ?></td></tr>
	    <tr><td>End 3</td><td><?php echo $end_3; ?></td></tr>
	    <tr><td>Start 4</td><td><?php echo $start_4; ?></td></tr>
	    <tr><td>End 4</td><td><?php echo $end_4; ?></td></tr>
	    <tr><td>Start 5</td><td><?php echo $start_5; ?></td></tr>
	    <tr><td>End 5</td><td><?php echo $end_5; ?></td></tr>
	    <tr><td>Start 1 Duration</td><td><?php echo $start_1_duration; ?></td></tr>
	    <tr><td>Start 2 Duration</td><td><?php echo $start_2_duration; ?></td></tr>
	    <tr><td>Start 3 Duration</td><td><?php echo $start_3_duration; ?></td></tr>
	    <tr><td>Start 4 Duration</td><td><?php echo $start_4_duration; ?></td></tr>
	    <tr><td>Start 5 Duration</td><td><?php echo $start_5_duration; ?></td></tr>
	    <tr><td>Start 6 Duration</td><td><?php echo $start_6_duration; ?></td></tr>
	    <tr><td></td><td><a href="<?php echo site_url('appointment_default_settings') ?>" class="btn btn-default">Cancel</a></td></tr>
	</table>
        </body>
</html>