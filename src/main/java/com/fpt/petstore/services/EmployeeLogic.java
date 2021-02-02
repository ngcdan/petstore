/**
 * 
 */
package com.fpt.petstore.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.fpt.petstore.entities.Employee;
import com.fpt.petstore.repository.EmployeeRepository;

/**
 * @author linuss
 */
@Component
public class EmployeeLogic {
  
  @Autowired
  EmployeeRepository repo;
  
  public Employee saveEmployee(Employee employee) {
    return repo.save(employee);
  }
  
  public Employee getEmployeeByUsername(String username) {
    return repo.getByUsername(username);
  }
  
  public List<Employee> findAllEmployees() {
    return repo.findAll();
  }
  
  public boolean deleteEmployee(Employee employee) {
    repo.delete(employee);
    return true;
  }
  
  public boolean deleteEmployees(List<Employee> employees) {
    for(Employee sel : employees) {
      deleteEmployee(sel);
    }
    return true;
  }
  public Employee loginEmployee(String username,String password){
    return repo.loginEmployee(username,password);
  }
  
}
