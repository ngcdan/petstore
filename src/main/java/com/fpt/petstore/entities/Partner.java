package com.fpt.petstore.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fpt.petstore.util.DateUtil;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "user",
uniqueConstraints = {
    @UniqueConstraint(columnNames = {"code", "phone", "email"})
})
@JsonInclude(Include.NON_NULL)
@Setter @Getter
@NoArgsConstructor
public class Partner extends AbstractPersistable<Long> {

  public String code;

  @Column(name = "email", nullable = false,updatable = false)
  private String email;

  private String phone;
  private String password;
  private String firstName;
  private String lastName;

  @JsonFormat(pattern = DateUtil.LOCAL_DATETIME_FORMAT)
  private Date dateOfBirth = new Date();

  private boolean gender = true;

  private String address;

  public Partner(String phone, String email) {
    this.phone = phone;
    this.email = email;
  }

  public Partner withFirstName(String firstName) {
    this.firstName = firstName;
    return this;
  }

  public Partner withLastName(String lastName) {
    this.lastName = lastName;
    return this;
  }

  public Partner withAddress(String address) {
    this.address = address;
    return this;
  }

  public Partner withPassword(String password) {
    this.password = password;
    return this;
  }

}
