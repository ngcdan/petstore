package com.fpt.petstore.core.dao;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.persistence.Table;

import org.springframework.beans.factory.annotation.Autowired;

import com.openfreightone.module.common.ClientInfo;
import com.openfreightone.module.core.dao.query.SqlQueryTemplate;
import com.openfreightone.module.core.dao.repository.JDBCDAOSupport;

public class DAOService {
	@Autowired
	protected JDBCDAOSupport daoSupport;

	public DAOService() {}

	public SqlSelectView query(ClientInfo client, SqlQueryTemplate query) {
		return daoSupport.query(client, query);
	}

	public <T> List<T> query(ClientInfo client, SqlQueryTemplate query, Class<T> type) {
		return daoSupport.query(client, query, type);
	}

	public <T> List<Map<String, Object>> queryForList(ClientInfo client, SqlQueryTemplate query) {
		return daoSupport.queryForList(client, query);
	}

	public void update(ClientInfo client, SqlUpdate<?> sqlUpdate) {
		daoSupport.update(client, sqlUpdate);
	}

	public int count(String table) { return daoSupport.count(table); }

	public int count(Class<?> entity) {
		Table table = entity.getAnnotation(Table.class);
		String tableName = table.name();
		return daoSupport.count(tableName);
	}

	public int count(String tenantId, Class<?> entity) {
		Table table = entity.getAnnotation(Table.class);
		String tableName = table.name();
		return daoSupport.count(tenantId, tableName);
	}

	public void assertEmptyTable(Class<?> entity) {
		if(count(entity) > 0) {
			throw new RuntimeException("Table for the entity " + entity.getSimpleName() + " is not empty");
		}
	}

	public void assertEmptyTable(ClientInfo client, Class<?> entity) {
		if(count(client.getTenantId(), entity) > 0) {
			throw new RuntimeException("Table for the entity " + entity.getSimpleName() + " and tenant " + client.getTenantId() + " is not empty");
		}
	}

	public <T> List<T> valueOf(List<Map<String, Object>> recordList, String field, Class<T> type) {
		List<T> holder = new ArrayList<T>() ;
		return holder;
	}
}
