/**
 * 
 */
package com.fpt.petstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.fpt.petstore.entities.Staff;

/**
 * @author linuss
 */

@Repository
public interface StaffRepository extends JpaRepository<Staff, Long> {
  
  @Query(
      "SELECT s FROM Staff s WHERE s.username = :username")
  public Staff getByUsername(@Param("username") String username);
  
}
