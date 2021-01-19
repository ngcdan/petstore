/**
 * 
 */
package com.fpt.petstore.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.fpt.petstore.entities.User;

/**
 * @author linuss
 */

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

  public User findByUsername(String username);

  /*
  @Query(
      "SELECT u FROM User u WHERE u.username = :username AND u.phone = :phone")
  public List<User> findByUsernameOrPhone(@Param("username") String username, @Param("phone") String phone);
   */

  @Query(
      "SELECT u FROM User u WHERE u.lastName = :name OR u.firstName = :name")
  public List<User> findByName(@Param("name") String name);
}
