package com.fpt.petstore.data;

import com.fpt.petstore.entities.*;
import com.fpt.petstore.entities.Food.FoodType;
import com.fpt.petstore.services.EmployeeLogic;
import com.fpt.petstore.services.PetStoreService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.List;

/**
 * @author linuss
 */

public class PetStoreData {

	public Customer customer_2 = new Customer("Nguyen Van Nhat").
		withUsername("nguyenvannhat").
		withEmail("vannhat98@gmail.com").
		withPassword("12345").
		withBirthday("12/09/1998").
		withAddress("342-9B Thoai Ngoc Hau").
		withPhone("0345471020").
		withGender(Customer.Gender.Male);

	public Customer customer_3 = new Customer("Nguyen Tan Trong").
		withUsername("nguyentantrong").
		withEmail("trongnt@gmail.com").
		withPassword("12345").
		withBirthday("30/01/2000").
		withAddress("54 Le Van Si").
		withPhone("0851235898").
		withGender(Customer.Gender.Female);

	public Customer customer_4 = new Customer("Tran Dai Hung").
		withUsername("trandaihung").
		withEmail("trandaihung@gmail.com").
		withPassword("12345").
		withBirthday("06/12/2000").
		withAddress("11 Tran Hung Dao").
		withPhone("0914565476").
		withGender(Customer.Gender.Male);

	//TODO: missing field username
	public Customer customer_5 = new Customer("Vo Thanh Truong").withEmail("vothanhtruong@gmail.com").withPassword("12345").withBirthday("06/09/2000").withAddress("235 Le Lai").withPhone("0917657212").withGender(Customer.Gender.Female);
	public Customer customer_6 = new Customer("Luu Nguyen Thanh Phuong").withEmail("phuonglnt@gmail.com").withPassword("12345").withBirthday("21/12/2000").withAddress("248 Le Van Si").withPhone("0928494156").withGender(Customer.Gender.Male);
	public Customer customer_7 = new Customer("Nguyen Thi Thanh Phuong").withEmail("phuongntt01@gmail.com").withPassword("12345").withBirthday("01/01/2000").withAddress("175-82 Huynh Van Banh").withPhone("0794930056").withGender(Customer.Gender.Female);
	public Customer customer_8 = new Customer("Nguyen Chi Hoa").withEmail("nguyenchihoa98@gmail.com").withPassword("12345").withBirthday("22/09/1998").withAddress("78 To Ki").withPhone("0335579595").withGender(Customer.Gender.Male);
	public Customer customer_9 = new Customer("Nguyen Vu Thien Nguyen").withEmail("nguyenvuthiennguyen@gmail.com").withPassword("12345").withBirthday("02/02/1986").withAddress("233 Le Van Si").withPhone("0967513214");
	public Customer customer_10 = new Customer("Bui Thi Phuong Thanh").withEmail("kellybui@gmail.com").withPassword("12345").withBirthday("29/06/2000").withAddress("44 Nguyen Thi Minh Khai").withPhone("0915648654").withGender(Customer.Gender.Female);
	public Customer customer_11 = new Customer("Nguyen Duy Phuong").withEmail("nguyenduyphuong@gmail.com").withPassword("12345").withBirthday("12/01/1999").withAddress("79 To Ki").withPhone("0954765122").withGender(Customer.Gender.Female);
	public Customer customer_12 = new Customer("Đinh Văn Phượng").withEmail("dinhvanphuong12@gmail.com").withPassword("12345").withBirthday("13/09/1989").withAddress("55 Tran Huy Lieu").withPhone("0942314842").withGender(Customer.Gender.Male);
	public Customer customer_13 = new Customer("Nguyễn Xuân Sang").withEmail("nguyenxuansang@gmail.com").withPassword("12345").withBirthday("22/01/1993").withAddress("23 Nguyen Van Troi").withPhone("0953214561").withGender(Customer.Gender.Female);
	public Customer customer_14 = new Customer("Lê Phú Quý").withEmail("lephuquy@gmail.com").withPassword("12345").withBirthday("02/01/1996").withAddress("842 Truong Sa").withPhone("0923548965").withGender(Customer.Gender.Female);
	public Customer customer_15 = new Customer("Lý Quốc Quyền").withEmail("lyquocquyen@gmail.com").withPassword("12345").withBirthday("23/05/1995").withAddress("111 Nguyen Phi Khanh").withPhone("0915231545").withGender(Customer.Gender.Male);
	public Customer customer_16 = new Customer("Bùi Minh Quân").withEmail("buiminhquan11@gmail.com").withPassword("12345").withBirthday("05/01/999").withAddress("562 Hoang Sa").withPhone("093566512").withGender(Customer.Gender.Male);
	public Customer customer_17 = new Customer("Nguyễn Ngọc Sơn").withEmail("nguyenngocson@gmail.com").withPassword("12345").withBirthday("06/01/1979").withAddress("101 Nguyen Trai").withPhone("0923265548").withGender(Customer.Gender.Male);
	public Customer customer_18 = new Customer("Bùi Duy Qúy").withEmail("buiduyquy@gmail.com").withPassword("12345").withBirthday("08/03/1999").withAddress("556 Hai Ba Trung").withPhone("0938623132").withGender(Customer.Gender.Female);
	public Customer customer_19 = new Customer("Võ Hoàng Phương").withEmail("vohoangphuong@gmail.com").withPassword("12345").withBirthday("30/01/1998").withAddress("456 Vo Thi Sau").withPhone("0923548461").withGender(Customer.Gender.Female);
	public Customer customer_20 = new Customer("Trần Minh Phương").withEmail("tranminhphuong@gmail.com").withPassword("12345").withBirthday("28/02/1999").withAddress("96 Nguyen Kiem").withPhone("0945213786").withGender(Customer.Gender.Male);
	public Customer customer_21 = new Customer("Võ Khải Hoàng Ca").withEmail("vokhaihoangka@gmail.com").withPassword("12345").withBirthday("27/05/1979").withAddress("45 Pham Van Dong").withPhone("0956232542").withGender(Customer.Gender.Male);
	public Customer customer_22 = new Customer("Hà Thị Thùy Chi").withEmail("hathithuychi@gmail.com").withPassword("12345").withBirthday("26/07/1977").withAddress("215 Nguyen Thai Son").withPhone("0923254821").withGender(Customer.Gender.Male);
	public Customer customer_23 = new Customer("Lê Văn Minh Châu").withEmail("levanminhchau@gmail.com").withPassword("12345").withBirthday("07/01/1994").withAddress("24 Thoai Ngoc Hau").withPhone("0993214521").withGender(Customer.Gender.Female);
	public Customer customer_24 = new Customer("Nguyễn Linh Chi").withEmail("lelinhchi@gmail.com").withPassword("12345").withBirthday("17/01/1969").withAddress("333 Nguyen Kiem").withPhone("0956231545").withGender(Customer.Gender.Male);
	public Customer customer_25 = new Customer("Lê Thị Phương Chi").withEmail("lethiphuongchi@gmail.com").withPassword("12345").withBirthday("03/01/1968").withAddress("69 Hoang Hoa Tham").withPhone("0955695462").withGender(Customer.Gender.Female);
	public Customer customer_26 = new Customer("Nguyễn Duy Chinh").withEmail("nguyenduychinh@gmail.com").withPassword("12345").withBirthday("10/01/1996").withAddress("79 Dong Den").withPhone("0822655132").withGender(Customer.Gender.Male);
	public Customer customer_27 = new Customer("Nguyễn Thế Chiến").withEmail("nguyenthechien@gmail.com").withPassword("12345").withBirthday("31/03/1999").withAddress("363 D1").withPhone("0956254852").withGender(Customer.Gender.Female);
	public Customer customer_28 = new Customer("Trần Đức Thịnh").withEmail("tranducthinh@gmail.com").withPassword("12345").withBirthday("14/02/1993").withAddress("86 D5").withPhone("0912315486").withGender(Customer.Gender.Male);
	public Customer customer_29 = new Customer("Trần Viễn Chinh").withEmail("tranvienchinh@gmail.com").withPassword("12345").withBirthday("14/03/1999").withAddress("686 Bui Dinh Tuy").withPhone("0925486512").withGender(Customer.Gender.Female);
	public Customer customer_30 = new Customer("Bùi Văn Chương").withEmail("buivanchuong@gmail.com").withPassword("12345").withBirthday("17/10/1999").withAddress("214 Nguyen Trai").withPhone("0934561234").withGender(Customer.Gender.Male);
	public Customer customer_31 = new Customer("Võ Khải Hoàng Ca").withEmail("cahoang@gmail.com").withPassword("12345").withBirthday("27/05/1999").withAddress("45 Pham Van Hoc").withPhone("05098191982").withGender(Customer.Gender.Female);
	public Customer customer_32 = new Customer("Hà Thị Thùy Chinh").withEmail("chinhthuy@gmail.com").withPassword("12345").withBirthday("26/07/1985").withAddress("215 Nguyen  Son").withPhone("099922536481").withGender(Customer.Gender.Male);
	public Customer customer_33 = new Customer("Lê Văn  Châu").withEmail("chauvan@gmail.com").withPassword("12345").withBirthday("07/01/1999").withAddress("24 Thoai Ngoc Hau").withPhone("09999115589").withGender(Customer.Gender.Female);
	public Customer customer_34 = new Customer("Nguyễn  Chi").withEmail("chinguyen@gmail.com").withPassword("12345").withBirthday("17/01/1959").withAddress("333 Nguyen Kiem").withPhone("098812828829").withGender(Customer.Gender.Male);
	public Customer customer_35 = new Customer("Lê  Phương Chi").withEmail("phuongchi@gmail.com").withPassword("12345").withBirthday("03/01/1989").withAddress("69 Hoang Hoa Tham").withPhone("051518918").withGender(Customer.Gender.Female);
	public Customer customer_36 = new Customer("Nguyễn Chinh").withEmail("chinhchinh@gmail.com").withPassword("12345").withBirthday("10/01/1997").withAddress("79 Dong Den").withPhone("0822655132").withGender(Customer.Gender.Male);
	public Customer customer_37 = new Customer("Nguyễn Thế ").withEmail("nguyenthe@gmail.com").withPassword("12345").withBirthday("31/03/1995").withAddress("363 D1").withPhone("0925455899").withGender(Customer.Gender.Male);
	public Customer customer_38 = new Customer("Trần Thịnh").withEmail("thinhtran@gmail.com").withPassword("12345").withBirthday("14/02/1999").withAddress("86 D5").withPhone("0912315486").withGender(Customer.Gender.Male);
	public Customer customer_39 = new Customer("Trần Viễn ").withEmail("tranvien@gmail.com").withPassword("12345").withBirthday("14/03/1999").withAddress("686 D5").withPhone("0925486512").withGender(Customer.Gender.Female);
	public Customer customer_40 = new Customer("Bùi Văn ").withEmail("vanbui@gmail.com").withPassword("12345").withBirthday("17/10/1989").withAddress("214 Nguyen Trai Ho Chi Minh").withPhone("0923254885").withGender(Customer.Gender.Female);
	public Customer customer_41 = new Customer("Võ Hoàng Ca").withEmail("cavo@gmail.com").withPassword("12345").withBirthday("27/05/1999").withAddress("45 Pham Van Dong Ha Noi").withPhone("0923254822").withGender(Customer.Gender.Male);
	public Customer customer_42 = new Customer("Hà Thị  Chi").withEmail("chihathi@gmail.com").withPassword("12345").withBirthday("26/07/1997").withAddress("215 Nguyen Thai Son Lam Dong").withPhone("0923254821").withGender(Customer.Gender.Male);
	public Customer customer_43 = new Customer("Lê Văn  Châu").withEmail("chaulv@gmail.com").withPassword("12345").withBirthday("07/01/1996").withAddress("24 Nguyen Ban Ha Noi").withPhone("099814856814").withGender(Customer.Gender.Female);
	public Customer customer_44 = new Customer("Nguyễn Linh ").withEmail("linhnguyen@gmail.com").withPassword("12345").withBirthday("17/01/1999").withAddress("333 Nguyen Kiem").withPhone("0956231545").withGender(Customer.Gender.Male);
	public Customer customer_45 = new Customer("Lê Thị Phương Chi").withEmail("chile@gmail.com").withPassword("12345").withBirthday("03/01/1997").withAddress("69 Hoang Hoa Tham").withPhone("0955695462").withGender(Customer.Gender.Male);
	public Customer customer_46 = new Customer("Nguyễn Duy ").withEmail("Duy@gmail.com").withPassword("12345").withBirthday("10/01/2001").withAddress("79 Dong Den Ha Noi").withPhone("0999255812").withGender(Customer.Gender.Female);
	public Customer customer_47 = new Customer("Nguyễn  Chiến").withEmail("chiennguyen@gmail.com").withPassword("12345").withBirthday("31/03/2000").withAddress("363 D1").withPhone("09985854156").withGender(Customer.Gender.Male);
	public Customer customer_48 = new Customer("Trần  Thịnh Đức").withEmail("ducthinhtran@gmail.com").withPassword("12345").withBirthday("14/02/2000").withAddress("86 D5").withPhone("078869918").withGender(Customer.Gender.Male);
	public Customer customer_49 = new Customer("Trần Chương Chinh").withEmail("chinhchuong@gmail.com").withPassword("12345").withBirthday("14/03/2001").withAddress("686 Bui Dinh Tuy Nha Trang").withPhone("0999252556").withGender(Customer.Gender.Female);
	public Customer customer_50 = new Customer("Bùi Văn Đức Chương").withEmail("chuongducbuivan12@gmail.com").withPassword("12345").withBirthday("17/10/1998").withAddress("214 Nguyen Trai Nha Trang").withPhone("09991584863").withGender(Customer.Gender.Male);

