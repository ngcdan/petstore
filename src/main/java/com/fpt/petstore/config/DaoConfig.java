package com.fpt.petstore.config;

import com.zaxxer.hikari.HikariDataSource;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.dao.annotation.PersistenceExceptionTranslationPostProcessor;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.validation.beanvalidation.LocalValidatorFactoryBean;

import javax.sql.DataSource;
import java.util.HashMap;

@Configuration
@ComponentScan(basePackages = { "com.fpt.petstore" })
@EnableConfigurationProperties
@EnableTransactionManagement
@EnableJpaRepositories(
	basePackages = {
		"com.fpt.petstore.core.dao.repository",
		"com.fpt.petstore.repository"
	}
)
@EnableAspectJAutoProxy(proxyTargetClass=true)
public class DaoConfig {
	@Bean("validator")
	public LocalValidatorFactoryBean createLocalValidatorFactoryBean() {
		LocalValidatorFactoryBean bean = new LocalValidatorFactoryBean();
		return bean;
	}

	@Bean("datasource")
	public DataSource dataSource(
		@Value("${db.jdbc.driver:org.hsqldb.jdbcDriver}") String jdbcDriver,
		@Value("${db.jdbc.url:jdbc:hsqldb:mem:testdb}") String jdbcUrl,
		@Value("${db.jdbc.username:sa}")  String jdbcUser,
		@Value("${db.jdbc.password:}") String jdbcPassword) {
		HikariDataSource ds = new HikariDataSource();
		ds.setMaximumPoolSize(50);
		ds.setDriverClassName(jdbcDriver);
		ds.setJdbcUrl(jdbcUrl); ;
		ds.setUsername(jdbcUser);
		ds.setPassword(jdbcPassword);
		return ds;
	}

	@Bean("entityManagerFactory")
	public LocalContainerEntityManagerFactoryBean entityManagerFactoryBean(
		@Value("${hibernate.hbm2ddl.auto:update}") String hbm2ddlAuto,
		@Value("${hibernate.dialect:org.hibernate.dialect.HSQLDialect}") String hibernateDialect,
		@Value("${hibernate.show_sql:false}") String hibernateShowSql,
		@Qualifier("datasource") DataSource ds,
		@Qualifier("validator") LocalValidatorFactoryBean validator) {
		LocalContainerEntityManagerFactoryBean factoryBean = new LocalContainerEntityManagerFactoryBean();
		factoryBean.setDataSource(ds);
		factoryBean.setPackagesToScan("com.fpt.petstore.*");

		HibernateJpaVendorAdapter vendorAdapter = new HibernateJpaVendorAdapter();
		factoryBean.setJpaVendorAdapter(vendorAdapter);

		HashMap<String, Object> jpaPropMap = new HashMap<>();
		jpaPropMap.put("validator", validator);
		jpaPropMap.put("hibernate.hbm2ddl.auto", hbm2ddlAuto);
		jpaPropMap.put("hibernate.dialect", hibernateDialect);
		jpaPropMap.put("hibernate.show_sql", hibernateShowSql);
		jpaPropMap.put("hibernate.format_sql", "true");
		jpaPropMap.put("hibernate.enable_lazy_load_no_trans", "true");
		factoryBean.setJpaPropertyMap(jpaPropMap);
		return factoryBean;
	}

	@Bean("transactionManager")
	public PlatformTransactionManager transactionManager(
		@Qualifier("entityManagerFactory") LocalContainerEntityManagerFactoryBean factory) {
		JpaTransactionManager transactionManager = new JpaTransactionManager();
		transactionManager.setEntityManagerFactory(factory.getObject());
		return transactionManager;
	}

	@Bean
	public PersistenceExceptionTranslationPostProcessor exceptionTranslation() {
		return new PersistenceExceptionTranslationPostProcessor();
	}
}
