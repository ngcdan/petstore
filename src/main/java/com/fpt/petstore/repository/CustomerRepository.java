package com.fpt.petstore.repository;

import com.fpt.petstore.entities.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Date;

/**
 * @author linuss
 */

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {

  @Query( "SELECT c FROM Customer c WHERE c.username = :username")
  Customer getByUsername(@Param("username") String username);

  boolean existsCustomersByUsername(String username);
  Customer findByEmail(String email);
  Customer findByUsername(String username);

  @Query(value = "Select * from Customer where email like ?1 and password like ?2",nativeQuery = true)
  Customer customerLogin(String email,String password);
  @Query(value="Update Customer set fullName = ?2 , phone = ?3 , address = ?4 , avatarUrl = ?5 , birthday = ?6 where id =?1",nativeQuery = true)
  @Modifying
  void updateCustomer(long id,String fullName,String phone,String address,String avatarUrl,Date birthday);
  @Query(value="Update Customer set password =?2 where id =?1",nativeQuery = true)
  @Modifying
  void updatePassword(long id,String password);
  @Query(value = "select * from customer where password = ?2 and id =?1",nativeQuery = true)
  Customer findCustomerByPassword(long id,String password);
}