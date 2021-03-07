package com.fpt.petstore.controller;

import static com.fpt.petstore.entities.ConstVariable.PRODUCTPERPAGE;
import static com.fpt.petstore.entities.ConstVariable.redirect;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.fpt.petstore.entities.Food;
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
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

/**
 * Created by Nizis on 2/2/2021.
 */
@Controller
@RequestMapping("/shop")
public class ProductController {
    private static final String CATEGORY_FOOD = "food";
    private static final String CATEGORY_PRODUCT = "vat-pham-thu-cung";
    private static final String TITLE_PRODUCT = "Vật phẩm thú cưng";
    private static final String TITLE_FOOD = "Thức ăn - đồ uống";

    @Autowired
    private PetStoreService petStoreService;

    @GetMapping("/{category}/{page}")
    public String viewProduct(@PathVariable(value = "category") String category, @PathVariable(value = "page") int page, ModelMap model) {
        if (category.equalsIgnoreCase(CATEGORY_PRODUCT)) {
            Page<Product> listProductbyPage = petStoreService.listProductbyPage(PageRequest.of(page - 1, PRODUCTPERPAGE));
            List<Integer> listPage = petStoreService.calculateTotalPage(petStoreService.countProduct(), PRODUCTPERPAGE);
            model.addAttribute("pageSize", listPage);
            model.addAttribute("listProduct", listProductbyPage.getContent());
            model.addAttribute("currentPage", page);
            model.addAttribute("category", CATEGORY_PRODUCT);
            model.addAttribute("title", TITLE_PRODUCT);
            if (page > listPage.size()) {
                return "/error/404error";
            }
        } else {
            Page<Food> listFoodperPage = petStoreService.listFoodPerPage(PageRequest.of(page - 1, PRODUCTPERPAGE));
            List<Integer> listPage = petStoreService.calculateTotalPage(petStoreService.countFood(), PRODUCTPERPAGE);
            model.addAttribute("pageSize", listPage);
            model.addAttribute("listProduct", listFoodperPage.getContent());
            model.addAttribute("currentPage", page);
            model.addAttribute("category", CATEGORY_FOOD);
            model.addAttribute("title", TITLE_FOOD);
            if (page > listPage.size()) {
                return "/error/404error";
            }
        }
        return "product";
    }

    @GetMapping("/addtocart/{category}/{code}")
    public String addToCart(@PathVariable("code") String code, @PathVariable("category") String category, HttpServletRequest request, HttpSession session) {
       String referer = request.getHeader("Referer");
        Product product = petStoreService.getProductByCode(code);
        Food food = petStoreService.getFoodByCode(code);

        Map<String, OrderItem> listCart = (Map<String, OrderItem>) session.getAttribute("listCart");
        if (listCart == null) {
            listCart = new HashMap<>();
            session.setAttribute("listCart", listCart);
        }
        if (category.equalsIgnoreCase(CATEGORY_PRODUCT)) {
            if (listCart.get(product.getCode())!=null) {
                OrderItem cart = listCart.get(product.getCode());
                cart.setQuantity(cart.getQuantity() + 1);
                cart.setTotal(cart.getQuantity() * product.getPrice());
                listCart.put(product.getCode(),cart);
            }else{
                OrderItem newCart = new OrderItem(product,product.getPrice());
                listCart.put(product.getCode(),newCart);
            }
        }else{
            if (listCart.get(food.getCode())!=null) {
                OrderItem cart = listCart.get(food.getCode());
                cart.setQuantity(cart.getQuantity() + 1);
                cart.setTotal(cart.getQuantity() * food.getPrice());
                listCart.put(food.getCode(),cart);
            }else{
                OrderItem newCart = new OrderItem(food,food.getPrice());
                listCart.put(food.getCode(),newCart);
            }
        }
        session.setAttribute("listCart", listCart);
        return "redirect:"+referer;
    }
}
