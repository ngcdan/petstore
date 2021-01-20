/**
 * 
 */
package com.fpt.petstore.data;

import com.fpt.petstore.entities.User;

/**
 * @author linuss
 */

public class PetStoreData {

  public static User user_1 = new User("0999999999", "user_1@gmail.com")
      .withFirstName("Le Van").withLastName("A")
      .withAddress("Ha Noi")
      .withPassword("admin");
  
  public static User user_2 = new User("0999999999", "user_2@gmail.com")
      .withFirstName("Le Van").withLastName("A")
      .withAddress("Ha Noi")
      .withPassword("admin");
  
  public static User user_3 = new User("0999999999", "user_3@gmail.com")
      .withFirstName("Le Van").withLastName("B")
      .withAddress("Ha Noi")
      .withPassword("admin");
  
  public static User user_4 = new User("0999999999", "user_4@gmail.com")
      .withFirstName("Le Van").withLastName("C")
      .withAddress("Ha Noi")
      .withPassword("admin");
  
  public static User user_5 = new User("0999999999", "user_5@gmail.com")
      .withFirstName("Le Van").withLastName("D")
      .withAddress("Ha Noi")
      .withPassword("admin");
  
  public static User user_6 = new User("0999999999", "user_6@gmail.com")
      .withFirstName("Le Van").withLastName("D")
      .withAddress("Ha Noi")
      .withPassword("admin");
  
  public static User user_7 = new User("0999999999", "user_7@gmail.com")
      .withFirstName("Le Van").withLastName("D")
      .withAddress("Ha Noi")
      .withPassword("admin");
  
  public static User[] ALL_USERS = {user_1, user_2, user_3, user_4, user_5, user_6, user_7 }; 
}
