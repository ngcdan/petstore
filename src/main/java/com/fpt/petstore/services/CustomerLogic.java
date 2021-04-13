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
    return repo.save(customer);
  }

  public Customer getCustomerByUsername(String username) {
    return repo.getByUsername(username);
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

  public Customer findCustomerbyEmail(String email){
    return repo.findByEmail(email);
  }

  public Customer customerLogin(String email,String password){
    return repo.customerLogin(email,password);
  }

  public void updateCustomer(long id,String fullName,String phone,String address,String avatarUrl,Date birthday){
     repo.updateCustomer(id,fullName,phone,address,avatarUrl,birthday);
  }
  public void updatePassword(long id,String password){
    repo.updatePassword(id,password);
  }
  public Customer findCustomerByPassword(long id,String password){
    return repo.findCustomerByPassword(id,password);
  }
}
