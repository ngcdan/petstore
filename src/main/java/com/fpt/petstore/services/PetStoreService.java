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
import com.fpt.petstore.entities.Employee;
import com.fpt.petstore.entities.Partner;

/**
 * @author linuss
 */

@Service
public class PetStoreService {

  @Autowired
  PartnerLogic partnerLogic;

  @Autowired
  EmployeeLogic employeeLogic;

  @Autowired
  OrderLogic orderLogic;

  @Autowired
  ProductLogic productLogic;

  @Autowired 
  FoodLogic foodLogic;

  // Partner
  @Transactional
  public Partner savePartner(Partner partner) {
    return partnerLogic.savePartner(partner);
  }

  @Transactional(readOnly = true)
  public Partner getPartnerByCode(String code) {
    return partnerLogic.getPartnerByCode(code);
  }
  
  @Transactional(readOnly = true)
  public List<Partner> findAllPartners() {
    return partnerLogic.findAllPartners();
  }
  
  @Transactional
  public boolean deletePartners(List<Partner> partners) {
    return partnerLogic.deletePartners(partners);
  }
  
  @Transactional
  public boolean deletePartner(Partner partner) {
    return partnerLogic.deletePartner(partner);
  }

  // Employee
  @Transactional
  public Employee saveEmployee(Employee employee) {
    return employeeLogic.saveEmployee(employee);
  }
  
  @Transactional(readOnly = true)
  public List<Employee> findAllEmployees() {
    return employeeLogic.findAllEmployees();
  }
  
  @Transactional(readOnly = true) 
  public Employee getEmployeeByUsername(String username) {
    return employeeLogic.getEmployeeByUsername(username);
  }
  
  @Transactional
  public boolean deleteEmployees(List<Employee> employees) {
    return employeeLogic.deleteEmployees(employees);
  }
  
  @Transactional
  public boolean deleteEmployee(Employee employee) {
    return employeeLogic.deleteEmployee(employee);
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
