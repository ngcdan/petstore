/**
 * 
 */
package com.fpt.petstore.services;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.fpt.petstore.entities.Customer;
import com.fpt.petstore.entities.Order;
import com.fpt.petstore.repository.CustomerRepository;
import com.fpt.petstore.util.DateUtil;

/**
 * @author linuss
 */
@Component
public class CustomerLogic {

  @Autowired
  CustomerRepository repo;
  
  @Autowired 
  OrderLogic orderLogic;

  public Customer saveCustomer(Customer customer) {
    if(customer.getId() == null ) {
      customer = generateCode(customer);      
    }
    return repo.save(customer);
  }

  public Customer getCustomerByCode(String code) {
    return repo.getByCode(code);
  }

  public List<Customer> findAllCustomers() {
    return repo.findAll();
  }

  public boolean deleteCustomer(Long id) {
    Customer customer = repo.getOne(id);
    if(customer == null) return false;
    List<Order> orders = orderLogic.findOrdersByCustomer(customer);
    for (Order order : orders) {
      order.setCustomer(null);
    }
    repo.deleteById(id);
    return true;
  }

  public boolean deleteCustomers(List<Customer> customers) {
    for(Customer sel : customers) {
      deleteCustomer(sel.getId());
    }
    return true;
  }

  public Customer generateCode(Customer customer) {
    if(customer == null) return null;
    customer.setCode("cus-" + DateUtil.asCompactDateTimeId(new Date()));
    return customer;
  }
  public Customer findCustomerbyEmail(String email){
    return repo.findByEmail(email);
  }
  public Customer customerLogin(String email,String password){
    return repo.customerLogin(email,password);
  }
}
