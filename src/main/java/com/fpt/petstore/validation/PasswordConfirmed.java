package com.fpt.petstore.validation;

import javax.validation.Payload;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Target({ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)
public @interface PasswordConfirmed {
	String message() default "Passwords do not match";
	Class<?>[] groups() default {};
	Class<? extends Payload>[] payload() default {};
}