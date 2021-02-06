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
import javax.validation.constraints.NotBlank;

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

  @NotBlank(message = "Username is mandatory")
  private String username;
  private String password;
  private String fullName;

  @NotBlank(message = "Email is mandatory")
  @Column(name = "email", nullable = false,updatable = false)
  private String email;

  private String phone;

  @JsonFormat(pattern = DateUtil.COMPACT_DATE_FORMAT)
  private Date   birthday = new Date();

  private String avatarUrl;

  private Gender gender = Gender.Male;

  private String address;

  private float height = 170;

  private float weight = 60;

  @Column(name = "personal_id")
  private String personalId = DateUtil.asCompactDateTimeId(new Date());

  @Column(name = "marital_status")
  private String maritalStatus = "Single";

  private boolean enabled=true;

  @Enumerated(EnumType.STRING)
  private UserRole role = UserRole.User;

  public Employee(String fullName) {
    this.fullName = fullName;
  }
}
