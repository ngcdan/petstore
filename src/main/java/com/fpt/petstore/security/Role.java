/**
 * 
 */
package com.fpt.petstore.security;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fpt.petstore.entities.AbstractPersistable;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * @author linuss
 */

@Entity
@Table(name = "role")
@Setter @Getter
@NoArgsConstructor
public class Role extends AbstractPersistable<Serializable> {
  
  private String name;
  
  @OneToMany(mappedBy = "role" ,cascade = CascadeType.ALL, fetch = FetchType.LAZY)
  private Set<UserRole> userRoles = new HashSet<>();

  public Role withUserRoles(UserRole userRole ) {
    this.userRoles.add(userRole);
    return this;
  }
}
