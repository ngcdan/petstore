/**
 * 
 */
package com.fpt.petstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.fpt.petstore.entities.Food;

/**
 * @author linuss
 */

@Repository
public interface FoodRepository extends JpaRepository<Food, Long> {}
