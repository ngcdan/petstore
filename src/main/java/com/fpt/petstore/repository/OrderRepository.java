/**
 * 
 */
package com.fpt.petstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.fpt.petstore.entities.Order;

/**
 * @author linuss
 */

@Repository
public interface OrderRepository extends JpaRepository<Order, Long>{
  
  @Query(
      "SELECT o FROM Order o WHERE o.code = :code")
  public Order getByCode(@Param("code") String code);
  
}
