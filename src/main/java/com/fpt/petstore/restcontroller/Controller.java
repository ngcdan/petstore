/**
 * 
 */
package com.fpt.petstore.restcontroller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.fpt.petstore.entities.User;
import com.fpt.petstore.services.PetStoreService;

/**
 * @author linuss
 */

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/rest/v1.0.0")
public class Controller {
  
  @Autowired
  PetStoreService service;
  
  // User 
  @GetMapping("user/{code}")
  public @ResponseBody User getUserByCode(@PathVariable("code") String code) {
    return service.getUserByCode(code);
  }
  
  @GetMapping("users")
  public @ResponseBody List<User> findAllUsers() {
    return service.findAllUsers();
  }
  
  @PutMapping("user")
  public @ResponseBody User saveUser(User user) {
    return service.saveUser(user);
  }

}
