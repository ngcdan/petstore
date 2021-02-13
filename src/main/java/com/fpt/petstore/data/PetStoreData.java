/**
 * 
 */
package com.fpt.petstore.data;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import com.fpt.petstore.entities.Customer;
import com.fpt.petstore.entities.Employee;
import com.fpt.petstore.entities.Food;
import com.fpt.petstore.entities.Food.FoodType;
import com.fpt.petstore.entities.Order;
import com.fpt.petstore.entities.OrderItem;
import com.fpt.petstore.entities.Payment;
import com.fpt.petstore.entities.Product;

/**
 * @author linuss
 */

public class PetStoreData {

  static String[] ADDRESSES = { "Hà Nội", "Hải Phòng", "Thành phố Hồ Chí Minh", "Quảng Ninh", "Bạc Liêu", "Tây Ninh",
  "Tuyên Quang" };

  static String[] PHONES = { "+84971523160", "+84972350852", "+84978343191", "+84977443785", "+84975830117",
      "+84975097604", "+84979002974", "+84976505077", "+84971541554", "+84978486367", "+84974829834", "+84979422506",
      "+84978504106", "+84979234893", "+84972099083", "+84979622655", "+84974686801", "+84979802671", "+84976458859",
      "+84978813980", "+84973094635", "+84979158307", "+84979386528", "+84974214735", "+84974443744" };

  public static Customer customer_1 = new Customer("Nguyễn Hữu Đức").withEmail("nguyenhuuduc11@gmail.com");
  public static Customer customer_2 = new Customer("Le Van Duc").withEmail("levanduc@11@gmail.com");
  public static Customer customer_3 = new Customer("Nguyen Dinh Tien").withEmail("nguyendinhtien@gmail.com");
  public static Customer customer_4 = new Customer("Tran Thi Hang").withEmail("tranthihang@gmail.com");
  public static Customer customer_5 = new Customer("Võ Thanh Sanh").withEmail("vothanhsanh@gmail.com");
  public static Customer customer_6 = new Customer("Phạm Minh Quân").withEmail("phamminhquan@gmail.com");
  public static Customer customer_7 = new Customer("Trương Trọng Quân").withEmail("truongtrongquan11@gmail.com");
  public static Customer customer_8 = new Customer("Nguyễn Vũ Ngọc Quyên").withEmail("nguyenvungocquyen@gmail.com");
  public static Customer customer_9 = new Customer("Phan Duy Quốc").withEmail("phanduyquoc@gmail.com");
  public static Customer customer_10 = new Customer("Nguyễn Thị Như Quỳnh").withEmail("nguyenthinhuquyen@gmail.com");
  public static Customer customer_11 = new Customer("Lê Hoàng Quân").withEmail("lehoangquan19090@gmail.com");
  public static Customer customer_12 = new Customer("Đinh Văn Phượng").withEmail("dinhvanphuong12@gmail.com");
  public static Customer customer_13 = new Customer("Nguyễn Xuân Sang").withEmail("nguyenxuansang@gmail.com");
  public static Customer customer_14 = new Customer("Lê Phú Quý").withEmail("lephuquy@gmail.com");
  public static Customer customer_15 = new Customer("Lý Quốc Quyền").withEmail("lyquocquyen@gmail.com");
  public static Customer customer_16 = new Customer("Bùi Minh Quân").withEmail("buiminhquan11@gmail.com");
  public static Customer customer_17 = new Customer("Nguyễn Ngọc Sơn").withEmail("nguyenngocson@gmail.com");
  public static Customer customer_18 = new Customer("Bùi Duy Qúy").withEmail("buiduyquy@gmail.com");
  public static Customer customer_19 = new Customer("Võ Hoàng Phương").withEmail("vohoangphuong@gmail.com");
  public static Customer customer_20 = new Customer("Trần Minh Phương").withEmail("tranminhphuong@gmail.com");
  public static Customer customer_21 = new Customer("Võ Khải Hoàng Ca").withEmail("vokhaihoangka@gmail.com");
  public static Customer customer_22 = new Customer("Hà Thị Thùy Chi").withEmail("hathithuychi@gmail.com");
  public static Customer customer_23 = new Customer("Lê Văn Minh Châu").withEmail("levanminhchau@gmail.com");
  public static Customer customer_24 = new Customer("Nguyễn Linh Chi").withEmail("lelinhchi@gmail.com");
  public static Customer customer_25 = new Customer("Lê Thị Phương Chi").withEmail("lethiphuongchi@gmail.com");
  public static Customer customer_26 = new Customer("Nguyễn Duy Chinh").withEmail("nguyenduychinh@gmail.com");
  public static Customer customer_27 = new Customer("Nguyễn Thế Chiến").withEmail("nguyenthechien@gmail.com");
  public static Customer customer_28 = new Customer("Trần Đức Thịnh").withEmail("tranducthinh@gmail.com");
  public static Customer customer_29 = new Customer("Trần Viễn Chinh").withEmail("tranvienchinh@gmail.com");
  public static Customer customer_30 = new Customer("Bùi Văn Chương").withEmail("buivanchuong@gmail.com");

