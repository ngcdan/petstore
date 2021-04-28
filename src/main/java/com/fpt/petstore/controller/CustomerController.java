package com.fpt.petstore.controller;

import java.io.File;
import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Map;

import javax.mail.internet.MimeMessage;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.transaction.Transactional;

import com.fpt.petstore.entities.BaseAccount;
import com.fpt.petstore.services.FileUploadUtil;
import com.fpt.petstore.util.DateUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.fpt.petstore.entities.Customer;
import com.fpt.petstore.services.PetStoreService;

import static com.fpt.petstore.entities.ConstVariable.*;

/**
 * Created by Nizis on 2/1/2021.
 */
@Controller
@SuppressWarnings("unchecked")
public class CustomerController {
    @Autowired
    private JavaMailSender mailSender;
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
            rA.addFlashAttribute("callModal", "callModal");
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

        Customer customer = new Customer(fullName).
                withUsername(email).
                withPassword(password).
                withPhone(phoneNumber).
                withAddress(address).
                withAvartar("customer-default.jpg").
                withGender(BaseAccount.Gender.valueOf(gender)).
                withEmail(email);

        Customer customerExistCustomer = petStoreService.findCustomerbyEmail(email);
        if (customerExistCustomer != null) {
            redirectAttributes.addFlashAttribute(messageNotification, "Email trùng đã bị trùng. Vui lòng nhập email khác");
            redirectAttributes.addFlashAttribute(themeNotification, "error");
            redirectAttributes.addFlashAttribute(titleNotification, "Lỗi");
            redirectAttributes.addFlashAttribute("callModalRegister", "callModalRegister");
            return redirectRefer + referer;
        }
        if (email.equals("") || password.equals("") || confirm.equals("") || phoneNumber.equals("") || gender.equals("") || address.equals("") || fullName.equals("")) {
            redirectAttributes.addFlashAttribute(messageNotification, "Không được để trống");
            redirectAttributes.addFlashAttribute(themeNotification, "error");
            redirectAttributes.addFlashAttribute(titleNotification, "Lỗi");
            redirectAttributes.addFlashAttribute("callModalRegister", "callModalRegister");
            return redirectRefer + referer;
        }
        if (confirm.equals(password)) {
            petStoreService.saveCustomer(customer);
            redirectAttributes.addFlashAttribute(messageNotification, "Tạo tài khoản thành công");
            redirectAttributes.addFlashAttribute(themeNotification, "success");
            redirectAttributes.addFlashAttribute(titleNotification, "Thành công");
            return redirectRefer + referer;
        } else {
            redirectAttributes.addFlashAttribute(messageNotification, "Lỗi mật khẩu không trùng");
            redirectAttributes.addFlashAttribute(themeNotification, "error");
            redirectAttributes.addFlashAttribute(titleNotification, "Lỗi");
            redirectAttributes.addFlashAttribute("callModalRegister", "callModalRegister");
            return redirectRefer + referer;
        }
    }

    @PostMapping("/updateInfor")
    public String updateInfor(HttpServletRequest request, @RequestParam Map<String, String> m, @RequestParam("avatarUrl") MultipartFile multipartFile, HttpSession session, RedirectAttributes redirectAttributes) throws IOException {
        String referer = request.getHeader("Referer");
        Customer sessionCustomer = (Customer) session.getAttribute("customer");
        String fullName = m.get("fullName");
        String phone = m.get("phoneNumber");
        String avatarUrl = StringUtils.cleanPath(multipartFile.getOriginalFilename());
        String address = m.get("address");
        String birthday = m.get("birthday");
        Date birthdayFormat = DateUtil.parseDate(birthday);
        if(avatarUrl.equals("")){
            petStoreService.updateCustomer(sessionCustomer.getId(), fullName, phone, address, sessionCustomer.getAvatarUrl(), birthdayFormat);
        }else{
            petStoreService.updateCustomer(sessionCustomer.getId(), fullName, phone, address, avatarUrl, birthdayFormat);
            String uploadDir = "user-photos/" + sessionCustomer.getId();
            FileUploadUtil.saveFile(uploadDir, avatarUrl, multipartFile);
        }
        redirectAttributes.addFlashAttribute(messageNotification, "Cập nhật tài khoản thành công");
        redirectAttributes.addFlashAttribute(themeNotification, "success");
        redirectAttributes.addFlashAttribute(titleNotification, "Thành công");

        return redirectRefer + referer;
    }

    @PostMapping("/updatePassword")
    public String updatePassword(@RequestParam Map<String, String> m, HttpServletRequest request, HttpSession session, RedirectAttributes redirectAttributes) {
        String referer = request.getHeader("Referer");
        Customer sessionCustomer = (Customer) session.getAttribute("customer");
        String oldPassword = m.get("oldPassword");
        String newPassword = m.get("newPassword");
        String confirmPassword = m.get("confirmPassword");
        Customer passwordExist = petStoreService.findCustomerByPassword(sessionCustomer.getId(), oldPassword);
        if (passwordExist != null) {
            if (newPassword.equals(confirmPassword)) {
                petStoreService.updatePassword(sessionCustomer.getId(), newPassword);
                redirectAttributes.addFlashAttribute(messageNotification, "Cập nhật mật khẩu thành công");
                redirectAttributes.addFlashAttribute(themeNotification, "success");
                redirectAttributes.addFlashAttribute(titleNotification, "Thành công");
            } else {
                redirectAttributes.addFlashAttribute(messageNotification, "Mật khẩu mới không trùng với mật khẩu xác nhận");
                redirectAttributes.addFlashAttribute(themeNotification, "error");
                redirectAttributes.addFlashAttribute(titleNotification, "Lỗi");
                redirectAttributes.addFlashAttribute("callModalChange", "callModalChange");
            }

        } else {
            redirectAttributes.addFlashAttribute(messageNotification, "Mật khẩu cũ không đúng");
            redirectAttributes.addFlashAttribute(themeNotification, "error");
            redirectAttributes.addFlashAttribute(titleNotification, "Lỗi");
            redirectAttributes.addFlashAttribute("callModalChange", "callModalChange");
        }

        return redirectRefer + referer;
    }
    @GetMapping("/quen-mat-khau/{id}")
    public String viewForgetPassword(@PathVariable("id") long id, ModelMap modelMap,HttpSession session,RedirectAttributes redirectAttributes){
        Customer sessionCustomer = (Customer) session.getAttribute("customerEmail");
        if(sessionCustomer!=null){
            modelMap.addAttribute("customerId",id);
            return "forgetPassword";
        }else{
            redirectAttributes.addFlashAttribute(messageNotification, "Lỗi");
            redirectAttributes.addFlashAttribute(themeNotification, "error");
            redirectAttributes.addFlashAttribute(titleNotification, "Lỗi");
            return redirect+"trang-chu";
        }

    }
    @PostMapping("/send-mail-changepass")
    @Transactional
    public String sendMailChange(@RequestParam Map<String,String > m, RedirectAttributes redirectAttributes,HttpSession session ){
        String email = m.get("email");
        Customer findCustomerbyEmail = petStoreService.findCustomerbyEmail(email);
        if(findCustomerbyEmail!=null) {
            try {
                session.setAttribute("customerEmail",findCustomerbyEmail);
                MimeMessage message = mailSender.createMimeMessage();
                MimeMessageHelper helper = new MimeMessageHelper(message);
                String from = "petscoffeeandservices@gmail.com";
                String subject = "Thư đổi mật khẩu";
                String url = "http://localhost:8081/quen-mat-khau/"+findCustomerbyEmail.getId() ;
                String body = "<h3>ĐỔI MẬT KHẨU TẠI ĐÂY</h3>" +
                        "<a href='"+url+"'>Click here</a>";
                helper.setFrom(from, from);
                helper.setTo(email);
                helper.setReplyTo(from, from);
                helper.setSubject(subject);
                helper.setText(body, true);
                mailSender.send(message);
                redirectAttributes.addFlashAttribute(messageNotification, "Thư đổi mật khẩu đã gửi về mail của bạn");
                redirectAttributes.addFlashAttribute(themeNotification, "success");
                redirectAttributes.addFlashAttribute(titleNotification, "Thành công");

            } catch (Exception e) {
                e.printStackTrace();
                redirectAttributes.addFlashAttribute(messageNotification, "Lỗi");
                redirectAttributes.addFlashAttribute(themeNotification, "error");
                redirectAttributes.addFlashAttribute(titleNotification, "Lỗi");
            }
        }else{
            redirectAttributes.addFlashAttribute(messageNotification, "Không tìm thấy mail");
            redirectAttributes.addFlashAttribute(themeNotification, "error");
            redirectAttributes.addFlashAttribute(titleNotification, "Thất bại");
        }

        return redirect+"trang-chu";
    }
    @PostMapping("/changePassword")
    @Transactional
    public String formChangePassword(@RequestParam Map<String,String> m,HttpSession session,RedirectAttributes redirectAttributes,HttpServletRequest request){
       String referer = request.getHeader("referer");
        long id = Long.parseLong(m.get("customerId"));
        String newPassword = m.get("newPassword");
        String confirmPassword =m.get("confirmPassword");
        if(confirmPassword.equals(newPassword)){
            petStoreService.updatePassword(id,newPassword);
            session.removeAttribute("customerEmail");
            redirectAttributes.addFlashAttribute(messageNotification, "Đổi mật khẩu thành công");
            redirectAttributes.addFlashAttribute(themeNotification, "success");
            redirectAttributes.addFlashAttribute(titleNotification, "Thành công");
            return redirect+"trang-chu";
        }else{
            redirectAttributes.addFlashAttribute(messageNotification, "Mật khẩu xác nhận không trùng với mật khẩu mới");
            redirectAttributes.addFlashAttribute(themeNotification, "error");
            redirectAttributes.addFlashAttribute(titleNotification, "Thất bại");
            return redirectRefer+referer;
        }

    }
}
