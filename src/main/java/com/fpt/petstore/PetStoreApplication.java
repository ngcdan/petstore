package com.fpt.petstore;

import java.util.Arrays;
import java.util.List;

import com.fpt.petstore.data.ProductData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.fpt.petstore.data.PetStoreData;
import com.fpt.petstore.entities.Customer;
import com.fpt.petstore.entities.Employee;
import com.fpt.petstore.entities.Food;
import com.fpt.petstore.entities.Order;
import com.fpt.petstore.entities.Product;
import com.fpt.petstore.services.PetStoreService;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
public class PetStoreApplication implements CommandLineRunner {

  PetStoreData data = new PetStoreData();
  ProductData _DATA_PRODUCT = new ProductData();

  public static void main(String[] args) {
    SpringApplication.run(PetStoreApplication.class, args);
  }

  @Autowired
  PetStoreService service;

  @Autowired
  PasswordEncoder passwordEncoder;

  @Override
  public void run(String... args) throws Exception {

    createCustomerData(data.ALL_CUSTOMERS);
    createEmployeeData(data.ALL_EMPLOYEES);
    createFoodData(PetStoreData.ALL_FOODS);
    createProductData(_DATA_PRODUCT.ALL_PRODUCTS);
    createOrderData(data.ALL_ORDERS);
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
