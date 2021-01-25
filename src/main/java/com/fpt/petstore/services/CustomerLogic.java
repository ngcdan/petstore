/**
 * 
 */
package com.fpt.petstore.services;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.fpt.petstore.entities.Customer;
import com.fpt.petstore.repository.CustomerRepository;
import com.fpt.petstore.util.DateUtil;

/**
 * @author linuss
 */
@Component
public class CustomerLogic {

  @Autowired
  CustomerRepository repo;

  public Customer saveCustomer(Customer customer) {
    Customer _user = generateCode(customer);
    return repo.save(_user);
  }

  public Customer getCustomerByCode(String code) {
    return repo.getByCode(code);
  }
  
  public List<Customer> findAllCustomers() {
    return repo.findAll();
  }
  
  public boolean deleteCustomer(Customer customer) {
    repo.delete(customer);
    return true;
  }
  
  public boolean deleteCustomers(List<Customer> customers) {
    for(Customer sel : customers) {
      deleteCustomer(sel);
    }
    return true;
  }
  
  public Customer generateCode(Customer customer) {
    if(customer == null) return null;
    customer.setCode("user-" + DateUtil.asCompactDateTimeId(new Date()));
    return customer;
  }

}
