/**
 * 
 */
package com.fpt.petstore.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.fpt.petstore.entities.Staff;
import com.fpt.petstore.repository.StaffRepository;

/**
 * @author linuss
 */
@Component
public class StaffLogic {
  
  @Autowired
  StaffRepository repo;
  
  public Staff saveStaff(Staff staff) {
    return repo.save(staff);
  }
  
  public Staff getStaffByUsername(String username) {
    return repo.getByUsername(username);
  }
  
  public List<Staff> findAllStaff() {
    return repo.findAll();
  }
  
}
