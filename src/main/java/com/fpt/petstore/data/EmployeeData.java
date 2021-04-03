package com.fpt.petstore.data;

import com.fpt.petstore.entities.Employee;

public class EmployeeData {
	public Employee employee_1 = new Employee("Phạm Võ Hoài Anh").
		withAddress("Hải Phòng").
		withEmail("hoaianh@gmail.com").
		withPassword("12345").
		withUsername("phamvohoaianh").
		withPhone("09168860230");
	public Employee employee_2 = new Employee("Hồ Thanh Bình").withAddress("Hải Phòng").withEmail("hothanhbinh@gmail.com").withPassword("12345").withUsername("hothanhbinh").withPhone("09107256361");
	public Employee employee_3 = new Employee("Nguyễn Thái Bình").withAddress("Hải Phòng").withEmail("nguyenthaibinh@gmail.com").withPassword("12345").withUsername("nguyenthaibinh").withPhone("09854798553");
	public Employee employee_4 = new Employee("Bùi Thái Chánh").withAddress("Hải Phòng").withEmail("buithaichanh@gmail.com").withPassword("12345").withUsername("buithaichanh").withPhone("09518022006");
	public Employee employee_5 = new Employee("Đỗ Đình Biên").withAddress("Hải Phòng").withEmail("dodinhvien@gmail.com").withPassword("12345").withUsername("dodinhvien").withPhone("09836061295");
	public Employee employee_6 = new Employee("Nguyễn Phước Biển").withAddress("Hà Nội").withEmail("nguyenphuocbien@gmail.com").withPassword("12345").withUsername("nguyenphuocbien").withPhone("09002801814");
	public Employee employee_7 = new Employee("Lê Minh Chánh").withAddress("Hà Nội").withEmail("leminhchanh@gmail.com").withPassword("12345").withUsername("leminhchanh").withPhone("09584306432");
	public Employee employee_8 = new Employee("Lê Thái Bình").withAddress("Hà Nội").withEmail("lethaibinh@gmail.com").withPassword("12345").withUsername("lethaibinh").withPhone("09619287364");
	public Employee employee_9 = new Employee("Nguyễn Thái Bình").withAddress("Hà Nội").withEmail("nguyenthaibinh@gmail.com").withPassword("12345").withUsername("nguyenthaibinh").withPhone("09820744258");
	public Employee employee_10 = new Employee("Đinh Hồng Châu").withAddress("Hà Nội").withEmail("dinhhongchaugmail.com").withPassword("12345").withUsername("dinhhongchau").withPhone("09820744258");

	public Employee[] ALL_EMPLOYEES = {employee_1, employee_2, employee_3, employee_4, employee_5, employee_6, employee_10, employee_7, employee_8, employee_9};
}