	public Customer[] ALL_CUSTOMERS = {customer_2, customer_3, customer_4, customer_5, customer_6, customer_10, customer_11, customer_12, customer_13, customer_14, customer_15, customer_16, customer_17, customer_18, customer_19, customer_20, customer_7, customer_8, customer_9, customer_21, customer_22, customer_23, customer_24, customer_25, customer_26, customer_27, customer_28, customer_29, customer_30, customer_31, customer_32, customer_33, customer_34, customer_35, customer_36, customer_37, customer_38, customer_39, customer_40, customer_41, customer_42, customer_43, customer_44, customer_45, customer_46, customer_47, customer_48, customer_49, customer_50};

	public Employee employee_1 = new Employee("Phạm Võ Hoài Anh").
		withAddress("Hải Phòng").
		withEmail("hoaianh@gmail.com").
		withPassword("12345").
		withUsername("phamvohoaianh").
		withBirthday("00/00/0000").
		withGender(BaseAccount.Gender.Female).
		withPhone("09168860230");

	//TODO: missing field birthday | gender
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

		FoodData _DATA_FOOD = new FoodData();
		ProductData _DATA_PRODUCT = new ProductData();

		//TODO: mau data cho Order
	 Order order_1 = new Order("order-1").
			withEmployee(employee_2).
			withCustomer(customer_2).
			withState(Order.State.DUE).
			addOrderItem(_DATA_FOOD.food_2).
			addOrderItem(_DATA_FOOD.food_2).
			addOrderItem(_DATA_FOOD.food_3).
			addOrderItem(_DATA_PRODUCT.product_3).
			addOrderItem(_DATA_PRODUCT.product_3).
			addOrderItem(_DATA_PRODUCT.product_1).
			withPayment( // Payment : thanh toan
				new Payment("Tien Mat").
					withAmount(200).
					withTransactionDate("31/07/2020@11:26:07"). //Ngay ngay thanh toan
					withTransactionType(Payment.TransactionType.Cash)).
			withTransactionDate("12/12/2020@18:20:20"); //Ngay in hoa don

		Order order_2 = new Order("order_2").
			withEmployee(employee_1).
			withCustomer(customer_2).
			withState(Order.State.DUE).
			addOrderItem(_DATA_FOOD.food_4).
			addOrderItem(_DATA_FOOD.food_2).
				withPayment( // Payment : thanh toan
						new Payment("Tien Mat").
								withAmount(200).
								withTransactionDate("11/6/2020@10:20:20"). //Ngay ngay thanh toan
								withTransactionType(Payment.TransactionType.Cash))
				.withTransactionDate("11/6/2020@10:20:20");


	public Order order_3 = new Order("order_3").
			withEmployee(employee_10).
			withCustomer(customer_5).
			withState(Order.State.DUE).
			addOrderItem(_DATA_FOOD.food_2).
			addOrderItem(_DATA_FOOD.food_5).
			addOrderItem(_DATA_FOOD.food_3).
			withPayment( // Payment : thanh toan
					new Payment("Tien Mat").
							withAmount(200).
							withTransactionDate("11/6/2020@10:20:20"). //Ngay ngay thanh toan
							withTransactionType(Payment.TransactionType.Cash))
			.withTransactionDate("11/6/2020@10:20:20");


	public Order order_4 = new Order("order_4").

			withEmployee(employee_10).
			withState(Order.State.DUE).
			withCustomer(customer_5).
			addOrderItem(_DATA_FOOD.food_2).
			addOrderItem(_DATA_FOOD.food_5).
			addOrderItem(_DATA_FOOD.food_3).
			withPayment( // Payment : thanh toan
					new Payment("Tien Mat").
							withAmount(200).
							withTransactionDate("13/5/2021@12:20:20"). //Ngay ngay thanh toan
							withTransactionType(Payment.TransactionType.Cash)).withTransactionDate("13/5/2021@12:20:20");

	public Order order_5 = new Order("order_5").

			withEmployee(employee_10).
			withState(Order.State.DUE).
			withCustomer(customer_6).
			addOrderItem(_DATA_FOOD.food_2).
			addOrderItem(_DATA_FOOD.food_5).
			addOrderItem(_DATA_FOOD.food_3).


