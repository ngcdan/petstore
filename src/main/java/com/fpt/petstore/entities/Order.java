/**
 * 
 */
package com.fpt.petstore.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * @author linuss
 */

@Entity
@Table(name = "orders") 
@JsonInclude(Include.NON_NULL)
@Setter @Getter
@NoArgsConstructor
public class Order extends AbstractPersistable<Long> {
  
  static public enum State { pending, process, done, cancel };

  private String code;

  @ManyToOne(optional = false) 
  @JoinColumn(name = "userId")
  private Partner partner;

  @ManyToOne(optional = false) 
  @JoinColumn(name = "staffId")
  private Employee employee;

  @ManyToMany
  @JoinTable(
      name = "order_product_rel",
      joinColumns =  @JoinColumn(name = "orderId"), inverseJoinColumns =  @JoinColumn(name = "productId" ))
  private List<Product> products;

  @ManyToMany
  @JoinTable(
      name = "order_food_rel",
      joinColumns =  @JoinColumn(name = "orderId"), inverseJoinColumns =  @JoinColumn(name = "foodId"))
  private List<Food> foods;

  private int total;

  private String note;
  
  @Enumerated(EnumType.STRING)
  private State state = State.done;
  
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
  
  public Order withUser(Partner partner) {
    this.partner = partner;
    return this;
  }
  
  public Order withStaff(Employee employee) {
    this.employee = employee;
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
