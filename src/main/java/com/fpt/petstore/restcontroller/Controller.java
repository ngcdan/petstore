/**
 * 
 */
package com.fpt.petstore.restcontroller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.fpt.petstore.entities.Food;
import com.fpt.petstore.entities.Order;
import com.fpt.petstore.entities.Product;
import com.fpt.petstore.entities.Staff;
import com.fpt.petstore.entities.User;
import com.fpt.petstore.services.PetStoreService;

/**
 * @author linuss
 */

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/rest/v1.0.0")
public class Controller {
  
  @Autowired
  PetStoreService service;
  
  // User 
  @GetMapping("user/{code}")
  public @ResponseBody User getUserByCode(@PathVariable("code") String code) {
    return service.getUserByCode(code);
  }
  
  @GetMapping("users")
  public @ResponseBody List<User> findAllUsers() {
    return service.findAllUsers();
  }
  
  @PutMapping("user")
  public @ResponseBody User saveUser(User user) {
    return service.saveUser(user);
  }
  
  // Staff
  @GetMapping("staff/{code}")
  public @ResponseBody Staff getStaffByCode(@PathVariable("username") String username) {
    return service.getStaffByUsername(username);
  }
  
  @GetMapping("staffs")
  public @ResponseBody List<Staff> findAllStaffs() {
    return service.findAllStaffs();
  }
  
  @PutMapping("staff")
  public @ResponseBody Staff saveStaff(Staff staff) {
    return service.saveStaff(staff);
  }
  
  // Product
  @GetMapping("product/{code}")
  public @ResponseBody Product getProductByCode(@PathVariable("code") String code) {
    return service.getProductByCode(code);
  }
  
  @GetMapping("products")
  public @ResponseBody List<Product> findAllProducts() {
    return service.findAllProducts();
  }
  
  @PutMapping("product")
  public @ResponseBody Product saveProduct(Product product) {
    return service.saveProduct(product);
  }

  // Food
  @GetMapping("food/{code}")
  public @ResponseBody Food getFoodByCode(@PathVariable("code") String code) {
    return service.getFoodByCode(code);
  }
  
  @GetMapping("foods")
  public @ResponseBody List<Food> findAllFoods() {
    return service.findAllFoods();
  }
  
  @PutMapping("food")
  public @ResponseBody Food saveFood(Food food) {
    return service.saveFood(food);
  }
  
  // Food
  @GetMapping("order/code}")
  public @ResponseBody Order getOrderByCode(@PathVariable("code") String code) {
    return service.getOrderByCode(code);
  }
  
  @GetMapping("orders")
  public @ResponseBody List<Order> findAllOrders() {
    return service.findAllOrders();
  }
  
  @PutMapping("order")
  public @ResponseBody Order saveOrder(Order order) {
    return service.saveOrder(order);
  }

}