			withPayment( // Payment : thanh toan
					new Payment("Tien Mat").
							withAmount(200).
							withTransactionDate("14/3/2020@13:20:20"). //Ngay ngay thanh toan
							withTransactionType(Payment.TransactionType.Cash)).withTransactionDate("14/3/2020@13:20:20");

	public Order order_6 = new Order("order_6").

			withEmployee(employee_10).
			withCustomer(customer_6).
			withState(Order.State.DUE).
			addOrderItem(_DATA_FOOD.food_2).
			addOrderItem(_DATA_FOOD.food_5).
			addOrderItem(_DATA_FOOD.food_3).
			withPayment( // Payment : thanh toan
					new Payment("Tien Mat").
							withAmount(200).
							withTransactionDate("15/2/2020@14:20:20"). //Ngay ngay thanh toan
							withTransactionType(Payment.TransactionType.Cash)).withTransactionDate("15/2/2020@14:20:20");


	public Order order_7 = new Order("order_7").

			withEmployee(employee_7).
			withState(Order.State.DUE).
			withCustomer(customer_7).
			addOrderItem(_DATA_FOOD.food_2).
			addOrderItem(_DATA_FOOD.food_5).
			addOrderItem(_DATA_FOOD.food_3).
			withPayment(new Payment("Vietcombank").
					withAmount(800000).
					withTransactionDate("16/4/2020@15:20:20").
					withTransactionType(Payment.TransactionType.ATM)).withTransactionDate("16/4/2020@15:20:20");


	public Order order_8 = new Order("order_8").

			withEmployee(employee_7).
			withCustomer(customer_7).
			withState(Order.State.DUE).
			addOrderItem(_DATA_FOOD.food_2).
			addOrderItem(_DATA_FOOD.food_5).
			addOrderItem(_DATA_FOOD.food_3).
			withPayment(new Payment("Vietcombank").
					withAmount(800000).
					withTransactionDate("17/7/2020@16:20:20").
					withTransactionType(Payment.TransactionType.ATM)).withTransactionDate("17/7/2020@16:20:20");

	public Order order_9 = new Order("order_9").

			withEmployee(employee_7).
			withCustomer(customer_8).
			withState(Order.State.DUE).
			addOrderItem(_DATA_FOOD.food_2).
			addOrderItem(_DATA_FOOD.food_5).
			addOrderItem(_DATA_FOOD.food_3).

			withPayment(new Payment("Vietcombank").
					withAmount(800000).
					withTransactionDate("18/6/2020@16:20:20").
					withTransactionType(Payment.TransactionType.ATM)).withTransactionDate("18/6/2020@16:20:20");

	public Order order_10 = new Order("order_10").

			withEmployee(employee_7).
			withState(Order.State.DUE).
			withCustomer(customer_8).
			addOrderItem(_DATA_FOOD.food_2).
			addOrderItem(_DATA_FOOD.food_5).
			addOrderItem(_DATA_FOOD.food_3).
			withPayment(new Payment("Vietcombank").
					withAmount(800000).
					withTransactionDate("19/5/2020@17:20:20").
					withTransactionType(Payment.TransactionType.ATM)).withTransactionDate("19/5/2020@17:20:20");
	public Order order_11 = new Order("order_11").

			withEmployee(employee_7).
			withCustomer(customer_10).
			withState(Order.State.DUE).
			addOrderItem(_DATA_FOOD.food_2).
			addOrderItem(_DATA_FOOD.food_5).
			addOrderItem(_DATA_FOOD.food_3).
			withPayment(new Payment("Vietcombank").
					withAmount(800000).
					withTransactionDate("20/1/2020@18:20:20").
					withTransactionType(Payment.TransactionType.ATM)).withTransactionDate("20/1/2020@18:20:20");


	public Order order_12 = new Order("order_12").

			withEmployee(employee_8).
			withState(Order.State.DUE).
			withCustomer(customer_10).
			addOrderItem(_DATA_FOOD.food_2).
			addOrderItem(_DATA_FOOD.food_5).
			addOrderItem(_DATA_FOOD.food_3).

			withPayment(new Payment("Vietcombank").
					withAmount(800000).
					withTransactionDate("21/3/2020@13:20:20").
					withTransactionType(Payment.TransactionType.ATM)).withTransactionDate("21/3/2020@13:20:20");
	public Order order_13 = new Order("order_13").

			withEmployee(employee_8).
			withState(Order.State.DUE).
			withCustomer(customer_10).
			addOrderItem(_DATA_FOOD.food_2).
			addOrderItem(_DATA_FOOD.food_5).
			addOrderItem(_DATA_FOOD.food_3).
			withPayment(new Payment("Vietcombank").
					withAmount(800000).
					withTransactionDate("22/4/2020@12:20:20").
					withTransactionType(Payment.TransactionType.ATM)).withTransactionDate("22/4/2020@12:20:20");


	public Order order_14 = new Order("order_14").

			withEmployee(employee_8).
			withState(Order.State.DUE).
			withCustomer(customer_10).
			addOrderItem(_DATA_FOOD.food_2).
			addOrderItem(_DATA_FOOD.food_5).
			addOrderItem(_DATA_FOOD.food_3).
			withPayment( // Payment : thanh toan
					new Payment("Tien Mat").
							withAmount(200).
							withTransactionDate("23/3/2020@11:20:20"). //Ngay ngay thanh toan
							withTransactionType(Payment.TransactionType.Cash)).withTransactionDate("23/3/2020@11:20:20");

	public Order order_15 = new Order("order_15").

			withEmployee(employee_8).
			withCustomer(customer_11).
			withState(Order.State.DUE).
			addOrderItem(_DATA_FOOD.food_2).
			addOrderItem(_DATA_FOOD.food_5).
			addOrderItem(_DATA_FOOD.food_3).

			withPayment( // Payment : thanh toan
					new Payment("Tien Mat").
							withAmount(200).
							withTransactionDate("23/2/2020@12:20:20"). //Ngay ngay thanh toan
							withTransactionType(Payment.TransactionType.Cash)).withTransactionDate("23/2/2020@12:20:20");


	public Order order_16 = new Order("order_16").

			withEmployee(employee_8).
			withCustomer(customer_11).
			withState(Order.State.DUE).
			addOrderItem(_DATA_FOOD.food_2).
			addOrderItem(_DATA_FOOD.food_5).
			addOrderItem(_DATA_FOOD.food_3).


			withPayment( // Payment : thanh toan
					new Payment("Tien Mat").
							withAmount(200).
							withTransactionDate("25/7/2020@13:20:20"). //Ngay ngay thanh toan
							withTransactionType(Payment.TransactionType.Cash)).withTransactionDate("25/7/2020@13:20:20");
	public Order order_17 = new Order("order_17").

			withEmployee(employee_3).
			withCustomer(customer_12).
			withState(Order.State.DUE).
			addOrderItem(_DATA_FOOD.food_2).
			addOrderItem(_DATA_FOOD.food_5).
			addOrderItem(_DATA_FOOD.food_3).

			withPayment( // Payment : thanh toan
					new Payment("Tien Mat").
							withAmount(200).
							withTransactionDate("24/6/2020@14:20:20"). //Ngay ngay thanh toan
							withTransactionType(Payment.TransactionType.Cash)).withTransactionDate("24/6/2020@14:20:20");

	public Order order_18 = new Order("order_18").

			withEmployee(employee_3).
			withCustomer(customer_12).
			addOrderItem(_DATA_FOOD.food_2).
			addOrderItem(_DATA_FOOD.food_5).
			withState(Order.State.DUE).
			addOrderItem(_DATA_FOOD.food_3).
			withPayment( // Payment : thanh toan
					new Payment("Tien Mat").
							withAmount(200).
							withTransactionDate("26/5/2020@15:20:20"). //Ngay ngay thanh toan
							withTransactionType(Payment.TransactionType.Cash)).withTransactionDate("26/5/2020@15:20:20");


	public Order order_19 = new Order("order_19").

			withEmployee(employee_3).
			withCustomer(customer_13).
			addOrderItem(_DATA_FOOD.food_19).
			addOrderItem(_DATA_FOOD.food_5).
			addOrderItem(_DATA_FOOD.food_3).
			withState(Order.State.DUE).
			withPayment( // Payment : thanh toan
					new Payment("Tien Mat").
							withAmount(200).
							withTransactionDate("10/4/2020@15:20:20"). //Ngay ngay thanh toan
							withTransactionType(Payment.TransactionType.Cash)).withTransactionDate("10/4/2020@15:20:20");

	public Order order_20 = new Order("order_20").

			withEmployee(employee_3).
			withCustomer(customer_13).
			withState(Order.State.DUE).
			addOrderItem(_DATA_FOOD.food_20).
			addOrderItem(_DATA_FOOD.food_5).
			addOrderItem(_DATA_FOOD.food_3).
			withPayment(new Payment("Vietcombank").
					withAmount(800000).
					withTransactionDate("10/1/2020@12:20:20").
					withTransactionType(Payment.TransactionType.ATM)).withTransactionDate("10/1/2020@12:20:20");

