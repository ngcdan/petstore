package com.fpt.petstore.entities;

import java.io.Serializable;
import java.util.Date;

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
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private PK id;

  @Override
  @JsonIgnore
  public boolean isNew() {
    return null == getId();
  }

  @JsonFormat(pattern = DateUtil.LOCAL_DATETIME_FORMAT)
  protected Date createdTime;

  @JsonFormat(pattern = DateUtil.LOCAL_DATETIME_FORMAT)
  protected Date updatedTime;
  
  @PrePersist
  protected void prePersist() {
      if (this.createdTime == null) createdTime = new Date();
      if (this.updatedTime == null) updatedTime = new Date();
  }

  @PreUpdate
  protected void preUpdate() {
      this.updatedTime = new Date();
  }

  @PreRemove
  protected void preRemove() {
      this.updatedTime = new Date();
  }

}
