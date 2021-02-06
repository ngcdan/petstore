/**
 * 
 */
package com.fpt.petstore.http.rest.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.fpt.petstore.entities.Customer;
import com.fpt.petstore.entities.Employee;
import com.fpt.petstore.entities.Food;
import com.fpt.petstore.entities.Food.FoodType;
import com.fpt.petstore.entities.Order;
import com.fpt.petstore.entities.Product;
import com.fpt.petstore.entities.Product.ProductType;
import com.fpt.petstore.repository.CustomerRepository;
import com.fpt.petstore.services.PetStoreService;

/**
 * @author linuss
 */

@RestController
@RequestMapping("/rest/v1.0.0")
public class Controller {

  @Autowired
  PetStoreService service;
  
  @Autowired
  CustomerRepository repo;

  // Customer
  @GetMapping("customer/{code}")
  public @ResponseBody Customer getCustomerByCode(@PathVariable("code") String code) {
    return service.getCustomerByCode(code);
  }

//  @DeleteMapping("customer/{id}")
//  public @ResponseBody boolean deleteCustomerById(@PathVariable("id") Long id) {
//    return service.deleteCustomer(id);
//  }

  @GetMapping("customers")
  public @ResponseBody List<Customer> findAllCustomers() {
    return service.findAllCustomers();
  }

  @PutMapping("customer")
  public @ResponseBody Customer saveCustomer(@RequestBody Customer customer) {
    return service.saveCustomer(customer);
  }

  @DeleteMapping("customer/{code}")
  public ResponseEntity<Map<String, Boolean>> deleteCustomer(@PathVariable String code) {
    Customer customer = service.getCustomerByCode(code);
    repo.delete(customer);
    Map<String, Boolean> response = new HashMap<>();
    response.put("deleted", Boolean.TRUE);
    return ResponseEntity.ok(response);
  }

  @DeleteMapping("customers")
  public @ResponseBody boolean deleteCustomers(@RequestBody List<Customer> customers) {
    return service.deleteCustomers(customers);
  }

  // Employee
  @GetMapping("employee/{username}")
  public @ResponseBody Employee getEmployeeByUsername(@PathVariable("username") String username) {
    return service.getEmployeeByUsername(username);
  }

  @GetMapping("employees")
  public @ResponseBody List<Employee> findAllEmployees() {
    return service.findAllEmployees();
  }

  @PutMapping("employee")
  public @ResponseBody Employee saveEmployee(@Valid @RequestBody Employee employee) {
    return service.saveEmployee(employee);
  }

  @DeleteMapping("employee")
  public @ResponseBody boolean deleteEmployee(Employee employee) {
    return service.deleteEmployee(employee);
  }

  @DeleteMapping("employees")
  public @ResponseBody boolean deleteEmployees(List<Employee> employees) {
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
  @GetMapping("order/{code}")
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
