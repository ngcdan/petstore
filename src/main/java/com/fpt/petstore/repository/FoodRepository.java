/**
 * 
 */
package com.fpt.petstore.repository;

import java.util.List;

import com.fpt.petstore.entities.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.fpt.petstore.entities.Food;
import com.fpt.petstore.entities.Food.FoodType;

/**
 * @author linuss
 */

@Repository
public interface FoodRepository extends PagingAndSortingRepository<Food, Long> {
  
  @Query(
      "SELECT f FROM Food f WHERE f.code = :code")
  public Food getByCode(@Param("code") String code);
  
  public List<Food> findByFoodType(FoodType foodType);
  @Query(value = "select * from Food", nativeQuery = true)
  Page<Food> listFoodbyPage(Pageable pageable);
  @Query(value = "select count(*) from Food", nativeQuery = true)
  Integer countFood();
  Food findById(long id);
  @Query(value="SELECT * FROM Food where Upper(name) like UPPER(CONCAT('%',?1,'%'))",nativeQuery = true)
  List<Food> findfoodByNamee(String name);
  @Query(value="select * from Food where price = ?1",nativeQuery = true)
  List<Food> findfoodbyPrice(long price);
}
