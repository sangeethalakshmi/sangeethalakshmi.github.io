<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Appointment_default_settings extends CI_Controller
{
    function __construct()
    {
        parent::__construct();
        $this->load->model('Appointment_default_settings_model');
        $this->load->library('form_validation');
    }

    public function index()
    {
        
        $data = array();
        $data['defaultSettings'] = $this->Appointment_default_settings_model->get_all();
        $data['generalSettings'] = $this->Appointment_default_settings_model->get_generalSettings();
        if (!$data) {
            $response = array();
            $response['status']=false;
            $response['error'] = "Default settings not found";
            echo json_encode($response);
        }else { 
            $response = array();
            $response['status']=true;
            $response['success'] = 'Default settings  are found';
            $response['settings'] = $data;
            echo json_encode($response);
        }
       
    }

    public function read($id) 
    {
        $row = $this->Appointment_default_settings_model->get_by_id($id);
        if ($row) {
            $data = array(
		'id' => $row->id,
		'day' => $row->day,
		'start_1' => $row->start_1,
		'end_1' => $row->end_1,
		'start_2' => $row->start_2,
		'end_2' => $row->end_2,
		'start_3' => $row->start_3,
		'end_3' => $row->end_3,
		'start_4' => $row->start_4,
		'end_4' => $row->end_4,
		'start_5' => $row->start_5,
		'end_5' => $row->end_5,
		'start_1_duration' => $row->start_1_duration,
		'start_2_duration' => $row->start_2_duration,
		'start_3_duration' => $row->start_3_duration,
		'start_4_duration' => $row->start_4_duration,
		'start_5_duration' => $row->start_5_duration,
		'start_6_duration' => $row->start_6_duration,
	    );
            $this->load->view('appointment_default_settings/appointment_default_settings_read', $data);
        } else {
            $this->session->set_flashdata('message', 'Record Not Found');
            redirect(site_url('appointment_default_settings'));
        }
    }

    public function create() 
    {
        $data = array(
            'button' => 'Create',
            'action' => site_url('appointment_default_settings/create_action'),
	    'id' => set_value('id'),
	    'day' => set_value('day'),
	    'start_1' => set_value('start_1'),
	    'end_1' => set_value('end_1'),
	    'start_2' => set_value('start_2'),
	    'end_2' => set_value('end_2'),
	    'start_3' => set_value('start_3'),
	    'end_3' => set_value('end_3'),
	    'start_4' => set_value('start_4'),
	    'end_4' => set_value('end_4'),
	    'start_5' => set_value('start_5'),
	    'end_5' => set_value('end_5'),
	    'start_1_duration' => set_value('start_1_duration'),
	    'start_2_duration' => set_value('start_2_duration'),
	    'start_3_duration' => set_value('start_3_duration'),
	    'start_4_duration' => set_value('start_4_duration'),
	    'start_5_duration' => set_value('start_5_duration'),
	    'start_6_duration' => set_value('start_6_duration'),
	);
        $this->load->view('appointment_default_settings/appointment_default_settings_form', $data);
    }
    
    public function create_action() 
    {
        $this->_rules();

        if ($this->form_validation->run() == FALSE) {
            $this->create();
        } else {
            $data = array(
		'day' => $this->input->post('day',TRUE),
		'start_1' => $this->input->post('start_1',TRUE),
		'end_1' => $this->input->post('end_1',TRUE),
		'start_2' => $this->input->post('start_2',TRUE),
		'end_2' => $this->input->post('end_2',TRUE),
		'start_3' => $this->input->post('start_3',TRUE),
		'end_3' => $this->input->post('end_3',TRUE),
		'start_4' => $this->input->post('start_4',TRUE),
		'end_4' => $this->input->post('end_4',TRUE),
		'start_5' => $this->input->post('start_5',TRUE),
		'end_5' => $this->input->post('end_5',TRUE),
		'start_1_duration' => $this->input->post('start_1_duration',TRUE),
		'start_2_duration' => $this->input->post('start_2_duration',TRUE),
		'start_3_duration' => $this->input->post('start_3_duration',TRUE),
		'start_4_duration' => $this->input->post('start_4_duration',TRUE),
		'start_5_duration' => $this->input->post('start_5_duration',TRUE),
		'start_6_duration' => $this->input->post('start_6_duration',TRUE),
	    );

            $this->Appointment_default_settings_model->insert($data);
            $this->session->set_flashdata('message', 'Create Record Success');
            redirect(site_url('appointment_default_settings'));
        }
    }
    
    public function update() 
    {	
    	 $data = array();
    	 $data = $this->input->post('default_settings');
    	 $result = '';
	 	if (isset($data) && count($data)>0) {
    	 	foreach ($data as $key => $value) {
    	 		if (isset($value) && isset($value['day'])) {
    	 			$result =  $this->Appointment_default_settings_model->update($value['day'],$value);
    	 		}
    	 		
    	 	};
	 	};
        if($result){
            $response = array();
            $response['status']=true;
            $response['success'] = 'Update Employee Successfully.';
            echo json_encode($response);
        }
        else{
            echo FALSE;
        }

         
    }
    
    public function update_action() 
    {
        $this->_rules();

        if ($this->form_validation->run() == FALSE) {
            $this->update($this->input->post('id', TRUE));
        } else {
            $data = array(
		'day' => $this->input->post('day',TRUE),
		'start_1' => $this->input->post('start_1',TRUE),
		'end_1' => $this->input->post('end_1',TRUE),
		'start_2' => $this->input->post('start_2',TRUE),
		'end_2' => $this->input->post('end_2',TRUE),
		'start_3' => $this->input->post('start_3',TRUE),
		'end_3' => $this->input->post('end_3',TRUE),
		'start_4' => $this->input->post('start_4',TRUE),
		'end_4' => $this->input->post('end_4',TRUE),
		'start_5' => $this->input->post('start_5',TRUE),
		'end_5' => $this->input->post('end_5',TRUE),
		'start_1_duration' => $this->input->post('start_1_duration',TRUE),
		'start_2_duration' => $this->input->post('start_2_duration',TRUE),
		'start_3_duration' => $this->input->post('start_3_duration',TRUE),
		'start_4_duration' => $this->input->post('start_4_duration',TRUE),
		'start_5_duration' => $this->input->post('start_5_duration',TRUE),
		'start_6_duration' => $this->input->post('start_6_duration',TRUE),
	    );

            $this->Appointment_default_settings_model->update($this->input->post('id', TRUE), $data);
            $this->session->set_flashdata('message', 'Update Record Success');
            redirect(site_url('appointment_default_settings'));
        }
    }
    
    public function delete($id) 
    {
        $row = $this->Appointment_default_settings_model->get_by_id($id);

        if ($row) {
            $this->Appointment_default_settings_model->delete($id);
            $this->session->set_flashdata('message', 'Delete Record Success');
            redirect(site_url('appointment_default_settings'));
        } else {
            $this->session->set_flashdata('message', 'Record Not Found');
            redirect(site_url('appointment_default_settings'));
        }
    }

    public function _rules() 
    {
	$this->form_validation->set_rules('day', 'day', 'trim|required');
	$this->form_validation->set_rules('start_1', 'start 1', 'trim|required');
	$this->form_validation->set_rules('end_1', 'end 1', 'trim|required');
	$this->form_validation->set_rules('start_2', 'start 2', 'trim|required');
	$this->form_validation->set_rules('end_2', 'end 2', 'trim|required');
	$this->form_validation->set_rules('start_3', 'start 3', 'trim|required');
	$this->form_validation->set_rules('end_3', 'end 3', 'trim|required');
	$this->form_validation->set_rules('start_4', 'start 4', 'trim|required');
	$this->form_validation->set_rules('end_4', 'end 4', 'trim|required');
	$this->form_validation->set_rules('start_5', 'start 5', 'trim|required');
	$this->form_validation->set_rules('end_5', 'end 5', 'trim|required');
	$this->form_validation->set_rules('start_1_duration', 'start 1 duration', 'trim|required');
	$this->form_validation->set_rules('start_2_duration', 'start 2 duration', 'trim|required');
	$this->form_validation->set_rules('start_3_duration', 'start 3 duration', 'trim|required');
	$this->form_validation->set_rules('start_4_duration', 'start 4 duration', 'trim|required');
	$this->form_validation->set_rules('start_5_duration', 'start 5 duration', 'trim|required');
	$this->form_validation->set_rules('start_6_duration', 'start 6 duration', 'trim|required');

	$this->form_validation->set_rules('id', 'id', 'trim');
	$this->form_validation->set_error_delimiters('<span class="text-danger">', '</span>');
    }

}

/* End of file Appointment_default_settings.php */
/* Location: ./application/controllers/Appointment_default_settings.php */
/* Please DO NOT modify this information : */
/* Generated by Harviacode Codeigniter CRUD Generator 2017-11-12 07:10:51 */
/* http://harviacode.com */