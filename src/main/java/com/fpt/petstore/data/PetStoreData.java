/**
 * 
 */
package com.fpt.petstore.data;

import com.fpt.petstore.entities.Food;
import com.fpt.petstore.entities.Product;
import com.fpt.petstore.entities.Staff;
import com.fpt.petstore.entities.User;

/**
 * @author linuss
 */

public class PetStoreData {

  public static User user_1 = new User("0999999999", "user_1@gmail.com")
      .withFirstName("Le Van").withLastName("A")
      .withAddress("Ha Noi")
      .withPassword("password");
  
  public static User user_2 = new User("0999999999", "user_2@gmail.com")
      .withFirstName("Le Van").withLastName("A")
      .withAddress("Ha Noi")
      .withPassword("password");
  
  public static User user_3 = new User("0999999999", "user_3@gmail.com")
      .withFirstName("Le Van").withLastName("B")
      .withAddress("Ha Noi")
      .withPassword("password");
  
  public static User user_4 = new User("0999999999", "user_4@gmail.com")
      .withFirstName("Le Van").withLastName("C")
      .withAddress("Ha Noi")
      .withPassword("password");
  
  public static User user_5 = new User("0999999999", "user_5@gmail.com")
      .withFirstName("Le Van").withLastName("D")
      .withAddress("Ha Noi")
      .withPassword("password");
  
  public static User user_6 = new User("0999999999", "user_6@gmail.com")
      .withFirstName("Le Van").withLastName("D")
      .withAddress("Ha Noi")
      .withPassword("password");
  
  public static User user_7 = new User("0999999999", "user_7@gmail.com")
      .withFirstName("Le Van").withLastName("D")
      .withAddress("Ha Noi")
      .withPassword("password");
  
  // Staff 
  public static Staff staff_1 = new Staff("nguyenvantoan", "nguyenvantoan@gmail.com", "0978666667")
      .withFirstName("Nguyen Van").withLastName("Toan")
      .withAddress("Sai Gon")
      .withPassword("password");
  
  public static Staff staff_2 = new Staff("nguyencongbao", "nguyencongbao@gmail.com", "0978666665")
      .withFirstName("Nguyen Cong").withLastName("Bao")
      .withAddress("Sai Gon")
      .withPassword("password");
  
  // Food 
  public static Food food_1 = new Food("f_code_1", "Food_name_1", 100)
      .withDes("description");
  
  public static Food food_2 = new Food("f_code_2", "Food_name_2", 100)
      .withDes("description");
  
  public static Food food_3 = new Food("f_code_3", "Food_name_3", 100)
      .withDes("description");
  
  public static Food food_4 = new Food("f_code_4", "Food_name_4", 100)
      .withDes("description");
  
  public static Food food_5 = new Food("f_code_5", "Food_name_5", 100)
      .withDes("description");

  // Products 
  public static Product pr_1 = new Product("pr_code_1", "product_name_1")
      .withPrice(200).withDescription("des");
  public static Product pr_2 = new Product("pr_code_2", "product_name_2")
      .withPrice(200).withDescription("des");
  public static Product pr_3 = new Product("pr_code_3", "product_name_3")
      .withPrice(200).withDescription("des");
  public static Product pr_4 = new Product("pr_code_4", "product_name_4")
      .withPrice(200).withDescription("des");
  public static Product pr_5 = new Product("pr_code_5", "product_name_5")
      .withPrice(200).withDescription("des");
  
  
  public static User[] ALL_USERS = {user_1, user_2, user_3, user_4, user_5, user_6, user_7 }; 
  public static Staff[] ALL_STAFF = { staff_1, staff_2 };
  public static Food[] ALL_FOODS = {food_1, food_2, food_3, food_4, food_5};
  public static Product[] ALL_PRODUCTS = {pr_1, pr_2, pr_3, pr_4, pr_5 };
}
