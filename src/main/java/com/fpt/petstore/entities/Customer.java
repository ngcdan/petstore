package com.fpt.petstore.entities;

import java.util.Date;

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
@Table(name = "customer",
uniqueConstraints = {
    @UniqueConstraint(columnNames = {"code", "phone", "email"})
})
@JsonInclude(Include.NON_NULL)
@Setter @Getter
@NoArgsConstructor
public class Customer extends AbstractPersistable<Long> {

  static public enum Gender { Male, Female};

  public String code;
  private String email;
  private String phone;
  private String password;
  private String fullName;
  private String avatarUrl;

  @JsonFormat(pattern = DateUtil.COMPACT_DATE_FORMAT)
  private Date birthday = new Date();

  private Gender gender = Gender.Male;

  private String address;

  public Customer(String fullName) {
    this.fullName = fullName;
  }
}
