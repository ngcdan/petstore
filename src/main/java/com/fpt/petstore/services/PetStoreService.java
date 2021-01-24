/**
 * 
 */
package com.fpt.petstore.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fpt.petstore.entities.Food;
import com.fpt.petstore.entities.Food.FoodType;
import com.fpt.petstore.entities.Order;
import com.fpt.petstore.entities.Product;
import com.fpt.petstore.entities.Product.ProductType;
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
  public User getUserByCode(String code) {
    return userLogic.getUserByCode(code);
  }
  
  @Transactional(readOnly = true)
  public List<User> findAllUsers() {
    return userLogic.findAllUser();
  }
  
  @Transactional
  public boolean deleteUsers(List<User> users) {
    return userLogic.deleteUsers(users);
  }
  
  @Transactional
  public boolean deleteUser(User user) {
    return userLogic.deleteUser(user);
  }

  // Staff
  @Transactional
  public Staff saveStaff(Staff staff) {
    return staffLogic.saveStaff(staff);
  }
  
  @Transactional(readOnly = true)
  public List<Staff> findAllStaffs() {
    return staffLogic.findAllStaff();
  }
  
  @Transactional(readOnly = true) 
  public Staff getStaffByUsername(String username) {
    return staffLogic.getStaffByUsername(username);
  }
  
  @Transactional
  public boolean deleteStaffs(List<Staff> staffs) {
    return staffLogic.deleteStaffs(staffs);
  }
  
  @Transactional
  public boolean deleteStaff(Staff staff) {
    return staffLogic.deleteStaff(staff);
  }

  // Order
  @Transactional
  public Order saveOrder(Order order) {
    return orderLogic.saveOrder(order);
  }
  
  @Transactional(readOnly = true) 
  public Order getOrderByCode(String code) {
    return orderLogic.getOrderByCode(code);
  }
  
  @Transactional(readOnly = true)
  public List<Order> findAllOrders() {
    return orderLogic.findAllOrders();
  }
  
  @Transactional
  public boolean deleteOrders(List<Order> orders) {
    return orderLogic.deleteOrders(orders);
  }
  
  @Transactional
  public boolean deleteOrder(Order order) {
    return orderLogic.deleteOrder(order);
  }

  // Product 
  @Transactional
  public Product saveProduct(Product product) {
    return productLogic.saveProduct(product);
  }
  
  @Transactional(readOnly = true) 
  public List<Product> findAllProducts() {
    return productLogic.findAllProducts();
  }
  
  @Transactional(readOnly = true)
  public List<Product> findProductsByType(ProductType productType) {
    return productLogic.findProductByType(productType);
  }
  
  @Transactional(readOnly = true)
  public Product getProductByCode(String code) {
    return productLogic.getProductByCode(code);
  }
  
  @Transactional
  public boolean deleteProducts(List<Product> products) {
    return productLogic.deleteProducts(products);
  }
  
  @Transactional
  public boolean deleteProduct(Product product) {
    return productLogic.deleteProduct(product);
  }

  // Food
  @Transactional
  public Food saveFood(Food food) {
    return foodLogic.saveFood(food);
  }
  
  @Transactional(readOnly = true) 
  public List<Food> findAllFoods() {
    return foodLogic.findAllFoods();
  }
  
  @Transactional(readOnly = true)
  public List<Food> findFoodsByFoodType(FoodType foodType) {
    return foodLogic.findFoodByType(foodType);
  }
  
  @Transactional(readOnly = true)
  public Food getFoodByCode(String code) {
    return foodLogic.getFoodByCode(code);
  }
  
  @Transactional
  public boolean deleteFoods(List<Food> foods) {
    return foodLogic.deleteFoods(foods);
  }
  
  @Transactional
  public boolean deleteFood(Food food) {
    return foodLogic.deleteFood(food);
  }
}
