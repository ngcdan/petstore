/**
 * 
 */
package com.fpt.petstore.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * @author linuss
 */

@Entity
@Table(name = "food",
uniqueConstraints = {
    @UniqueConstraint(columnNames = {"code"})
})
@JsonInclude(Include.NON_NULL)
@Setter @Getter
@NoArgsConstructor
public class Food extends AbstractPersistable<Long> {

  static public enum FoodType {DRY, SNACK, MILK};

  @NotNull
  private String code;

  @NotNull
  private String name;

  @NotNull
  @DecimalMin(value = "0")
  private int price;

  private String pic="snack.jpg";

  @Column(length=1024 * 32)
  private String description;
  
  @Enumerated(EnumType.STRING)
  private FoodType foodType = FoodType.DRY;

  public Food(String name, int price) {
    this.name  = name;
    this.price = price;
  }
  
  public Food withDes(String des) {
    this.description = des;
    return this;
  }
  
  public Food withType(FoodType type) {
    this.foodType = type;
    return this;
  }
}
