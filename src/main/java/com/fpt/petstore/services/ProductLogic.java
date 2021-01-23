/**
 * 
 */
package com.fpt.petstore.services;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.fpt.petstore.entities.Product;
import com.fpt.petstore.repository.ProductsRepository;
import com.fpt.petstore.util.DateUtil;

/**
 * @author linuss
 */

@Component
public class ProductLogic {
  
  @Autowired
  private ProductsRepository repo;
  
  public Product saveProduct(Product product) {
    Product _product = generateCode(product);
    return repo.save(_product);
  }
  
  public Product getProductByCode(String code) {
    return repo.getByCode(code);
  }
  
  public List<Product> findProductByType(String type) {
    return repo.findByType(type);
  }
  
  public List<Product> findAllProducts() {
    return repo.findAll();
  }
  
  public boolean deleteProduct(Product product) {
    repo.delete(product);
    return true;
  }
  
  public boolean deleteProducts(List<Product> products) {
    for( Product sel : products) {
      deleteProduct(sel);
    }
    return true;
  }
  
  public Product generateCode(Product product) {
    if(product == null) return null;
    product.setCode("product-" + product.getName() + DateUtil.asCompactDateTimeId(new Date()));
    return product;
  }

}
