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
import com.fpt.petstore.entities.Product;

/**
 * @author linuss
 */

public class PetStoreData {

  static String[] ADDRESSES = { "Hà Nội", "Hải Phòng", "Thành phố Hồ Chí Minh", "Quảng Ninh", "Bạc Liêu", "Tây Ninh",
      "Tuyên Quang" };
  static String[] EMAILS = { "Donec.porttitor.tellus@maurisaliquameu.com", "non.ante@purus.com",
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

  public static Customer user_1 = new Customer().withFullName("Nguyễn Hữu Đức");

  public static Customer user_2 = new Customer().withFullName("Le Van Duc");

  public static Customer user_3 = new Customer().withFullName("Nguyen Dinh Tien");

  public static Customer user_4 = new Customer().withFullName("Tran Thi Hang");

  public static Customer user_5 = new Customer().withFullName("Võ Thanh Sanh");

  public static Customer user_6 = new Customer().withFullName("Phạm Minh Quân");

  public static Customer user_7 = new Customer().withFullName("Trương Trọng Quân");

  public static Customer user_8 = new Customer().withFullName("Nguyễn Vũ Ngọc Quyên");

  public static Customer user_9 = new Customer().withFullName("Phan Duy Quốc");

  public static Customer user_10 = new Customer().withFullName("Nguyễn Thị Như Quỳnh");

  public static Customer user_11 = new Customer().withFullName("Lê Hoàng Quân");

  public static Customer user_12 = new Customer().withFullName("Đinh Văn Phượng");

  public static Customer user_13 = new Customer().withFullName("Nguyễn Xuân Sang");

  public static Customer user_14 = new Customer().withFullName("Lê Phú Quý");

  public static Customer user_15 = new Customer().withFullName("Lý Quốc Quyền");

  public static Customer user_16 = new Customer().withFullName("Bùi Minh Quân");

  public static Customer user_17 = new Customer().withFullName("Nguyễn Ngọc Sơn");

  public static Customer user_18 = new Customer().withFullName("Bùi Duy Qúy");

  public static Customer user_19 = new Customer().withFullName("Võ Hoàng Phương");

  public static Customer user_20 = new Customer().withFullName("Trần Minh Phương");

  public static Customer[] ALL_CUSTOMERS = { user_1, user_2, user_3, user_4, user_5, user_6, user_10, user_11, user_12,
      user_13, user_14, user_15, user_16, user_17, user_18, user_19, user_20, user_7, user_8, user_9 };

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

  // Staff
  public static Employee employee = new Employee("nguyenvantoan", "nguyenvantoan@gmail.com", "0978666667")
      .withFirstName("Nguyen Van Toan").withAddress("Sai Gon").withPassword("password");

  public static Employee employee_2 = new Employee("nguyencongbao", "nguyencongbao@gmail.com", "0978666665")
      .withFirstName("Nguyen Cong Bao").withAddress("Sai Gon").withPassword("password");

  // Food
  public static Food food_1 = new Food("Food_name_1", 100).withDes("description");

  public static Food food_2 = new Food("Food_name_2", 100).withDes("description");

  public static Food food_3 = new Food("Food_name_3", 100).withDes("description");

  public static Food food_4 = new Food("Food_name_4", 100).withDes("description");

  public static Food food_5 = new Food("Food_name_5", 100).withDes("description");

  // Products
  public static Product pr_1 = new Product("product_name_1").withPrice(200).withDescription("des");
  public static Product pr_2 = new Product("product_name_2").withPrice(200).withDescription("des");
  public static Product pr_3 = new Product("product_name_3").withPrice(200).withDescription("des");
  public static Product pr_4 = new Product("product_name_4").withPrice(200).withDescription("des");
  public static Product pr_5 = new Product("product_name_5").withPrice(200).withDescription("des");

  // Order
  // public static Order order_2 = new
  // Order().withFoods(food_3).withProducts(pr_2)
  // .withProducts(pr_1).withStaff(staff_2).withUser(user_2).withTotal(200);
  // public static Order order_3 = new Order().withFoods(food_1)
  // .withProducts(pr_1).withStaff(staff_2).withUser(user_3).withTotal(400);
  // public static Order order_4 = new Order().withFoods(food_1)
  // .withProducts(pr_1).withStaff(staff_1).withUser(user_4).withTotal(500);
  // public static Order order_5 = new Order().withFoods(food_1)
  // .withProducts(pr_1).withStaff(staff_1).withUser(user_5).withTotal(600);
  // public static Order order_6 = new Order().withFoods(food_1)
  // .withProducts(pr_1).withStaff(staff_1).withUser(user_6).withTotal(700);

  public static Employee[] ALL_STAFF = { employee, employee_2 };
  public static Food[] ALL_FOODS = { food_1, food_2, food_3, food_4, food_5 };
  public static Product[] ALL_PRODUCTS = { pr_1, pr_2, pr_3, pr_4, pr_5 };
  // public static Order[] ALL_ORDERS = {order_2, order_3, order_4, order_5,
  // order_6};
}
