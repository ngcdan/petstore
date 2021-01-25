/**
 * 
 */
package com.fpt.petstore.entities;

import javax.persistence.Entity;
import javax.persistence.Index;
import javax.persistence.Table;

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
  
  String name;
  String label;
  String description;

  double quantity;
  
  double total;
  
  String currency;
  
  public OrderItem(String name, String currency) {
    this.name = name;
    this.currency = currency;
    if(this.label == null) this.label = name;
  }
  
  public OrderItem withLabel(String label) {
    this.label = label;
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