	public Order order_41 = new Order("order_41").
			withEmployee(employee_5).
			withCustomer(customer_14).
			addOrderItem(_DATA_FOOD.food_18).
			addOrderItem(_DATA_FOOD.food_5).
			withState(Order.State.DUE).
			addOrderItem(_DATA_FOOD.food_3).

			withPayment(new Payment("Vietcombank").
					withAmount(800000).
					withTransactionDate("22/3/2020@13:20:20").
					withTransactionType(Payment.TransactionType.ATM)).withTransactionDate("22/3/2020@13:20:20");


	public Order order_42 = new Order("order_42").
			withEmployee(employee_5).
			withCustomer(customer_14).
			addOrderItem(_DATA_FOOD.food_2).
			addOrderItem(_DATA_FOOD.food_17).
			addOrderItem(_DATA_FOOD.food_3).
			withState(Order.State.DUE).

			withPayment(new Payment("Vietcombank").
					withAmount(800000).
					withTransactionDate("22/3/2020@13:20:20").
					withTransactionType(Payment.TransactionType.ATM)).withTransactionDate("22/3/2020@13:20:20");


	public Order order_43 = new Order("order_43").

			withEmployee(employee_5).
			withCustomer(customer_15).
			addOrderItem(_DATA_FOOD.food_2).
			addOrderItem(_DATA_FOOD.food_16).
			addOrderItem(_DATA_FOOD.food_3).
			withState(Order.State.DUE).
			withPayment( // Payment : thanh toan
					new Payment("Tien Mat").
							withAmount(200).
							withTransactionDate("10/1/2020@12:20:20"). //Ngay ngay thanh toan
							withTransactionType(Payment.TransactionType.Cash))
			.withTransactionDate("11/6/2020@10:20:20");

	public Order order_44 = new Order("order_44").

			withEmployee(employee_3).
			withCustomer(customer_15).
			addOrderItem(_DATA_FOOD.food_1).
			addOrderItem(_DATA_FOOD.food_4).
			addOrderItem(_DATA_FOOD.food_3).
			withState(Order.State.DUE).

			withPayment( // Payment : thanh toan
					new Payment("Tien Mat").
							withAmount(200).
							withTransactionDate("13/5/2020@12:20:20"). //Ngay ngay thanh toan
							withTransactionType(Payment.TransactionType.Cash)).withTransactionDate("13/5/2020@12:20:20");

	public Order order_45 = new Order("order_45").

			withEmployee(employee_3).
			withCustomer(customer_16).
			addOrderItem(_DATA_FOOD.food_2).
			addOrderItem(_DATA_FOOD.food_5).
			addOrderItem(_DATA_FOOD.food_3).
			withState(Order.State.CANCEL).

			withPayment( // Payment : thanh toan
					new Payment("Tien Mat").
							withAmount(200).
							withTransactionDate("13/5/2020@12:20:20"). //Ngay ngay thanh toan
							withTransactionType(Payment.TransactionType.Cash)).withTransactionDate("14/3/2020@13:20:20");

	public Order order_46 = new Order("order_46").

			withEmployee(employee_3).
			withCustomer(customer_16).
			addOrderItem(_DATA_FOOD.food_2).
			addOrderItem(_DATA_FOOD.food_5).
			addOrderItem(_DATA_FOOD.food_3).
			withState(Order.State.CANCEL).

			withPayment( // Payment : thanh toan
					new Payment("Tien Mat").
							withAmount(200).
							withTransactionDate("15/2/2020@14:20:20"). //Ngay ngay thanh toan
							withTransactionType(Payment.TransactionType.Cash)).withTransactionDate("15/2/2020@14:20:20");


	public Order order_47 = new Order("order_47").

			withEmployee(employee_1).
			withCustomer(customer_16).
			addOrderItem(_DATA_FOOD.food_2).
			addOrderItem(_DATA_FOOD.food_5).
			addOrderItem(_DATA_FOOD.food_3).
			withState(Order.State.DUE).
			withPayment(new Payment("Vietcombank").
					withAmount(800000).
					withTransactionDate("15/2/2020@14:20:20").
					withTransactionType(Payment.TransactionType.ATM)).withTransactionDate("16/4/2020@15:20:20");

	public Order order_48 = new Order("order_48").

			withEmployee(employee_1).
			withCustomer(customer_16).
			addOrderItem(_DATA_FOOD.food_2).
			addOrderItem(_DATA_FOOD.food_5).
			addOrderItem(_DATA_FOOD.food_3).
			withState(Order.State.PAID).

			withPayment(new Payment("Vietcombank").
					withAmount(800000).
					withTransactionDate("15/2/2020@14:20:20").
					withTransactionType(Payment.TransactionType.ATM)).withTransactionDate("17/7/2020@16:20:20");


	public Order order_49 = new Order("order_49").

			withEmployee(employee_1).
			withCustomer(customer_16).
			addOrderItem(_DATA_FOOD.food_2).
			addOrderItem(_DATA_FOOD.food_5).
			addOrderItem(_DATA_FOOD.food_3).
			withState(Order.State.CANCEL).
			withPayment(new Payment("Vietcombank").
					withAmount(800000).
					withTransactionDate("15/2/2020@14:20:20").
					withTransactionType(Payment.TransactionType.ATM)).withTransactionDate("18/6/2020@16:20:20");

	public Order order_50 = new Order("order_50").

			withEmployee(employee_1).
			withCustomer(customer_20).
			addOrderItem(_DATA_FOOD.food_2).
			addOrderItem(_DATA_FOOD.food_5).
			addOrderItem(_DATA_FOOD.food_3).
			withPayment( // Payment : thanh toan
					new Payment("Tien Mat").
							withAmount(200).
							withTransactionDate("12/12/2020@18:20:20"). //Ngay ngay thanh toan
							withTransactionType(Payment.TransactionType.Cash)).withTransactionDate("19/5/2020@17:20:20");

	public Order order_51 = new Order("order_51").

			withEmployee(employee_8).
			withCustomer(customer_16).
			addOrderItem(_DATA_FOOD.food_2).
			addOrderItem(_DATA_FOOD.food_5).
			addOrderItem(_DATA_FOOD.food_3).
			withState(Order.State.CANCEL).

			withPayment( // Payment : thanh toan
					new Payment("Tien Mat").
							withAmount(200).
							withTransactionDate("20/1/2020@18:20:20"). //Ngay ngay thanh toan
							withTransactionType(Payment.TransactionType.Cash)).withTransactionDate("20/1/2020@18:20:20");

	public Order order_52 = new Order("order_52").

			withEmployee(employee_8).
			withCustomer(customer_16).
			addOrderItem(_DATA_FOOD.food_2).
			addOrderItem(_DATA_FOOD.food_5).
			addOrderItem(_DATA_FOOD.food_3).
			withState(Order.State.DUE).

			withPayment( // Payment : thanh toan
					new Payment("Tien Mat").
							withAmount(200).
							withTransactionDate("21/3/2020@13:20:20"). //Ngay ngay thanh toan
							withTransactionType(Payment.TransactionType.Cash)).withTransactionDate("21/3/2020@13:20:20");

	public Order order_63 = new Order("order_63").

			withEmployee(employee_8).
			withCustomer(customer_16).
			addOrderItem(_DATA_FOOD.food_2).
			addOrderItem(_DATA_FOOD.food_5).
			addOrderItem(_DATA_FOOD.food_3).
			withState(Order.State.DUE).

			withPayment( // Payment : thanh toan
					new Payment("Tien Mat").
							withAmount(200).
							withTransactionDate("22/4/2020@12:20:20"). //Ngay ngay thanh toan
							withTransactionType(Payment.TransactionType.Cash)).withTransactionDate("22/4/2020@12:20:20");


	public Order order_62 = new Order("order_62").

			withEmployee(employee_8).
			withCustomer(customer_16).
			addOrderItem(_DATA_FOOD.food_2).
			addOrderItem(_DATA_FOOD.food_5).
			addOrderItem(_DATA_FOOD.food_3).
			withState(Order.State.DUE).
			withPayment(new Payment("Vietcombank").
					withAmount(800000).
					withTransactionDate("23/3/2021@11:20:20").
					withTransactionType(Payment.TransactionType.ATM)).withTransactionDate("23/3/2021@11:20:20");

	public Order order_61 = new Order("order_61").

			withEmployee(employee_9).
			withCustomer(customer_16).
			addOrderItem(_DATA_FOOD.food_2).
			addOrderItem(_DATA_FOOD.food_5).
			addOrderItem(_DATA_FOOD.food_3).
			withState(Order.State.DUE).

			withPayment(new Payment("Vietcombank").
					withAmount(800000).
					withTransactionDate("23/2/2021@12:20:20").
					withTransactionType(Payment.TransactionType.ATM)).withTransactionDate("23/2/2021@12:20:20");

	public Order order_560 = new Order("order_560").

			withEmployee(employee_9).
			withCustomer(customer_17).
			addOrderItem(_DATA_FOOD.food_2).
			addOrderItem(_DATA_FOOD.food_5).
			addOrderItem(_DATA_FOOD.food_3).
			withState(Order.State.DUE).

