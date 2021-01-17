package com.fpt.petstore.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@Configuration
@ComponentScan(basePackages = {
    "com.fpt.petstore"
})
@EnableTransactionManagement
public class ApplicationConfig {

}
