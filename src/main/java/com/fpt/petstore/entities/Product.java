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
@Table(name = "product",
uniqueConstraints = {
    @UniqueConstraint(columnNames = {"code"})
})
@JsonInclude(Include.NON_NULL)
@Setter @Getter
@NoArgsConstructor
public class Product extends AbstractPersistable<Long> {

  static public enum ProductType {CLOTHES, Cat, DOG, Hamster, LEASH };

  private String code;

  private String name;

  private int price;

  private String pic;

  private String description;

  @Enumerated(EnumType.STRING)
  private ProductType type = ProductType.CLOTHES;

  public Product(String name) {
    this.name = name;
  }
  
  public Product withPrice(int price) {
    this.price = price;
    return this;
  }
  
  public Product withDescription(String des) {
    this.description = des;
    return this;
  }
  public Product withPic(String des){
    this.pic = des;
    return this;
  }

}
