/**
 * 
 */
package com.fpt.petstore.services;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.fpt.petstore.entities.Food;
import com.fpt.petstore.entities.Food.FoodType;
import com.fpt.petstore.repository.FoodRepository;
import com.fpt.petstore.util.DateUtil;

/**
 * @author linuss
 */

@Component
public class FoodLogic {

  @Autowired
  FoodRepository repo;

  public Food saveFood(Food food) {
    if(food.getId() == null) {
      food = generateCode(food);
    }
    return repo.save(food);
  }

  public Food getFoodByCode(String code) {
    return repo.getByCode(code);
  }

  public List<Food> findFoodByType(FoodType foodType) {
    return repo.findByFoodType(foodType);
  }

  public List<Food> findAllFoods() {
    return repo.findAll();
  }

  public boolean deleteFood(Food food ) {
    repo.delete(food);
    return true;
  }

  public boolean deleteFoods(List<Food> foods) {
    for (Food sel : foods) {
      deleteFood(sel);
    }
    return true;
  }

  public Food generateCode(Food food) {
    if (food == null) return null;
    food.setCode("food-" + food.getName() + DateUtil.asCompactDateTimeId(new Date()));
    return food;
  }
}
