package com.fpt.petstore.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fpt.petstore.entities.Customer;
import com.fpt.petstore.entities.Employee;
import com.fpt.petstore.entities.Food;
import com.fpt.petstore.entities.Food.FoodType;
import com.fpt.petstore.entities.Order;
import com.fpt.petstore.entities.Product;
import com.fpt.petstore.entities.Product.ProductType;

/**
 * @author linuss
 */

@Service
public class PetStoreService {

  @Autowired
  CustomerLogic customerLogic;

  @Autowired
  EmployeeLogic employeeLogic;

  @Autowired
  OrderLogic orderLogic;

  @Autowired
  ProductLogic productLogic;

  @Autowired 
  FoodLogic foodLogic;

  // Customer
  @Transactional
  public Customer saveCustomer(Customer customer) {
    return customerLogic.saveCustomer(customer);
  }

  @Transactional(readOnly = true)
  public Customer getCustomerByCode(String code) {
    return customerLogic.getCustomerByCode(code);
  }

  @Transactional(readOnly = true)
  public List<Customer> findAllCustomers() {
    return customerLogic.findAllCustomers();
  }

  @Transactional
  public Customer customerLogin(String email,String password){
    return customerLogic.customerLogin(email,password);
  }

  @Transactional
  public boolean deleteCustomers(List<Customer> customers) {
    return customerLogic.deleteCustomers(customers);
  }

  @Transactional
  public boolean deleteCustomer(Long id) {
    return customerLogic.deleteCustomer(id);
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
  public boolean deleteEmployeeById(Long id) {
    return employeeLogic.deleteEmployeeById(id);
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
  public boolean deleteOrderById(Long id) {
    return orderLogic.deleteOrderById(id);
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
  public boolean deleteProductById(Long id) {
    return productLogic.deleteProductById(id);
  }

  @Transactional(readOnly = true)
  public Integer countProduct(){
    return productLogic.countProduct();
  }
  @Transactional(readOnly = true)
  public List<Integer> calculateTotalPage(int totalProduct,int productPerpage){
    return productLogic.calculateTotalPage(totalProduct,productPerpage);
  }
  @Transactional
  public Page<Product> listProductbyPage(Pageable page){
    return productLogic.listProductperPage(page);
  }

  @Transactional
  public Product findbyProductId(long id){
    return productLogic.findbyProductId(id);
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
  public boolean deleteFoodById(Long id) {
    return foodLogic.deleteFoodById(id);
  }

  @Transactional(readOnly = true)
  public Integer countFood(){
    return foodLogic.countFood();
  }
  @Transactional
  public Page<Food> listFoodPerPage(Pageable page) {
    return foodLogic.listFoodbyPage(page);
  }
  @Transactional
  public Food findbyFoodId(long id){
    return foodLogic.findbyId(id);
  }
}