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
import com.fpt.petstore.entities.User.UserRole;

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

  private String username;
  private String password;
  private String firstName;
  private String lastName;

  @Column(name = "email", nullable = false,updatable = false)
  private String email;

  private String phone;

  private String avatar;

  private boolean gender;

  private String address;

  private boolean enabled=true;

  @Enumerated(EnumType.STRING)
  private UserRole role = UserRole.Admin;

}
