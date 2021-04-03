package com.fpt.petstore.entities;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

/**
 * @author linuss
 */
@Entity
@Table(name = "product",
uniqueConstraints = {
    @UniqueConstraint(columnNames = {"code"})
})
@JsonInclude(Include.NON_NULL)
@Setter @Getter
@NoArgsConstructor
public class Product extends BaseProduct {

  static public enum ProductType {CLOTHES, CAT, DOG, HAMSTER, LEASH };

  @Enumerated(EnumType.STRING)
  private ProductType type;

  public Product(String name) {
    this.name = name;
  }

  public Product withProductType(ProductType type) {
    this.type = type;
    return this;
  }
}
