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
import com.fpt.petstore.entities.Product.ProductType;

/**
 * @author linuss
 */

@Repository
public interface ProductsRepository extends JpaRepository<Product, Long>{
  
  @Query(
      "SELECT p FROM Product p WHERE p.code = :code")
  public Product getByCode(@Param("code") String code);
  
  public List<Product> findByType(ProductType productType);
  @Query(value = "Select * from Product limit 3",nativeQuery = true)
  List<Product> listProductLimit3();
}
