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

  public Customer(String email, String phone, String password, String fullName, String avatarUrl, Gender gender, String address) {
    this.email = email; this.phone = phone; this.password = password; this.fullName = fullName;
    this.avatarUrl = avatarUrl; this.gender = gender; this.address = address;
  }
}
