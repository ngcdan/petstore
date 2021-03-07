package com.fpt.petstore.request;


import com.fpt.petstore.validation.PasswordConfirmed;
import com.fpt.petstore.validation.PasswordPolicy;
import com.fpt.petstore.validation.UniqueEmail;
import com.fpt.petstore.validation.UniqueUsername;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;

@AllArgsConstructor
@Getter @Setter @NoArgsConstructor
@PasswordConfirmed
public class CustomerRegisterRequest {

	@NotEmpty(message = "Please enter your first name")
	private String firstName;

	@NotEmpty(message = "Please enter your last name")
	private String lastName;

	@UniqueUsername
	private String username;

	@UniqueEmail
	@Email(message = "Email is not valid")
	private String email;

	@NotEmpty(message = "Please enter in a password")
	@PasswordPolicy
	private String password;

	@NotEmpty(message = "Please enter your password")
	private String confirmPassword;
}
