package com.fpt.petstore.entities;

import java.io.Serializable;
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
import com.fpt.petstore.util.DateUtil;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "user",
uniqueConstraints = {
    @UniqueConstraint(columnNames = {"id", "username", "email"})
})
@JsonInclude(Include.NON_NULL)
@Setter @Getter
@NoArgsConstructor
public class User extends AbstractPersistable<Serializable> {

  static public enum UserRole { Admin, Staff, User };

  private String username;
  private String password;
  private String firstName;
  private String lastName;

  @Column(name = "email", nullable = false,updatable = false)
  private String email;

  private String phone;

  private String avatar;

  @JsonFormat(pattern = DateUtil.LOCAL_DATETIME_FORMAT)
  private Date dateOfBirth;

  private boolean gender;

  private String address;

  private boolean enabled=true;

  @Enumerated(EnumType.STRING)
  private UserRole role = UserRole.Admin;

}
