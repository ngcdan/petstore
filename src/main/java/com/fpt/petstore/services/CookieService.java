package com.fpt.petstore.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Service này cung cấp các phương thức xử lý cookie
 */
@Service
public class CookieService {
	@Autowired
    HttpServletRequest request;
	@Autowired
    HttpServletResponse response;
	
	/**
	 * Tạo mã hóa và gửi cookie về client
	 * @param name tên cookie
	 * @param value giá trị chưa mã hóa
	 * @param days số ngày tồn tại
	 */
	public Cookie create(String name, String value, int days) {
		Cookie cookie = new Cookie(name, value);
		cookie.setMaxAge(days*24*60*60);
		cookie.setPath("/");
		response.addCookie(cookie);
		return cookie;
	}
	/**
	 * Xóa cookie
	 * @param name tên cookie cần xóa
	 */
	public void delete(String name) {
		this.create(name, "", 0);
	}
	/**
	 * Đọc và giải mã cookie
	 * @param name tên cookie cần đọc
	 * @param defaultValue giá trị mặc định
	 * @return giá trị đã giải mã cookie nếu tồn tại hoặc defaultValue nếu không tồn tại
	 */
	public String getValue(String name, String defaultValue) {
		Cookie[] cookies = request.getCookies();
		if(cookies != null) {
			for(Cookie cookie : cookies) {
				if(cookie.getName().equalsIgnoreCase(name)) {
					return cookie.getValue();
				}
			}
		}
		return defaultValue;
	}

}