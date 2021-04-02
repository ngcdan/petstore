package com.fpt.petstore.services;

import com.fpt.petstore.entities.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ProductService {

	@Autowired
	ProductLogic logic;

	@Transactional(readOnly = true)
	public Product getProduct(String code) {
		return logic.getProductByCode(code);
	}
}
