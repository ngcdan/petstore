/**
 * 
 */
package com.fpt.petstore.http.rest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.fpt.petstore.entities.Food;
import com.fpt.petstore.entities.Food.FoodType;
import com.fpt.petstore.entities.Order;
import com.fpt.petstore.entities.Product;
import com.fpt.petstore.entities.Product.ProductType;
import com.fpt.petstore.entities.Employee;
import com.fpt.petstore.entities.Partner;
import com.fpt.petstore.services.PetStoreService;

/**
 * @author linuss
 */

@RestController
@RequestMapping("/rest/v1.0.0")
public class Controller {
  
  @Autowired
  PetStoreService service;
  
  // User 
  @GetMapping("partner/{code}")
  public @ResponseBody Partner getPartnerByCode(@PathVariable("code") String code) {
    return service.getPartnerByCode(code);
  }
  
  @GetMapping("partners")
  public @ResponseBody List<Partner> findAllPartners() {
    return service.findAllPartners();
  }
  
  @PutMapping("partner")
  public @ResponseBody Partner savePartner(@RequestBody Partner partner) {
    return service.savePartner(partner);
  }
  
  @DeleteMapping("partner")
  public @ResponseBody boolean deletePartner(Partner partner) {
    return service.deletePartner(partner);
  }
  
  @DeleteMapping("partners")
  public @ResponseBody boolean deletePartners(List<Partner> partners) {
    return service.deletePartners(partners);
  }
  
  // Employee
  @GetMapping("employee/{code}")
  public @ResponseBody Employee getStaffByCode(@PathVariable("username") String username) {
    return service.getEmployeeByUsername(username);
  }
  
  @GetMapping("employees")
  public @ResponseBody List<Employee> findAllStaffs() {
    return service.findAllEmployees();
  }
  
  @PutMapping("employee")
  public @ResponseBody Employee saveStaff(@RequestBody Employee employee) {
    return service.saveEmployee(employee);
  }
  
  @DeleteMapping("employee")
  public @ResponseBody boolean deleteStaff(Employee employee) {
    return service.deleteEmployee(employee);
  }
  
  @DeleteMapping("employees")
  public @ResponseBody boolean deleteStaffs(List<Employee> employees) {
    return service.deleteEmployees(employees);
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
  public @ResponseBody Product saveProduct(@RequestBody Product product) {
    return service.saveProduct(product);
  }
  
  @DeleteMapping("product")
  public @ResponseBody boolean deleteProduct(Product product) {
    return service.deleteProduct(product);
  }
  
  @DeleteMapping("products")
  public @ResponseBody boolean deleteProducts(List<Product> products) {
    return service.deleteProducts(products);
  }
  
  @GetMapping("products/{productType}")
  public @ResponseBody List<Product> findProductsByProductType(@PathVariable("productType") ProductType productType) {
      return service.findProductsByType(productType);
  }

  // Food
  @GetMapping("food/{code}")
  public @ResponseBody Food getFoodByCode(@PathVariable("code") String code) {
    return service.getFoodByCode(code);
  }
  
  @GetMapping("foods/{foodType}")
  public @ResponseBody List<Food> findFoodsByFoodType(@PathVariable("foodType") FoodType foodType) {
      return service.findFoodsByFoodType(foodType);
  }
  
  @GetMapping("foods")
  public @ResponseBody List<Food> findAllFoods() {
    return service.findAllFoods();
  }
  
  @PutMapping("food")
  public @ResponseBody Food saveFood(@RequestBody Food food) {
    return service.saveFood(food);
  }
  
  @DeleteMapping("food")
  public @ResponseBody boolean deleteFood(Food food) {
    return service.deleteFood(food);
  }
  
  @DeleteMapping("foods")
  public @ResponseBody boolean deleteFoods(List<Food> foods) {
    return service.deleteFoods(foods);
  }
  
  // Order
  @GetMapping("order/code}")
  public @ResponseBody Order getOrderByCode(@PathVariable("code") String code) {
    return service.getOrderByCode(code);
  }
  
  @GetMapping("orders")
  public @ResponseBody List<Order> findAllOrders() {
    return service.findAllOrders();
  }
  
  @PutMapping("order")
  public @ResponseBody Order saveOrder(@RequestBody Order order) {
    return service.saveOrder(order);
  }
  
  @DeleteMapping("order")
  public @ResponseBody boolean deleteOrder(Order order) {
    return service.deleteOrder(order);
  }
  
  @DeleteMapping("orders")
  public @ResponseBody boolean deleteOrders(List<Order> orders) {
    return service.deleteOrders(orders);
  }
}
