package com.fpt.petstore.controller;

import com.fpt.petstore.entities.Product;
import com.fpt.petstore.services.PetStoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;
import static com.fpt.petstore.entities.ConstVariable.redirect;
@Controller
public class AppController {

    @Autowired
    private PetStoreService petStoreService;

    @GetMapping(value = {"/"})
    public String viewHome() {
        return redirect+"trang-chu";
    }

    @GetMapping("/trang-chu")
    public String viewHome2(ModelMap model) {
        List<Product> list = petStoreService.findAllProducts();
        model.addAttribute("listProduct", list);
        return "index";
    }

    @GetMapping("/ve-chung-toi")
    public String viewAbout() {
        return "about";
    }

    @GetMapping("/blog")
    public String viewBlog() {
        return "blog";
    }

    @GetMapping("/chi-tiet-blog")
    public String viewBlogDetails() {
        return "blog-detail";
    }

    @GetMapping("/thanh-toan")
    public String viewCheckout() {
        return "checkout";
    }

    @GetMapping("/chi-tiet-san-pham")
    public String viewProductDetail() {
        return "product-details";
    }


    @GetMapping("/gio-hang")
    public String viewsCart() {
        return "cart";
    }

    @GetMapping("/lien-he")
    public String viewContact() {
        return "contact";
    }

}