  public static Customer[] ALL_CUSTOMERS = { customer_1, customer_2, customer_3, customer_4, customer_5, customer_6,
      customer_10, customer_11, customer_12, customer_13, customer_14, customer_15, customer_16, customer_17,
      customer_18, customer_19, customer_20, customer_7, customer_8, customer_9, customer_21, customer_22, customer_23,
      customer_24, customer_25, customer_26, customer_27, customer_28, customer_29, customer_30 };

  static public List<Customer> createDataCustomer() {
    List<Customer> customers = new ArrayList<>();
    for (int i = 0; i < ALL_CUSTOMERS.length; i++) {
      Customer customer = ALL_CUSTOMERS[i];
      customer.setPhone(PHONES[new Random().nextInt(PHONES.length)]);
      customer.setAddress(ADDRESSES[new Random().nextInt(ADDRESSES.length)]);
      customers.add(customer);
    }
    return customers;
  };

  // Employee
  public static Employee employee_1  = new Employee("Phạm Võ Hoài Anh").withAddress("Hải Phòng").withEmail("hoaianh@gmail.com").withUsername("phamvohoaianh");
  public static Employee employee_2  = new Employee("Hồ Thanh Bình").withAddress("Hải Phòng").withEmail("hothanhbinh@gmail.com").withUsername("hothanhbinh");;
  public static Employee employee_3  = new Employee("Nguyễn Thái Bình").withAddress("Hải Phòng").withEmail("nguyenthaibinh@gmail.com").withUsername("nguyenthaibinh");
  public static Employee employee_4  = new Employee("Bùi Thái Chánh").withAddress("Hải Phòng").withEmail("buithaichanh@gmail.com").withUsername("buithaichanh");
  public static Employee employee_5  = new Employee("Đỗ Đình Biên").withAddress("Hải Phòng").withEmail("dodinhvien@gmail.com").withUsername("dodinhvien");
  public static Employee employee_6  = new Employee("Nguyễn Phước Biển").withAddress("Hà Nội").withEmail("nguyenphuocbien@gmail.com").withUsername("nguyenphuocbien");
  public static Employee employee_7  = new Employee("Lê Minh Chánh").withAddress("Hà Nội").withEmail("leminhchanh@gmail.com").withUsername("leminhchanh");
  public static Employee employee_8  = new Employee("Lê Thái Bình").withAddress("Hà Nội").withEmail("lethaibinh@gmail.com").withUsername("lethaibinh");
  public static Employee employee_9  = new Employee("Nguyễn Thái Bình").withAddress("Hà Nội").withEmail("nguyenthaibinh@gmail.com").withUsername("nguyenthaibinh");
  public static Employee employee_10 = new Employee("Đinh Hồng Châu").withAddress("Hà Nội").withEmail("dinhhongchaugmail.com").withUsername("dinhhongchau");

  public static Employee[] ALL_EMPLOYEES = { employee_1, employee_2, employee_3, employee_4, employee_5, employee_6,
      employee_10, employee_7, employee_8, employee_9 };

