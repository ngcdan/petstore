package com.fpt.petstore.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fpt.petstore.util.DateUtil;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "customer",
uniqueConstraints = {
    @UniqueConstraint(columnNames = {"code"})
})
@JsonInclude(Include.NON_NULL)
@Setter @Getter
@NoArgsConstructor
public class Customer extends AbstractPersistable<Long> {

  static public enum Gender { Male, Female};
  
  @NotNull
  private String code;
  
  @NotBlank(message = "Email is mandatory")
  private String email;
  private String phone;
  private String password;
  
  @NotNull
  private String fullName;
  
  @Column(nullable = true, length = 64)
  private String avatarUrl;

  @JsonFormat(pattern = DateUtil.COMPACT_DATE_FORMAT)
  private Date birthday = new Date();

  private Gender gender = Gender.Male;

  private String address;

  public Customer(String fullName) {
    this.fullName = fullName;
  }

  public Customer(String email, String phone, String password, String fullName, String avatarUrl, Gender gender, String address) {
    this.email = email;
    this.phone = phone;
    this.password = password;
    this.fullName = fullName;
    this.avatarUrl = avatarUrl;
    this.gender = gender;
    this.address = address;
  }
}
