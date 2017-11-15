<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Appointment_default_settings_model extends CI_Model
{

    public $table = 'appointment_default_settings';
    public $id = 'id';
    public $day = 'day';
    public $order = 'DESC';

    function __construct()
    {
        parent::__construct();
    }

    // get all
    function get_all()
    {
        $this->db->order_by($this->id, $this->order);
        return $this->db->get($this->table)->result();
    }

    // get all gengeral settings
    function get_generalSettings(){
        $this->db->order_by($this->id, $this->order);
        return $this->db->get('general_settings')->result();
    }


    // get data by id
    function get_by_id($id)
    {
        $this->db->where($this->id, $id);
        return $this->db->get($this->table)->row();
    }
    
    // get total rows
    function total_rows($q = NULL) {
        $this->db->like('id', $q);
	$this->db->or_like('day', $q);
	$this->db->or_like('start_1', $q);
	$this->db->or_like('end_1', $q);
	$this->db->or_like('start_2', $q);
	$this->db->or_like('end_2', $q);
	$this->db->or_like('start_3', $q);
	$this->db->or_like('end_3', $q);
	$this->db->or_like('start_4', $q);
	$this->db->or_like('end_4', $q);
	$this->db->or_like('start_5', $q);
	$this->db->or_like('end_5', $q);
	$this->db->or_like('start_1_duration', $q);
	$this->db->or_like('start_2_duration', $q);
	$this->db->or_like('start_3_duration', $q);
	$this->db->or_like('start_4_duration', $q);
	$this->db->or_like('start_5_duration', $q);
	$this->db->or_like('start_6_duration', $q);
	$this->db->from($this->table);
        return $this->db->count_all_results();
    }

    // get data with limit and search
    function get_limit_data($limit, $start = 0, $q = NULL) {
        $this->db->order_by($this->id, $this->order);
        $this->db->like('id', $q);
	$this->db->or_like('day', $q);
	$this->db->or_like('start_1', $q);
	$this->db->or_like('end_1', $q);
	$this->db->or_like('start_2', $q);
	$this->db->or_like('end_2', $q);
	$this->db->or_like('start_3', $q);
	$this->db->or_like('end_3', $q);
	$this->db->or_like('start_4', $q);
	$this->db->or_like('end_4', $q);
	$this->db->or_like('start_5', $q);
	$this->db->or_like('end_5', $q);
	$this->db->or_like('start_1_duration', $q);
	$this->db->or_like('start_2_duration', $q);
	$this->db->or_like('start_3_duration', $q);
	$this->db->or_like('start_4_duration', $q);
	$this->db->or_like('start_5_duration', $q);
	$this->db->or_like('start_6_duration', $q);
	$this->db->limit($limit, $start);
        return $this->db->get($this->table)->result();
    }

    // insert data
    function insert($data)
    {
        $this->db->insert($this->table, $data);
    }

    // update data
    function update($day, $data)
    {
        if (isset($day)) {
           $this->db->where($this->day, $day);
            $this->db->update($this->table, $data);
            return true;
        }else{
            return false;
        };
        
    }

    // delete data
    function delete($id)
    {
        $this->db->where($this->id, $id);
        $this->db->delete($this->table);
    }

}

/* End of file Appointment_default_settings_model.php */
/* Location: ./application/models/Appointment_default_settings_model.php */
/* Please DO NOT modify this information : */
/* Generated by Harviacode Codeigniter CRUD Generator 2017-11-12 07:10:51 */
/* http://harviacode.com */