			withPayment(new Payment("Vietcombank").
					withAmount(800000).
					withTransactionDate("25/7/2020@13:20:20").
					withTransactionType(Payment.TransactionType.ATM)).withTransactionDate("25/7/2020@13:20:20");

	public Order order_571 = new Order("order_571").

			withEmployee(employee_9).
			withCustomer(customer_17).
			addOrderItem(_DATA_FOOD.food_2).
			addOrderItem(_DATA_FOOD.food_5).
			addOrderItem(_DATA_FOOD.food_3).
			withState(Order.State.DUE).

			withPayment( // Payment : thanh toan
					new Payment("Tien Mat").
							withAmount(200).
							withTransactionDate("24/6/2020@14:20:20"). //Ngay ngay thanh toan
							withTransactionType(Payment.TransactionType.Cash)).withTransactionDate("24/6/2020@14:20:20");

	public Order order_581 = new Order("order_581").

			withEmployee(employee_9).
			withCustomer(customer_17).
			addOrderItem(_DATA_FOOD.food_2).
			addOrderItem(_DATA_FOOD.food_5).
			addOrderItem(_DATA_FOOD.food_3).
			withState(Order.State.PAID).

			withPayment( // Payment : thanh toan
					new Payment("Tien Mat").
							withAmount(200).
							withTransactionDate("26/5/2020@15:20:20"). //Ngay ngay thanh toan
							withTransactionType(Payment.TransactionType.Cash)).withTransactionDate("26/5/2020@15:20:20");

	public Order order_591 = new Order("order_591").

			withEmployee(employee_9).
			withCustomer(customer_17).
			addOrderItem(_DATA_FOOD.food_2).
			addOrderItem(_DATA_FOOD.food_5).
			addOrderItem(_DATA_FOOD.food_3).
			withState(Order.State.DUE).

			withPayment( // Payment : thanh toan
					new Payment("Tien Mat").
							withAmount(200).
							withTransactionDate("10/4/2020@15:20:20"). //Ngay ngay thanh toan
							withTransactionType(Payment.TransactionType.Cash)).withTransactionDate("10/4/2020@15:20:20");

	public Order order_60 = new Order("order_60").

			withEmployee(employee_9).
			withCustomer(customer_18).
			addOrderItem(_DATA_FOOD.food_2).
			addOrderItem(_DATA_FOOD.food_5).
			addOrderItem(_DATA_FOOD.food_3).
			withState(Order.State.CANCEL).
			withPayment(new Payment("Vietcombank").
					withAmount(800000).
					withTransactionDate("10/1/2020@12:20:20").
					withTransactionType(Payment.TransactionType.ATM)).withTransactionDate("10/1/2020@12:20:20");

	public Order order_21 = new Order("order_21").
			withEmployee(employee_3).
			withCustomer(customer_5).
			addOrderItem(_DATA_FOOD.food_1).
			addOrderItem(_DATA_FOOD.food_2).
			addOrderItem(_DATA_FOOD.food_4).
			withPayment( // Payment : thanh toan
					new Payment("Tien Mat").

							withAmount(200).

							withTransactionDate("12/12/2020@18:20:20"). //Ngay ngay thanh toan

							withTransactionType(Payment.TransactionType.Cash)).

			withTransactionDate("12/12/2020@18:20:20");


	public Order order_22 = new Order("order_22").
			withEmployee(employee_4).
			withCustomer(customer_18).
			addOrderItem(_DATA_FOOD.food_2).
			addOrderItem(_DATA_FOOD.food_2).
			withState(Order.State.DUE).
			withPayment( // Payment : thanh toan
					new Payment("Tien Mat").

							withAmount(200).

							withTransactionDate("12/12/2020@18:20:20"). //Ngay ngay thanh toan

							withTransactionType(Payment.TransactionType.Cash)).

			withTransactionDate("12/12/2020@18:20:20");


	public Order order_23 = new Order("order_23").

			withEmployee(employee_10).
			withCustomer(customer_10).
			addOrderItem(_DATA_FOOD.food_5).
			addOrderItem(_DATA_FOOD.food_10).
			addOrderItem(_DATA_FOOD.food_20).
			withState(Order.State.CANCEL).
			withPayment(new Payment("Vietcombank").
					withAmount(800000).
					withTransactionDate("11/6/2020@10:20:20").
					withTransactionType(Payment.TransactionType.ATM))
			.withTransactionDate("11/6/2020@10:20:20");

	public Order order_24 = new Order("order_24").

			withEmployee(employee_4).
			withCustomer(customer_18).
			addOrderItem(_DATA_FOOD.food_18).
			addOrderItem(_DATA_FOOD.food_2).
			addOrderItem(_DATA_FOOD.food_3).
			withState(Order.State.DUE).

			withPayment( // Payment : thanh toan
					new Payment("Tien Mat").
							withAmount(200).
							withTransactionDate("13/5/2020@12:20:20"). //Ngay ngay thanh toan
							withTransactionType(Payment.TransactionType.Cash)).withTransactionDate("13/5/2020@12:20:20");

	public Order order_25 = new Order("order_25").

			withEmployee(employee_4).
			withCustomer(customer_18).
			addOrderItem(_DATA_FOOD.food_2).
			addOrderItem(_DATA_FOOD.food_5).
			addOrderItem(_DATA_FOOD.food_3).
			withState(Order.State.DUE).
			withPayment( // Payment : thanh toan
					new Payment("Tien Mat").
							withAmount(200).
							withTransactionDate("14/3/2020@13:20:20"). //Ngay ngay thanh toan
							withTransactionType(Payment.TransactionType.Cash)).withTransactionDate("14/3/2020@13:20:20");

	public Order order_26 = new Order("order_26").

			withEmployee(employee_4).
			withCustomer(customer_18).
			addOrderItem(_DATA_FOOD.food_2).
			addOrderItem(_DATA_FOOD.food_5).
			addOrderItem(_DATA_FOOD.food_3).
			withState(Order.State.PAID).

			withPayment( // Payment : thanh toan
					new Payment("Tien Mat").
							withAmount(200).
							withTransactionDate("15/2/2020@14:20:20"). //Ngay ngay thanh toan
							withTransactionType(Payment.TransactionType.Cash)).withTransactionDate("15/2/2020@14:20:20");

	public Order order_27 = new Order("order_27").

			withEmployee(employee_10).
			withCustomer(customer_5).
			addOrderItem(_DATA_FOOD.food_15).
			addOrderItem(_DATA_FOOD.food_3).withState(Order.State.PAID).


			withPayment(new Payment("Vietcombank").
					withAmount(800000).
					withTransactionDate("16/4/2020@15:20:20").
					withTransactionType(Payment.TransactionType.ATM)).withTransactionDate("16/4/2020@15:20:20");

	public Order order_28 = new Order("order_28").

			withEmployee(employee_4).
			withCustomer(customer_18).
			addOrderItem(_DATA_FOOD.food_2).
			addOrderItem(_DATA_FOOD.food_5).
			addOrderItem(_DATA_FOOD.food_3).
			withState(Order.State.DUE).

			withPayment( // Payment : thanh toan
					new Payment("Tien Mat").
							withAmount(200).
							withTransactionDate("17/7/2020@16:20:20"). //Ngay ngay thanh toan
							withTransactionType(Payment.TransactionType.Cash)).withTransactionDate("17/7/2020@16:20:20");

	public Order order_29 = new Order("order_29").

			withEmployee(employee_5).
			withCustomer(customer_2).
			addOrderItem(_DATA_FOOD.food_2).
			addOrderItem(_DATA_FOOD.food_5).
			addOrderItem(_DATA_FOOD.food_3).
			withState(Order.State.DUE).

			withPayment(new Payment("Vietcombank").
					withAmount(800000).
					withTransactionDate("18/6/2020@16:20:20").
					withTransactionType(Payment.TransactionType.ATM)).withTransactionDate("18/6/2020@16:20:20");

	public Order order_30 = new Order("order_30").

			withEmployee(employee_5).
			withCustomer(customer_2).
			addOrderItem(_DATA_FOOD.food_2).
			addOrderItem(_DATA_FOOD.food_5).
			addOrderItem(_DATA_FOOD.food_3).
			withState(Order.State.DUE).

			withPayment(new Payment("Vietcombank").
					withAmount(800000).
					withTransactionDate("19/5/2020@17:20:20").
					withTransactionType(Payment.TransactionType.ATM)).withTransactionDate("19/5/2020@17:20:20");

	public Order order_31 = new Order("order_31").

			withEmployee(employee_5).
			withCustomer(customer_2).
			addOrderItem(_DATA_FOOD.food_2).
			addOrderItem(_DATA_FOOD.food_5).
			addOrderItem(_DATA_FOOD.food_3).
			withState(Order.State.DUE).


			withPayment(new Payment("Vietcombank").
					withAmount(800000).
					withTransactionDate("20/1/2020@18:20:20").
					withTransactionType(Payment.TransactionType.ATM)).withTransactionDate("20/1/2020@18:20:20");


