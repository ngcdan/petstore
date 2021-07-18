package com.fpt.petstore.config;

import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurationSupport;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.oas.annotations.EnableOpenApi;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;

//@Configuration
@EnableOpenApi
public class SwaggerConfig extends WebMvcConfigurationSupport {
  
  /*
  @Bean
  public Docket api() {
    return new Docket(DocumentationType.OAS_30)
      .select()
      .apis(RequestHandlerSelectors.any())
      .paths(PathSelectors.any())
      .build();
  }
   */
  
  
  @Bean
  public Docket productApi() {
    return new Docket(DocumentationType.OAS_30).
      select()
      .apis(RequestHandlerSelectors.basePackage("com.fpt.petstore.controller"))
      .paths(PathSelectors.any())
      .build();
  }
  
  @Override
  public void addViewControllers(ViewControllerRegistry registry) {
    registry
      .addViewController("/swagger-ui/")
      .setViewName("forward:/swagger-ui/index.html");
  }
  
}
