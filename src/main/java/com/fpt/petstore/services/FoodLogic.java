/**
 *
 */
package com.fpt.petstore.services;

import com.fpt.petstore.core.dao.DAOService;
import com.fpt.petstore.core.dao.query.SimpleFilter;
import com.fpt.petstore.core.dao.query.SqlQueryParams;
import com.fpt.petstore.core.dao.query.SqlQueryTemplate;
import com.fpt.petstore.entities.Food;
import com.fpt.petstore.entities.Food.FoodType;
import com.fpt.petstore.repository.FoodRepository;
import com.fpt.petstore.util.DateUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.List;
import java.util.Map;

import static com.fpt.petstore.core.dao.query.Filter.FilterType.STRING_LIKE;

/**
 * @author linuss
 */

@Component
public class FoodLogic extends DAOService {

  @Autowired
  FoodRepository repo;

  public Food saveFood(Food food) {
    if(food.getId() == null && food.getCode() == null ) {
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
    return (List<Food>) repo.findAll();
  }

  public boolean deleteFoodById(Long id) {
    repo.deleteById(id);
    return true;
  }

  public boolean deleteFoods(List<Food> foods) {
    for (Food sel : foods) {
      deleteFoodById(sel.getId());
    }
    return true;
  }

  public Food generateCode(Food food) {
    if (food == null) return null;
    food.setCode("food-" + food.getName() + DateUtil.asCompactDateTimeId(new Date()));
    return food;
  }

  public Integer countFood(){
    return repo.countFood();
  }

  SqlQueryTemplate createFoodQuery(SqlQueryParams params) {
    SqlQueryTemplate.EntityTable TABLE = new SqlQueryTemplate.EntityTable(Food.class, "m");
    SqlQueryTemplate query = new SqlQueryTemplate("petstore", "food", "Search foods").
      SELECT_FROM(TABLE).
      FILTER(new SimpleFilter("search", STRING_LIKE, "m.code LIKE :search")).
      ORDERBY(new String[] { "code" }, "code", "DESC");
    if (params != null) {
      query.mergeValue(params);
    }
    return query;
  }

  public List<Map<String, Object>> searchMasterInvoices(SqlQueryParams params) {
    SqlQueryTemplate query = createFoodQuery(params);
    return query(query).getMapRecords();
  }

  public Page<Food> listFoodbyPage(Pageable pageable) {
    return repo.listFoodbyPage(pageable);
  }
  public Food findbyId(long id){
    return repo.findById(id);
  }
  public List<Food> findFoodbyName(String name){
    return  repo.findfoodByNamee(name);
  }
  public List<Food> findFoodbyPrice(long price){
    return repo.findfoodbyPrice(price);
  }

}