  // Food
  public static Food   food_1    = new Food("Purina Pro Plan Focus Sensitive Skin & Stomach Adult Dog Food - Salmon & Rice", 300000).
      withDes("Nurture your dog's sensitive skin and stomach with Purina Pro Plan FOCUS Sensitive "
          + "Skin & Stomach Salmon & Rice Formula adult dry dog food. Nutrient-rich salmon is the "
          + "first ingredient and a primary source of protein in this formula. Also containing prebiotic fiber,"
          + " this dog food for sensitive stomach boasts a highly-digestible formula that nourishes the beneficial "
          + "bacteria found in your dog's intestine, helping to promote his digestive health.").withType(FoodType.DRY);


  public static Food   food_2    = new Food("Purina Pro Plan Essentials Shredded Blend Adult Dry Dog Food - Chicken & Rice", 500000).
      withDes("Get your dog excited about mealtime when you serve him Purina Pro Plan Brand Dog Food Shredded Blend Chicken & "
          + "Rice Formula adult dry dog food. Real chicken as the first ingredient and rice, which is an excellent source "
          + "of carbohydrates for energy, along with other high-quality ingredients create a wholesome meal with great flavor").withType(FoodType.DRY);

  public static Food   food_3    = new Food("THỨC ĂN HẠT CHO MÈO PURITY INDOOR 10kg FITMIN", 200000).withDes("Thức ăn hạt cho mèo Purity Indoor FITMIN "
      + "sử dụng công thức Grain Free (Công thức này sử dụng đậu Hà Lan và khoai tây, "
      + "không chứa ngũ cốc hay bất kì các chất gây dị ứng tiềm ẩn nào) nên cực kì an toàn cho các bé nhạy cảm với thức ăn.").withType(FoodType.MILK);

  public static Food   food_4    = new Food("SNACK CHO CHÓ VỊ VIỆT QUẤT BLUEBERRY 70G PRAMA", 50000).
      withDes("Ưu đãi dành riêng cho khách hàng đặt trước Online:\n"
          + " Giữ hàng tại Shop cho khách đặt hàng online\n"
          + " Giao hàng toàn quốc\n"
          + " Tư vấn miễn phí 24/7\n"
          + " Bảo hành nhanh chóng").withType(FoodType.SNACK);

  public static Food   food_5    = new Food("SNACK CHO CHÓ VỊ XOÀI MANGO 70G PRAMA", 50000).withDes("Ưu đãi dành riêng cho khách hàng đặt trước Online:\n"
      + " Giữ hàng tại Shop cho khách đặt hàng online\n"
      + " Giao hàng toàn quốc\n"
      + " Tư vấn miễn phí 24/7\n"
      + " Bảo hành nhanh chóng").withType(FoodType.SNACK);

  public static Food   food_6    = new Food("SNACK CHO CHÓ VỊ DÂU STRAWBERRY 70G PRAMA", 50000).withDes("Ưu đãi dành riêng cho khách hàng đặt trước Online:\n"
      + " Giữ hàng tại Shop cho khách đặt hàng online\n"
      + " Giao hàng toàn quốc\n"
      + " Tư vấn miễn phí 24/7\n"
      + " Bảo hành nhanh chóng").withType(FoodType.SNACK);

  public static Food   food_7    = new Food("PATE CHO CHÓ VỊ THỊT BÒ VÀ GAN BÒ BEEF & BEEF LIVER IN JELLY 70G MARIA", 50000).withDes("Ưu đãi dành riêng cho khách hàng đặt trước Online:\n"
      + " Giữ hàng tại Shop cho khách đặt hàng online\n"
      + " Giao hàng toàn quốc\n"
      + " Tư vấn miễn phí 24/7\n"
      + " Bảo hành nhanh chóng").withType(FoodType.SNACK);

