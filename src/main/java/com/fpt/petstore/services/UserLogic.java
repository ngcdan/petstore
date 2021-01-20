/**
 * 
 */
package com.fpt.petstore.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.fpt.petstore.entities.User;
import com.fpt.petstore.repository.UserRepository;

/**
 * @author linuss
 */
@Component
public class UserLogic {

  @Autowired
  UserRepository repo;

  public User saveUser(User user) {
    return repo.save(user);
  }

  public List<User> findByName(String name) {
    return repo.findByName(name);
  }

}
