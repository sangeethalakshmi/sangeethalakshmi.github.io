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
        <h2 style="margin-top:0px">Appointment_default_settings List</h2>
        <div class="row" style="margin-bottom: 10px">
            <div class="col-md-4">
                <?php echo anchor(site_url('appointment_default_settings/create'),'Create', 'class="btn btn-primary"'); ?>
            </div>
            <div class="col-md-4 text-center">
                <div style="margin-top: 8px" id="message">
                    <?php echo $this->session->userdata('message') <> '' ? $this->session->userdata('message') : ''; ?>
                </div>
            </div>
            <div class="col-md-1 text-right">
            </div>
            <div class="col-md-3 text-right">
                <form action="<?php echo site_url('appointment_default_settings/index'); ?>" class="form-inline" method="get">
                    <div class="input-group">
                        <input type="text" class="form-control" name="q" value="<?php echo $q; ?>">
                        <span class="input-group-btn">
                            <?php 
                                if ($q <> '')
                                {
                                    ?>
                                    <a href="<?php echo site_url('appointment_default_settings'); ?>" class="btn btn-default">Reset</a>
                                    <?php
                                }
                            ?>
                          <button class="btn btn-primary" type="submit">Search</button>
                        </span>
                    </div>
                </form>
            </div>
        </div>
        <table class="table table-bordered" style="margin-bottom: 10px">
            <tr>
                <th>No</th>
		<th>Day</th>
		<th>Start 1</th>
		<th>End 1</th>
		<th>Start 2</th>
		<th>End 2</th>
		<th>Start 3</th>
		<th>End 3</th>
		<th>Start 4</th>
		<th>End 4</th>
		<th>Start 5</th>
		<th>End 5</th>
		<th>Start 1 Duration</th>
		<th>Start 2 Duration</th>
		<th>Start 3 Duration</th>
		<th>Start 4 Duration</th>
		<th>Start 5 Duration</th>
		<th>Start 6 Duration</th>
		<th>Action</th>
            </tr><?php
            foreach ($appointment_default_settings_data as $appointment_default_settings)
            {
                ?>
                <tr>
			<td width="80px"><?php echo ++$start ?></td>
			<td><?php echo $appointment_default_settings->day ?></td>
			<td><?php echo $appointment_default_settings->start_1 ?></td>
			<td><?php echo $appointment_default_settings->end_1 ?></td>
			<td><?php echo $appointment_default_settings->start_2 ?></td>
			<td><?php echo $appointment_default_settings->end_2 ?></td>
			<td><?php echo $appointment_default_settings->start_3 ?></td>
			<td><?php echo $appointment_default_settings->end_3 ?></td>
			<td><?php echo $appointment_default_settings->start_4 ?></td>
			<td><?php echo $appointment_default_settings->end_4 ?></td>
			<td><?php echo $appointment_default_settings->start_5 ?></td>
			<td><?php echo $appointment_default_settings->end_5 ?></td>
			<td><?php echo $appointment_default_settings->start_1_duration ?></td>
			<td><?php echo $appointment_default_settings->start_2_duration ?></td>
			<td><?php echo $appointment_default_settings->start_3_duration ?></td>
			<td><?php echo $appointment_default_settings->start_4_duration ?></td>
			<td><?php echo $appointment_default_settings->start_5_duration ?></td>
			<td><?php echo $appointment_default_settings->start_6_duration ?></td>
			<td style="text-align:center" width="200px">
				<?php 
				echo anchor(site_url('appointment_default_settings/read/'.$appointment_default_settings->id),'Read'); 
				echo ' | '; 
				echo anchor(site_url('appointment_default_settings/update/'.$appointment_default_settings->id),'Update'); 
				echo ' | '; 
				echo anchor(site_url('appointment_default_settings/delete/'.$appointment_default_settings->id),'Delete','onclick="javasciprt: return confirm(\'Are You Sure ?\')"'); 
				?>
			</td>
		</tr>
                <?php
            }
            ?>
        </table>
        <div class="row">
            <div class="col-md-6">
                <a href="#" class="btn btn-primary">Total Record : <?php echo $total_rows ?></a>
	    </div>
            <div class="col-md-6 text-right">
                <?php echo $pagination ?>
            </div>
        </div>
    </body>
</html>