package com.fpt.petstore.controller;

import java.io.UnsupportedEncodingException;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.URLDecoder;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.text.DecimalFormat;
import java.util.*;
import java.util.concurrent.ThreadLocalRandom;


import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fpt.petstore.entities.*;
import com.fpt.petstore.services.CookieService;
import com.fpt.petstore.util.DateUtil;
import com.fpt.petstore.util.StringUtil;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.MediaType;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

import com.fpt.petstore.services.PetStoreService;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import static com.fpt.petstore.entities.ConstVariable.*;

/**
 * Created by Nizis on 2/2/2021.
 */
@SuppressWarnings("unchecked")
@Controller
@RequestMapping("/shop")
public class ProductController {
    private static final String CATEGORY_FOOD = "food";
    private static final String CATEGORY_PRODUCT = "vat-pham-thu-cung";
    private static final String TITLE_PRODUCT = "Vật phẩm thú cưng";
    private static final String TITLE_FOOD = "Thức ăn cho vật nuôi";
    private static final Logger LOGGER = LoggerFactory.getLogger(ProductController.class);

    @Autowired
    private PetStoreService petStoreService;
    @Autowired
    private CookieService cookieService;
    @Autowired
    private JavaMailSender sender;

    @GetMapping("/{category}/{page}")
    public String viewProduct(@PathVariable(value = "category") String category, @PathVariable(value = "page") int page, ModelMap model, HttpSession session) {
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
                LOGGER.error(e.getMessage());
            }

