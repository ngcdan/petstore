/**
 * 
 */
package com.fpt.petstore.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
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
    @UniqueConstraint(columnNames = {"code"})
}) 
@JsonInclude(Include.NON_NULL)
@Setter @Getter
@NoArgsConstructor
public class Order extends AbstractPersistable<Long> {
  
  static public enum State { PENDING, PROCESS, DONE, CANCEL };

  private String code;
  
  private String label;

  @ManyToOne(optional = false) 
  @JoinColumn(name = "customerId")
  private Customer customer;

  @ManyToOne(optional = false) 
  @JoinColumn(name = "employeeId")
  private Employee employee;
  
  @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
  @JoinColumn(name = "orderId", referencedColumnName = "id")
  private List<Payment> payments;
  
  @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
  @JoinColumn(name = "orderId", referencedColumnName = "id")
  private List<OrderItem> orderItems;

  private int total;

  private String note;
  
  private String currency;
  
  @Enumerated(EnumType.STRING)
  private State state = State.PROCESS;
  
  public Order withUser(Customer customer) {
    this.customer = customer;
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
