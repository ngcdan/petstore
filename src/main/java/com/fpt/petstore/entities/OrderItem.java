
package com.fpt.petstore.entities;

import javax.persistence.*;
import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

/**
 * @author linuss
 */

@Entity
@Table(
	name = "order_item",
	indexes = {
		@Index(columnList="name")
	}
)
@JsonInclude(JsonInclude.Include.NON_NULL)
@NoArgsConstructor
@Setter @Getter
public class OrderItem extends AbstractPersistable<Long> {
	static enum ItemType { FOOD, PRODUCT};

	@NotNull
	String name;
	String label;

	@Column(length=1024 * 32)
	String description;

	@DecimalMin(value = "0")
	int quantity;

	@NotNull
	@DecimalMin(value = "0")
	int total;

	@Enumerated(EnumType.STRING)
	private ItemType type;

	String currency = "VND";

	@ManyToOne(optional = true)
	@JoinColumn(name = "productId", nullable = true)
	private Product product;

	@ManyToOne(optional = true)
	@JoinColumn(name = "foodId", nullable = true)
	private Food food;

	public OrderItem(Product product, int total ) {
		this.product = product;
		this.total = total;
	}

	@Deprecated
	public OrderItem(Food food, int total) {
		this.food = food;
		this.total = total;
	}

	public OrderItem newOrderItem(Food food) {
		this.name = food.getName();
		this.label = "Food Item";
		this.description = "Food Item " + food.getName();
		this.quantity = 1;
		this.total = food.getPrice();
		this.type = ItemType.FOOD;
		return this;
	}

	public OrderItem newOrderItem(Product product) {
		this.name = product.getName();
		this.label = "Product Item";
		this.description = "Product Item " + product.getName();
		this.quantity = 1;
		this.total = food.getPrice();
		this.type = ItemType.PRODUCT;
		return this;
	}
}
