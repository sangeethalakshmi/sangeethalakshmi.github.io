<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class User_appointment extends CI_Controller
{
    function __construct()
    {
        parent::__construct();
        $this->load->model('User_appointment_model');
        $this->load->library('form_validation');
    }
    public function getDefaultAppointmetSettings(){
        $date = $this->input->get('date');
        $row = $this->User_appointment_model->getAppointmetSettings($date);
        $result = $this->User_appointment_model->getAppointmetsforDate($date);
        if (!$row) {
            $response = array();
            $response['status']=false;
            $response['error'] = "Settings not there";
            echo json_encode($response);
        }else { 
            $response = array();
            $response['status']=true;
            $response['success'] = 'Settings found Successfully';
            $response['user'] = $row;
            $response['bookedslots'] = $result;
            echo json_encode($response);
        }

    }

    public function index()
    {
        $q = urldecode($this->input->get('q', TRUE));
        $start = intval($this->input->get('start'));
        
        if ($q <> '') {
            $config['base_url'] = base_url() . 'user_appointment/index.html?q=' . urlencode($q);
            $config['first_url'] = base_url() . 'user_appointment/index.html?q=' . urlencode($q);
        } else {
            $config['base_url'] = base_url() . 'user_appointment/index.html';
            $config['first_url'] = base_url() . 'user_appointment/index.html';
        }

        $config['per_page'] = 10;
        $config['page_query_string'] = TRUE;
        $config['total_rows'] = $this->User_appointment_model->total_rows($q);
        $user_appointment = $this->User_appointment_model->get_limit_data($config['per_page'], $start, $q);

        $this->load->library('pagination');
        $this->pagination->initialize($config);

        $data = array(
            'user_appointment_data' => $user_appointment,
            'q' => $q,
            'pagination' => $this->pagination->create_links(),
            'total_rows' => $config['total_rows'],
            'start' => $start,
        );
        $this->load->view('user_appointment/user_appointment_list', $data);
    }

   public function read($id) 
    {
        $result = $this->User_appointment_model->get_by_id($id);
         if (!$result) {
            $response = array();
            $response['status']=false;
            $response['error'] = "Employee not there";
            echo json_encode($response);
        }else { 
            $response = array();
            $response['status']=true;
            $response['success'] = 'Employee found Successfully';
            $response['appointment'] = $result;
            echo json_encode($response);
        }
    }


    public function create() 
    {
        $data = array(
            'user_id' => 1,
            'appointment_time' => $this->input->post('appointment',TRUE),
            'status' => 'Created',
            'active' => 1,
            'deleted' => 0,
            'cancelled_by' => Null
        );

        $result = $this->User_appointment_model->insert($data);
         if($result){
            $response = array();
            $response['status']=true;
            $response['success'] = 'Add Appointment Successfully.';
            echo json_encode($response);
        }
        else{
            echo FALSE;
        }
        
    }
    public function update() 
    {
        
        $data = array(

            'user_id' => $this->input->post('user_id',TRUE),
            'appointment_time' => $this->input->post('appointment',TRUE),
            'status' => $this->input->post('status',TRUE),
            'active' => $this->input->post('active',TRUE),
            'deleted' => $this->input->post('deleted',TRUE),
            'cancelled_by' => $this->input->post('cancelled_by',TRUE)
        );

        $result = $this->User_appointment_model->update($this->input->post('id', TRUE), $data);
        if($result){
            $response = array();
            $response['status']=true;
            $response['success'] = 'Update Appointment Successfully.';
            echo json_encode($response);
        }
        else{
            echo FALSE;
        }
    }

    
    
    
    
   
    
 
    
    
    public function delete($id) 
    {
        $row = $this->User_appointment_model->get_by_id($id);

        if ($row) {
            $this->User_appointment_model->delete($id);
            $this->session->set_flashdata('message', 'Delete Record Success');
            redirect(site_url('user_appointment'));
        } else {
            $this->session->set_flashdata('message', 'Record Not Found');
            redirect(site_url('user_appointment'));
        }
    }

    public function _rules() 
    {
	$this->form_validation->set_rules('user_id', 'user id', 'trim|required');
	$this->form_validation->set_rules('appointment_time', 'appointment time', 'trim|required');
	$this->form_validation->set_rules('status', 'status', 'trim|required');
	$this->form_validation->set_rules('active', 'active', 'trim|required');
	$this->form_validation->set_rules('deleted', 'deleted', 'trim|required');
	$this->form_validation->set_rules('cancelled_by', 'cancelled by', 'trim|required');

	$this->form_validation->set_rules('id', 'id', 'trim');
	$this->form_validation->set_error_delimiters('<span class="text-danger">', '</span>');
    }

}

/* End of file User_appointment.php */
/* Location: ./application/controllers/User_appointment.php */
/* Please DO NOT modify this information : */
/* Generated by Harviacode Codeigniter CRUD Generator 2017-10-21 14:30:27 */
/* http://harviacode.com */