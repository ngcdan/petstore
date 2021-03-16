package com.fpt.petstore.entities;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * @author linuss
 */

@Entity
@Table(name = "orders", uniqueConstraints = { @UniqueConstraint(columnNames = { "code" }) })
@JsonInclude(Include.NON_NULL)
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Order extends AbstractPersistable<Long> {


  static public enum State {
    PAID, DUE, CANCEL
  };

  @NotNull
  private String code;

  private String label;

  @ManyToOne(optional = true)
  @JoinColumn(name = "customerId", nullable = true) // this is a bug when delete order
  private Customer customer;

  @ManyToOne(optional = true)
  @JoinColumn(name = "employeeId", nullable = true)
  private Employee employee;

  @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
  @JoinColumn(name = "orderId", referencedColumnName = "id")
  private List<Payment> payments;

  @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
  @JoinColumn(name = "orderId", referencedColumnName = "id")
  private List<OrderItem> orderItems;

  @NotNull
  @DecimalMin(value = "0")
  private int total;

  @Column(length=1024 * 32)
  private String note;

  private String currency = "VND";

  @Enumerated(EnumType.STRING)
  private State state = State.PAID;

  public Order(String label) {
    this.label = label;
  }

  public Order withCustomer(Customer customer) {
    this.customer = customer;
    return this;
  }

  public Order withEmployee(Employee employee) {
    this.employee = employee;
    return this;
  }

  public Order withTotal(List<OrderItem> items) {
    for (OrderItem item : items) {
      this.total += item.getTotal();
    }
    return this;
  }

  public Order withNote(String note) {
    this.note = note;
    return this;
  }

  public Order withPayment(Payment payment) {
    if (payments == null)
      payments = new ArrayList<>();
    payments.add(payment);
    return this;
  }

  public Order withOrderItem(OrderItem item) {
    if (orderItems == null)
      orderItems = new ArrayList<>();
    orderItems.add(item);
    return this;
  }

  public Order(@NotNull String code, String label, Customer customer, List<Payment> payments, List<OrderItem> orderItems, @NotNull @DecimalMin(value = "0") int total, String note, State state) {
    this.code = code;
    this.label = label;
    this.customer = customer;
    this.payments = payments;
    this.orderItems = orderItems;
    this.total = total;
    this.note = note;
    this.state = state;
  }
}
