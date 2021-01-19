/**
 * 
 */
package com.fpt.petstore.logic;

import java.util.List;

import org.springframework.stereotype.Component;

import com.fpt.petstore.entities.User;
import com.fpt.petstore.repository.UserRepository;

/**
 * @author linuss
 */
@Component
public class UserLogic {

  UserRepository repo;

  public User saveUser(User user) {
    return repo.save(user);
  }

  public User getUserbyUsername(String username) {
    return repo.getByUsername(username);
  }

  public List<User> findByLastName(String name) {
    return repo.findByName(name);
  }

}
