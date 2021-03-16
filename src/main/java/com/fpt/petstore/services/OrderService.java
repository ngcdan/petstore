package com.fpt.petstore.services;

import com.fpt.petstore.core.dao.query.SqlQueryParams;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
public class OrderService {

	OrderLogic logic;

	@Transactional(readOnly = true)
	public List<Map<String, Object>> searchOrders(SqlQueryParams params) {
		return logic.searchOrders(params);
	}
}
