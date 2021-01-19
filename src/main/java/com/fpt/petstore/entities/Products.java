/**
 * 
 */
package com.fpt.petstore.entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * @author linuss
 */
@Entity
@Table(name = "products",
uniqueConstraints = {
    @UniqueConstraint(columnNames = {"id", "code"})
})
@JsonInclude(Include.NON_NULL)
@Setter @Getter
@NoArgsConstructor
public class Products extends AbstractPersistable<Serializable> {
  
  static public enum ProductType { Food, Product };
  
  private String code;
  
  private String name;
  
  private Long price;
  
  private String pic;
  
  private String description;
  
  @Enumerated(EnumType.STRING)
  private ProductType type = ProductType.Food;

}
