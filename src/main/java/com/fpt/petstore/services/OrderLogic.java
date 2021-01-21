/**
 * 
 */
package com.fpt.petstore.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.fpt.petstore.entities.Order;
import com.fpt.petstore.repository.OrderRepository;

/**
 * @author linuss
 */

@Component
public class OrderLogic {
  
  @Autowired
  OrderRepository repo;
  
  public Order saveOrder(Order order) {
    return repo.save(order);
  }
  
  public Order getOrderByCode(String code) {
    return repo.getByCode(code);
  }
  
  public List<Order> findAllOrders() {
    return repo.findAll();
  }

}
