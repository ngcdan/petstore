/**
 * 
 */
package com.fpt.petstore.entities;

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
public class Products extends AbstractPersistable<Long> {

  static public enum ProductType {CLOTHES, BOWL, COLLAR, CAGE, LEASH };

  private String code;

  private String name;

  private int price;

  private String pic;

  private String description;

  @Enumerated(EnumType.STRING)
  private ProductType type = ProductType.CLOTHES;

  public Products(String code, String name) {
    this.code = code;
    this.name = name;
  }
  
  public Products withPrice(int price) {
    this.price = price;
    return this;
  }
  
  public Products withDescription(String des) {
    this.description = des;
    return this;
  }

}
