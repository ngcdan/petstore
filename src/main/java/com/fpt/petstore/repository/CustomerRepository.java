/**
 * 
 */
package com.fpt.petstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.fpt.petstore.entities.Customer;

/**
 * @author linuss
 */

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {

  @Query(
      "SELECT c FROM Customer c WHERE c.code = :code")
  public Customer getByCode(@Param("code") String code);
}