  public static Food   food_8    = new Food("PATE CHO CHÓ VỊ THỊT GÀ VÀ TIM CỪU CHICKEN WITH LAMB HEART IN JELLY 70G MARIA", 29000).withDes("Ưu đãi dành riêng cho khách hàng đặt trước Online:\n"
      + " Giữ hàng tại Shop cho khách đặt hàng online\n"
      + " Giao hàng toàn quốc\n"
      + " Tư vấn miễn phí 24/7\n"
      + " Bảo hành nhanh chóng").withType(FoodType.SNACK);

  public static Food   food_9    = new Food("SNACK CHO CHÓ VỊ XOÀI MANGO 70G PRAMA", 50000).withDes("Ưu đãi dành riêng cho khách hàng đặt trước Online:\n"
      + " Giữ hàng tại Shop cho khách đặt hàng online\n"
      + " Giao hàng toàn quốc\n"
      + " Tư vấn miễn phí 24/7\n"
      + " Bảo hành nhanh chóng").withType(FoodType.SNACK);

  public static Food   food_10    = new Food("SNACK CHO CHÓ VỊ XOÀI MANGO 70G PRAMA", 50000).withDes("Ưu đãi dành riêng cho khách hàng đặt trước Online:\n"
      + " Giữ hàng tại Shop cho khách đặt hàng online\n"
      + " Giao hàng toàn quốc\n"
      + " Tư vấn miễn phí 24/7\n"
      + " Bảo hành nhanh chóng").withType(FoodType.SNACK);

  public static Food[] ALL_FOODS = { food_1, food_2, food_3, food_4, food_5, food_6, food_7, food_8, food_9, food_10 };

  // Products
  public static Product   product_1    = new Product("BioLine Catnip").withPrice(200).withDescription("des")
      .withPic("catnip.jpg");
  public static Product   product_2    = new Product("Vita Prima Hamster Food").withPrice(200).withDescription("des")
      .withPic("hamster-food.jpg");
  public static Product   product_3    = new Product("Dr.Kyan Predogen").withPrice(200).withDescription("des")
      .withPic("suacho1.jpg");
  public static Product   product_4    = new Product("Ganador Premium").withPrice(200).withDescription("des")
      .withPic("thucan-cho1.jpg");
  public static Product   product_5    = new Product("JerHigh").withPrice(200).withDescription("des")
      .withPic("thucan-cho2.png");
  public static Product[] ALL_PRODUCTS = { product_1, product_2, product_3, product_4, product_5 };

  public static Order order_1  = new Order("order_1 ");
  public static Order order_2  = new Order("order_2 ");
  public static Order order_3  = new Order("order_3 ");
  public static Order order_4  = new Order("order_4 ");
  public static Order order_5  = new Order("order_5 ");
  public static Order order_6  = new Order("order_6 ");
  public static Order order_7  = new Order("order_7 ");
  public static Order order_8  = new Order("order_8 ");
  public static Order order_9  = new Order("order_9 ");
  public static Order order_10 = new Order("order_10");
  public static Order order_11 = new Order("order_11");
  public static Order order_12 = new Order("order_12");
  public static Order order_13 = new Order("order_13");
  public static Order order_14 = new Order("order_14");
  public static Order order_15 = new Order("order_15");
  public static Order order_16 = new Order("order_16");
  public static Order order_17 = new Order("order_17");
  public static Order order_18 = new Order("order_18");
  public static Order order_19 = new Order("order_19");
  public static Order order_20 = new Order("order_20");

  public static Order[] ALL_ORDERS = { order_1, order_2, order_3, order_4, order_5, order_6, order_10, order_11,
      order_12, order_13, order_14, order_15, order_16, order_17, order_18, order_19, order_20, order_7, order_8,
      order_9 };

  public static List<Order> createDataOrder() {
    List<Order> orders = new ArrayList<>();
    for (Order order : ALL_ORDERS) {
      order.withCustomer(customer_1).withEmployee(employee_1).withPayment(new Payment("Vietcombank"))
      .withOrderItem(new OrderItem().withFood(food_1)).withOrderItem(new OrderItem().withFood(food_1))
      .withOrderItem(new OrderItem().withProduct(product_1));
      order.withTotal(order.getOrderItems());
      orders.add(order);
    }
    return orders;
  }
}
