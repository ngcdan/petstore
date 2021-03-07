package com.fpt.petstore;

import java.util.List;

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

  public static void main(String[] args) {
    SpringApplication.run(PetStoreApplication.class, args);
  }

  @Autowired
  PetStoreService service;

  @Autowired
  PasswordEncoder passwordEncoder;

  @Override
  public void run(String... args) throws Exception {

    Customer customer = data.customer_1;
    customer.withPassword(passwordEncoder.encode("pass"));

    service.saveCustomer(data.customer_1);

    createCustomerData(PetStoreData.createDataCustomer());
    createEmployeeData(PetStoreData.ALL_EMPLOYEES);
    createFoodData(PetStoreData.ALL_FOODS);
    createProductData(PetStoreData.ALL_PRODUCTS);
    createOrderData(PetStoreData.createDataOrder());
  }

  void createCustomerData(List<Customer> customers) {
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

  void createOrderData(List<Order> orders) {
    for (Order order : orders) {
      service.saveOrder(order);
    }
  }
}
