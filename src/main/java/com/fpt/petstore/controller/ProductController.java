package com.fpt.petstore.controller;

import static com.fpt.petstore.entities.ConstVariable.PRODUCTPERPAGE;
import static com.fpt.petstore.entities.ConstVariable.redirect;

import java.util.List;

import com.fpt.petstore.entities.OrderItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.fpt.petstore.entities.Product;
import com.fpt.petstore.services.PetStoreService;

import javax.servlet.http.HttpSession;

/**
 * Created by Nizis on 2/2/2021.
 */
@Controller
public class ProductController {
    @Autowired
    private PetStoreService petStoreService;

    @GetMapping("/vat-pham-thu-cung/{page}")
    public String viewProduct(@PathVariable(value = "page") int page, ModelMap model) {
        Page<Product> listProductbyPage = petStoreService.listProductbyPage(PageRequest.of(page - 1, PRODUCTPERPAGE));
        List<Integer> listPage = petStoreService.calculateTotalPage(petStoreService.countProduct(), PRODUCTPERPAGE);
        model.addAttribute("pageSize", listPage);
        model.addAttribute("listProduct", listProductbyPage.getContent());
        model.addAttribute("currentPage", page);
        if (page > listPage.size()) {
            return "/error/404error";
        }
        return "product";
    }

    @GetMapping("addtocart/{id}")
    public String addToCart(@PathVariable("id") int id, HttpSession session) {

        return redirect;
    }
}