	public Order order_32 = new Order("order_32").

			withEmployee(employee_5).
			withCustomer(customer_2).
			addOrderItem(_DATA_FOOD.food_2).
			addOrderItem(_DATA_FOOD.food_5).
			withState(Order.State.DUE).
			addOrderItem(_DATA_FOOD.food_3).


			withPayment( // Payment : thanh toan
					new Payment("Tien Mat").
							withAmount(200).
							withTransactionDate("21/3/2020@13:20:20"). //Ngay ngay thanh toan
							withTransactionType(Payment.TransactionType.Cash)).withTransactionDate("21/3/2020@13:20:20");

	public Order order_53 = new Order("order_53").

			withEmployee(employee_5).
			withCustomer(customer_2).
			addOrderItem(_DATA_FOOD.food_2).
			addOrderItem(_DATA_FOOD.food_5).
			withState(Order.State.DUE).
			addOrderItem(_DATA_FOOD.food_3).


			withPayment( // Payment : thanh toan
					new Payment("Tien Mat").
							withAmount(200).
							withTransactionDate("12/12/2020@18:20:20"). //Ngay ngay thanh toan
							withTransactionType(Payment.TransactionType.Cash)).withTransactionDate("22/4/2020@12:20:20");

	public Order order_54 = new Order("order_54").

			withEmployee(employee_5).
			withCustomer(customer_2).
			addOrderItem(_DATA_FOOD.food_2).
			addOrderItem(_DATA_FOOD.food_5).
			addOrderItem(_DATA_FOOD.food_3).
			withState(Order.State.DUE).
			withPayment(new Payment("Vietcombank").
					withAmount(800000).
					withTransactionDate("23/3/2020@11:20:20").
					withTransactionType(Payment.TransactionType.ATM)).withTransactionDate("23/3/2020@11:20:20");

	public Order order_55 = new Order("order_55").

			withEmployee(employee_2).
			withCustomer(customer_4).
			addOrderItem(_DATA_FOOD.food_2).
			addOrderItem(_DATA_FOOD.food_5).
			addOrderItem(_DATA_FOOD.food_3).
			withState(Order.State.CANCEL).

			withPayment( // Payment : thanh toan
					new Payment("Tien Mat").
							withAmount(200).
							withTransactionDate("23/2/2020@12:20:20"). //Ngay ngay thanh toan
							withTransactionType(Payment.TransactionType.Cash)).withTransactionDate("23/2/2020@12:20:20");


	public Order order_56 = new Order("order_56").

			withEmployee(employee_5).
			withCustomer(customer_4).
			addOrderItem(_DATA_FOOD.food_2).
			addOrderItem(_DATA_FOOD.food_5).
			addOrderItem(_DATA_FOOD.food_3).
			withState(Order.State.PAID).

			withPayment( // Payment : thanh toan
					new Payment("Tien Mat").
							withAmount(200).
							withTransactionDate("25/7/2020@13:20:20"). //Ngay ngay thanh toan
							withTransactionType(Payment.TransactionType.Cash)).withTransactionDate("25/7/2020@13:20:20");

	public Order order_57 = new Order("order_57").

			withEmployee(employee_5).
			withCustomer(customer_4).
			addOrderItem(_DATA_FOOD.food_2).
			addOrderItem(_DATA_FOOD.food_5).
			addOrderItem(_DATA_FOOD.food_3).
			withState(Order.State.DUE).

			withPayment( // Payment : thanh toan
					new Payment("Tien Mat").
							withAmount(200).
							withTransactionDate("24/6/2020@14:20:20"). //Ngay ngay thanh toan
							withTransactionType(Payment.TransactionType.Cash)).withTransactionDate("24/6/2020@14:20:20");

	public Order order_58 = new Order("order_58").

			withEmployee(employee_5).
			withCustomer(customer_4).
			addOrderItem(_DATA_FOOD.food_2).
			addOrderItem(_DATA_FOOD.food_5).
			addOrderItem(_DATA_FOOD.food_3).
			withState(Order.State.DUE).

			withPayment( // Payment : thanh toan
					new Payment("Tien Mat").
							withAmount(200).
							withTransactionDate("26/5/2020@15:20:20"). //Ngay ngay thanh toan
							withTransactionType(Payment.TransactionType.Cash)).withTransactionDate("26/5/2020@15:20:20");

	public Order order_59 = new Order("order_59").

			withEmployee(employee_5).
			withCustomer(customer_4).
			addOrderItem(_DATA_FOOD.food_2).
			addOrderItem(_DATA_FOOD.food_5).
			addOrderItem(_DATA_FOOD.food_3).
			withState(Order.State.DUE).
			withPayment( // Payment : thanh toan
					new Payment("Tien Mat").
							withAmount(200).
							withTransactionDate("10/4/2020@15:20:20"). //Ngay ngay thanh toan
							withTransactionType(Payment.TransactionType.Cash)).withTransactionDate("10/4/2020@15:20:20");


	public Order order_64 = new Order("order_64").

			withEmployee(employee_5).
			withCustomer(customer_4).
			addOrderItem(_DATA_FOOD.food_2).
			addOrderItem(_DATA_FOOD.food_5).
			addOrderItem(_DATA_FOOD.food_3).
			withState(Order.State.DUE).
			withPayment(new Payment("Vietcombank").
					withAmount(800000).
					withTransactionDate("10/1/2020@18:20:20").
					withTransactionType(Payment.TransactionType.ATM)).withTransactionDate("10/1/2020@18:20:20");

	public Order order_65 = new Order("order_65").
			withEmployee(employee_5).
			withCustomer(customer_5).
			addOrderItem(_DATA_FOOD.food_2).
			addOrderItem(_DATA_FOOD.food_5).
			addOrderItem(_DATA_FOOD.food_3).
			withState(Order.State.DUE).

			withPayment(new Payment("Vietcombank").
					withAmount(800000).
					withTransactionDate("22/3/2020@20:20:20").
					withTransactionType(Payment.TransactionType.ATM)).withTransactionDate("22/3/2020@20:20:20");


	public Order order_66 = new Order("order_66").

			withEmployee(employee_6).
			withCustomer(customer_5).
			addOrderItem(_DATA_FOOD.food_2).
			addOrderItem(_DATA_FOOD.food_5).
			addOrderItem(_DATA_FOOD.food_3).
			withState(Order.State.DUE).

			withPayment( // Payment : thanh toan
					new Payment("Tien Mat").
							withAmount(200).
							withTransactionDate("15/2/2020@14:20:20"). //Ngay ngay thanh toan
							withTransactionType(Payment.TransactionType.Cash)).withTransactionDate("15/2/2020@14:20:20");

	public Order order_67 = new Order("order_67").

			withEmployee(employee_6).
			withCustomer(customer_5).
			addOrderItem(_DATA_FOOD.food_2).
			addOrderItem(_DATA_FOOD.food_5).
			addOrderItem(_DATA_FOOD.food_3).
			withState(Order.State.DUE).

			withPayment(new Payment("Vietcombank").
					withAmount(800000).
					withTransactionDate("16/4/2020@15:20:20").
					withTransactionType(Payment.TransactionType.ATM)).withTransactionDate("16/4/2020@15:20:20");

	public Order order_68 = new Order("order_68").

			withEmployee(employee_6).
			withCustomer(customer_5).
			addOrderItem(_DATA_FOOD.food_2).
			addOrderItem(_DATA_FOOD.food_5).
			addOrderItem(_DATA_FOOD.food_3).
			withState(Order.State.DUE).

			withPayment(new Payment("Vietcombank").
					withAmount(800000).
					withTransactionDate("17/7/2020@16:20:20").
					withTransactionType(Payment.TransactionType.ATM)).withTransactionDate("17/7/2020@16:20:20");

	public Order order_69 = new Order("order_69").

			withEmployee(employee_2).
			withCustomer(customer_5).
			addOrderItem(_DATA_FOOD.food_2).
			addOrderItem(_DATA_FOOD.food_5).
			addOrderItem(_DATA_FOOD.food_3).
			withState(Order.State.DUE).

			withPayment(new Payment("Vietcombank").
					withAmount(800000).
					withTransactionDate("18/6/2020@16:20:20").
					withTransactionType(Payment.TransactionType.ATM)).withTransactionDate("18/6/2020@16:20:20");

	public Order order_70 = new Order("order_70").

			withEmployee(employee_2).
			withCustomer(customer_6).
			addOrderItem(_DATA_FOOD.food_2).
			addOrderItem(_DATA_FOOD.food_5).
			addOrderItem(_DATA_FOOD.food_3).
			withState(Order.State.DUE).

			withPayment(new Payment("Vietcombank").
					withAmount(800000).
					withTransactionDate("19/5/2020@17:20:20").
					withTransactionType(Payment.TransactionType.ATM)).withTransactionDate("19/5/2020@17:20:20");

	public Order order_71 = new Order("order_71").

