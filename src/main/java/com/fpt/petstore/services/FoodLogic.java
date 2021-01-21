/**
 * 
 */
package com.fpt.petstore.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.fpt.petstore.entities.Food;
import com.fpt.petstore.repository.FoodRepository;

/**
 * @author linuss
 */

@Component
public class FoodLogic {
 
  @Autowired
  FoodRepository repo;

  public Food saveFood(Food food) {
    return repo.save(food);
  }
  
  public Food getFoodByCode(String code) {
    return repo.getByCode(code);
  }
  
  public List<Food> findFoodByType(String foodType) {
    return repo.findByType(foodType);
  }
  
  public List<Food> findAll() {
    return repo.findAll();
  }
}
