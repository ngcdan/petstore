/**
 * 
 */
package com.fpt.petstore.repository;

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

  @Query(
      "SELECT u FROM User u WHERE u.code = :code")
  public User getByCode(@Param("code") String code);
}