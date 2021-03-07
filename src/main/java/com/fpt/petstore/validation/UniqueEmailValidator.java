package com.fpt.petstore.validation;

import com.fpt.petstore.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class UniqueEmailValidator implements ConstraintValidator<UniqueEmail, String> {
	@Autowired
	CustomerRepository customerRepo;

	@Override
	public boolean isValid(String email, ConstraintValidatorContext context) {
		return email != null && customerRepo.findByEmail(email) == null;
	}
}
