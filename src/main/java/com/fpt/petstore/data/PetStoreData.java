/**
 * 
 */
package com.fpt.petstore.data;

import java.text.Normalizer;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.regex.Pattern;

import com.fpt.petstore.entities.Customer;
import com.fpt.petstore.entities.Employee;
import com.fpt.petstore.entities.Food;
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
  static String[] EMAILS    = { "Donec.porttitor.tellus@maurisaliquameu.com", "non.ante@purus.com",
      "dis@gravidamolestiearcu.co.uk", "Fusce@congueaaliquet.net", "arcu.imperdiet.ullamcorper@ac.edu",
      "posuere.enim.nisl@sagittisaugue.co.uk", "Cum@erat.ca", "iaculis.enim.sit@luctus.org", "Cras@Integerin.edu",
      "lectus.pede.ultrices@nuncsitamet.edu", "bibendum.ullamcorper@Curabitursed.ca", "inceptos.hymenaeos@velit.edu",
      "nisi.magna@enimSednulla.edu", "Aliquam.vulputate.ullamcorper@dolorsit.edu",
      "mauris.rhoncus.id@PraesentluctusCurabitur.com", "Proin.non@odioa.edu", "orci.consectetuer@dui.ca",
      "vel@etlaciniavitae.ca", "massa@nibhenim.co.uk", "sem.egestas@Crasvehiculaaliquet.edu",
      "eu.tellus@interdumlibero.org", "feugiat@neque.org", "neque.vitae@quisarcuvel.org", "dictum@euarcu.com",
      "netus.et.malesuada@tinciduntaliquamarcu.edu", "auctor.Mauris.vel@luctusipsumleo.edu" };

  static String[] PHONES = { "+84971523160", "+84972350852", "+84978343191", "+84977443785", "+84975830117",
      "+84975097604", "+84979002974", "+84976505077", "+84971541554", "+84978486367", "+84974829834", "+84979422506",
      "+84978504106", "+84979234893", "+84972099083", "+84979622655", "+84974686801", "+84979802671", "+84976458859",
      "+84978813980", "+84973094635", "+84979158307", "+84979386528", "+84974214735", "+84974443744" };

  public static Customer customer_1 = new Customer("Nguyễn Hữu Đức");

  public static Customer customer_2 = new Customer("Le Van Duc");

  public static Customer customer_3 = new Customer("Nguyen Dinh Tien");

  public static Customer customer_4 = new Customer("Tran Thi Hang");

  public static Customer customer_5 = new Customer("Võ Thanh Sanh");

  public static Customer customer_6 = new Customer("Phạm Minh Quân");

  public static Customer customer_7 = new Customer("Trương Trọng Quân");

  public static Customer customer_8 = new Customer("Nguyễn Vũ Ngọc Quyên");

  public static Customer customer_9 = new Customer("Phan Duy Quốc");

  public static Customer customer_10 = new Customer("Nguyễn Thị Như Quỳnh");

  public static Customer customer_11 = new Customer("Lê Hoàng Quân");

  public static Customer customer_12 = new Customer("Đinh Văn Phượng");

  public static Customer customer_13 = new Customer("Nguyễn Xuân Sang");

  public static Customer customer_14 = new Customer("Lê Phú Quý");

  public static Customer customer_15 = new Customer("Lý Quốc Quyền");

  public static Customer customer_16 = new Customer("Bùi Minh Quân");

  public static Customer customer_17 = new Customer("Nguyễn Ngọc Sơn");

  public static Customer customer_18 = new Customer("Bùi Duy Qúy");

  public static Customer customer_19 = new Customer("Võ Hoàng Phương");

  public static Customer customer_20 = new Customer("Trần Minh Phương");
  public static Customer customer_21 = new Customer("Võ Khải Hoàng Ca");
  public static Customer customer_22 = new Customer("Hà Thị Thùy Chi");
  public static Customer customer_23 = new Customer("Lê Văn Minh Châu");
  public static Customer customer_24 = new Customer("Nguyễn Linh Chi");
  public static Customer customer_25 = new Customer("Lê Thị Phương Chi");
  public static Customer customer_26 = new Customer("Nguyễn Duy Chinh");
  public static Customer customer_27 = new Customer("Nguyễn Thế Chiến");
  public static Customer customer_28 = new Customer("Trần Đức Thịnh");
  public static Customer customer_29 = new Customer("Trần Viễn Chinh");
  public static Customer customer_30 = new Customer("Bùi Văn Chương");

  public static Customer[] ALL_CUSTOMERS = { customer_1, customer_2, customer_3, customer_4, customer_5, customer_6,
      customer_10, customer_11, customer_12, customer_13, customer_14, customer_15, customer_16, customer_17,
      customer_18, customer_19, customer_20, customer_7, customer_8, customer_9, customer_21, customer_22, customer_23,
      customer_24, customer_25, customer_26, customer_27, customer_28, customer_29, customer_30 };

  // Employee
  public static Employee employee_1  = new Employee("Phạm Võ Hoài Anh");
  public static Employee employee_2  = new Employee("Hồ Thanh Bình");
  public static Employee employee_3  = new Employee("Nguyễn Thái Bình");
  public static Employee employee_4  = new Employee("Bùi Thái Chánh");
  public static Employee employee_5  = new Employee("Đỗ Đình Biên");
  public static Employee employee_6  = new Employee("Nguyễn Phước Biển");
  public static Employee employee_7  = new Employee("Lê Minh Chánh");
  public static Employee employee_8  = new Employee("Lê Thái Bình");
  public static Employee employee_9  = new Employee("Nguyễn Thái Bình");
  public static Employee employee_10 = new Employee("Đinh Hồng Châu");

  public static Employee[] ALL_EMPLOYEES = { employee_1, employee_2, employee_3, employee_4, employee_5, employee_6,
      employee_10, employee_7, employee_8, employee_9 };

  static public List<Customer> createDataCustomer() {
    List<Customer> customers = new ArrayList<>();
    for (int i = 0; i < ALL_CUSTOMERS.length; i++) {
      Customer customer = ALL_CUSTOMERS[i];
      customer.setEmail(EMAILS[i]);
      customer.setPhone(PHONES[i]);
      customer.setAddress(ADDRESSES[new Random().nextInt(ADDRESSES.length)]);
      customer.setPassword("password");
      customers.add(customer);
    }
    return customers;
  };

  public static String removeAccent(String s) {
    String  temp    = Normalizer.normalize(s, Normalizer.Form.NFD);
    Pattern pattern = Pattern.compile("\\p{InCombiningDiacriticalMarks}+");
    return pattern.matcher(temp).replaceAll("");
  }

  static public List<Employee> createDataEmployee() {
    List<Employee> employees = new ArrayList<>();
    for (int i = 0; i < ALL_CUSTOMERS.length; i++) {
      Employee employee = ALL_EMPLOYEES[i];
      employee.setUsername(removeAccent(employee.getFullName().replaceAll("\\s", "").toLowerCase()));
      employee.setEmail(EMAILS[i]);
      employee.setPhone(PHONES[i]);
      employee.setAddress(ADDRESSES[new Random().nextInt(ADDRESSES.length)]);
      employee.setPassword("password");
      employees.add(employee);
    }
    return employees;
  };

  // Food
  public static Food   food_1    = new Food("Food_name_1", 100).withDes("description");
  public static Food   food_2    = new Food("Food_name_2", 100).withDes("description");
  public static Food   food_3    = new Food("Food_name_3", 100).withDes("description");
  public static Food   food_4    = new Food("Food_name_4", 100).withDes("description");
  public static Food   food_5    = new Food("Food_name_5", 100).withDes("description");
  public static Food[] ALL_FOODS = { food_1, food_2, food_3, food_4, food_5 };
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
