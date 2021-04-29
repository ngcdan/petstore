package com.fpt.petstore.services;

import org.springframework.stereotype.Service;

import java.security.SecureRandom;

/**
 * Created by Nizis on 4/29/2021.
 */
@Service
public class RandomString {
    public String getRandomString(int length){
        String textLowerCase="abcdefghijklmnopqrstvwxzy";
        String textUpperCase = textLowerCase.toUpperCase();
        String number = "0123456789";
        String textFormat = textLowerCase+textUpperCase+number;
        StringBuilder sb =new StringBuilder(length);
        for(int i=0;i<length;i++){
            sb.append(textFormat.charAt(new SecureRandom().nextInt(textFormat.length())));
        }
        return sb.toString();
    }
}
