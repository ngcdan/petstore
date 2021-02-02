package com.fpt.petstore.controller;
import com.fpt.petstore.entities.Product;
import com.fpt.petstore.services.PetStoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Controller
public class AppController {

  @Autowired

  private PetStoreService petStoreService;



  @GetMapping("/")
  public String viewHome() {
    return "redirect:/trang-chu";
  }

  @GetMapping("/trang-chu")

  public String viewHome2(ModelMap model) {
    List<Product> list = petStoreService.findAllProducts();
    model.addAttribute("listProduct", list);

    return "index";
  }

  @GetMapping("/about")
  public String viewAbout() {
    return "about";
  }

  @GetMapping("/blog")
  public String viewBlog() {
    return "blog";
  }

  @GetMapping("/blog-detail")
  public String viewBlogDetails() {
    return "blog-detail";
  }

  @GetMapping("/checkout")
  public String viewCheckout() {
    return "checkout";
  }

  @GetMapping("/product-details")
  public String viewProductDetail() {
    return "product-details";
  }


  @GetMapping("/cart")
  public String viewsCart() {
    return "cart";
  }

  @GetMapping("/contact")
  public String viewContact() {
    return "contact";
  }

}
