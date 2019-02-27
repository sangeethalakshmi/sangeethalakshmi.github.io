<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class User_profile extends CI_Controller
{
    function __construct()
    {
        parent::__construct();
        $this->load->model('User_profile_model');
        $this->load->library('form_validation');
    }
    //sign in functionality for user
    public function loginUser()
    {
        $arr=array();
        $arr['user_email']=$this->input->post('user_email');
        $arr['user_password']=$this->input->post('user_pwd');
        $result=$this->User_profile_model->CheckforUserLogin($arr);
        if (!$result) {
            $response = array();
            $response['status']=false;
            $response['error'] = "User Email and Password Does not Match";
            echo json_encode($response);
        }else { 
            $response = array();
            $response['status']=true;
            $response['success'] = 'Logged in Successfully';
            $response['user'] = $result;

            $this->load->library('email');

            $this->email->from('email@gmail.com', 'Name');
            $this->email->to('email@gmail.com');

            $this->email->subject('Email Test');
            $this->email->message('Testing the email class.');

            $this->email->send();
            echo json_encode($response);
        }

    }
    //get users list
    public function getUsers()
    {
        $where = " WHERE active = 1 ";
        $filterslength = $this->input->get('filterslength');
        $filteredarray = array(
            '0' => 'delete', 
            '1' => 'edit', 
            '2' => 'id', 
            '3' => 'created_at', 
            '4' => 'status', 
            '5' => 'password', 
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
        $result = $this->User_profile_model->get_all($where,$start,$pagesize,$orderby);
        // get total records in user_profile
        $count = $this->User_profile_model->total_rows($where);
        if(isset($count) && $count>0 && isset($result) && isset($result[0]) && isset($result[0]["full_name"])){
            $result[0]["totalRecords"] = $count;
        }
        echo json_encode($result);
    }
    public function index()
    {
        $q = urldecode($this->input->get('q', TRUE));
        $start = intval($this->input->get('start'));
        
        if ($q <> '') {
            $config['base_url'] = base_url() . 'user_profile/index.html?q=' . urlencode($q);
            $config['first_url'] = base_url() . 'user_profile/index.html?q=' . urlencode($q);
        } else {
            $config['base_url'] = base_url() . 'user_profile/index.html';
            $config['first_url'] = base_url() . 'user_profile/index.html';
        }

        $config['per_page'] = 10;
        $config['page_query_string'] = TRUE;
        $config['total_rows'] = $this->User_profile_model->total_rows($q);
        $user_profile = $this->User_profile_model->get_limit_data($config['per_page'], $start, $q);

        $this->load->library('pagination');
        $this->pagination->initialize($config);

        $data = array(
            'user_profile_data' => $user_profile,
            'q' => $q,
            'pagination' => $this->pagination->create_links(),
            'total_rows' => $config['total_rows'],
            'start' => $start,
        );
        $this->load->view('user_profile/user_profile_list', $data);
    }

    public function read($id) 
    {
        $result = $this->User_profile_model->get_by_id($id);
         if (!$result) {
            $response = array();
            $response['status']=false;
            $response['error'] = "User not there";
            echo json_encode($response);
        }else { 
            $response = array();
            $response['status']=true;
            $response['success'] = 'User found Successfully';
            $response['user'] = $result;
            echo json_encode($response);
        }
    }

    
    
    public function create() 
    {
        $arr = array();
        $response = array();
        $response['status']=false;
        $response['success'] = '';
        $arr['email_address'] = $this->input->post('email_address');
        $res = $this->User_profile_model->checkpassword($arr);
        if($res){
            $response['success'] = 'Already user exists with this email';
        }else{
            $data = array(
                'full_name' => $this->input->post('full_name',TRUE),
                'phone_number' => $this->input->post('phone_number',TRUE),
                'email_address' => $this->input->post('email_address',TRUE),
                'password' =>  $this->input->post('password',TRUE),
                'status' => 'ACTIVE',
                'active' => 1,
                'deleted' => 0
            );
            $result = $this->User_profile_model->insert($data);
             if($result){
                $response['status']=true;
                $response['success'] = 'Add User Successfully.';
            }
            else{
                $response['success'] = 'Some error occur while adding user';
            }
        }
        echo json_encode($response);
    }
    public function update() 
    { 
        $response = array();
        $response['status']=false;
        $data = array(
            'full_name' => $this->input->post('full_name',TRUE),
            'phone_number' => $this->input->post('phone_number',TRUE),
            'email_address' => $this->input->post('email_address',TRUE),
            'status' => $this->input->post('status',TRUE),
            'active' => $this->input->post('active',TRUE),
            'deleted' => $this->input->post('deleted',TRUE)
        );

        $result = $this->User_profile_model->update($this->input->post('id', TRUE), $data);
        if($result){
            $response['status']=true;
            $response['success'] = 'Update user Successfully.';
        }
        else{
            $response['success'] = 'Some error occur while updating';
        }
        echo json_encode($response);
    }
    
    public function delete($id) 
    {
        $row = $this->User_profile_model->get_by_id($id);

        if ($row) {
            $this->User_profile_model->delete($id);
            $this->session->set_flashdata('message', 'Delete Record Success');
            redirect(site_url('user_profile'));
        } else {
            $this->session->set_flashdata('message', 'Record Not Found');
            redirect(site_url('user_profile'));
        }
    }
    public function changepassword() {
        $arr = array();
        $response = array();
        $response['status']=false;
        $response['success'] = '';
        $arr['id'] = $this->input->post('id');
        $arr['password'] = $this->input->post('new_password');
        $result = $this->User_profile_model->checkpassword($arr);
        if ($result) {
            $res = $this->User_profile_model->updateUserPassword($arr);
            if($res){
                $response['status']=true;
                $response['success'] = 'Update password Successfully.';
            }
            else{
                $response['success'] = "Some error occur while updating";
            }
            echo json_encode($response);
        } else {
            $response['success'] = "User doesn't exists";
            echo json_encode($response); 
        }
    }
    public function _rules() 
    {
	$this->form_validation->set_rules('full_name', 'full name', 'trim|required');
	$this->form_validation->set_rules('phone_number', 'phone number', 'trim|required');
	$this->form_validation->set_rules('email_address', 'email address', 'trim|required');
	$this->form_validation->set_rules('role', 'role', 'trim|required');
	$this->form_validation->set_rules('status', 'status', 'trim|required');
	$this->form_validation->set_rules('active', 'active', 'trim|required');
	$this->form_validation->set_rules('deleted', 'deleted', 'trim|required');
	$this->form_validation->set_rules('created_at', 'created at', 'trim|required');
	$this->form_validation->set_rules('updated_at', 'updated at', 'trim|required');

	$this->form_validation->set_rules('id', 'id', 'trim');
	$this->form_validation->set_error_delimiters('<span class="text-danger">', '</span>');
    }

    public function authenticateSocialProvider(){
        $userData = json_decode($this->input->post['userData']);
        if(!empty($userData)){
            $oauth_provider = $this->input->post['oauth_provider'];
            $prevQuery = "SELECT * FROM users WHERE oauth_provider = '".$oauth_provider."' AND oauth_uid = '".$userData->id."'";
            $prevQuery = $this->db->query($prevQuery);
            $count = $prevQuery->num_rows();
            if(!$count){
                 $data = array(
                    'full_name' => $userData->first_name,
                    'phone_number' => $userData->phone,
                    'email_address' => $userData->email,
                    'status' => 'ACTIVE',
                    'active' => 1,
                    'deleted' => 0
                );
                $data['password'] = substr($userData->first_name, 0, 3).'1234';
                $result = $this->User_profile_model->insert($data);
            };
        };
        $arr=array();
        $arr['user_email']=$userData->email;
        $arr['user_password']=substr($userData->first_name, 0, 3).'1234';
        $result=$this->User_profile_model->CheckforUserLogin($arr);
        if (!$result) {
            $response = array();
            $response['status']=false;
            $response['error'] = "User Email and Password Does not Match";
            echo json_encode($response);
        }else { 
            $response = array();
            $response['status']=true;
            $response['success'] = 'Logged in Successfully';
            $response['user'] = $result;
            echo json_encode($response);
        };
    }

}

/* End of file User_profile.php */
/* Location: ./application/controllers/User_profile.php */
/* Please DO NOT modify this information : */
/* Generated by Harviacode Codeigniter CRUD Generator 2017-10-14 09:58:24 */
/* http://harviacode.com */
