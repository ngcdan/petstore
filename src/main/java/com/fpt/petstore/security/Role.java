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

import com.adminportal.domain.security.UserRole;
import com.fpt.petstore.entities.AbstractPersistable;

/**
 * @author linuss
 */

@Entity
public class Role extends AbstractPersistable<Serializable> {
  
  private String name;
  
  @OneToMany(mappedBy = "role" ,cascade = CascadeType.ALL, fetch = FetchType.LAZY)
  private Set<UserRole> userRoles = new HashSet<>();

}
