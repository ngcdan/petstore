package com.fpt.petstore.entities;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.MappedSuperclass;
import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.NotNull;

@MappedSuperclass
@JsonInclude(JsonInclude.Include.NON_NULL)
@NoArgsConstructor
@Getter
@Setter
public class BaseProduct extends AbstractPersistable<Long> {

	@NotNull
	protected String name;

	protected String sortName;

	@NotNull
	@DecimalMin(value = "0")
	protected int price;

	protected String pic="snack.jpg";

	@Column(length=1024 * 32)
	protected String description;

	public <T extends BaseProduct> T withName(String name) {
		this.name = name;
		return (T) this;
	}

	public <T extends BaseProduct> T withSortName(String sortName) {
		this.sortName = sortName;
		return (T) this;
	}

	public <T extends BaseProduct> T withPrice(int price) {
		this.price = price;
		return (T) this;
	}

	public <T extends BaseProduct> T withDescription(String description) {
		this.description = description;
		return (T) this;
	}

	public <T extends BaseProduct> T withPic(String pic) {
		this.pic = pic;
		return (T) this;
	}
}
