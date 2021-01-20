package com.fpt.petstore;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.fpt.petstore.data.PetStoreData;
import com.fpt.petstore.entities.Staff;
import com.fpt.petstore.entities.User;
import com.fpt.petstore.services.PetStoreService;

@SpringBootApplication
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
  }
  
  void createUserData(User[] users) {
    for(User user: users) {
      service.saveUser(user);
    }
  }
  
  void createStaffData(Staff[] staffs) {
    for(Staff staff: staffs) {
      service.saveStaff(staff);
    }
  }
}
