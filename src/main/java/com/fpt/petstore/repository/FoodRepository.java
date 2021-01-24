/**
 * 
 */
package com.fpt.petstore.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.fpt.petstore.entities.Food;
import com.fpt.petstore.entities.Food.FoodType;

/**
 * @author linuss
 */

@Repository
public interface FoodRepository extends JpaRepository<Food, Long> {
  
  @Query(
      "SELECT f FROM Food f WHERE f.code = :code")
  public Food getByCode(@Param("code") String code);
  
  public List<Food> findByFoodType(FoodType foodType);
  
}