			withEmployee(employee_2).
			withCustomer(customer_6).
			addOrderItem(_DATA_FOOD.food_2).
			addOrderItem(_DATA_FOOD.food_5).
			addOrderItem(_DATA_FOOD.food_3).
			withState(Order.State.DUE).
			withPayment(new Payment("Vietcombank").
					withAmount(800000).
					withTransactionDate("20/1/2020@18:20:20").
					withTransactionType(Payment.TransactionType.ATM)).withTransactionDate("20/1/2020@18:20:20");

	public Order order_72 = new Order("order_72").

			withEmployee(employee_4).
			withCustomer(customer_6).
			addOrderItem(_DATA_FOOD.food_2).
			addOrderItem(_DATA_FOOD.food_5).
			addOrderItem(_DATA_FOOD.food_3).
			withState(Order.State.DUE).

			withPayment(new Payment("Vietcombank").
					withAmount(800000).
					withTransactionDate("21/3/2020@13:20:20").
					withTransactionType(Payment.TransactionType.ATM)).withTransactionDate("21/3/2020@13:20:20");

	public Order order_73 = new Order("order_73").

			withEmployee(employee_4).
			withCustomer(customer_6).
			addOrderItem(_DATA_FOOD.food_2).
			addOrderItem(_DATA_FOOD.food_5).
			addOrderItem(_DATA_FOOD.food_3).
			withState(Order.State.DUE).

			withPayment(new Payment("Vietcombank").
					withAmount(800000).
					withTransactionDate("22/4/2020@12:20:20").
					withTransactionType(Payment.TransactionType.ATM)).withTransactionDate("22/4/2020@12:20:20");


	public Order order_74 = new Order("order_74").

			withEmployee(employee_4).
			withCustomer(customer_6).
			addOrderItem(_DATA_FOOD.food_2).
			addOrderItem(_DATA_FOOD.food_5).
			addOrderItem(_DATA_FOOD.food_3).
			withState(Order.State.DUE).
			withPayment( // Payment : thanh toan
					new Payment("Tien Mat").
							withAmount(200).
							withTransactionDate("23/3/2020@11:20:20"). //Ngay ngay thanh toan
							withTransactionType(Payment.TransactionType.Cash)).withTransactionDate("23/3/2020@11:20:20");

	public Order order_75 = new Order("order_75").

			withEmployee(employee_9).
			withCustomer(customer_6).
			addOrderItem(_DATA_FOOD.food_2).
			addOrderItem(_DATA_FOOD.food_5).
			addOrderItem(_DATA_FOOD.food_3).
			withState(Order.State.DUE).

			withPayment( // Payment : thanh toan
					new Payment("Tien Mat").
							withAmount(200).
							withTransactionDate("23/2/2020@12:20:20"). //Ngay ngay thanh toan
							withTransactionType(Payment.TransactionType.Cash)).withTransactionDate("23/2/2020@12:20:20");

	public Order order_76 = new Order("order_76").

			withEmployee(employee_9).
			withCustomer(customer_2).
			addOrderItem(_DATA_FOOD.food_2).
			addOrderItem(_DATA_FOOD.food_5).
			addOrderItem(_DATA_FOOD.food_3).
			withState(Order.State.DUE).

			withPayment( // Payment : thanh toan
					new Payment("Tien Mat").
							withAmount(200).
							withTransactionDate("25/7/2020@13:20:20"). //Ngay ngay thanh toan
							withTransactionType(Payment.TransactionType.Cash)).withTransactionDate("25/7/2020@13:20:20");

	public Order order_77 = new Order("order_77").

			withEmployee(employee_9).
			withCustomer(customer_6).
			addOrderItem(_DATA_FOOD.food_2).
			addOrderItem(_DATA_FOOD.food_5).
			addOrderItem(_DATA_FOOD.food_3).
			withState(Order.State.DUE).

			withPayment( // Payment : thanh toan
					new Payment("Tien Mat").
							withAmount(200).
							withTransactionDate("24/6/2020@14:20:20"). //Ngay ngay thanh toan
							withTransactionType(Payment.TransactionType.Cash)).withTransactionDate("24/6/2020@14:20:20");


	public Order order_78 = new Order("order_78").

			withEmployee(employee_10).
			withCustomer(customer_6).
			addOrderItem(_DATA_FOOD.food_2).
			addOrderItem(_DATA_FOOD.food_5).
			addOrderItem(_DATA_FOOD.food_3).
			withState(Order.State.DUE).
			withPayment( // Payment : thanh toan
					new Payment("Tien Mat").
							withAmount(200).
							withTransactionDate("26/5/2020@15:20:20"). //Ngay ngay thanh toan
							withTransactionType(Payment.TransactionType.Cash)).withTransactionDate("26/5/2020@15:20:20");

	public Order order_79 = new Order("order_79").

			withEmployee(employee_10).
			withCustomer(customer_7).
			addOrderItem(_DATA_FOOD.food_19).
			addOrderItem(_DATA_FOOD.food_5).
			addOrderItem(_DATA_FOOD.food_3).
			withState(Order.State.PAID).
			withPayment( // Payment : thanh toan
					new Payment("Tien Mat").
							withAmount(200).
							withTransactionDate("10/4/2020@15:20:20"). //Ngay ngay thanh toan
							withTransactionType(Payment.TransactionType.Cash)).withTransactionDate("10/4/2020@15:20:20");

	public Order order_80 = new Order("order_80").

			withEmployee(employee_10).
			withCustomer(customer_20).
			addOrderItem(_DATA_FOOD.food_20).
			addOrderItem(_DATA_FOOD.food_5).
			addOrderItem(_DATA_FOOD.food_3).
			withState(Order.State.CANCEL).
			withPayment(new Payment("Vietcombank").
					withAmount(800000).
					withTransactionDate("12/12/2020@18:20:20").
					withTransactionType(Payment.TransactionType.ATM)).withTransactionDate("10/1/2020@12:20:20");

	public Order order_81 = new Order("order_81").
			withEmployee(employee_10).
			withCustomer(customer_20).
			addOrderItem(_DATA_FOOD.food_18).
			addOrderItem(_DATA_FOOD.food_5).
			addOrderItem(_DATA_FOOD.food_3).
			withState(Order.State.CANCEL).

			withPayment(new Payment("Vietcombank").
					withAmount(800000).
					withTransactionDate("22/3/2020@13:20:20").
					withTransactionType(Payment.TransactionType.ATM)).withTransactionDate("22/3/2020@13:20:20");

	public Order order_82 = new Order("order_82").
			withEmployee(employee_4).
			withCustomer(customer_20).
			addOrderItem(_DATA_FOOD.food_2).
			addOrderItem(_DATA_FOOD.food_17).
			addOrderItem(_DATA_FOOD.food_3).
			withState(Order.State.DUE).

			withPayment(new Payment("Vietcombank").
					withAmount(800000).
					withTransactionDate("22/3/2020@13:20:20").
					withTransactionType(Payment.TransactionType.ATM)).withTransactionDate("22/3/2020@13:20:20");

	public Order order_83 = new Order("order_83").

			withEmployee(employee_4).
			withCustomer(customer_20).
			addOrderItem(_DATA_FOOD.food_2).
			addOrderItem(_DATA_FOOD.food_16).
			addOrderItem(_DATA_FOOD.food_3).
			withState(Order.State.DUE).

			withPayment( // Payment : thanh toan
					new Payment("Tien Mat").
							withAmount(200).
							withTransactionDate("11/6/2020@10:20:20"). //Ngay ngay thanh toan
							withTransactionType(Payment.TransactionType.Cash))
			.withTransactionDate("11/6/2020@10:20:20");


	public Order order_84 = new Order("order_84").

			withEmployee(employee_4).
			withCustomer(customer_20).
			addOrderItem(_DATA_FOOD.food_1).
			addOrderItem(_DATA_FOOD.food_4).
			addOrderItem(_DATA_FOOD.food_3).
			withState(Order.State.DUE).
			withPayment( // Payment : thanh toan
					new Payment("Tien Mat").
							withAmount(200).
							withTransactionDate("13/5/2020@12:20:20"). //Ngay ngay thanh toan
							withTransactionType(Payment.TransactionType.Cash)).withTransactionDate("13/5/2020@12:20:20");

	public Order order_85 = new Order("order_85").

			withEmployee(employee_4).
			withCustomer(customer_20).
			addOrderItem(_DATA_FOOD.food_2).
			addOrderItem(_DATA_FOOD.food_5).
			addOrderItem(_DATA_FOOD.food_3).
			withState(Order.State.DUE).

			withPayment( // Payment : thanh toan
					new Payment("Tien Mat").
							withAmount(200).
							withTransactionDate("14/3/2020@13:20:20"). //Ngay ngay thanh toan
							withTransactionType(Payment.TransactionType.Cash)).withTransactionDate("14/3/2020@13:20:20");

	public Order order_86 = new Order("order_86").

			withEmployee(employee_2).
			withCustomer(customer_20).
			addOrderItem(_DATA_FOOD.food_2).
			addOrderItem(_DATA_FOOD.food_5).
			addOrderItem(_DATA_FOOD.food_3).
			withState(Order.State.DUE).

