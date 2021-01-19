/**
 * 
 */
package com.fpt.petstore.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fpt.petstore.entities.User;

/**
 * @author linuss
 */

@Service
public class PetStoreService {

  @Autowired
  UserLogic userLogic;

  @Transactional(readOnly = true)
  public User getUserByUsername(String username) {
    return userLogic.getUserbyUsername(username);
  }

  @Transactional
  public User saveUser(User user) {
    return userLogic.saveUser(user);
  }

  @Transactional(readOnly = true)
  public List<User> findUsersByName(String username) {
    return userLogic.findByName(username);
  }

}
