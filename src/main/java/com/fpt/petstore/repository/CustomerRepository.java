/**
 * 
 */
package com.fpt.petstore.repository;

import com.fpt.petstore.entities.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

/**
 * @author linuss
 */

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {

  @Query(
      "SELECT c FROM Customer c WHERE c.code = :code")
  public Customer getByCode(@Param("code") String code);

  @Modifying
  @Query("delete from Customer c where c.code=:code")
  void deleteCustomer(@Param("code") String code);

  @Query(value = "Select * from Customer where email like ?1 and password like ?2",nativeQuery = true)
  Customer customerLogin(String email,String password);
}