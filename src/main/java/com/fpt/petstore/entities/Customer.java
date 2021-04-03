package com.fpt.petstore.entities;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Date;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fpt.petstore.util.DateUtil;
import com.fpt.petstore.entities.Employee.UserRole;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "customer")
@JsonInclude(Include.NON_NULL)
@Setter @Getter @NoArgsConstructor
public class Customer extends AbstractPersistable<Long> {

  static public enum Gender {Male, Female};

  @NotNull
  private String code;
  private String username;
  private String email;
  private String phone;
  private String password;
  private String fullName;

  @Column(nullable = true, length = 64)
  private String avatarUrl="customer-default.jpg";

  @JsonFormat(pattern = DateUtil.COMPACT_DATE_FORMAT)
  private Date birthday;

  private Gender gender;

  private String address;

  private boolean isVerified;

  @Enumerated(EnumType.STRING)
  private UserRole role = UserRole.ROLE_User;

  public Customer(String fullName) {
    this.fullName = fullName;
  }

  public Customer withEmail(String email) {
    this.email = email; return this;
  }

  public Customer withPhone(String phone) {
    this.phone = phone; return this;
  }

  public Customer withAddress(String address) {
    this.address = address; return this;
  }

  public Customer withPassword(String password) {
    this.password = password; return this;
  }

  public Customer withBirthday(String birthday){
    this.birthday = DateUtil.parseCompactDate(birthday);
    return this;
  }
  public Customer withGender(Gender gender){
    this.gender = gender;
    return this;
  }
  public Customer(String email, String phone, String password, String fullName, String avatarUrl, Gender gender, String address) {
    this.email = email; this.phone = phone; this.password = password; this.fullName = fullName;
    this.avatarUrl = avatarUrl; this.gender = gender; this.address = address;
  }
}
