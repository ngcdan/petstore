package com.fpt.petstore;

import com.fpt.petstore.data.*;
import com.fpt.petstore.entities.*;
import com.fpt.petstore.services.PetStoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
public class PetStoreApplication implements CommandLineRunner {
  
  PetStoreData _DATA_ORDER = new PetStoreData();
  ProductData _DATA_PRODUCT = new ProductData();
  EmployeeData _DATA_EMPLOYEE = new EmployeeData();
  CustomerData _DATA_CUSTOMER = new CustomerData();
  FoodData _DATA_FOOD = new FoodData();
  
  public static void main(String[] args) {
    SpringApplication.run(PetStoreApplication.class, args);
  }
  
  @Autowired
  PetStoreService service;
  
  @Autowired
  PasswordEncoder passwordEncoder;
  
  @Override
  public void run(String... args) throws Exception {
    
    createCustomerData(_DATA_ORDER.ALL_CUSTOMERS);
    createEmployeeData(_DATA_ORDER.ALL_EMPLOYEES);
    createFoodData(_DATA_FOOD.ALL_FOODS);
    createProductData(_DATA_PRODUCT.ALL_PRODUCTS);
    createOrderData(_DATA_ORDER.ALL_ORDERS);
  }
  
  void createCustomerData(Customer[] customers) {
    for (Customer customer : customers) {
      service.saveCustomer(customer);
    }
  }
  
  void createEmployeeData(Employee[] employees) {
    for (Employee employee : employees) {
      service.saveEmployee(employee);
    }
  }
  
  void createFoodData(Food[] foods) {
    for (Food food : foods) {
      service.saveFood(food);
    }
  }
  
  void createProductData(Product[] products) {
    for (Product product : products) {
      service.saveProduct(product);
    }
  }
  
  void createOrderData(Order[] orders) {
    for (Order order : orders) {
      service.saveOrder(order);
    }
  }
}
