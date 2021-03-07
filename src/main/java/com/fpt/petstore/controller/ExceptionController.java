package com.fpt.petstore.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ExceptionController {

	@GetMapping("/403")
	public String accessDeniedPage() {
		return "AccessDeniedPage";
	}

	@GetMapping("/404")
	public String errorPage() {
		return "PageNotFound";
	}
}
