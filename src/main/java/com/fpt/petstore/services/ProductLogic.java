/**
 * 
 */
package com.fpt.petstore.services;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;

import com.fpt.petstore.entities.Product;
import com.fpt.petstore.entities.Product.ProductType;
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
    if(product.getId() == null) {
      product = generateCode(product);
    }
    return repo.save(product);
  }

  public Product getProductByCode(String code) {
    return repo.getByCode(code);
  }

  public List<Product> findProductByType(ProductType productType) {
    return repo.findByType(productType);
  }

  public List<Product> findAllProducts() {
    return (List<Product>) repo.findAll();
  }

  public boolean deleteProductById(Long id) {
    repo.deleteById(id);
    return true;
  }

  public boolean deleteProducts(List<Product> products) {
    for( Product sel : products) {
      deleteProductById(sel.getId());
    }
    return true;
  }

  public Product generateCode(Product product) {
    if(product == null) return null;
    product.setCode("product-" + product.getName() + DateUtil.asCompactDateTimeId(new Date()));
    return product;
  }
  
  public Integer countProduct(){
    return repo.countProduct();
  }
  
  public List<Integer> calculateTotalPage(int totalProduct, int productPerPage) {
    List<Integer> listPage = new ArrayList<>();
    int totalPage = (totalProduct % productPerPage == 0) ? totalProduct / productPerPage : (totalProduct / productPerPage) + 1;
    for (int i = 0; i < totalPage; i++) {
      listPage.add(i);
    }
    return listPage;
  }
  
  public Page<Product> listProductperPage(Pageable pageable){
    return repo.listProductbyPage(pageable);
  }


  public Product findbyProductId(long id){
    return repo.findById(id);
  }


  public List<Product> findProductbyName(String name){
    return repo.findProductByNamee(name);
  }
  public List<Product> findProductbyPrice(long price){
    return repo.findProductbyPrice(price);
  }
}
