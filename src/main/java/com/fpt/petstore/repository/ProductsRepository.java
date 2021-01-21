/**
 * 
 */
package com.fpt.petstore.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.fpt.petstore.entities.Product;

/**
 * @author linuss
 */

@Repository
public interface ProductsRepository extends JpaRepository<Product, Long>{
  
  @Query(
      "SELECT p FROM Product p WHERE p.code = :code")
  public Product getByCode(@Param("code") String code);
  
  @Query(
      "SELECT p FROM Product p WHERE p.type = :type")
  public List<Product> findByType(@Param("type") String type);
}
