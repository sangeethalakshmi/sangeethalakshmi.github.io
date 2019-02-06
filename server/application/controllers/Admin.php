<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Admin extends CI_Controller
{
    function __construct()
    {
        parent::__construct();
        $this->load->model('Admin_model');
        $this->load->library('form_validation');
    }

       //sign in functionality for user
    public function loginEmployee()
    {
        $arr=array();
        $arr['email']=$this->input->post('user_email');
        $arr['password']=$this->input->post('user_pwd');
        $result=$this->Admin_model->CheckforEmployeeLogin($arr);
        if (!$result) {
            $response = array();
            $response['status']=false;
            $response['error'] = "Employee Email and Password Does not Match";
            echo json_encode($response);
        }else { 
            $response = array();
            $response['status']=true;
            $response['success'] = 'Logged in Successfully';
            $response['user'] = $result;
            echo json_encode($response);
        }

    }
    //get users list
    public function getEmployees()
    {
        $where = " WHERE active = 1 ";
        $filterslength = $this->input->get('filterslength');
        $filteredarray = array(
            '0' => 'delete', 
            '1' => 'edit', 
            '2' => 'id', 
            '3' => 'created_at', 
            '4' => 'status', 
            '5' => 'role', 
        );
        if (isset($filterslength)  && $filterslength> 0) {
             $where =  $where."and ((";
            $tmpdatafield = "";
            $tmpfilteroperator = "";
            for ($i=0; $i < $filterslength; $i++)
            {
                // get the filter's value.
                $filtervalue =  $this->input->get("filtervalue" . $i);
                // get the filter's condition.
                $filtercondition = $this->input->get("filtercondition" . $i);
                // get the filter's column.
                $filterdatafield = $this->input->get("filterdatafield" . $i);
                // get the filter's operator.
                $filteroperator = $this->input->get("filteroperator" . $i);
                if ($filterdatafield && !in_array($filterdatafield, $filteredarray)) {
                    if ($tmpdatafield == "")
                    {
                            $tmpdatafield = $filterdatafield;
                    }
                    else if ($tmpdatafield <> $filterdatafield)
                    {
                            $where .= ")OR(";
                    }
                    else if ($tmpdatafield == $filterdatafield)
                    {
                            if ($tmpfilteroperator == 0)
                            {
                                    $where .= " OR ";
                            }
                            else $where .= " OR ";
                    }

                    // build the "WHERE" clause depending on the filter's condition, value and datafield.
                    switch($filtercondition)
                    {
                        case "CONTAINS":
                                $where .= " " . $filterdatafield . " LIKE '%" . $filtervalue ."%'";
                                break;
                        case "DOES_NOT_CONTAIN":
                                $where .= " " . $filterdatafield . " NOT LIKE '%" . $filtervalue ."%'";
                                break;
                        case "EQUAL":
                                $where .= " " . $filterdatafield . " = '" . $filtervalue ."'";
                                break;
                        case "NOT_EQUAL":
                                $where .= " " . $filterdatafield . " <> '" . $filtervalue ."'";
                                break;
                        case "GREATER_THAN":
                                $where .= " " . $filterdatafield . " > '" . $filtervalue ."'";
                                break;
                        case "LESS_THAN":
                                $where .= " " . $filterdatafield . " < '" . $filtervalue ."'";
                                break;
                        case "GREATER_THAN_OR_EQUAL":
                                $where .= " " . $filterdatafield . " >= '" . $filtervalue ."'";
                                break;
                        case "LESS_THAN_OR_EQUAL":
                                $where .= " " . $filterdatafield . " <= '" . $filtervalue ."'";
                                break;
                        case "STARTS_WITH":
                                $where .= " " . $filterdatafield . " LIKE '" . $filtervalue ."%'";
                                break;
                        case "ENDS_WITH":
                                $where .= " " . $filterdatafield . " LIKE '%" . $filtervalue ."'";
                                break;
                    }
                }
                if ($i == $filterslength - 1)
                    {
                            $where .= "))";
                    }

                    $tmpfilteroperator = $filteroperator;
                    $tmpdatafield = $filterdatafield;
            }
        }
        $orderby = "";
    $sortdatafield = $this->input->get("sortdatafield");
    $sortorder = $this->input->get("sortorder");
    if (isset($sortdatafield) && isset($sortorder) && ($sortorder == "asc"  || $sortorder == "desc"))
    {
        $sortdatafield = str_replace("([^A-Za-z0-9])", ' ', $sortdatafield);
        $orderby = "order by " . $sortdatafield . " " . $sortorder;
    }
        $pagenum = 0;
        if ($this->input->get("pagenum")){
            $pagenum = (int)($this->input->get("pagenum"));
        }
        $pagesize = 1000;
        if ($this->input->get("pagesize")){
            $pagesize = (int)($this->input->get("pagesize"));
        }
        $start = $pagenum * $pagesize;
        $result = $this->Admin_model->get_all($where,$start,$pagesize,$orderby);
        // get total records in user_profile
        $count = $this->Admin_model->total_rows($where);
        if(isset($count) && $count>0 && isset($result) && isset($result[0]) && isset($result[0]["full_name"])){
            $result[0]["totalRecords"] = $count;
        }
        echo json_encode($result);
    }
   
    public function read($id) 
    {
        $result = $this->Admin_model->get_by_id($id);
         if (!$result) {
            $response = array();
            $response['status']=false;
            $response['error'] = "Employee not there";
            echo json_encode($response);
        }else { 
            $response = array();
            $response['status']=true;
            $response['success'] = 'Employee found Successfully';
            $response['user'] = $result;
            echo json_encode($response);
        }
    }

    
    
    public function create() 
    {
        $data = array(
            'full_name' => $this->input->post('full_name',TRUE),
            'phone_number' => $this->input->post('phone_number',TRUE),
            'email' => $this->input->post('email',TRUE),
            'role' => 'Employee',
            'status' => 'ACTIVE',
            'active' => 1,
            'deleted' => 0
        );

        $result = $this->Admin_model->insert($data);
         if($result){
            $response = array();
            $response['status']=true;
            $response['success'] = 'Add Employee Successfully.';
            echo json_encode($response);
        }
        else{
            echo FALSE;
        }
        
    }
    public function update() 
    {
        
        $data = array(
            'full_name' => $this->input->post('full_name',TRUE),
            'phone_number' => $this->input->post('phone_number',TRUE),
            'email' => $this->input->post('email',TRUE),
            'role' => $this->input->post('role',TRUE),
            'status' => $this->input->post('status',TRUE),
            'active' => $this->input->post('active',TRUE),
            'deleted' => $this->input->post('deleted',TRUE)
        );

        $result = $this->Admin_model->update($this->input->post('id', TRUE), $data);
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
    
    public function delete($id) 
    {
        $row = $this->Admin_model->get_by_id($id);

        if ($row) {
            $this->Admin_model->delete($id);
            $this->session->set_flashdata('message', 'Delete Record Success');
            redirect(site_url('admin'));
        } else {
            $this->session->set_flashdata('message', 'Record Not Found');
            redirect(site_url('admin'));
        }
    }

    public function _rules() 
    {
	$this->form_validation->set_rules('full_name', 'full name', 'trim|required');
	$this->form_validation->set_rules('role', 'role', 'trim|required');
	$this->form_validation->set_rules('email', 'email', 'trim|required');
	$this->form_validation->set_rules('phone_number', 'phone number', 'trim|required');
	$this->form_validation->set_rules('status', 'status', 'trim|required');
	$this->form_validation->set_rules('active', 'active', 'trim|required');
	$this->form_validation->set_rules('deleted', 'deleted', 'trim|required');
	$this->form_validation->set_rules('created_at', 'created at', 'trim|required');
	$this->form_validation->set_rules('updated_at', 'updated at', 'trim|required');

	$this->form_validation->set_rules('id', 'id', 'trim');
	$this->form_validation->set_error_delimiters('<span class="text-danger">', '</span>');
    }

}

/* End of file Admin.php */
/* Location: ./application/controllers/Admin.php */
/* Please DO NOT modify this information : */
/* Generated by Harviacode Codeigniter CRUD Generator 2017-10-21 08:32:47 */
/* http://harviacode.com */