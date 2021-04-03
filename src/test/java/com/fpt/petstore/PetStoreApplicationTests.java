package com.fpt.petstore;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.List;
import java.util.Map;

import com.fpt.petstore.core.dao.query.Filter;
import com.fpt.petstore.core.dao.query.SimpleFilter;
import com.fpt.petstore.core.dao.query.SqlQueryParams;
import com.fpt.petstore.services.FoodLogic;
import com.fpt.petstore.services.OrderLogic;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.fpt.petstore.data.PetStoreData;
import com.fpt.petstore.entities.Food;
import com.fpt.petstore.entities.Food.FoodType;
import com.fpt.petstore.entities.Order;
import com.fpt.petstore.entities.Product;
import com.fpt.petstore.entities.Product.ProductType;
import com.fpt.petstore.repository.FoodRepository;
import com.fpt.petstore.repository.OrderRepository;
import com.fpt.petstore.repository.ProductsRepository;

@SpringBootTest
class PetStoreApplicationTests {

	@Autowired
	FoodRepository foodRepo;

	@Autowired
	ProductsRepository productRepo;

	@Autowired
	OrderRepository orderRepo;

	@Autowired
	OrderLogic orderLogic;

	@Autowired
	FoodLogic foodLogic;

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

	@Test
	public void testOrders() throws Exception {
		List<Order> orders = orderRepo.findOrdersByEmployee("phamvohoaianh");
		System.out.println("==========================================");
		System.out.println(orders.size());
		assertNotNull(orders);
		assertTrue(orders.size() == 20);
	}

	@Test
	public void testSearch() throws Exception {
		SqlQueryParams searchParams =
			new SqlQueryParams().
				FILTER(new SimpleFilter("search", Filter.FilterType.STRING_LIKE).withValue("*")).
				ORDERBY(new String[] { "code" }, "code", "DESC");
		List<Map<String, Object>> maps = foodLogic.searchMasterInvoices(searchParams);
		assertNotNull(maps);
		System.out.println(maps);
	}

	@Test
	public void testSearchOrder() throws Exception {
		SqlQueryParams searchParams =
			new SqlQueryParams().
				FILTER(new SimpleFilter("search", Filter.FilterType.STRING_LIKE).withValue("*")).
				ORDERBY(new String[] { "code" }, "code", "DESC");

		List<Map<String, Object>> orders = orderLogic.searchOrders(searchParams);
		assertNotNull(orders);
		assertTrue(orders.size() > 0);
	}
}
