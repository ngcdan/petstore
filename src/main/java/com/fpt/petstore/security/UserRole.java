/**
 * 
 */
package com.fpt.petstore.security;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fpt.petstore.entities.AbstractPersistable;
import com.fpt.petstore.entities.User;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * @author linuss
 */

@Entity
@Table(name = "user_role")
@Setter @Getter
@NoArgsConstructor
public class UserRole extends AbstractPersistable<Serializable>{
  
  @ManyToOne(fetch = FetchType.EAGER)
  @JoinColumn(name = "user_id")
  private User user;
  
  @ManyToOne(fetch = FetchType.EAGER)
  @JoinColumn(name = "role_id")
  private Role role;
  
  public UserRole(User user, Role role) {
    this.user = user;
    this.role = role;
}

}
