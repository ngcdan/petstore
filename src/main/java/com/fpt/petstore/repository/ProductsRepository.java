/**
 * 
 */
package com.fpt.petstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.fpt.petstore.entities.Product;

/**
 * @author linuss
 */

@Repository
public interface ProductsRepository extends JpaRepository<Product, Long>{
}
