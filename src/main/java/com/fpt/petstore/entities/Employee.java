/**
 * 
 */
package com.fpt.petstore.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fpt.petstore.entities.Customer.Gender;
import com.fpt.petstore.util.DateUtil;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * @author linuss
 */

@Entity
@Table(name = "employee",
uniqueConstraints = {
    @UniqueConstraint(columnNames = {"username", "email"})
})
@JsonInclude(Include.NON_NULL)
@Setter @Getter
@NoArgsConstructor
public class Employee extends AbstractPersistable<Long> {
  static public enum UserRole { Admin, User };

  private String username;
  private String password;
  private String firstName;
  private String lastName;

  @Column(name = "email", nullable = false,updatable = false)
  private String email;

  private String phone;
  
  @JsonFormat(pattern = DateUtil.COMPACT_DATETIME_FORMAT)
  private Date   birthday = new Date();

  private String avatarUrl;

  private Gender gender = Gender.Male;

  private String address;
  
  private float height;
  
  private float weight;
  
  @Column(name = "personal_id")
  private String personalId;
  
  @Column(name = "marital_status")
  private String maritalStatus = "Single";

  private boolean enabled=true;

  @Enumerated(EnumType.STRING)
  private UserRole role = UserRole.User;

  public Employee(String username, String email, String phone) {
    this.username = username;
    this.email    = email;
    this.phone    = phone;
  }
  
  public Employee withFirstName(String firstName) {
    this.firstName = firstName;
    return this;
  }

  public Employee withLastName(String lastName) {
    this.lastName = lastName;
    return this;
  }

  public Employee withAddress(String address) {
    this.address = address;
    return this;
  }

  public Employee withPassword(String password) {
    this.password = password;
    return this;
  }
  
  public Employee withBirthday(Date birthday) {
    this.birthday = birthday;
    return this;
  }

  
  public Employee withAvatar(String avatar) {
    this.avatarUrl = avatar;
    return this;
  }
  
  public Employee withHeight(float height) {
    this.height = height;
    return this;
  }

  public Employee withWeight(float weight) {
    this.weight = weight;
    return this;
  }
  
  public Employee withMaritalStatus(String maritalStatus) {
    this.maritalStatus = maritalStatus;
    return this;
  }

}
