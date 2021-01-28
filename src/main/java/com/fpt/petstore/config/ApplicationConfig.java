package com.fpt.petstore.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@Configuration
@ComponentScan(basePackages = {
    "com.fpt.petstore"
})
@EnableJpaRepositories(basePackages = "com.fpt.petstore.repository")
@EnableTransactionManagement
public class ApplicationConfig {



}
