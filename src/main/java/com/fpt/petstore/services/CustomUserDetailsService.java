package com.fpt.petstore.services;


import com.fpt.petstore.entities.Customer;
import com.fpt.petstore.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CustomUserDetailsService implements UserDetailsService {
	@Autowired
	CustomerRepository customerRepo;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

		Customer customer =
			Optional.of(customerRepo.findByUsername(username)).orElseThrow(() -> new UsernameNotFoundException(username));
		return User.withUsername(customer.getUsername()).password(customer.getPassword()).authorities(String.valueOf(
			customer.getRole())).disabled(!customer.isVerified()).build();
	}
}
