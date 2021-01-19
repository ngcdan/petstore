/**
 * 
 */
package com.fpt.petstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fpt.petstore.entities.Products;

/**
 * @author linuss
 */
public interface ProductsRepository extends JpaRepository<Products, Long>{
}
