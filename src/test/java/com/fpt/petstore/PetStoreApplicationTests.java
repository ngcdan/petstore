package com.fpt.petstore;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.fpt.petstore.entities.Food;
import com.fpt.petstore.entities.Food.FoodType;
import com.fpt.petstore.entities.Product;
import com.fpt.petstore.entities.Product.ProductType;
import com.fpt.petstore.repository.FoodRepository;
import com.fpt.petstore.repository.ProductsRepository;

@SpringBootTest
class PetStoreApplicationTests {

	@Test
	void contextLoads() {
	}
	
	@Autowired
	FoodRepository foodRepo;
	
	@Autowired
	ProductsRepository productRepo;
	
	@Test
	public void testFood() throws Exception {
	  List<Food> foods = foodRepo.findByFoodType(FoodType.DRY);
	  System.out.println(foods);
	  assertNotNull(foods);
	  assertTrue(foods.size() > 0);
	}
	
	@Test
	public void testProduct() throws Exception {
	  List<Product> products = productRepo.findByType(ProductType.CLOTHES);
	  System.out.println(products);
	  assertNotNull(products);
	  assertTrue(products.size() > 0);
	  
	}

}
