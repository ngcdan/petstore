/**
 * 
 */
package com.fpt.petstore.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.fpt.petstore.entities.User;

/**
 * @author linuss
 */

@Repository
public interface UserRepository extends CrudRepository<User, Long> {

  User findByUsername(String username);
}
