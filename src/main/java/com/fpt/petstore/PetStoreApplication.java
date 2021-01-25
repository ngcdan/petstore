package com.fpt.petstore;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

import com.fpt.petstore.data.PetStoreData;
import com.fpt.petstore.entities.Food;
import com.fpt.petstore.entities.Order;
import com.fpt.petstore.entities.Product;
import com.fpt.petstore.entities.Employee;
import com.fpt.petstore.entities.Partner;
import com.fpt.petstore.services.PetStoreService;

@SpringBootApplication
@EntityScan
public class PetStoreApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(PetStoreApplication.class, args);
	}
	
	@Autowired
	PetStoreService service;

  @Override
  public void run(String... args) throws Exception {
    createUserData(PetStoreData.ALL_USERS);
    createStaffData(PetStoreData.ALL_STAFF);
    createFoodData(PetStoreData.ALL_FOODS);
    createProductData(PetStoreData.ALL_PRODUCTS);
    createOrderData(PetStoreData.ALL_ORDERS);
  }
  
  void createUserData(Partner[] users) {
    for(Partner partner: users) {
      service.savePartner(partner);
    }
  }
  
  void createStaffData(Employee[] staffs) {
    for(Employee employee: staffs) {
      service.saveEmployee(employee);
    }
  }
  
  void createFoodData(Food[] foods) {
    for(Food food: foods) {
      service.saveFood(food);
    }
  }
  
  void createProductData(Product[] products) {
    for(Product product: products) {
      service.saveProduct(product);
    }
  }
  
  void createOrderData(Order[] orders) {
    for(Order order: orders) {
      service.saveOrder(order);
    }
  }
}
