package com.fpt.petstore.controller;

import com.fpt.petstore.entities.Product;
import com.fpt.petstore.services.PetStoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * Created by Nizis on 2/2/2021.
 */
@Controller
public class ProductController {
    @Autowired
    private PetStoreService petStoreService;
    @GetMapping("/product")
    public String viewProduct(ModelMap model){
        List<Product> list = petStoreService.findAllProducts();
        model.addAttribute("listProduct",list);
        return "product";
    }
    @GetMapping("/product2")
    @ResponseBody
    public List<Product> listProductLimit(ModelMap model){
        List<Product> list1 = petStoreService.productListlimit3();
        model.addAttribute("listProductLimit",list1);
        return list1;
    }
}
