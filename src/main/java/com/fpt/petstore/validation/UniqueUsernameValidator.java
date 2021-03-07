package com.fpt.petstore.validation;

import com.fpt.petstore.repository.CustomerRepository;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

@NoArgsConstructor
public class UniqueUsernameValidator implements ConstraintValidator<UniqueUsername, String> {

	@Autowired
	private CustomerRepository customerRepo;

	@Override
	public boolean isValid(String username, ConstraintValidatorContext context) {
		return  username != null && customerRepo.findByUsername(username) == null;
	}
}
