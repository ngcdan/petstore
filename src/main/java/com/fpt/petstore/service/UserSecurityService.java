/**
 * 
 */
package com.fpt.petstore.service;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import com.fpt.petstore.entities.User;
import com.fpt.petstore.repository.UserRepository;

/**
 * @author linuss
 */

// lay thong tin UserDetails kiem tra 
@Component
public class UserSecurityService implements UserDetailsService {

  private UserRepository userRepository;

  public UserSecurityService(UserRepository userRepository) {
      this.userRepository = userRepository;
  }

  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    // kiem tra xem user co ton tai trong DB ko? 
      User user = userRepository.findByUsername(username);

      if(user == null){
          throw new UsernameNotFoundException("Username not found");
      }
      return user;
  }
}
