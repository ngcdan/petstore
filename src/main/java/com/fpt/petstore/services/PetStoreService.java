/**
 * 
 */
package com.fpt.petstore.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fpt.petstore.entities.Food;
import com.fpt.petstore.entities.Order;
import com.fpt.petstore.entities.Product;
import com.fpt.petstore.entities.Staff;
import com.fpt.petstore.entities.User;

/**
 * @author linuss
 */

@Service
public class PetStoreService {

  @Autowired
  UserLogic userLogic;
  
  @Autowired
  StaffLogic staffLogic;
  
  @Autowired
  OrderLogic orderLogic;
  
  @Autowired
  ProductLogic productLogic;
  
  @Autowired 
  FoodLogic foodLogic;

  // User
  @Transactional
  public User saveUser(User user) {
    return userLogic.saveUser(user);
  }

  @Transactional(readOnly = true)
  public List<User> findUsersByName(String username) {
    return userLogic.findByName(username);
  }
  
  
  // Staff
  @Transactional
  public Staff saveStaff(Staff staff) {
    return staffLogic.saveStaff(staff);
  }
  
  // Order
  @Transactional
  public Order saveOrder(Order order) {
    return orderLogic.saveOrder(order);
  }
  
  // Product 
  @Transactional
  public Product saveProduct(Product product) {
    return productLogic.saveProduct(product);
  }
  
  // Food
  @Transactional
  public Food saveFood(Food food) {
    return foodLogic.saveFood(food);
  }
}
