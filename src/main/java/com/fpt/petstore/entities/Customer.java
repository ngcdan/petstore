package com.fpt.petstore.entities;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "customer")
@JsonInclude(Include.NON_NULL)
@Setter @Getter @NoArgsConstructor
public class Customer extends BaseAccount {

  public Customer(String fullName) {
    this.fullName = fullName;
  }
}
