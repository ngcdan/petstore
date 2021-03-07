/**
 * 
 */
package com.fpt.petstore.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.fpt.petstore.entities.Product;
import com.fpt.petstore.entities.Product.ProductType;

/**
 * @author linuss
 */

@Repository
public interface ProductsRepository extends PagingAndSortingRepository<Product, Long> {

  @Query(
          "SELECT p FROM Product p WHERE p.code = :code")
  public Product getByCode(@Param("code") String code);

  public List<Product> findByType(ProductType productType);

  @Query(value = "select * from product", nativeQuery = true)
  Page<Product> listProductbyPage(Pageable pageable);
  @Query(value = "select count(*) from Product", nativeQuery = true)
  Integer countProduct();
  Product findById(long id);
}
