/**
 * 
 */
package com.fpt.petstore.data;

import com.fpt.petstore.entities.Food;
import com.fpt.petstore.entities.Order;
import com.fpt.petstore.entities.Product;
import com.fpt.petstore.entities.Employee;
import com.fpt.petstore.entities.Partner;

/**
 * @author linuss
 */

public class PetStoreData {

  public static Partner user_1 = new Partner("0999999999", "nguyenhuuduc@gmail.com")
      .withFirstName("Nguyễn Hữu").withLastName("Đức")
      .withAddress("Hà Nội")
      .withPassword("password");
  
  public static Partner user_2 = new Partner("0999999999", "levanduc@gmail.com")
      .withFirstName("Le Van").withLastName("Duc")
      .withAddress("Hai Phong")
      .withPassword("password");
  
  public static Partner user_3 = new Partner("0999999999", "nguyendinhtien@gmail.com")
      .withFirstName("Nguyen Dinh").withLastName("Tien")
      .withAddress("Ha Noi")
      .withPassword("password");
  
  public static Partner user_4 = new Partner("0999999999", "tranthihang@gmail.com")
      .withFirstName("Tran Thi").withLastName("Hang")
      .withAddress("Ho Chi Minh")
      .withPassword("password");
  
  public static Partner user_5 = new Partner("0999999999", "nguyendinhtung@gmail.com")
      .withFirstName("Nguyen Dinh").withLastName("Tung")
      .withAddress("Binh Dinh")
      .withPassword("password");
  
  public static Partner user_6 = new Partner("0999999999", "leanhvu@gmail.com")
      .withFirstName("Le Anh").withLastName("Vu")
      .withAddress("Ha Noi")
      .withPassword("password");
  
  public static Partner user_7 = new Partner("0999999999", "levandat@gmail.com")
      .withFirstName("Le Van").withLastName("Dat")
      .withAddress("Ha Noi")
      .withPassword("password");
  
  // Staff 
  public static Employee staff_1 = new Employee("nguyenvantoan", "nguyenvantoan@gmail.com", "0978666667")
      .withFirstName("Nguyen Van").withLastName("Toan")
      .withAddress("Sai Gon")
      .withPassword("password");
  
  public static Employee staff_2 = new Employee("nguyencongbao", "nguyencongbao@gmail.com", "0978666665")
      .withFirstName("Nguyen Cong").withLastName("Bao")
      .withAddress("Sai Gon")
      .withPassword("password");
  
  // Food 
  public static Food food_1 = new Food( "Food_name_1", 100)
      .withDes("description");
  
  public static Food food_2 = new Food("Food_name_2", 100)
      .withDes("description");
  
  public static Food food_3 = new Food("Food_name_3", 100)
      .withDes("description");
  
  public static Food food_4 = new Food("Food_name_4", 100)
      .withDes("description");
  
  public static Food food_5 = new Food("Food_name_5", 100)
      .withDes("description");

  // Products 
  public static Product pr_1 = new Product("product_name_1")
      .withPrice(200).withDescription("des");
  public static Product pr_2 = new Product("product_name_2")
      .withPrice(200).withDescription("des");
  public static Product pr_3 = new Product("product_name_3")
      .withPrice(200).withDescription("des");
  public static Product pr_4 = new Product("product_name_4")
      .withPrice(200).withDescription("des");
  public static Product pr_5 = new Product("product_name_5")
      .withPrice(200).withDescription("des");
  
  // Order 
  public static Order order_2 = new Order().withFoods(food_3).withProducts(pr_2)
      .withProducts(pr_1).withStaff(staff_2).withUser(user_2).withTotal(200);
  public static Order order_3 = new Order().withFoods(food_1)
      .withProducts(pr_1).withStaff(staff_2).withUser(user_3).withTotal(400);
  public static Order order_4 = new Order().withFoods(food_1)
      .withProducts(pr_1).withStaff(staff_1).withUser(user_4).withTotal(500);
  public static Order order_5 = new Order().withFoods(food_1)
      .withProducts(pr_1).withStaff(staff_1).withUser(user_5).withTotal(600);
  public static Order order_6 = new Order().withFoods(food_1)
      .withProducts(pr_1).withStaff(staff_1).withUser(user_6).withTotal(700);
  
  public static Partner[] ALL_USERS = {user_1, user_2, user_3, user_4, user_5, user_6, user_7 }; 
  public static Employee[] ALL_STAFF = { staff_1, staff_2 };
  public static Food[] ALL_FOODS = {food_1, food_2, food_3, food_4, food_5};
  public static Product[] ALL_PRODUCTS = {pr_1, pr_2, pr_3, pr_4, pr_5 };
  public static Order[] ALL_ORDERS = {order_2, order_3, order_4, order_5, order_6};
}
