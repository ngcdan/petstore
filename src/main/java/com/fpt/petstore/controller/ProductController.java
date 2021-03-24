package com.fpt.petstore.controller;

import java.net.URLDecoder;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.*;
import java.util.concurrent.ThreadLocalRandom;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fpt.petstore.entities.*;
import com.fpt.petstore.services.CookieService;
import com.fpt.petstore.util.StringUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

import com.fpt.petstore.services.PetStoreService;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import static com.fpt.petstore.entities.ConstVariable.*;

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
    @Autowired
    private CookieService cookieService;
    @GetMapping("/{category}/{page}")
    public String viewProduct(@PathVariable(value = "category") String category, @PathVariable(value = "page") int page, ModelMap model,HttpSession session) {
        //phan trang cho cart
        String listCartAsJson = cookieService.getValue("listCart", "");
        //if json list cart is empty
        if (!StringUtil.isEmpty(listCartAsJson) && session.getAttribute("listCart") == null) {
            Map<String, OrderItem> listCart = null;
            try {
                //decode json cookie and set to name session
                listCartAsJson = URLDecoder.decode(listCartAsJson, StandardCharsets.UTF_8.toString());
                //doc value json
                listCart = new ObjectMapper().readValue(listCartAsJson, new TypeReference<Map<String, OrderItem>>() {
                });
            } catch (Exception e) {
                e.printStackTrace();
            }
            //set attribute session
            session.setAttribute("listCart", listCart);
            if (category.equalsIgnoreCase(CATEGORY_PRODUCT)) {

                Integer countproduct = petStoreService.countProduct();
                Page<Product> listProductbyPage = petStoreService.listProductbyPage(PageRequest.of(page - 1, PRODUCTPERPAGE));
                List<Integer> listPage = petStoreService.calculateTotalPage(countproduct, PRODUCTPERPAGE);
                model.addAttribute("pageSize", listPage);
                model.addAttribute("listProduct", listProductbyPage.getContent());
                model.addAttribute("currentPage", page);
                model.addAttribute("category", CATEGORY_PRODUCT);
                model.addAttribute("title", TITLE_PRODUCT);
                model.addAttribute("numberProduct", countproduct);
                model.addAttribute("productPerPage", PRODUCTPERPAGE);

                if (page > listPage.size()) {
                    return "error/404error";
                }
            } else {
                Integer countFood = petStoreService.countFood();
                Page<Food> listFoodperPage = petStoreService.listFoodPerPage(PageRequest.of(page - 1, PRODUCTPERPAGE));
                List<Integer> listPage = petStoreService.calculateTotalPage(petStoreService.countFood(), PRODUCTPERPAGE);
                model.addAttribute("pageSize", listPage);
                model.addAttribute("listProduct", listFoodperPage.getContent());
                model.addAttribute("currentPage", page);
                model.addAttribute("category", CATEGORY_FOOD);
                model.addAttribute("title", TITLE_FOOD);
                model.addAttribute("numberProduct", countFood);
                model.addAttribute("productPerPage", PRODUCTPERPAGE);
                if (page > listPage.size()) {
                    return "/error/404error";
                }
            }
        }
        return "product";
    }

    @GetMapping("/addtocart/{category}/{code}")
    public String addToCart(@PathVariable("code") String code, @PathVariable("category") String category, HttpServletRequest request, HttpSession session, ModelMap modelMap, RedirectAttributes redirectAttributes) {
       String referer = request.getHeader("Referer");
        Product product = petStoreService.getProductByCode(code);
        Food food = petStoreService.getFoodByCode(code);
        //create map for session cart
        Map<String, OrderItem> listCart = (Map<String, OrderItem>) session.getAttribute("listCart");
        if (listCart == null) {
            listCart = new HashMap<>();
            session.setAttribute("listCart", listCart);
        }
        if (category.equalsIgnoreCase(CATEGORY_PRODUCT)) {
            //set cart
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
        //Set notification form
        redirectAttributes.addFlashAttribute(messageNotification,"Thêm vào giỏ hàng");
        redirectAttributes.addFlashAttribute(themeNotification,"success");
        redirectAttributes.addFlashAttribute(titleNotification,"Thành công");
        // update to cookie
        String listCartAsJson = "";
        try {
            //encoder json and write value as String to listcart
            listCartAsJson = URLEncoder.encode(new ObjectMapper().writeValueAsString(listCart), StandardCharsets.UTF_8.toString());
        } catch (Exception e) {
            e.printStackTrace();
        }
        //create cookie
        cookieService.create("listCart",listCartAsJson, 24);
        return redirectRefer+referer;
    }
    @PostMapping("/updateCart")
    public String updateCart(HttpServletRequest request,HttpSession session,RedirectAttributes redirectAttributes){

        String []productCodes = request.getParameterValues("productCode");
        String []foodCodes = request.getParameterValues("foodCode");
        String []foodQuantity = request.getParameterValues("foodQuantity");
        String []productQuantity = request.getParameterValues("productQuantity");
        Map<String,OrderItem> listCart = (Map<String, OrderItem>) session.getAttribute("listCart");
        if(productCodes!=null){
            for(int i = 0; i < productCodes.length; i++) {
                OrderItem cart = listCart.get(productCodes[i]);
                cart.setQuantity(Integer.parseInt(productQuantity[i]));
                cart.setTotal(cart.getQuantity() * cart.getProduct().getPrice());
            }
        }if(foodCodes!=null){
            for(int i = 0; i < foodCodes.length; i++) {
                OrderItem cart = listCart.get(foodCodes[i]);
                cart.setQuantity(Integer.parseInt(foodQuantity[i]));
                cart.setTotal(cart.getQuantity() * cart.getFood().getPrice());
            }
        }
        session.setAttribute("listCart", listCart);
        redirectAttributes.addFlashAttribute(messageNotification,"Cập nhật giỏ hàng thành công");
        redirectAttributes.addFlashAttribute(themeNotification,"success");
        redirectAttributes.addFlashAttribute(titleNotification,"Thành công");
        return redirect+"gio-hang";
    }
    @PostMapping("/checkkout")
    public String checkOut(@RequestParam Map<String,String> map , HttpSession session, RedirectAttributes redirectAttributes) {
        String transaction = map.get("transaction");
        if(transaction.equals("") || transaction==null ){
            redirectAttributes.addFlashAttribute(messageNotification,"Chọn đi phương thức thanh toán");
            redirectAttributes.addFlashAttribute(themeNotification,"error");
            redirectAttributes.addFlashAttribute(titleNotification,"Lỗi");
            return redirect+"thanh-toan";
        }else {
            int randomNum = ThreadLocalRandom.current().nextInt(0, 123 + 1);
            Map<String, OrderItem> listCart = (Map<String, OrderItem>) session.getAttribute("listCart");
            Customer customer = (Customer) session.getAttribute("customer");
            int totalPrice = 0;
            for (OrderItem cart : listCart.values()) {
                Product product = cart.getProduct();
                Food food = cart.getFood();
                String name;
                int quantity;
                // set quantity, description, curency thi de VND luon cung dc,
                if (product == null && food == null) {
                    throw new IllegalArgumentException("Expect Product or Food");
                } else {
                    if (product != null) {
                        name = product.getName();
                    } else {
                        name = food.getName();
                    }
                }
                cart.setName(name+randomNum);
                cart.setLabel(name+randomNum);
                cart.setDescription("Ten san pham: " + name + "So luong: " + cart.getQuantity());
                cart.setCurrency("VNĐ");
                totalPrice += cart.getTotal();
            }
            List<OrderItem> listOrderItem = new ArrayList<>(listCart.values());
            String note = map.get("note");
            if (transaction.equals("COD")) {
                Payment payment = new Payment(transaction, Payment.TransactionType.Cash);
                List<Payment> orderTransaction = new ArrayList<>();
                orderTransaction.add(payment);
                Order order = new Order("order_" + randomNum, "order-" + randomNum, customer, orderTransaction, listOrderItem, totalPrice, note, Order.State.PAID);
                petStoreService.saveOrder(order);

            } else {
                Payment payment = new Payment(transaction, Payment.TransactionType.ATM);
                List<Payment> orderTransaction = new ArrayList<>();
                orderTransaction.add(payment);
                Order order = new Order("order_" + randomNum, "order" + randomNum, customer, orderTransaction, listOrderItem, totalPrice, note, Order.State.PAID);
                petStoreService.saveOrder(order);
            }
            session.removeAttribute("listCart");
            cookieService.delete("listCart");
            session.removeAttribute("totalPrice");
            redirectAttributes.addFlashAttribute(messageNotification, "Đặt hàng thành công");
            redirectAttributes.addFlashAttribute(themeNotification, "success");
            redirectAttributes.addFlashAttribute(titleNotification, "Thành công");
            return redirect + "trang-chu";
        }
    }
    @GetMapping("/delete/{code}")
    public String deleteSanPham(@PathVariable("code")String code,HttpSession session,RedirectAttributes redirectAttributes,HttpServletRequest request){
        String referer = request.getHeader("Referer");
        Map<String, OrderItem> listCart = (Map<String, OrderItem>) session.getAttribute("listCart");
        listCart.remove(code);
        session.setAttribute("listCart",listCart);
        redirectAttributes.addFlashAttribute(messageNotification,"Xóa thành công");
        redirectAttributes.addFlashAttribute(themeNotification,"success");
        redirectAttributes.addFlashAttribute(titleNotification,"Thành công");
        return redirectRefer+referer;
    }
}
