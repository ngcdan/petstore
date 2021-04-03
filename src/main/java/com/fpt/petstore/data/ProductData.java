package com.fpt.petstore.data;

import com.fpt.petstore.entities.Product;

public class ProductData {

	//TODO: đổi tên product _1 do trùng với tên food_1
	public Product product_1 = new Product("Bánh thưởng cho chó dạng que vị việt quất WUJI Jerky Stick Blueberry").
		withPrice(500000).
		withDescription("des").
		withPic("food.jpg");

	public Product   product_2    = new Product("Vita Prima Hamster Food").withPrice(200).withDescription("des")
		.withPic("hamster-food.jpg");
	public Product   product_3    = new Product("Dr.Kyan Predogen").withPrice(200).withDescription("des")
		.withPic("suacho1.jpg");
	public Product   product_4    = new Product("Ganador Premium").withPrice(200).withDescription("des")
		.withPic("thucan-cho1.jpg");
	public Product   product_5    = new Product("JerHigh").withPrice(200).withDescription("des")
		.withPic("thucan-cho2.png");

	public Product[] ALL_PRODUCTS = { product_1, product_2, product_3, product_4, product_5 };
}
