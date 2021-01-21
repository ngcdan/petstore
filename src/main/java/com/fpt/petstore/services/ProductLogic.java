/**
 * 
 */
package com.fpt.petstore.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.fpt.petstore.entities.Product;
import com.fpt.petstore.repository.ProductsRepository;

/**
 * @author linuss
 */

@Component
public class ProductLogic {
  
  @Autowired
  private ProductsRepository repo;
  
  public Product saveProduct(Product product) {
    return repo.save(product);
  }

}
