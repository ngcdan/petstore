package com.fpt.petstore.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@ComponentScan(basePackages = {
    "com.fpt.petstore"
})
@EnableJpaRepositories(basePackages = "com.fpt.petstore.repository")
@EnableTransactionManagement
public class ApplicationConfig implements WebMvcConfigurer {

  @Override
  public void addCorsMappings(CorsRegistry registry) {
    WebMvcConfigurer.super.addCorsMappings(registry);

    registry.addMapping("/**")
    .allowCredentials(true)
    .allowedOrigins("http://localhost:3001")
    .allowedHeaders("*")
    .allowedMethods("PUT")
    .allowedMethods("POST")
    .allowedMethods("DELETE")
    .allowedMethods("GET");
  }



}
