package com.fpt.petstore.controller;

import static com.fpt.petstore.entities.ConstVariable.redirect;

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
            return "redirect:"+referer;
        } else {
            rA.addFlashAttribute("error", "Sai Email hoặc mật khẩu");
            return redirect;
        }


    }

    @GetMapping(value = {"/loggout"})
    public String viewLogout(HttpSession session,HttpServletRequest request) {
        String referer = request.getHeader("Referer");
        session.removeAttribute("customer");
        return "redirect:"+referer;
    }
    @PostMapping(value = "/register")
    public String doARegister(@RequestParam Map<String,String> m, RedirectAttributes redirectAttributes){
        String password = m.get("password");
        String confirm = m.get("confirmPassword");
        String phoneNumber = m.get("phoneNumber");
        String email = m.get("email");
        String gender = m.get("radio");
        Customer.Gender.valueOf(gender);
        String address = m.get("address");
        String fullName =m.get("fullName");
        Customer customer = new Customer(email,phoneNumber,password,fullName,"",Customer.Gender.valueOf(gender),address);

        if(confirm.equals(password)){
            petStoreService.saveCustomer(customer);
            redirectAttributes.addFlashAttribute("messRes","dang ky thanh cong");
            return redirect+"trang-chu";
        }else{
            redirectAttributes.addFlashAttribute("error1","Mat khau xac nhan khong  trung voi mat khau da nhap");
            return redirect;
        }


    }
}
