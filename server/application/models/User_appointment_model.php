<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class User_appointment_model extends CI_Model
{

    public $table = 'user_appointment';
    public $id = 'id';
    public $order = 'DESC';

    function __construct()
    {
        parent::__construct();
    }

    // get general Settings
    function getGeneralSettings()
    {
        
        $general =  $this->db->get('general_settings')->row();
        if (isset($general) && isset($general->id)){ 
            return $general;
        }else{
            return false;
        }
    }

    // get Appointmet Settings
    function getAppointmetSettings($date)
    {
        
        $override =  $this->db->where('date', $date);
        $override =  $this->db->get('appointment_override_settings')->row();
        if (isset($overide) && isset($overide->id)){ 
            return $override;
        }else{
            $nameOfDay = date('l', strtotime($date));
            $defaults =  $this->db->where('day',$nameOfDay);
            $defaults =  $this->db->get('appointment_default_settings')->row();
            return $defaults;
        }
    }
    function getAppointmetsforDate($date){
        $this->db->where('DATE(appointment_time)', $date);
        $this->db->select('DATE_FORMAT(appointment_time, "%H:%i") as time');
        return $this->db->get($this->table)->result();

    }
    
    // get all
    function get_all($where,$start,$pagesize,$orderby,$usertype,$userId)
    {
        // build the query.
        if (isset($usertype) && isset($userId)) {
            if ( $usertype != 'Super Admin' ) {
               $query = "SELECT app.*,full_name,email_address,phone_number  FROM " .$this->table .' app  LEFT JOIN user_profile as u ON user_id = u.id '. $where.' and user_id =  '.$userId.' '.$orderby." LIMIT ". $start.','. $pagesize;

            }else{
                $query = "SELECT app.*,full_name,email,phone_number  FROM " .$this->table .' app  LEFT JOIN admin as u ON user_id = u.id '. $where.' and user_id =  '.$userId.' '.$orderby." LIMIT ". $start.','. $pagesize;

            }

        }else{
            $query = "SELECT * FROM " .$this->table .' '. $where.' '.$orderby." LIMIT ". $start.','. $pagesize;
        }
        $query = $this->db->query($query);
        return $query->result_array();
    }
    

        // get total rows
    function total_rows($where = NULL) {
    $query = "SELECT * FROM " .$this->table .' app '. $where;
        $query = $this->db->query($query);
        $count = $query->num_rows();
        return $count;
    }

    // get data with limit and search
    function get_limit_data($limit, $start = 0, $q = NULL) {
        $this->db->order_by($this->id, $this->order);
        $this->db->like('id', $q);
    	$this->db->or_like('user_id', $q);
    	$this->db->or_like('appointment_time', $q);
    	$this->db->or_like('status', $q);
    	$this->db->or_like('active', $q);
    	$this->db->or_like('deleted', $q);
    	$this->db->or_like('cancelled_by', $q);
    	$this->db->limit($limit, $start);
        return $this->db->get($this->table)->result();
    }

    // get data by id
    function get_by_id($id)
    {
        $this->db->where($this->id, $id);
        $this->db->select('*,DATE_FORMAT(appointment_time, "%H:%i") as time,DATE(appointment_time) as date');
        return $this->db->get($this->table)->row();
    }

    // insert data
    function insert($data)
    {
        $this->db->insert($this->table, $data);
        $appointment_id = $this->db->insert_id();
        return $appointment_id;
    }

    // update data
    function update($id, $data)
    {
        $this->db->where($this->id, $id);
        $this->db->update($this->table, $data);
        return true;
    }

     // delete data
    function delete($id)
    {
        $this->db->where($this->id, $id);
        $this->db->delete($this->table);
    }

}

/* End of file User_appointment_model.php */
/* Location: ./application/models/User_appointment_model.php */
/* Please DO NOT modify this information : */
/* Generated by Harviacode Codeigniter CRUD Generator 2017-10-21 14:30:27 */
/* http://harviacode.com */