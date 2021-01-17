package com.fpt.petstore.entities;

import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fpt.petstore.security.Authority;
import com.fpt.petstore.security.UserRole;

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
public class User extends AbstractPersistable<Long> implements UserDetails {

  private static final long serialVersionUID = 1L;
  
  private String username;
  private String password;
  private String firstName;
  private String lastName;
  
  @Column(name = "email", nullable = false,updatable = false)
  private String email;
  
  private String phone;
  
  private boolean enabled=true;
  
  @OneToMany(mappedBy = "user", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
  @JsonIgnore
  private Set<UserRole> userRoles = new HashSet<>();

  @Override
  public Collection<? extends GrantedAuthority> getAuthorities() {
      Set<GrantedAuthority> authorities = new HashSet<>();
      userRoles.forEach(ur -> authorities.add(new Authority(ur.getRole().getName())));
      return authorities;
  }
  
  @Override
  public boolean isAccountNonExpired() {
      return true;
  }

  @Override
  public boolean isAccountNonLocked() {
      return true;
  }

  @Override
  public boolean isCredentialsNonExpired() {
      return true;
  }
}