			withPayment( // Payment : thanh toan
					new Payment("Tien Mat").
							withAmount(200).
							withTransactionDate("15/2/2020@14:20:20"). //Ngay ngay thanh toan
							withTransactionType(Payment.TransactionType.Cash)).withTransactionDate("15/2/2020@14:20:20");

	public Order order_87 = new Order("order_87").

			withEmployee(employee_2).
			withCustomer(customer_20).
			addOrderItem(_DATA_FOOD.food_2).
			addOrderItem(_DATA_FOOD.food_5).
			addOrderItem(_DATA_FOOD.food_3).
			withState(Order.State.DUE).

			withPayment(new Payment("Vietcombank").
					withAmount(800000).
					withTransactionDate("16/4/2020@15:20:20").
					withTransactionType(Payment.TransactionType.ATM)).withTransactionDate("16/4/2020@15:20:20");

	public Order order_88 = new Order("order_88").

			withEmployee(employee_2).
			withCustomer(customer_20).
			addOrderItem(_DATA_FOOD.food_2).
			addOrderItem(_DATA_FOOD.food_5).
			addOrderItem(_DATA_FOOD.food_3).
			withState(Order.State.DUE).

			withPayment(new Payment("Vietcombank").
					withAmount(800000).
					withTransactionDate("17/7/2020@16:20:20").
					withTransactionType(Payment.TransactionType.ATM)).withTransactionDate("17/7/2020@16:20:20");


	public Order order_91 = new Order("order_91").

			withEmployee(employee_1).
			withCustomer(customer_20).
			addOrderItem(_DATA_FOOD.food_2).
			addOrderItem(_DATA_FOOD.food_5).
			addOrderItem(_DATA_FOOD.food_3).
			withState(Order.State.DUE).
			withPayment(new Payment("Vietcombank").
					withAmount(800000).
					withTransactionDate("18/6/2020@16:20:20").
					withTransactionType(Payment.TransactionType.ATM)).withTransactionDate("18/6/2020@16:20:20");

	public Order order_90 = new Order("order_90").

			withEmployee(employee_2).
			withCustomer(customer_20).
			addOrderItem(_DATA_FOOD.food_2).
			addOrderItem(_DATA_FOOD.food_5).
			addOrderItem(_DATA_FOOD.food_3).
			withState(Order.State.DUE).
			withPayment( // Payment : thanh toan
					new Payment("Tien Mat").
							withAmount(200).
							withTransactionDate("20/1/2020@18:20:20"). //Ngay ngay thanh toan
							withTransactionType(Payment.TransactionType.Cash)).withTransactionDate("20/1/2020@18:20:20");

	public Order order_89 = new Order("order_89").

			withEmployee(employee_2).
			withCustomer(customer_20).
			addOrderItem(_DATA_FOOD.food_2).
			addOrderItem(_DATA_FOOD.food_5).
			addOrderItem(_DATA_FOOD.food_3).
			withState(Order.State.DUE).
			withPayment( // Payment : thanh toan
					new Payment("Tien Mat").
							withAmount(200).
							withTransactionDate("21/3/2020@13:20:20"). //Ngay ngay thanh toan
							withTransactionType(Payment.TransactionType.Cash)).withTransactionDate("21/3/2020@13:20:20");


	public Order order_92 = new Order("order_92").

			withEmployee(employee_2).
			withCustomer(customer_20).
			addOrderItem(_DATA_FOOD.food_2).
			addOrderItem(_DATA_FOOD.food_5).
			addOrderItem(_DATA_FOOD.food_3).
			withState(Order.State.DUE).
			withPayment( // Payment : thanh toan
					new Payment("Tien Mat").
							withAmount(200).
							withTransactionDate("22/4/2020@12:20:20"). //Ngay ngay thanh toan
							withTransactionType(Payment.TransactionType.Cash)).withTransactionDate("22/4/2020@12:20:20");


	public Order order_93 = new Order("order_93").

			withEmployee(employee_2).
			withCustomer(customer_20).
			addOrderItem(_DATA_FOOD.food_2).
			addOrderItem(_DATA_FOOD.food_5).
			addOrderItem(_DATA_FOOD.food_3).
			withState(Order.State.DUE).
			withPayment(new Payment("Vietcombank").
					withAmount(800000).
					withTransactionDate("23/3/2021@11:20:20").
					withTransactionType(Payment.TransactionType.ATM)).withTransactionDate("23/3/2021@11:20:20");


	public Order order_94 = new Order("order_94").

			withEmployee(employee_2).
			withCustomer(customer_11).
			addOrderItem(_DATA_FOOD.food_2).
			addOrderItem(_DATA_FOOD.food_5).
			addOrderItem(_DATA_FOOD.food_3).
			withState(Order.State.DUE).
			withPayment(new Payment("Vietcombank").
					withAmount(800000).
					withTransactionDate("23/2/2021@12:20:20").
					withTransactionType(Payment.TransactionType.ATM)).withTransactionDate("23/2/2021@12:20:20");

	public Order order_95 = new Order("order_95").

			withEmployee(employee_2).
			withCustomer(customer_11).
			addOrderItem(_DATA_FOOD.food_2).
			addOrderItem(_DATA_FOOD.food_5).
			addOrderItem(_DATA_FOOD.food_3).
			withState(Order.State.DUE).

			withPayment(new Payment("Vietcombank").
					withAmount(800000).
					withTransactionDate("25/7/2020@13:20:20").
					withTransactionType(Payment.TransactionType.ATM)).withTransactionDate("25/7/2020@13:20:20");
	public Order order_96 = new Order("order_96").
			withEmployee(employee_2).
			withCustomer(customer_11).
			addOrderItem(_DATA_FOOD.food_2).
			addOrderItem(_DATA_FOOD.food_5).
			addOrderItem(_DATA_FOOD.food_3).
			withState(Order.State.DUE).
			withPayment( // Payment : thanh toan
					new Payment("Tien Mat").
							withAmount(200).
							withTransactionDate("24/6/2020@14:20:20"). //Ngay ngay thanh toan
							withTransactionType(Payment.TransactionType.Cash)).withTransactionDate("24/6/2020@14:20:20");

	public Order order_97 = new Order("order_97").

			withEmployee(employee_2).
			withCustomer(customer_11).
			addOrderItem(_DATA_FOOD.food_2).
			addOrderItem(_DATA_FOOD.food_5).
			addOrderItem(_DATA_FOOD.food_3).
			withState(Order.State.DUE).

			withPayment( // Payment : thanh toan
					new Payment("Tien Mat").
							withAmount(200).
							withTransactionDate("26/5/2020@15:20:20"). //Ngay ngay thanh toan
							withTransactionType(Payment.TransactionType.Cash)).withTransactionDate("26/5/2020@15:20:20");
	public Order order_98 = new Order("order_98").
			withEmployee(employee_2).
			withCustomer(customer_11).
			addOrderItem(_DATA_FOOD.food_2).
			addOrderItem(_DATA_FOOD.food_5).
			addOrderItem(_DATA_FOOD.food_3).
			withState(Order.State.DUE).
			withPayment( // Payment : thanh toan
					new Payment("Tien Mat").
							withAmount(200).
							withTransactionDate("10/4/2020@15:20:20"). //Ngay ngay thanh toan
							withTransactionType(Payment.TransactionType.Cash)).withTransactionDate("10/4/2020@15:20:20");
	public Order order_99 = new Order("order_99").

			withEmployee(employee_2).
			withCustomer(customer_11).
			addOrderItem(_DATA_FOOD.food_2).
			addOrderItem(_DATA_FOOD.food_5).
			addOrderItem(_DATA_FOOD.food_3).
			withState(Order.State.DUE).
			withPayment(new Payment("Vietcombank").
					withAmount(800000).
					withTransactionDate("22/3/2020@13:20:20").
					withTransactionType(Payment.TransactionType.ATM)).withTransactionDate("22/3/2020@13:20:20");


	public Order[] ALL_ORDERS = {order_1, order_2, order_3, order_4, order_5, order_6, order_10, order_11,
			order_12, order_13, order_14, order_15, order_16, order_17, order_18, order_19, order_20, order_7, order_8,
			order_9, order_21, order_22, order_23, order_24, order_25, order_26, order_30, order_31,
			order_32, order_27, order_28,
			order_29, order_41, order_42, order_43, order_44, order_45, order_46, order_47, order_48,
			order_49, order_50, order_51, order_52, order_53, order_57, order_54, order_55, order_56, order_58, order_59,
			order_60, order_61, order_62, order_63, order_64, order_65, order_66, order_67, order_68, order_69, order_70, order_71,
			order_72, order_73, order_74, order_75, order_76, order_77, order_78, order_79, order_79,
			order_80, order_81, order_82, order_83, order_84, order_85, order_86, order_87, order_88, order_89, order_90, order_91,
			order_92, order_93, order_94, order_95, order_96, order_97, order_98, order_99, order_560, order_571, order_581, order_591
	};


}
