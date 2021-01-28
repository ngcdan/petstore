/**
 * 
 */
package com.fpt.petstore.services;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.fpt.petstore.entities.Order;
import com.fpt.petstore.repository.OrderRepository;
import com.fpt.petstore.util.DateUtil;

/**
 * @author linuss
 */

@Component
public class OrderLogic {

  @Autowired
  OrderRepository repo;

  public Order saveOrder(Order order) {
    if(order.getId() == null ) {
      order = generateCode(order);      
    }
    return repo.save(order);
  }

  public Order getOrderByCode(String code) {
    return repo.getByCode(code);
  }

  public List<Order> findAllOrders() {
    return repo.findAll();
  }

  public boolean deleteOrder(Order order) {
    repo.delete(order);
    return true;
  }

  public boolean deleteOrders(List<Order> orders) {
    for (Order sel : orders) {
      deleteOrder(sel);
    }
    return true;
  }

  public Order generateCode(Order order) {
    if(order == null) return null;
    order.setCode("order-" + DateUtil.asCompactDateTimeId(new Date()));
    return order;
  }

}
