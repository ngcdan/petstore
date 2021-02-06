/**
 * 
 */
package com.fpt.petstore.entities;

import javax.persistence.Entity;
import javax.persistence.Index;
import javax.persistence.Table;
import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * @author linuss
 */

@Entity
@Table(
    name = "order_item",
    indexes = {
        @Index(columnList="name")
    }
    )
@JsonInclude(JsonInclude.Include.NON_NULL)
@NoArgsConstructor
@Setter @Getter
public class OrderItem extends AbstractPersistable<Long> {

  @NotNull
  String name;
  String label;
  String description;

  double quantity = 1;

  @NotNull
  @DecimalMin(value = "0")
  double total;

  String currency = "VND";

  public OrderItem withProduct(Product product) {
    this.name = product.getName();
    this.label = product.getName();
    this.total += product.getPrice();
    return this;
  }

  public OrderItem withFood(Food food) {
    this.name = food.getName();
    this.label = food.getName();
    this.total += food.getPrice();
    return this;
  }

  public OrderItem withDescription(String description) {
    this.description = description;
    return this;
  }

  public OrderItem withQuantity(double quantity) {
    this.quantity = quantity;
    return this;
  }

  public OrderItem withTotal(double total) {
    this.total = total;
    return this;
  }
}
