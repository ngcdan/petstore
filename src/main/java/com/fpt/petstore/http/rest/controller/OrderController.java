package com.fpt.petstore.http.rest.controller;

import com.fpt.petstore.core.dao.query.SqlQueryParams;
import com.fpt.petstore.services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/rest/v1.0.0/order")
public class OrderController {

	@Autowired
	OrderService service;

	@PostMapping("search")
	public @ResponseBody List<Map<String, Object>> searchTransactions(@RequestBody SqlQueryParams params) {
		return service.searchOrders(params);
	}
}
