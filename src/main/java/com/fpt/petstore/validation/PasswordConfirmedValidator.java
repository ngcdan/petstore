package com.fpt.petstore.validation;


import com.fpt.petstore.request.CustomerRegisterRequest;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class PasswordConfirmedValidator implements ConstraintValidator<PasswordConfirmed, Object> {

	@Override
	public boolean isValid(Object user, ConstraintValidatorContext context) {
		String password = ((CustomerRegisterRequest) user).getPassword();
		String confirmedPassword = ((CustomerRegisterRequest) user).getConfirmPassword();
		return password.equals(confirmedPassword);
	}
}
