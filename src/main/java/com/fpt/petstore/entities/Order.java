/**
 * 
 */
package com.fpt.petstore.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
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
@Table(name = "order",
uniqueConstraints = {
    @UniqueConstraint(columnNames = {"id", "code"})
})
@JsonInclude(Include.NON_NULL)
@Setter @Getter
@NoArgsConstructor
public class Order extends AbstractPersistable<Long> {

  private String code;

  @ManyToOne(optional = true) // optinal = false
  @JoinColumn(name = "userId", referencedColumnName = "id")
  private User user;

  @ManyToOne(optional = true) // optinal = false
  @JoinColumn(name = "staffId", referencedColumnName = "id")
  private Staff staff;

  @ManyToMany
  @JoinTable(
      name = "order_product_rel",
      joinColumns = @JoinColumn(name = "orderId"), inverseJoinColumns = @JoinColumn(name = "product_id"))
  private List<Product> products;

  @ManyToMany
  @JoinTable(
      name = "order_food_rel",
      joinColumns = @JoinColumn(name = "orderId"), inverseJoinColumns = @JoinColumn(name = "food_id"))
  private List<Food> foods;

  private int total;

  private String note;

  public Order(String code) {
    this.code     = code;
  }
  
  public Order withProducts(Product product) {
    if(products == null) products = new ArrayList<>();
    products.add(product);
    return this;
  }
  
  public Order withFoods(Food food) {
    if(foods == null) foods = new ArrayList<>();
    foods.add(food);
    return this;
  }
  
  public Order withUser(User user) {
    this.user = user;
    return this;
  }
  
  public Order withStaff(Staff staff) {
    this.staff = staff;
    return this;
  }
  
  public Order withTotal(int total) {
    this.total = total;
    return this;
  }
  
  public Order withNote(String note) {
    this.note = note;
    return this;
  }

}
