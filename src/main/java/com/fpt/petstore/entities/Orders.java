/**
 * 
 */
package com.fpt.petstore.entities;

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
@Table(name = "orders",
uniqueConstraints = {
    @UniqueConstraint(columnNames = {"id", "code"})
})
@JsonInclude(Include.NON_NULL)
@Setter @Getter
@NoArgsConstructor
public class Orders extends AbstractPersistable<Long> {

  private String code;

  @ManyToOne(optional = false)
  @JoinColumn(name = "userId", referencedColumnName = "id")
  private User user;

  @ManyToOne(optional = false)
  @JoinColumn(name = "staffId", referencedColumnName = "id")
  private Staff staff;

  @ManyToMany
  @JoinTable(
      name = "order_product-rel",
      joinColumns = @JoinColumn(name = "orderId"), inverseJoinColumns = @JoinColumn(name = "product_id"))
  private List<Products> products;

  @ManyToMany
  @JoinTable(
      name = "order_food-rel",
      joinColumns = @JoinColumn(name = "orderId"), inverseJoinColumns = @JoinColumn(name = "food_id"))
  private List<Foods> foods;

  private Long quantity;

  private Long total;

  private String note;

}
