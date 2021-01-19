/**
 * 
 */
package com.fpt.petstore.services;

import org.springframework.stereotype.Component;

import com.fpt.petstore.entities.Products;
import com.fpt.petstore.repository.ProductsRepository;

/**
 * @author linuss
 */
@Component
public class ProductsLogic {
  
  private ProductsRepository repo;
  
  public Products saveProduct(Products product) {
    return repo.save(product);
  }

}
