package com.fpt.petstore.controller;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.fpt.petstore.entities.Customer;
import com.fpt.petstore.services.PetStoreService;

import static com.fpt.petstore.entities.ConstVariable.*;

/**
 * Created by Nizis on 2/1/2021.
 */
@Controller
public class CustomerController {

    @Autowired
    private PetStoreService petStoreService;


    @PostMapping(value = {"/login"})
    public String login(@RequestParam Map<String, String> m, RedirectAttributes rA, HttpSession session, HttpServletRequest request) {
        String referer = request.getHeader("Referer");
        String email = m.get("email");
        String password = m.get("password");
        Customer customer = petStoreService.customerLogin(email, password);
        if (customer != null) {
            session.setAttribute("customer", customer);
            return "redirect:" + referer;
        } else {
            rA.addFlashAttribute(messageNotification, "Sai Email hoặc mật khẩu");
            rA.addFlashAttribute(themeNotification, "error");
            rA.addFlashAttribute(titleNotification, "Lỗi");
            return "redirect:" + referer;
        }


    }

    @GetMapping(value = {"/loggout"})
    public String viewLogout(HttpSession session, HttpServletRequest request) {
        String referer = request.getHeader("Referer");
        session.removeAttribute("customer");
        return redirectRefer + referer;
    }

    @PostMapping(value = "/register")
    public String doARegister(@RequestParam Map<String, String> m, RedirectAttributes redirectAttributes, HttpServletRequest request) {

        String referer = request.getHeader("Referer");
        String password = m.get("password");
        String confirm = m.get("confirmPassword");
        String phoneNumber = m.get("phoneNumber");
        String email = m.get("email");
        String gender = m.get("radio");
        String address = m.get("address");
        String fullName = m.get("fullName");

        Customer customer = new Customer(email, phoneNumber, password, fullName, "", Customer.Gender.valueOf(gender), address);
        Customer customer1 = petStoreService.findCustomerbyEmail(email);
        if(customer1!=null){
            redirectAttributes.addFlashAttribute(messageNotification, "Email trùng đã bị trùng. Vui lòng nhập email khác");
            redirectAttributes.addFlashAttribute(themeNotification, "error");
            redirectAttributes.addFlashAttribute(titleNotification, "Lỗi");
            return redirectRefer + referer;
        }
        if (email==null || password.equals("") || confirm.equals("") || phoneNumber.equals("") || gender.equals("") || address.equals("") || fullName.equals("")) {
            redirectAttributes.addFlashAttribute(messageNotification, "Không được để trống");
            redirectAttributes.addFlashAttribute(themeNotification, "error");
            redirectAttributes.addFlashAttribute(titleNotification, "Lỗi");
            return redirectRefer + referer;
        }
        if (confirm.equals(password)) {
            petStoreService.saveCustomer(customer);
            redirectAttributes.addFlashAttribute(messageNotification, "Tạo tài khoản thành công");
            redirectAttributes.addFlashAttribute(themeNotification, "success");
            redirectAttributes.addFlashAttribute(titleNotification, "Thành công");
            return redirectRefer + referer;
        } else {
            redirectAttributes.addFlashAttribute(messageNotification, "Lỗi");
            redirectAttributes.addFlashAttribute(themeNotification, "error");
            redirectAttributes.addFlashAttribute(titleNotification, "Lỗi");
            return redirectRefer + referer;
        }


    }
}
