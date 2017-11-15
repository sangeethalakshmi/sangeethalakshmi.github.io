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
        <h2 style="margin-top:0px">Appointment_override_settings <?php echo $button ?></h2>
        <form action="<?php echo $action; ?>" method="post">
	    <div class="form-group">
            <label for="varchar">Date <?php echo form_error('date') ?></label>
            <input type="text" class="form-control" name="date" id="date" placeholder="Date" value="<?php echo $date; ?>" />
        </div>
	    <div class="form-group">
            <label for="varchar">Start 1 <?php echo form_error('start_1') ?></label>
            <input type="text" class="form-control" name="start_1" id="start_1" placeholder="Start 1" value="<?php echo $start_1; ?>" />
        </div>
	    <div class="form-group">
            <label for="varchar">End 1 <?php echo form_error('end_1') ?></label>
            <input type="text" class="form-control" name="end_1" id="end_1" placeholder="End 1" value="<?php echo $end_1; ?>" />
        </div>
	    <div class="form-group">
            <label for="varchar">Start 2 <?php echo form_error('start_2') ?></label>
            <input type="text" class="form-control" name="start_2" id="start_2" placeholder="Start 2" value="<?php echo $start_2; ?>" />
        </div>
	    <div class="form-group">
            <label for="varchar">End 2 <?php echo form_error('end_2') ?></label>
            <input type="text" class="form-control" name="end_2" id="end_2" placeholder="End 2" value="<?php echo $end_2; ?>" />
        </div>
	    <div class="form-group">
            <label for="varchar">Start 3 <?php echo form_error('start_3') ?></label>
            <input type="text" class="form-control" name="start_3" id="start_3" placeholder="Start 3" value="<?php echo $start_3; ?>" />
        </div>
	    <div class="form-group">
            <label for="varchar">End 3 <?php echo form_error('end_3') ?></label>
            <input type="text" class="form-control" name="end_3" id="end_3" placeholder="End 3" value="<?php echo $end_3; ?>" />
        </div>
	    <div class="form-group">
            <label for="varchar">Start 4 <?php echo form_error('start_4') ?></label>
            <input type="text" class="form-control" name="start_4" id="start_4" placeholder="Start 4" value="<?php echo $start_4; ?>" />
        </div>
	    <div class="form-group">
            <label for="varchar">End 4 <?php echo form_error('end_4') ?></label>
            <input type="text" class="form-control" name="end_4" id="end_4" placeholder="End 4" value="<?php echo $end_4; ?>" />
        </div>
	    <div class="form-group">
            <label for="varchar">Start 5 <?php echo form_error('start_5') ?></label>
            <input type="text" class="form-control" name="start_5" id="start_5" placeholder="Start 5" value="<?php echo $start_5; ?>" />
        </div>
	    <div class="form-group">
            <label for="varchar">End 5 <?php echo form_error('end_5') ?></label>
            <input type="text" class="form-control" name="end_5" id="end_5" placeholder="End 5" value="<?php echo $end_5; ?>" />
        </div>
	    <div class="form-group">
            <label for="int">Start 1 Duration <?php echo form_error('start_1_duration') ?></label>
            <input type="text" class="form-control" name="start_1_duration" id="start_1_duration" placeholder="Start 1 Duration" value="<?php echo $start_1_duration; ?>" />
        </div>
	    <div class="form-group">
            <label for="int">Start 2 Duration <?php echo form_error('start_2_duration') ?></label>
            <input type="text" class="form-control" name="start_2_duration" id="start_2_duration" placeholder="Start 2 Duration" value="<?php echo $start_2_duration; ?>" />
        </div>
	    <div class="form-group">
            <label for="int">Start 3 Duration <?php echo form_error('start_3_duration') ?></label>
            <input type="text" class="form-control" name="start_3_duration" id="start_3_duration" placeholder="Start 3 Duration" value="<?php echo $start_3_duration; ?>" />
        </div>
	    <div class="form-group">
            <label for="int">Start 4 Duration <?php echo form_error('start_4_duration') ?></label>
            <input type="text" class="form-control" name="start_4_duration" id="start_4_duration" placeholder="Start 4 Duration" value="<?php echo $start_4_duration; ?>" />
        </div>
	    <div class="form-group">
            <label for="int">Start 5 Duration <?php echo form_error('start_5_duration') ?></label>
            <input type="text" class="form-control" name="start_5_duration" id="start_5_duration" placeholder="Start 5 Duration" value="<?php echo $start_5_duration; ?>" />
        </div>
	    <div class="form-group">
            <label for="int">Start 6 Duration <?php echo form_error('start_6_duration') ?></label>
            <input type="text" class="form-control" name="start_6_duration" id="start_6_duration" placeholder="Start 6 Duration" value="<?php echo $start_6_duration; ?>" />
        </div>
	    <input type="hidden" name="id" value="<?php echo $id; ?>" /> 
	    <button type="submit" class="btn btn-primary"><?php echo $button ?></button> 
	    <a href="<?php echo site_url('appointment_override_settings') ?>" class="btn btn-default">Cancel</a>
	</form>
    </body>
</html>