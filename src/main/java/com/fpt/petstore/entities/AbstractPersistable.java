package com.fpt.petstore.entities;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.MappedSuperclass;
import javax.persistence.PrePersist;
import javax.persistence.PreRemove;
import javax.persistence.PreUpdate;

import org.springframework.data.domain.Persistable;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fpt.petstore.util.DateUtil;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@MappedSuperclass
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
@JsonIgnoreProperties(ignoreUnknown = true)
@NoArgsConstructor
@Setter@Getter
public abstract class AbstractPersistable<PK extends Serializable> implements Persistable<PK> {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  @Column(name="id", nullable = false,updatable = false)
  private PK id;

  @Override
  @JsonIgnore
  public boolean isNew() {
    return null == getId();
  }

  @JsonFormat(pattern = DateUtil.LOCAL_DATETIME_FORMAT)
  private Date createdAt;

  @JsonFormat(pattern = DateUtil.LOCAL_DATETIME_FORMAT)
  private Date updatedAt;
  
  @PrePersist
  protected void prePersist() {
      if (this.createdAt == null) createdAt = new Date();
      if (this.updatedAt == null) updatedAt = new Date();
  }

  @PreUpdate
  protected void preUpdate() {
      this.updatedAt = new Date();
  }

  @PreRemove
  protected void preRemove() {
      this.updatedAt = new Date();
  }

}
