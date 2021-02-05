package com.fpt.petstore.controller;

import com.fpt.petstore.entities.Product;
import com.fpt.petstore.services.PetStoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

import static com.fpt.petstore.entities.ConstVariable.PRODUCTPERPAGE;

/**
 * Created by Nizis on 2/2/2021.
 */
@Controller
public class ProductController {
    @Autowired
    private PetStoreService petStoreService;
    @GetMapping("/san-pham/{page}")
    public String viewProduct(@PathVariable(value = "page")int page, ModelMap model){
        Page<Product> listProductbyPage = petStoreService.listProductbyPage(PageRequest.of(page-1,PRODUCTPERPAGE));
        List<Integer> listPage = petStoreService.calculateTotalPage(petStoreService.countProduct(),PRODUCTPERPAGE);
        model.addAttribute("pageSize",listPage);
        model.addAttribute("listProduct",listProductbyPage.getContent());
        model.addAttribute("currentPage",page);
        if(page > listPage.size()){
            return "/error/404error";
        }
        return "product";
    }

}
