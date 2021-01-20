package com.fpt.petstore;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.fpt.petstore.data.PetStoreData;
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
    createUserDate(PetStoreData.ALL_USERS);
  }
  
  void createUserDate(User[] users) {
    for(User user: users) {
      service.saveUser(user);
    }
  }
}
