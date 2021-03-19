package com.fpt.petstore.entities;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

/**
 * Created by Nizis on 2/4/2021.
 */
public class ConstVariable {
    public static final String redirect = "redirect:/";
    public static final int PRODUCTPERPAGE = 5;
   /* public static final int PRODUCTPERPAGECATEGORY = 8;*/
   public static final String redirectRefer = "redirect:";
    public static final String titleNotification = "titleNotification";
    public static final String messageNotification = "messageNotification";
    //theme error,warning,success
    public static final String themeNotification = "themeNotification";

}
