package com.fpt.petstore.entities;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.ArrayList;
import java.util.List;

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

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

import com.fpt.petstore.util.DateUtil;
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
@Setter @Getter @NoArgsConstructor @AllArgsConstructor
public class Order extends AbstractPersistable<Long> {

  static public enum State { PAID, DUE, CANCEL };

  @NotNull
  private String code;

  private String label;

  @ManyToOne(optional = true)
  @JoinColumn(name = "customerId", nullable = true)
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
  private State state;

  @JsonFormat(pattern = DateUtil.LOCAL_DATETIME_FORMAT)
  private Date  transactionDate;

  public Order(String code, String label) {
    this.code = code;
    this.label = label;
  }

  public Order(String code) {
    this.code = code;
  }

  public Order withCustomer(Customer customer) {
    this.customer = customer;
    this.label = "Order for " + customer.getFullName();
    if(note == null) {
      this.note = "Order for " + customer.getFullName();
    }
    return this;
  }

  public Order withEmployee(Employee employee) {
    this.employee = employee;
    return this;
  }

  public Order withNote(String note) {
    this.note = note;
    return this;
  }

  public Order withState(State state) {
    this.state = state;
    return this;
  }

  public Order withPayment(Payment payment) {
    if (payments == null)
      payments = new ArrayList<>();
    payments.add(payment);
    return this;
  }

  public Order withOrderItem(OrderItem item) {
    if (orderItems == null) {
      orderItems = new ArrayList<>();
    }
    orderItems.add(item);
    return this;
  }

  public Order withTransactionDate(String exp) {
    this.transactionDate = DateUtil.parseCompactDateTime(exp);
    return this;
  }

  public Order addOrderItem(Food food) {
    if(food == null) throw new IllegalArgumentException("Expected food not null!");

    List<OrderItem> orderItems = this.getOrderItems();
    if(orderItems == null || orderItems.isEmpty()) {
      this.withOrderItem(new OrderItem().newOrderItem(food));
    } else {
      boolean isDuplicate = false;
      for(OrderItem item: orderItems) {
        if(item.getName().equals(food.getName())) { //TODO: check name enough not to need check type
          isDuplicate = true;
          item.setQuantity(item.getQuantity() + 1);
          item.setTotal(item.getQuantity() * food.getPrice());
        }
      }
      if(!isDuplicate) {
        this.withOrderItem(new OrderItem().newOrderItem(food));
      }
    }
    return this;
  }

  public Order addOrderItem(Product product) {
    if(product == null) throw new IllegalArgumentException("Expected product not null!");

    List<OrderItem> orderItems = this.getOrderItems();
    if(orderItems == null || orderItems.isEmpty()) {
      this.withOrderItem(new OrderItem().newOrderItem(product));
    } else {
      boolean isDuplicate = false;
      for(OrderItem item: orderItems) {
        if(item.getName().equals(product.getName())) {
          isDuplicate = true;
          item.setQuantity(item.getQuantity() + 1);
          item.setTotal(item.getQuantity() * product.getPrice());
        }
      }
      if(!isDuplicate) {
        this.withOrderItem(new OrderItem().newOrderItem(product));
      }
    }
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