            //set attribute session
            session.setAttribute("listCart", listCart);
        }
        //phan trang cho cart
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

            List<Integer> listPage = petStoreService.calculateTotalPage(countFood, PRODUCTPERPAGE);
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

        return "product";
    }

    @GetMapping("/addtocart/{category}/{sortName}")
    public String addToCart(@PathVariable("sortName") String sortName, @PathVariable("category") String category, HttpServletRequest request, HttpSession session, RedirectAttributes redirectAttributes) throws URISyntaxException {
        String referer = request.getHeader("Referer");

        Product product = petStoreService.getProductbySortName(sortName);
        Food food = petStoreService.getFoodbySortName(sortName);
        //create map for session cart
        Map<String, OrderItem> listCart = (Map<String, OrderItem>) session.getAttribute("listCart");
        if (listCart == null) {
            listCart = new HashMap<>();
            session.setAttribute("listCart", listCart);
        }
        if (category.equalsIgnoreCase(CATEGORY_PRODUCT)) {
            //set cart
            if (listCart.get(product.getSortName()) != null) {
                OrderItem cart = listCart.get(product.getSortName());
                cart.setQuantity(cart.getQuantity() + 1);
                cart.setTotal(cart.getQuantity() * product.getPrice());
                listCart.put(product.getSortName(), cart);
            } else {
                OrderItem newCart = new OrderItem(product, product.getPrice());
                listCart.put(product.getSortName(), newCart);
            }
        } else {
            if (listCart.get(food.getSortName()) != null) {
                OrderItem cart = listCart.get(food.getSortName());
                cart.setQuantity(cart.getQuantity() + 1);
                cart.setTotal(cart.getQuantity() * food.getPrice());
                listCart.put(food.getSortName(), cart);
            } else {
                OrderItem newCart = new OrderItem(food, food.getPrice());
                listCart.put(food.getSortName(), newCart);
            }
        }
        session.setAttribute("listCart", listCart);
        //Set notification form
        redirectAttributes.addFlashAttribute(messageNotification, "Thêm vào giỏ hàng");
        redirectAttributes.addFlashAttribute(themeNotification, "success");
        redirectAttributes.addFlashAttribute(titleNotification, "Thành công");
        // update to cookie
        String listCartAsJson = "";

        try {
            //encoder json and write value as String to listcart
            listCartAsJson = URLEncoder.encode(new ObjectMapper().writeValueAsString(listCart), StandardCharsets.UTF_8.toString());

        } catch (Exception e) {
            LOGGER.error(e.getMessage());
        }
        //create cookie
        cookieService.create("listCart", listCartAsJson, 24);

        return redirectRefer + referer;
    }

    @PostMapping("/updateCart")
    public String updateCart(HttpServletRequest request, HttpSession session, RedirectAttributes redirectAttributes) {

        String[] productSortNames = request.getParameterValues("productSortName");
        String[] foodSortNames = request.getParameterValues("foodSortName");
        String[] foodQuantity = request.getParameterValues("foodQuantity");
        String[] productQuantity = request.getParameterValues("productQuantity");

        Map<String, OrderItem> listCart = (Map<String, OrderItem>) session.getAttribute("listCart");
        if (listCart != null) {
            if (productSortNames != null) {
                for (int i = 0; i < productSortNames.length; i++) {
                    OrderItem cart = listCart.get(productSortNames[i]);
                    cart.setQuantity(Integer.parseInt(productQuantity[i]));
                    cart.setTotal(cart.getQuantity() * cart.getProduct().getPrice());
                }
            }

            if (foodSortNames != null) {
                for (int i = 0; i < foodSortNames.length; i++) {
                    OrderItem cart = listCart.get(foodSortNames[i]);
                    cart.setQuantity(Integer.parseInt(foodQuantity[i]));
                    cart.setTotal(cart.getQuantity() * cart.getFood().getPrice());
                }
            }

        }
        session.setAttribute("listCart", listCart);
        //notification javascript
        redirectAttributes.addFlashAttribute(messageNotification, "Cập nhật giỏ hàng thành công");
        redirectAttributes.addFlashAttribute(themeNotification, "success");
        redirectAttributes.addFlashAttribute(titleNotification, "Thành công");
        return redirect + "gio-hang";
    }

    @PostMapping("/checkkout")
    public String checkOut(@RequestParam Map<String, String> map, HttpSession session, RedirectAttributes redirectAttributes) {
        String transaction = map.get("transaction");
        if (transaction.equals("") || transaction == null) {
            redirectAttributes.addFlashAttribute(messageNotification, "Chọn đi phương thức thanh toán");
            redirectAttributes.addFlashAttribute(themeNotification, "error");
            redirectAttributes.addFlashAttribute(titleNotification, "Lỗi");
            return redirect + "thanh-toan";
        } else {
            int randomNum = ThreadLocalRandom.current().nextInt(516, 59881 + 1);
            Map<String, OrderItem> listCart = (Map<String, OrderItem>) session.getAttribute("listCart");

            Customer customerSession = (Customer) session.getAttribute("customer");

            int totalPrice = 0;

            for (OrderItem cart : listCart.values()) {

                Product product = cart.getProduct();

                Food food = cart.getFood();

                String name;

                if (product == null && food == null) {
                    throw new IllegalArgumentException("Expect Product or Food");

                } else {
                    if (product != null) {

                        name = product.getName();
                    } else {

                        name = food.getName();
                    }
                }
                cart.setName(name );
                cart.setLabel(name);
                cart.setDescription("Ten san pham: " + name + " So luong: " + cart.getQuantity());

                cart.setCurrency("VNĐ");

                totalPrice += cart.getTotal();
            }
            List<OrderItem> listOrderItem = new ArrayList<>(listCart.values());
            String note = map.get("note");
            if (note == null || note.equals("")) {
                note = "Order for " + customerSession.getFullName();
            }
            String code = "order_" + randomNum;
            Date newDate = new Date();
            Order order = null;
            Payment payment = null;
            List<Payment> orderTransaction = new ArrayList<>();
            if (transaction.equals("COD")) {

                payment = new Payment(transaction, Payment.TransactionType.Cash, newDate,totalPrice);

                orderTransaction.add(payment);

                order = new Order(code, "order-" + DateUtil.asCompactDateTimeId(new Date()), customerSession, orderTransaction, listOrderItem, note, Order.State.DUE, newDate);

            } else {
                payment = new Payment(transaction, Payment.TransactionType.ATM, newDate,totalPrice);

                orderTransaction.add(payment);

                order = new Order(code, "order-" + DateUtil.asCompactDateTimeId(new Date()), customerSession, orderTransaction, listOrderItem, note, Order.State.DUE, newDate);
            }
            try {
                MimeMessage message = sender.createMimeMessage();
                MimeMessageHelper helper = new MimeMessageHelper(message);
                String from = "Pet-Store-And-Services";
                String subject = "Đã đặt hàng thành công";
                String body = "<div style='width:800px;text-align:center;margin:auto;padding:10px;  border-style: solid;\n" +
                        "  border-color: #8A2BE2;'>" +
                        "<h2>Tài khoản của email này có tên :</h2>"
                        + "<b style='font-size:20px'>" + customerSession.getFullName() + "</b>" + " đã đặt đơn hàng có giá là" +
                        " gồm ";
                for (OrderItem cart : listCart.values()) {

                    Product product = cart.getProduct();


                    Food food = cart.getFood();
                    String name;
                    if (product == null && food == null) {
                        throw new IllegalArgumentException("Expect Product or Food");

                    } else {
                        if (product != null) {

                            name = product.getName();
                        } else {

                            name = food.getName();
                        }
                    }

                    body += "<h4>" + name + "&ensp;&ensp; " + cart.getTotal() + " VNĐ </h4> <br/>";
                }
                body += "<h2>Tổng cộng đơn hàng có giá : " + totalPrice + " VNĐ</h2>";
                body += "</div>";
                helper.setFrom(from, from);
                helper.setTo(customerSession.getEmail());
                helper.setReplyTo(from, from);
                helper.setSubject(subject);
                helper.setText(body, true);
                sender.send(message);
            } catch (Exception e) {
                e.printStackTrace();
            }

            petStoreService.saveOrder(order);
            session.removeAttribute("listCart");
            cookieService.delete("listCart");
            session.removeAttribute("totalPrice");
            redirectAttributes.addFlashAttribute(messageNotification, "Đặt hàng thành công");
            redirectAttributes.addFlashAttribute(themeNotification, "success");
            redirectAttributes.addFlashAttribute(titleNotification, "Thành công");
            return redirect + "trang-chu";
        }
    }

    @GetMapping("/delete/{sortName}")
    public String deleteSanPham(@PathVariable("sortName") String sortName, HttpSession session, RedirectAttributes redirectAttributes, HttpServletRequest request) {
        String referer = request.getHeader("Referer");
        Map<String, OrderItem> listCart = (Map<String, OrderItem>) session.getAttribute("listCart");
        listCart.remove(sortName);
        session.setAttribute("listCart", listCart);
        redirectAttributes.addFlashAttribute(messageNotification, "Xóa thành công");
        redirectAttributes.addFlashAttribute(themeNotification, "success");
        redirectAttributes.addFlashAttribute(titleNotification, "Thành công");
        return redirectRefer + referer;
    }

    @PostMapping(path = "/searchProduct"/*, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE*/)
    @ResponseBody
    public List<Product> findProductbyKeyWord(@RequestParam Map<String, String> m) {
        String option = m.get("select");
        String search = m.get("search");
        List<Product> listSearchProduct = null;

        if (option.equalsIgnoreCase("productName")) {
            listSearchProduct = petStoreService.findProductsByName(search);

        }

        return listSearchProduct;
    }

    @PostMapping(path = "/searchFood")
    @ResponseBody
    public List<Food> findFoodbyKeyword(@RequestParam Map<String, String> m, RedirectAttributes redirectAttributes) {
        String search = m.get("search");
        String option = m.get("select");

        List<Food> listSearchFood = null;
        if (option.equalsIgnoreCase("productName")) {
            listSearchFood = petStoreService.findFoodbyName(search);
        }
        return listSearchFood;
    }
}
