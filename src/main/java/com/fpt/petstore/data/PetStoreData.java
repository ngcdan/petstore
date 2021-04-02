package com.fpt.petstore.data;

import com.fpt.petstore.entities.*;
import com.fpt.petstore.entities.Food.FoodType;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

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

  public Customer customer_1 = new Customer("Nguyễn Hữu Đức").
    withUsername("customer").
    withVerified(true).
    withEmail("nguyenhuuduc11@gmail.com");

  public static Customer customer_2 = new Customer("Nguyen Van Nhat").withEmail("vannhat98@gmail.com").withPassword("12345").withBirthday("12-09-1998").withAddress("342-9B Thoai Ngoc Hau").withPhone("0345471020");
  public static Customer customer_3 = new Customer("Nguyen Tan Trong").withEmail("trongnt@gmail.com").withPassword("12345").withBirthday("30-01-2000").withAddress("54 Le Van Si").withPhone("0851235898");
  public static Customer customer_4 = new Customer("Tran Dai Hung").withEmail("trandaihung@gmail.com").withPassword("12345").withBirthday("06-12-2000").withAddress("11 Tran Hung Dao").withPhone("0914565476");
  public static Customer customer_5 = new Customer("Vo Thanh Truong").withEmail("vothanhtruong@gmail.com").withPassword("12345").withBirthday("06-09-2000").withAddress("235 Le Lai").withPhone("0917657212");
  public static Customer customer_6 = new Customer("Luu Nguyen Thanh Phuong").withEmail("phuonglnt@gmail.com").withPassword("12345").withBirthday("21-12-2000").withAddress("248 Le Van Si").withPhone("0928494156");
  public static Customer customer_7 = new Customer("Nguyen Thi Thanh Phuong").withEmail("phuongntt01@gmail.com").withPassword("12345").withBirthday("01-01-2000").withAddress("175-82 Huynh Van Banh").withPhone("0794930056");
  public static Customer customer_8 = new Customer("Nguyen Chi Hoa").withEmail("nguyenchihoa98@gmail.com").withPassword("12345").withBirthday("22-09-1998").withAddress("78 To Ki").withPhone("0335579595");
  public static Customer customer_9 = new Customer("Nguyen Vu Thien Nguyen").withEmail("nguyenvuthiennguyen@gmail.com").withPassword("12345").withBirthday("02-02-1986").withAddress("233 Le Van Si").withPhone("0967513214");
  public static Customer customer_10 = new Customer("Bui Thi Phuong Thanh").withEmail("kellybui@gmail.com").withPassword("12345").withBirthday("29-06-2000").withAddress("44 Nguyen Thi Minh Khai").withPhone("0915648654");
  public static Customer customer_11 = new Customer("Nguyen Duy Phuong").withEmail("nguyenduyphuong@gmail.com").withPassword("12345").withBirthday("12-01-1999").withAddress("79 To Ki").withPhone("0954765122");
  public static Customer customer_12 = new Customer("Đinh Văn Phượng").withEmail("dinhvanphuong12@gmail.com").withPassword("12345").withBirthday("13-09-1989").withAddress("55 Tran Huy Lieu").withPhone("0942314842");
  public static Customer customer_13 = new Customer("Nguyễn Xuân Sang").withEmail("nguyenxuansang@gmail.com").withPassword("12345").withBirthday("22-01-1993").withAddress("23 Nguyen Van Troi").withPhone("0953214561");
  public static Customer customer_14 = new Customer("Lê Phú Quý").withEmail("lephuquy@gmail.com").withPassword("12345").withBirthday("02-01-1996").withAddress("842 Truong Sa").withPhone("0923548965");
  public static Customer customer_15 = new Customer("Lý Quốc Quyền").withEmail("lyquocquyen@gmail.com").withPassword("12345").withBirthday("23-05-1995").withAddress("111 Nguyen Phi Khanh").withPhone("0915231545");
  public static Customer customer_16 = new Customer("Bùi Minh Quân").withEmail("buiminhquan11@gmail.com").withPassword("12345").withBirthday("05-01-1999").withAddress("562 Hoang Sa").withPhone("093566512");
  public static Customer customer_17 = new Customer("Nguyễn Ngọc Sơn").withEmail("nguyenngocson@gmail.com").withPassword("12345").withBirthday("06-01-1979").withAddress("101 Nguyen Trai").withPhone("0923265548");
  public static Customer customer_18 = new Customer("Bùi Duy Qúy").withEmail("buiduyquy@gmail.com").withPassword("12345").withBirthday("08-03-1999").withAddress("556 Hai Ba Trung").withPhone("0938623132");
  public static Customer customer_19 = new Customer("Võ Hoàng Phương").withEmail("vohoangphuong@gmail.com").withPassword("12345").withBirthday("30-01-1998").withAddress("456 Vo Thi Sau").withPhone("0923548461");
  public static Customer customer_20 = new Customer("Trần Minh Phương").withEmail("tranminhphuong@gmail.com").withPassword("12345").withBirthday("28-02-1999").withAddress("96 Nguyen Kiem").withPhone("0945213786");
  public static Customer customer_21 = new Customer("Võ Khải Hoàng Ca").withEmail("vokhaihoangka@gmail.com").withPassword("12345").withBirthday("27-05-1979").withAddress("45 Pham Van Dong").withPhone("0956232542");
  public static Customer customer_22 = new Customer("Hà Thị Thùy Chi").withEmail("hathithuychi@gmail.com").withPassword("12345").withBirthday("26-07-1977").withAddress("215 Nguyen Thai Son").withPhone("0923254821");
  public static Customer customer_23 = new Customer("Lê Văn Minh Châu").withEmail("levanminhchau@gmail.com").withPassword("12345").withBirthday("07-01-1994").withAddress("24 Thoai Ngoc Hau").withPhone("0993214521");
  public static Customer customer_24 = new Customer("Nguyễn Linh Chi").withEmail("lelinhchi@gmail.com").withPassword("12345").withBirthday("17-01-1969").withAddress("333 Nguyen Kiem").withPhone("0956231545");
  public static Customer customer_25 = new Customer("Lê Thị Phương Chi").withEmail("lethiphuongchi@gmail.com").withPassword("12345").withBirthday("03-01-1968").withAddress("69 Hoang Hoa Tham").withPhone("0955695462");
  public static Customer customer_26 = new Customer("Nguyễn Duy Chinh").withEmail("nguyenduychinh@gmail.com").withPassword("12345").withBirthday("10-01-1996").withAddress("79 Dong Den").withPhone("0822655132");
  public static Customer customer_27 = new Customer("Nguyễn Thế Chiến").withEmail("nguyenthechien@gmail.com").withPassword("12345").withBirthday("31-03-1999").withAddress("363 D1").withPhone("0956254852");
  public static Customer customer_28 = new Customer("Trần Đức Thịnh").withEmail("tranducthinh@gmail.com").withPassword("12345").withBirthday("14-02-1993").withAddress("86 D5").withPhone("0912315486");
  public static Customer customer_29 = new Customer("Trần Viễn Chinh").withEmail("tranvienchinh@gmail.com").withPassword("12345").withBirthday("14-03-1999").withAddress("686 Bui Dinh Tuy").withPhone("0925486512");
  public static Customer customer_30 = new Customer("Bùi Văn Chương").withEmail("buivanchuong@gmail.com").withPassword("12345").withBirthday("17-10-1999").withAddress("214 Nguyen Trai").withPhone("0934561234");

  public static Customer[] ALL_CUSTOMERS = { customer_2, customer_3, customer_4, customer_5, customer_6,
    customer_10, customer_11, customer_12, customer_13, customer_14, customer_15, customer_16, customer_17,
    customer_18, customer_19, customer_20, customer_7, customer_8, customer_9, customer_21, customer_22, customer_23,
    customer_24, customer_25, customer_26, customer_27, customer_28, customer_29, customer_30 };

  static public List<Customer> createDataCustomer() {
    List<Customer> customers = new ArrayList<>();
    for (int i = 0; i < ALL_CUSTOMERS.length; i++) {
      Customer customer = ALL_CUSTOMERS[i];
      customers.add(customer);
    }
    return customers;
  };

  /* Employee */
  public static Employee employee_1  = new Employee("Phạm Võ Hoài Anh").withAddress("Hải Phòng").withEmail("hoaianh@gmail.com").withPassword("12345").withUsername("phamvohoaianh");
  public static Employee employee_2  = new Employee("Hồ Thanh Bình").withAddress("Hải Phòng").withEmail("hothanhbinh@gmail.com").withPassword("12345").withUsername("hothanhbinh");
  public static Employee employee_3  = new Employee("Nguyễn Thái Bình").withAddress("Hải Phòng").withEmail("nguyenthaibinh@gmail.com").withPassword("12345").withUsername("nguyenthaibinh");
  public static Employee employee_4  = new Employee("Bùi Thái Chánh").withAddress("Hải Phòng").withEmail("buithaichanh@gmail.com").withPassword("12345").withUsername("buithaichanh");
  public static Employee employee_5  = new Employee("Đỗ Đình Biên").withAddress("Hải Phòng").withEmail("dodinhvien@gmail.com").withPassword("12345").withUsername("dodinhvien");
  public static Employee employee_6  = new Employee("Nguyễn Phước Biển").withAddress("Hà Nội").withEmail("nguyenphuocbien@gmail.com").withPassword("12345").withUsername("nguyenphuocbien");
  public static Employee employee_7  = new Employee("Lê Minh Chánh").withAddress("Hà Nội").withEmail("leminhchanh@gmail.com").withPassword("12345").withUsername("leminhchanh");
  public static Employee employee_8  = new Employee("Lê Thái Bình").withAddress("Hà Nội").withEmail("lethaibinh@gmail.com").withPassword("12345").withUsername("lethaibinh");
  public static Employee employee_9  = new Employee("Nguyễn Thái Bình").withAddress("Hà Nội").withEmail("nguyenthaibinh@gmail.com").withPassword("12345").withUsername("nguyenthaibinh");
  public static Employee employee_10 = new Employee("Đinh Hồng Châu").withAddress("Hà Nội").withEmail("dinhhongchaugmail.com").withPassword("12345").withUsername("dinhhongchau");

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
      order.withCustomer(customer_2).withEmployee(employee_1).withPayment(new Payment("Vietcombank"))
        .withOrderItem(new OrderItem().withFood(food_1)).withOrderItem(new OrderItem().withFood(food_1))
        .withOrderItem(new OrderItem().withProduct(product_1));
      order.withTotal(order.getOrderItems());
      orders.add(order);
    }
    return orders;
  }
}
