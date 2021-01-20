/**
 * 
 */
package com.fpt.petstore.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * @author linuss
 */

@Entity
@Table(name = "staff",
uniqueConstraints = {
    @UniqueConstraint(columnNames = {"id", "username", "email"})
})
@JsonInclude(Include.NON_NULL)
@Setter @Getter
@NoArgsConstructor
public class Staff extends AbstractPersistable<Long> {
  static public enum UserRole { Admin, Staff };

  private String username;
  private String password;
  private String firstName;
  private String lastName;

  @Column(name = "email", nullable = false,updatable = false)
  private String email;

  private String phone;

  private String avatar;

  private boolean gender = true;

  private String address;

  private boolean enabled=true;

  @Enumerated(EnumType.STRING)
  private UserRole role = UserRole.Staff;

  public Staff(String username, String email, String phone) {
    this.username = username;
    this.email    = email;
    this.phone    = phone;
  }
  
  public Staff withFirstName(String firstName) {
    this.firstName = firstName;
    return this;
  }

  public Staff withLastName(String lastName) {
    this.lastName = lastName;
    return this;
  }

  public Staff withAddress(String address) {
    this.address = address;
    return this;
  }

  public Staff withPassword(String password) {
    this.password = password;
    return this;
  }

}
