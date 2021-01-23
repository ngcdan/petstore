/**
 * 
 */
package com.fpt.petstore.services;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.fpt.petstore.entities.User;
import com.fpt.petstore.repository.UserRepository;
import com.fpt.petstore.util.DateUtil;

/**
 * @author linuss
 */
@Component
public class UserLogic {

  @Autowired
  UserRepository repo;

  public User saveUser(User user) {
    User _user = generateCode(user);
    return repo.save(_user);
  }

  public User getUserByCode(String code) {
    return repo.getByCode(code);
  }
  
  public List<User> findAllUser() {
    return repo.findAll();
  }
  
  public boolean deleteUser(User user) {
    repo.delete(user);
    return true;
  }
  
  public boolean deleteUsers(List<User> users) {
    for(User sel : users) {
      deleteUser(sel);
    }
    return true;
  }
  
  public User generateCode(User user) {
    user.setCode("user-" + DateUtil.asCompactDateTimeId(new Date()));
    return user;
  }

}
