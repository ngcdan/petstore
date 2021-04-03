package com.fpt.petstore.entities;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fpt.petstore.util.DateUtil;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.MappedSuperclass;
import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.NotNull;
import java.util.Date;

@MappedSuperclass
@JsonInclude(JsonInclude.Include.NON_NULL)
@NoArgsConstructor @Getter @Setter
public class BaseAccount extends AbstractPersistable<Long> {
	static public enum UserRole { ROLE_Admin, ROLE_User };
	static public enum Gender {Male, Female};

//	@NotNull
	protected String username;

	protected String password;
	protected String fullName;
	protected String email;
	protected String phone;

	@JsonFormat(pattern = DateUtil.COMPACT_DATE_FORMAT)
	protected Date birthday;

	@Column(nullable = true, length = 64)
	protected String avatarUrl="customer-default.jpg";

	@Enumerated(EnumType.STRING)
	protected Gender gender;

	protected String address;

	protected float height = 170;

	protected float weight = 60;

	protected boolean isVerified;

	@Column(name = "personal_id")
	protected String personalId;

	@Column(name = "marital_status")
	protected String maritalStatus = "Single";

	@Enumerated(EnumType.STRING)
	protected UserRole role = UserRole.ROLE_User;

	public <T extends BaseAccount> T withUsername(String username) {
		this.username = username;
		return (T) this;
	}

	public <T extends BaseAccount> T withFullname(String fullName) {
		this.fullName = fullName;
		return (T) this;
	}

	public <T extends BaseAccount> T withEmail(String email) {
		this.email = email;
		return (T) this;
	}

	public <T extends BaseAccount> T withPhone(String phone) {
		this.phone = phone;
		return (T) this;
	}

	public <T extends BaseAccount> T withGender(Gender gender) {
		this.gender = gender;
		return (T) this;
	}

	public <T extends BaseAccount> T withAddress(String address) {
		this.address = address;
		return (T) this;
	}

	public <T extends BaseAccount> T withBirthday(String exp) {
		this.birthday = DateUtil.parseCompactDate(exp);
		return (T) this;
	}

	public <T extends BaseAccount> T withAvartar(String avatarUrl) {
		this.avatarUrl = avatarUrl;
		return (T) this;
	}

	public <T extends BaseAccount> T withPassword(String pw) {
		this.password = pw;
		return (T) this;
	}

}
