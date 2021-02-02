package com.fpt.petstore.controller;

import com.fpt.petstore.entities.Customer;
import com.fpt.petstore.entities.Employee;
import com.fpt.petstore.services.PetStoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.servlet.http.HttpSession;
import java.util.Map;

/**
 * Created by Nizis on 2/1/2021.
 */
@Controller
public class LoginController {
    private final String redirect = "redirect:/";
    @Autowired
    private PetStoreService petStoreService;

    @PostMapping(value = {"/login"})
    public String login(@RequestParam Map<String, String> m, RedirectAttributes rA, HttpSession session) {
        String email = m.get("email");
        String password = m.get("password");
        Customer customer = petStoreService.customerLogin(email, password);
        if (customer != null) {
            session.setAttribute("customer", customer);
            return "index";
        } else {
            rA.addFlashAttribute("error", "Sai Email hoặc mật khẩu");
            return redirect;
        }


    }

    @GetMapping(value = {"/logout"})
    public String logout(HttpSession session) {
        session.removeAttribute("customer");
        return redirect;
    }
}
