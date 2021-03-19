/**
 * 
 */
package com.fpt.petstore.entities;

import javax.persistence.*;
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

  String category;//giu cai nay lai tui lam cai kia ay k co van de gi dau
  
  @Column(length=1024 * 32)
  String description;

  @DecimalMin(value = "0")
  int quantity=1; // kiem tra item trung name thi quantity +=1
  // ko trung thi set quantity la 1

  @NotNull
  @DecimalMin(value = "0")
  int total;

  String currency = "VND";
  @ManyToOne(optional = true)
  @JoinColumn(name = "productId", nullable = true)
  private Product product;
  @ManyToOne(optional = true)
  @JoinColumn(name = "foodId", nullable = true)
  private Food food;

  public OrderItem(Product product, @NotNull @DecimalMin(value = "0") int total ) {
    this.product = product;
    this.total = total;

  }

  public OrderItem( Food food,@NotNull @DecimalMin(value = "0") int total) {
    this.food = food;
    this.total = total;
  }

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

  public OrderItem withQuantity(int quantity) {
    this.quantity = quantity;
    return this;
  }

  public OrderItem withTotal(int total) {
    this.total = total;
    return this;
  }
}
