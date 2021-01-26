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
@Table(name = "food",
uniqueConstraints = {
    @UniqueConstraint(columnNames = {"code"})
})
@JsonInclude(Include.NON_NULL)
@Setter @Getter
@NoArgsConstructor
public class Food extends AbstractPersistable<Long> {

  static public enum FoodType {DRY, SNACK, MILK};

  private String code;

  private String name;

  private int price;

  private String pic;

  private String description;
  
  /*
  @OneToMany(cascade = CascadeType.MERGE, orphanRemoval = true)
  @JoinColumn(name = "foodId", referencedColumnName = "id")
  private List<OrderItem> orderItems;
  */
  
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

}
