package com.fpt.petstore.entities;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

/**
 * @author linuss
 */

@Entity
@Table(name = "food",
uniqueConstraints = {
    @UniqueConstraint(columnNames = {"id", "code", "name"})
})
@JsonInclude(Include.NON_NULL)
@Setter @Getter
@NoArgsConstructor
public class Food extends BaseProduct {

  static public enum FoodType {DRY, SNACK, MILK};

  @Enumerated(EnumType.STRING)
  private FoodType type;

  public Food(String name, int price) {
    this.name  = name;
    this.price = price;
  }
  
  public Food withType(FoodType type) {
    this.type = type;
    return this;
  }
}
