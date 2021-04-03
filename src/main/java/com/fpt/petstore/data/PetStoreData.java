package com.fpt.petstore.data;

import com.fpt.petstore.entities.*;
import com.fpt.petstore.entities.Food.FoodType;

import java.util.ArrayList;
import java.util.List;

/**
 * @author linuss
 */

public class PetStoreData {

	public static Customer customer_2 = new Customer("Nguyen Van Nhat").withEmail("vannhat98@gmail.com").withPassword( "12345").withBirthday("12/09/1998").withAddress("342-9B Thoai Ngoc Hau").withPhone("0345471020").withGender(Customer.Gender.Male);
	public static Customer customer_3 = new Customer("Nguyen Tan Trong").withEmail("trongnt@gmail.com").withPassword( "12345").withBirthday("30/01/2000").withAddress("54 Le Van Si").withPhone("0851235898").withGender(Customer.Gender.Female);
	public static Customer customer_4 = new Customer("Tran Dai Hung").withEmail("trandaihung@gmail.com").withPassword( "12345").withBirthday("06/12/2000").withAddress("11 Tran Hung Dao").withPhone("0914565476").withGender(Customer.Gender.Male);
	public static Customer customer_5 = new Customer("Vo Thanh Truong").withEmail("vothanhtruong@gmail.com").withPassword("12345").withBirthday("06/09/2000").withAddress("235 Le Lai").withPhone("0917657212").withGender(Customer.Gender.Female);
	public static Customer customer_6 = new Customer("Luu Nguyen Thanh Phuong").withEmail("phuonglnt@gmail.com").withPassword("12345").withBirthday("21/12/2000").withAddress("248 Le Van Si").withPhone("0928494156").withGender(Customer.Gender.Male);
	public static Customer customer_7 = new Customer("Nguyen Thi Thanh Phuong").withEmail("phuongntt01@gmail.com").withPassword("12345").withBirthday("01/01/2000").withAddress("175-82 Huynh Van Banh").withPhone("0794930056").withGender(Customer.Gender.Female);
	public static Customer customer_8 = new Customer("Nguyen Chi Hoa").withEmail("nguyenchihoa98@gmail.com").withPassword("12345").withBirthday("22/09/1998").withAddress("78 To Ki").withPhone("0335579595").withGender(Customer.Gender.Male);
	public static Customer customer_9 = new Customer("Nguyen Vu Thien Nguyen").withEmail("nguyenvuthiennguyen@gmail.com").withPassword("12345").withBirthday("02/02/1986").withAddress("233 Le Van Si").withPhone("0967513214");
	public static Customer customer_10 = new Customer("Bui Thi Phuong Thanh").withEmail("kellybui@gmail.com").withPassword("12345").withBirthday("29/06/2000").withAddress("44 Nguyen Thi Minh Khai").withPhone("0915648654").withGender(Customer.Gender.Female);
	public static Customer customer_11 = new Customer("Nguyen Duy Phuong").withEmail("nguyenduyphuong@gmail.com").withPassword("12345").withBirthday("12/01/1999").withAddress("79 To Ki").withPhone("0954765122").withGender(Customer.Gender.Female);
	public static Customer customer_12 = new Customer("Đinh Văn Phượng").withEmail("dinhvanphuong12@gmail.com").withPassword("12345").withBirthday("13/09/1989").withAddress("55 Tran Huy Lieu").withPhone("0942314842").withGender(Customer.Gender.Male);
	public static Customer customer_13 = new Customer("Nguyễn Xuân Sang").withEmail("nguyenxuansang@gmail.com").withPassword("12345").withBirthday("22/01/1993").withAddress("23 Nguyen Van Troi").withPhone("0953214561").withGender(Customer.Gender.Female);
	public static Customer customer_14 = new Customer("Lê Phú Quý").withEmail("lephuquy@gmail.com").withPassword("12345").withBirthday("02/01/1996").withAddress("842 Truong Sa").withPhone("0923548965").withGender(Customer.Gender.Female);
	public static Customer customer_15 = new Customer("Lý Quốc Quyền").withEmail("lyquocquyen@gmail.com").withPassword("12345").withBirthday("23/05/1995").withAddress("111 Nguyen Phi Khanh").withPhone("0915231545").withGender(Customer.Gender.Male);
	public static Customer customer_16 = new Customer("Bùi Minh Quân").withEmail("buiminhquan11@gmail.com").withPassword("12345").withBirthday("05/01/999").withAddress("562 Hoang Sa").withPhone("093566512").withGender(Customer.Gender.Male);
	public static Customer customer_17 = new Customer("Nguyễn Ngọc Sơn").withEmail("nguyenngocson@gmail.com").withPassword("12345").withBirthday("06/01/1979").withAddress("101 Nguyen Trai").withPhone("0923265548").withGender(Customer.Gender.Male);
	public static Customer customer_18 = new Customer("Bùi Duy Qúy").withEmail("buiduyquy@gmail.com").withPassword("12345").withBirthday("08/03/1999").withAddress("556 Hai Ba Trung").withPhone("0938623132").withGender(Customer.Gender.Female);
	public static Customer customer_19 = new Customer("Võ Hoàng Phương").withEmail("vohoangphuong@gmail.com").withPassword("12345").withBirthday("30/01/1998").withAddress("456 Vo Thi Sau").withPhone("0923548461").withGender(Customer.Gender.Female);
	public static Customer customer_20 = new Customer("Trần Minh Phương").withEmail("tranminhphuong@gmail.com").withPassword("12345").withBirthday("28/02/1999").withAddress("96 Nguyen Kiem").withPhone("0945213786").withGender(Customer.Gender.Male);
	public static Customer customer_21 = new Customer("Võ Khải Hoàng Ca").withEmail("vokhaihoangka@gmail.com").withPassword("12345").withBirthday("27/05/1979").withAddress("45 Pham Van Dong").withPhone("0956232542").withGender(Customer.Gender.Male);
	public static Customer customer_22 = new Customer("Hà Thị Thùy Chi").withEmail("hathithuychi@gmail.com").withPassword("12345").withBirthday("26/07/1977").withAddress("215 Nguyen Thai Son").withPhone("0923254821").withGender(Customer.Gender.Male);
	public static Customer customer_23 = new Customer("Lê Văn Minh Châu").withEmail("levanminhchau@gmail.com").withPassword("12345").withBirthday("07/01/1994").withAddress("24 Thoai Ngoc Hau").withPhone("0993214521").withGender(Customer.Gender.Female);
	public static Customer customer_24 = new Customer("Nguyễn Linh Chi").withEmail("lelinhchi@gmail.com").withPassword("12345").withBirthday("17/01/1969").withAddress("333 Nguyen Kiem").withPhone("0956231545").withGender(Customer.Gender.Male);
	public static Customer customer_25 = new Customer("Lê Thị Phương Chi").withEmail("lethiphuongchi@gmail.com").withPassword("12345").withBirthday("03/01/1968").withAddress("69 Hoang Hoa Tham").withPhone("0955695462").withGender(Customer.Gender.Female);
	public static Customer customer_26 = new Customer("Nguyễn Duy Chinh").withEmail("nguyenduychinh@gmail.com").withPassword("12345").withBirthday("10/01/1996").withAddress("79 Dong Den").withPhone("0822655132").withGender(Customer.Gender.Male);
	public static Customer customer_27 = new Customer("Nguyễn Thế Chiến").withEmail("nguyenthechien@gmail.com").withPassword("12345").withBirthday("31/03/1999").withAddress("363 D1").withPhone("0956254852").withGender(Customer.Gender.Female);
	public static Customer customer_28 = new Customer("Trần Đức Thịnh").withEmail("tranducthinh@gmail.com").withPassword("12345").withBirthday("14/02/1993").withAddress("86 D5").withPhone("0912315486").withGender(Customer.Gender.Male);
	public static Customer customer_29 = new Customer("Trần Viễn Chinh").withEmail("tranvienchinh@gmail.com").withPassword("12345").withBirthday("14/03/1999").withAddress("686 Bui Dinh Tuy").withPhone("0925486512").withGender(Customer.Gender.Female);
	public static Customer customer_30 = new Customer("Bùi Văn Chương").withEmail("buivanchuong@gmail.com").withPassword("12345").withBirthday("17/10/1999").withAddress("214 Nguyen Trai").withPhone("0934561234").withGender(Customer.Gender.Male);
	public static Customer customer_31 = new Customer("Võ Khải Hoàng Ca").withEmail("cahoang@gmail.com").withPassword("12345").withBirthday("27/05/1999").withAddress("45 Pham Van Hoc").withPhone("05098191982").withGender(Customer.Gender.Female);
	public static Customer customer_32 = new Customer("Hà Thị Thùy Chinh").withEmail("chinhthuy@gmail.com").withPassword("12345").withBirthday("26/07/1985").withAddress("215 Nguyen  Son").withPhone("099922536481").withGender(Customer.Gender.Male);
	public static Customer customer_33 = new Customer("Lê Văn  Châu").withEmail("chauvan@gmail.com").withPassword("12345").withBirthday("07/01/1999").withAddress("24 Thoai Ngoc Hau").withPhone("09999115589").withGender(Customer.Gender.Female);
	public static Customer customer_34 = new Customer("Nguyễn  Chi").withEmail("chinguyen@gmail.com").withPassword("12345").withBirthday("17/01/1959").withAddress("333 Nguyen Kiem").withPhone("098812828829").withGender(Customer.Gender.Male);
	public static Customer customer_35 = new Customer("Lê  Phương Chi").withEmail("phuongchi@gmail.com").withPassword("12345").withBirthday("03/01/1989").withAddress("69 Hoang Hoa Tham").withPhone("051518918").withGender(Customer.Gender.Female);
	public static Customer customer_36 = new Customer("Nguyễn  Chinh").withEmail("chinhchinh@gmail.com").withPassword("12345").withBirthday("10/01/1997").withAddress("79 Dong Den").withPhone("0822655132").withGender(Customer.Gender.Male);
	public static Customer customer_37 = new Customer("Nguyễn Thế ").withEmail("nguyenthe@gmail.com").withPassword("12345").withBirthday("31/03/1995").withAddress("363 D1").withPhone("0925455899").withGender(Customer.Gender.Male);
	public static Customer customer_38 = new Customer("Trần  Thịnh").withEmail("thinhtran@gmail.com").withPassword("12345").withBirthday("14/02/1999").withAddress("86 D5").withPhone("0912315486").withGender(Customer.Gender.Male);
	public static Customer customer_39 = new Customer("Trần Viễn ").withEmail("tranvien@gmail.com").withPassword("12345").withBirthday("14/03/1999").withAddress("686 D5").withPhone("0925486512").withGender(Customer.Gender.Female);
	public static Customer customer_40 = new Customer("Bùi Văn ").withEmail("vanbui@gmail.com").withPassword("12345").withBirthday("17/10/1989").withAddress("214 Nguyen Trai Ho Chi Minh").withPhone("0923254885").withGender(Customer.Gender.Female);
	public static Customer customer_41 = new Customer("Võ  Hoàng Ca").withEmail("cavo@gmail.com").withPassword("12345").withBirthday("27/05/1999").withAddress("45 Pham Van Dong Ha Noi").withPhone("0923254822").withGender(Customer.Gender.Male);
	public static Customer customer_42 = new Customer("Hà Thị  Chi").withEmail("chihathi@gmail.com").withPassword("12345").withBirthday("26/07/1997").withAddress("215 Nguyen Thai Son Lam Dong").withPhone("0923254821").withGender(Customer.Gender.Male);
	public static Customer customer_43 = new Customer("Lê Văn  Châu").withEmail("chaulv@gmail.com").withPassword("12345").withBirthday("07/01/1996").withAddress("24 Nguyen Ban Ha Noi").withPhone("099814856814").withGender(Customer.Gender.Female);
	public static Customer customer_44 = new Customer("Nguyễn Linh ").withEmail("linhnguyen@gmail.com").withPassword("12345").withBirthday("17/01/1999").withAddress("333 Nguyen Kiem").withPhone("0956231545").withGender(Customer.Gender.Male);
	public static Customer customer_45 = new Customer("Lê Thị Phương Chi").withEmail("chile@gmail.com").withPassword("12345").withBirthday("03/01/1997").withAddress("69 Hoang Hoa Tham").withPhone("0955695462").withGender(Customer.Gender.Male);
	public static Customer customer_46 = new Customer("Nguyễn Duy ").withEmail("Duy@gmail.com").withPassword("12345").withBirthday("10/01/2001").withAddress("79 Dong Den Ha Noi").withPhone("0999255812").withGender(Customer.Gender.Female);
	public static Customer customer_47 = new Customer("Nguyễn  Chiến").withEmail("chiennguyen@gmail.com").withPassword("12345").withBirthday("31/03/2000").withAddress("363 D1").withPhone("09985854156").withGender(Customer.Gender.Male);
	public static Customer customer_48 = new Customer("Trần  Thịnh Đức").withEmail("ducthinhtran@gmail.com").withPassword("12345").withBirthday("14/02/2000").withAddress("86 D5").withPhone("078869918").withGender(Customer.Gender.Male);
	public static Customer customer_49 = new Customer("Trần Chương Chinh").withEmail("chinhchuong@gmail.com").withPassword("12345").withBirthday("14/03/2001").withAddress("686 Bui Dinh Tuy Nha Trang").withPhone("0999252556").withGender(Customer.Gender.Female);
	public static Customer customer_50 = new Customer("Bùi Văn Đức Chương").withEmail("chuongducbuivan12@gmail.com").withPassword("12345").withBirthday("17/10/1998").withAddress("214 Nguyen Trai Nha Trang").withPhone("09991584863").withGender(Customer.Gender.Male);

	public static Customer[] ALL_CUSTOMERS = { customer_2, customer_3, customer_4, customer_5, customer_6,
		customer_10, customer_11, customer_12, customer_13, customer_14, customer_15, customer_16, customer_17,
		customer_18, customer_19, customer_20, customer_7, customer_8, customer_9, customer_21, customer_22, customer_23,
		customer_24, customer_25, customer_26, customer_27, customer_28, customer_29, customer_30,
		customer_31, customer_32, customer_33, customer_34, customer_35, customer_36, customer_37,
		customer_38, customer_39, customer_40, customer_41, customer_42, customer_43, customer_44,
		customer_45, customer_46, customer_47, customer_48, customer_49, customer_50};

	static public List<Customer> createDataCustomer() {
		List<Customer> customers = new ArrayList<>();
		for (int i = 0; i < ALL_CUSTOMERS.length; i++) {
			Customer customer = ALL_CUSTOMERS[i];
			customers.add(customer);
		}
		return customers;
	};

	/* Employee */
	public static Employee employee_1  = new Employee("Phạm Võ Hoài Anh").withAddress("Hải Phòng").withEmail("hoaianh@gmail.com").withPassword("12345").withUsername("phamvohoaianh").withPhone("09168860230");
	public static Employee employee_2  = new Employee("Hồ Thanh Bình").withAddress("Hải Phòng").withEmail("hothanhbinh@gmail.com").withPassword("12345").withUsername("hothanhbinh").withPhone("09107256361");
	public static Employee employee_3  = new Employee("Nguyễn Thái Bình").withAddress("Hải Phòng").withEmail("nguyenthaibinh@gmail.com").withPassword("12345").withUsername("nguyenthaibinh").withPhone("09854798553");
	public static Employee employee_4  = new Employee("Bùi Thái Chánh").withAddress("Hải Phòng").withEmail("buithaichanh@gmail.com").withPassword("12345").withUsername("buithaichanh").withPhone("09518022006");
	public static Employee employee_5  = new Employee("Đỗ Đình Biên").withAddress("Hải Phòng").withEmail("dodinhvien@gmail.com").withPassword("12345").withUsername("dodinhvien").withPhone("09836061295");
	public static Employee employee_6  = new Employee("Nguyễn Phước Biển").withAddress("Hà Nội").withEmail("nguyenphuocbien@gmail.com").withPassword("12345").withUsername("nguyenphuocbien").withPhone("09002801814");
	public static Employee employee_7  = new Employee("Lê Minh Chánh").withAddress("Hà Nội").withEmail("leminhchanh@gmail.com").withPassword("12345").withUsername("leminhchanh").withPhone("09584306432");
	public static Employee employee_8  = new Employee("Lê Thái Bình").withAddress("Hà Nội").withEmail("lethaibinh@gmail.com").withPassword("12345").withUsername("lethaibinh").withPhone("09619287364");
	public static Employee employee_9  = new Employee("Nguyễn Thái Bình").withAddress("Hà Nội").withEmail("nguyenthaibinh@gmail.com").withPassword("12345").withUsername("nguyenthaibinh").withPhone("09820744258");
	public static Employee employee_10 = new Employee("Đinh Hồng Châu").withAddress("Hà Nội").withEmail("dinhhongchaugmail.com").withPassword("12345").withUsername("dinhhongchau").withPhone("09820744258");

	public static Employee[] ALL_EMPLOYEES = { employee_1, employee_2, employee_3, employee_4, employee_5, employee_6,
		employee_10, employee_7, employee_8, employee_9 };

	// Food
	public static Food   food_1    = new Food("Bánh thưởng cho chó dạng que vị việt quất WUJI Jerky Stick Blueberry Flavor", 55000).
		withDes("NurCollagen làm giảm các dấu hiệu lão hóa, "
			+ "kẽm giúp duy trì tính toàn vẹn của da và lông, "
			+ "vitamin E & Selen giúp bảo vệ tổn thương do các gốc tự do gây ra (Chất chống oxy hóa),"
			+ "vitamin A cần thiết để giữ cho thị lực rõ ràng và lâu hơn, "
			+ "protein giúp phát triển cơ bắp và sửa chữa các mô.").withType(FoodType.DRY).withPic("food.jpg");
	public static Food   food_2    = new Food("Pate cho chó vị cơm gà IRIS Chicken & Rice", 60000).
		withDes("Đặc biệt với công thức chế biến riêng tạo nên khẩu phần ăn ngon miệng cho thú cưng, "
			+ "cung cấp đầy đủ chất đạm, béo, Vitamin B1 và khoáng chất,"
			+ "kiểm soát trọng lượng của chó,"
			+ "bạn có thể dùng làm thức ăn chính hoặc ăn kết hợp với các loại thức ăn khác cũng được, "
			+ "pate cho chó vị cơm gà IRIS Chicken & Rice làm hài lòng cả những chú chó kén ăn nhất.").withType(FoodType.DRY).withPic("food1.jpg");
	public static Food   food_3    = new Food("Thức ăn cho chó kéo xe MOSHM Sled Dog Grain Free Nutrition", 265000).
		withDes("Thức ăn cho chó kéo xe MOSHM cung cấp đầy đủ chất dinh dưỡng, "
			+ "giúp duy trì độ bóng mượt và màu lông của chó, "
			+ "hỗ trợ hệ tiêu hóa hoạt động hiệu quả,"
			+ "tăng sức đề kháng cho chó, "
			+ "giúp chó con lớn nhanh, khỏe mạnh và duy trì thể trạng lý tưởng ở chó trưởng thành.").withType(FoodType.DRY).withPic("food2.jpg");

	public static Food   food_4    = new Food("Xương gặm sạch răng cho chó vị thịt bò VEGEBRAND Orgo Beef Flavor Nutrients", 50000).
		withDes("Xương gặm sạch răng cho chó vị thịt bò VEGEBRAND Orgo Beef Flavor Nutrients làm sạch răng hiệu quả, "
			+ "với thiết kế xương hình bàn chải đánh răng, thúc đẩy khả năng nhai của thú cưng, "
			+ "hiệu quả trong việc làm sạch răng, loại bỏ cao răng, mảng bám, không còn tình trạng răng vàng, nướu chắc khỏe,"
			+ "hàm lượng canxi cao giúp xương thú cưng luôn khỏe, răng chắc, "
			+ "hơn nữa sản phẩm xương gặm còn thúc đẩy hệ tiêu hóa, tránh những bệnh về đường ruột.").withType(FoodType.DRY).withPic("food3.jpg");
	public static Food   food_5    = new Food("Thức ăn cho chó con ROYAL CANIN Chihuahua Puppy", 135000).
		withDes("ROYAL CANIN Chihuahua Puppy được chế tạo với công thức đặc biệt, phù hợp với hàm răng nhỏ. Thích nghi chế độ ăn và nhai của giống chó Chihuahua, "
			+ "sản phẩm được biết đến như kích thích sự thèm ăn kén chọn của chó Chihuahua. Do đó, đem lại bữa ăn ngon miệng và được đáp ứng đầy đủ những dưỡng chất cần thiết. ROYAL CANIN Chihuahua Puppy thỏa mãn sự thèm ăn của Chihuahua. Với sự kết hợp của ba yếu tố: lựa chọn cẩn thận, hương thơm đặc biệt và hình dáng thức ăn tùy chỉnh phù hợp với chúng, "

			+ "thức ăn còn giúp làm giảm mùi phân. Giúp hỗ trợ tiêu hóa tốt với protein dễ tiêu hóa (LIP), một hàm lượng chất xơ thích hợp và các nguồn carbohydrate chất lượng cao.").withType(FoodType.DRY).withPic("food4.jpg");
	public static Food   food_6    = new Food("Nước sốt pate cho mèo CIAO vị thịt gà, cá ngừ & cá ngần trắng IC-86C", 25000).
		withDes("Vitamin E & Selen giúp bảo vệ tổn thương do các gốc tự do gây ra (Chất chống oxy hóa), "
			+ "protein giúp phát triển cơ bắp và sửa chữa các mô."
		).withType(FoodType.DRY).withPic("food5.jpg");
	public static Food   food_7    = new Food("Thức ăn cho mèo tiêu hóa búi lông ROYAL CANIN Hairball Care", 110000).
		withDes("Thức ăn cho mèo kiểm soát búi lông ROYAL CANIN Hairball Care đặc trị cho mèo dễ bị tắc lông, viêm búi lông. Kiểm soát búi lông cho mèo giúp bổ sung chất xơ tự nhiên, giúp bài tiết búi lông qua đường tiêu hóa cho mèo. Trị bệnh búi lông cho mèo. Hạt mã đề hỗ trợ tiêu hóa cho mèo, phòng các bệnh về đường tiêu hóa., "

			+ "kiểm soát búi lông cho mèo giúp bổ sung chất xơ tự nhiên, "
			+ "giúp bài tiết búi lông qua đường tiêu hóa cho mèo, "
			+ "trị bệnh búi lông cho mèo.").withType(FoodType.DRY).withPic("food6.jpg");
	public static Food   food_8    = new Food("Pate cho mèo vị cá ngừ và gà IRIS Tuna & Chicken", 35000).
		withDes("Pate cho mèo vị cá ngừ và gà IRIS Tuna & Chicken cung cấp đầy đủ chất đạm, béo, vitamin B1 và khoáng chất, "
			+ "cá ngừ bổ sung omega 3,6 hỗ trợ rất tốt cho da và lông của mèo cưng, "
			+ "thịt gà cung cấp protein giúp mèo cưng duy trì nguồn năng lượng hoạt động mỗi ngày,"
			+ "ổn định huyết áp, bảo vệ gan và hệ thống tim mạch, "
			+ "cá ngừ chứa ít chất béo nhưng lại nhiều protein, vì vậy đảm bảo cung cấp năng lượng cho cơ thể mèo cưng. Vừa giảm nguy cơ béo phì hiệu quả. ").withType(FoodType.DRY).withPic("food7.jpg");
	public static Food   food_9    = new Food("Bánh thưởng cho mèo vị cá hồi JERHIGH Jinny Salmon", 35000).
		withDes("Bánh thưởng cho mèo vị cá hồi JERHIGH Jinny Salmon là món ăn được vô cùng yêu thích, "
			+ "là một món ăn được làm từ thịt gà và cá hồi thật, "
			+ "được chế biến với tiêu chuẩn chất lượng. Được đóng gói với Taurine, Vitamin E và dầu cá (Omega3,6),"
			+ "taurine là axit amin cần thiết., "
			+ "phân tích đảm bảo: Chất đạm 22% tối thiểu. Chất béo thô9% tối thiểu. Sợi thô tối đa 2%. Độ ẩm tối đa 20%.").withType(FoodType.DRY).withPic("food8.jpg");
	public static Food   food_10    = new Food("Dầu xả cho chó dưỡng lông TRIXIE Naturol Spulung", 180000).
		withDes("Dầu xả cho chó dưỡng lông TRIXIE Naturol Spulung chiết xuất từ hạt Macadamia, "
			+ "là loại hạt có nguồn gốc từ Châu Úc. Chứa khoảng 22% các axit omega-7 palmitoleic, "
			+ "và hơn 20 loại vitamin được coi là thần dược trong chăm sóc da. Giúp dưỡng ẩm, làm mềm mượt lông, thân thiện với da của chó nhỏ lẫn chó có làn da nhạy cảm,"

			+ "sử dụng sau khi đã tắm qua sữa tắm, dùng tay thoa dầu xả đã pha loãng lên khắp bề mặt cơ thể chó mèo bắt đầu từ phần cổ xuống thân. Mát xa nhẹ nhàng khắp cơ thể thú cưng cho thấm rồi xả. Lau, sấy khô lông cho thú cưng.").withType(FoodType.DRY).withPic("food9.jpg");
	public static Food   food_11    = new Food("Bánh thưởng cho chó vị thịt gà BUDGE Chicken Flavor", 60000).
		withDes("Bánh thưởng cho chó vị thịt gà BUDGE Chicken Flavor với các thành phần từ tự nhiên tạo nên hương vị thơm ngon, bổ dưỡng. Sản phẩm giúp loại bỏ 99% những mảng bám răng cứng đầu, làm giảm mùi hôi miệng. Thúc đẩy hệ tiêu hóa và tránh được những bệnh về đường ruột. Bổ sung canxi giúp xương và răng luôn chắc khỏe. Kích thích hoạt động nhai của cún cưng"
		).withType(FoodType.DRY).withPic("food10.jpg");
	public static Food   food_12    = new Food("Bánh thưởng cho chó vị thịt bò và rau xanh VEGEBRAND 7 Dental Benefits Vegetable & Beef Stick", 125000).
		withDes("Với thành phần chính từ tự nhiên là rau củ quả không chứa chất bảo quản.\r\n" +
			"Bánh thưởng cho chó vị thịt bò và rau xanh VEGEBRAND 7 Dental Benefits Vegetable & Beef Stick có thịt bò nhiều đạm và protein, hỗ trợ sức khỏe của thú cưng hơn\r\n" +
			"Sản phẩm hỗ trợ vấn đề răng miệng, hạn chế được mảng bám trong răng, làm giảm mùi hôi miệng.\r\n" +
			"Thúc đẩy quá trình tiêu hóa và tránh những bệnh về đường ruột. "
		).withType(FoodType.DRY).withPic("food11.jpg");
	public static Food   food_13   = new Food("Xương cho chó gặm cỡ lớn VEGEBRAND 360 For Large Breed Dogs Bone", 80000).
		withDes("Xương cho chó gặm cỡ lớn VEGEBRAND 360 For Large Breed Dogs Bone hỗ trợ vấn đề răng miệng rất tốt cho thú cưng.\r\n" +
			"Hạn chế được mảng bám trong răng, làm giảm mùi hôi miệng.\r\n" +
			"Thúc đẩy quá trình trao đổi chất trong đường ruột.\r\n" +
			"Xương cho chó gặm cỡ lớn VEGEBRAND 360 For Large Breed Dogs Bone làm sạch răng toàn diện, loại bỏ 99% cao răng.\r\n" +
			"Hơi thở thơm tho, giảm mùi hôi miệng.\r\n" +
			"Hỗ trợ tiêu hóa tốt cho thú cưng. "
		).withType(FoodType.DRY).withPic("food12.jpg");
	public static Food   food_14    = new Food("Pate cho chó hỗ trợ chức năng gan và sáng mắt IRIS Benefit For Eyes & Liver", 35000).
		withDes("Đặc biệt với công thức chế biến riêng hỗ trợ rất tốt cho mắt.\r\n" +
			"Cải thiện được chức năng gan cho thú cưng.\r\n" +
			"Tạo nên một sức khỏe toàn diện hơn.\r\n" +
			"Hỗ trợ chức năng gan.\r\n" +
			"Duy trì đôi mắt sáng rõ.").withType(FoodType.DRY).withPic("food13.jpg");
	public static Food   food_15    = new Food("Pate cho chó vị gan và thịt gà JERHIGH Chicken & Liver", 45000).
		withDes("Pate cho chó vị gan và thịt gà JERHIGH Chicken & Liver là thực phẩm ướt bổ sung vitamin E giúp cún cưng có làn da và lông khỏe mạnh. Bổ sung protein và đạm giúp cún cưng có đầy đủ năng lượng. Duy trì các vận động vui chơi và chạy nhảy. Bạn có thể yên tâm rằng JJERHIGH Chicken & Liver có mọi thứ mà thú cưng của bạn cần để giữ sức khỏe, hạnh phúc và tràn đầy năng lượng. Hỗ trợ hệ tiêu hóa, thúc đấy quá trình trao đổi chất, cân bằng dinh dưỡng. Là phần thưởng ý nghĩa nhất cho những người bạn bốn chân.\r\n" +
			"\r\n" +
			"Pate cho chó vị gan và thịt gà JERHIGH Chicken & Liver được đóng hộp vàng nhỏ gọn và tiện lợi. Phù hợp với bữa ăn hàng ngày của cún cưng. Bạn có thể dể dàng sử dụng. Có thể cho cún ăn trực tiếp hoặc trộn với thức ăn khô để chúng cảm thấy vui vẻ hơn. Thích hợp với cả những chú chó biếng và khảnh ăn nhất. Tùy chỉnh liều lượng theo chỉ số cân nặng của thú cưng.").withType(FoodType.DRY).withPic("food14.jpg");
	public static Food   food_16   = new Food("Pate cho chó vị gan gà IRIS One Care Chicken Liverr", 35000).
		withDes("Đặc biệt với công thức chế biến riêng tạo nên khẩu phần ăn ngon miệng cho thú cưng.\r\n" +
			"Bổ sung nhiều Protein, Vitamin đảm bảo một sức khỏe toàn diện hơn.\r\n" +
			"Tạo nên cảm giác thèm ăn cho cún cưng.\r\n" +
			"Pate cho chó vị gan gà IRIS One Care Chicken Liver làm hài lòng cả những chú chó kén ăn nhất.").withType(FoodType.DRY).withPic("food15.jpg");
	public static Food   food_17   = new Food("Pate cho chó hỗ trợ chức năng gan và sáng mắt IRIS Benefit For Eyes & Liver", 35000).
		withDes("Đặc biệt với công thức chế biến riêng hỗ trợ rất tốt cho mắt.\r\n" +
			"Cải thiện được chức năng gan cho thú cưng.\r\n" +
			"Tạo nên một sức khỏe toàn diện hơn.\r\n" +
			"Hỗ trợ chức năng gan.\r\n" +
			"Duy trì đôi mắt sáng rõ.").withType(FoodType.DRY).withPic("food13.jpg");
	public static Food   food_18    = new Food("Pate cho chó hỗ trợ chức năng gan và sáng mắt IRIS Benefit For Eyes & Liver", 35000).
		withDes("Đặc biệt với công thức chế biến riêng hỗ trợ rất tốt cho mắt.\r\n" +
			"Cải thiện được chức năng gan cho thú cưng.\r\n" +
			"Tạo nên một sức khỏe toàn diện hơn.\r\n" +
			"Hỗ trợ chức năng gan.\r\n" +
			"Duy trì đôi mắt sáng rõ.").withType(FoodType.DRY).withPic("food13.jpg");
	public static Food   food_19    = new Food("Pate cho chó hỗ trợ chức năng gan và sáng mắt IRIS Benefit For Eyes & Liver", 35000).
		withDes("Đặc biệt với công thức chế biến riêng hỗ trợ rất tốt cho mắt.\r\n" +
			"Cải thiện được chức năng gan cho thú cưng.\r\n" +
			"Tạo nên một sức khỏe toàn diện hơn.\r\n" +
			"Hỗ trợ chức năng gan.\r\n" +
			"Duy trì đôi mắt sáng rõ.").withType(FoodType.DRY).withPic("food13.jpg");
	public static Food   food_20    = new Food("Pate cho chó hỗ trợ chức năng gan và sáng mắt IRIS Benefit For Eyes & Liver", 35000).
		withDes("Đặc biệt với công thức chế biến riêng hỗ trợ rất tốt cho mắt.\r\n" +
			"Cải thiện được chức năng gan cho thú cưng.\r\n" +
			"Tạo nên một sức khỏe toàn diện hơn.\r\n" +
			"Hỗ trợ chức năng gan.\r\n" +
			"Duy trì đôi mắt sáng rõ.").withType(FoodType.DRY).withPic("food13.jpg");

	public static Food[] ALL_FOODS = { food_1,food_2,food_3,food_4,food_5,food_6,food_7,food_8,food_9,food_10,food_11,food_12,food_13,food_14,food_15,food_16,food_17,food_18,food_19,food_20};

	// Products
	public static Product   product_1    = new Product("Bánh thưởng cho chó dạng que vị việt quất WUJI Jerky Stick Blueberry").withPrice(500000).withDescription("des")
		.withPic("food.jpg");
	public static Product   product_2    = new Product("Vita Prima Hamster Food").withPrice(200).withDescription("des")
		.withPic("hamster-food.jpg");
	public static Product   product_3    = new Product("Dr.Kyan Predogen").withPrice(200).withDescription("des")
		.withPic("suacho1.jpg");
	public static Product   product_4    = new Product("Ganador Premium").withPrice(200).withDescription("des")
		.withPic("thucan-cho1.jpg");
	public static Product   product_5    = new Product("JerHigh").withPrice(200).withDescription("des")
		.withPic("thucan-cho2.png");
	public static Product[] ALL_PRODUCTS = { product_1, product_2, product_3, product_4, product_5 };

	//TODO: mau data cho Order
	public static Order order_1  = new Order("order_1").
		withEmployee(employee_10).
		withCustomer(customer_4).
		withState(Order.State.DUE).
		addOrderItem(food_2).
		addOrderItem(food_5).
		addOrderItem(food_3).
		addOrderItem(product_3).
		addOrderItem(product_3).
		addOrderItem(product_1).
		withPayment(new Payment("COD")).
		withTransactionDate("12/12/2020@18:20:20");

	public static Order order_2  = new Order("order_2").
		withEmployee(employee_10).
		withState(Order.State.DUE).
		withCustomer(customer_4).
		addOrderItem(food_2).
		addOrderItem(food_5).
		addOrderItem(food_3).
		withPayment(new Payment("COD"))
		.withTransactionDate("11/6/2020@10:20:20");
	public static Order order_3  = new Order("order_3").
		withEmployee(employee_10).
		withCustomer(customer_5).
		withState(Order.State.DUE).
		addOrderItem(food_2).
		addOrderItem(food_5).
		addOrderItem(food_3).
		withPayment(new Payment("COD")).withTransactionDate("13/5/2021@12:20:20");
	public static Order order_4  = new Order("order_4").
		withEmployee(employee_10).
		withState(Order.State.DUE).
		withCustomer(customer_5).
		addOrderItem(food_2).
		addOrderItem(food_5).
		addOrderItem(food_3).
		withPayment(new Payment("COD")).withTransactionDate("14/3/2020@13:20:20");
	public static Order order_5  = new Order("order_5").
		withEmployee(employee_10).
		withState(Order.State.DUE).
		withCustomer(customer_6).
		addOrderItem(food_2).
		addOrderItem(food_5).
		addOrderItem(food_3).
		withPayment(new Payment("COD")).withTransactionDate("15/2/2020@14:20:20");
	public static Order order_6  = new Order("order_6").
		withEmployee(employee_10).
		withCustomer(customer_6).
		withState(Order.State.DUE).
		addOrderItem(food_2).
		addOrderItem(food_5).
		addOrderItem(food_3).
		withPayment(new Payment("Vietcombank")).withTransactionDate("16/4/2020@15:20:20");
	public static Order order_7  = new Order("order_7").
		withEmployee(employee_7).
		withState(Order.State.DUE).
		withCustomer(customer_7).
		addOrderItem(food_2).
		addOrderItem(food_5).
		addOrderItem(food_3).
		withPayment(new Payment("Vietcombank")).withTransactionDate("17/7/2020@16:20:20");
	public static Order order_8  = new Order("order_8").
		withEmployee(employee_7).
		withCustomer(customer_7).
		withState(Order.State.DUE).
		addOrderItem(food_2).
		addOrderItem(food_5).
		addOrderItem(food_3).
		withPayment(new Payment("Vietcombank")).withTransactionDate("18/6/2020@16:20:20");
	public static Order order_9  = new Order("order_9").
		withEmployee(employee_7).
		withCustomer(customer_8).
		withState(Order.State.DUE).
		addOrderItem(food_2).
		addOrderItem(food_5).
		addOrderItem(food_3).
		withPayment(new Payment("Vietcombank")).withTransactionDate("19/5/2020@17:20:20");
	public static Order order_10 = new Order("order_10").
		withEmployee(employee_7).
		withState(Order.State.DUE).
		withCustomer(customer_8).
		addOrderItem(food_2).
		addOrderItem(food_5).
		addOrderItem(food_3).
		withPayment(new Payment("Vietcombank")).withTransactionDate("20/1/2020@18:20:20");
	public static Order order_11 = new Order("order_11").
		withEmployee(employee_7).
		withCustomer(customer_10).
		withState(Order.State.DUE).
		addOrderItem(food_2).
		addOrderItem(food_5).
		addOrderItem(food_3).
		withPayment(new Payment("Vietcombank")).withTransactionDate("21/3/2020@13:20:20");
	public static Order order_12 = new Order("order_12").
		withEmployee(employee_8).
		withState(Order.State.DUE).
		withCustomer(customer_10).
		addOrderItem(food_2).
		addOrderItem(food_5).
		addOrderItem(food_3).
		withPayment(new Payment("Vietcombank")).withTransactionDate("22/4/2020@12:20:20");
	public static Order order_13 = new Order("order_13").
		withEmployee(employee_8).
		withState(Order.State.DUE).
		withCustomer(customer_10).
		addOrderItem(food_2).
		addOrderItem(food_5).
		addOrderItem(food_3).
		withPayment(new Payment("COD")).withTransactionDate("23/3/2020@11:20:20");
	public static Order order_14 = new Order("order_14").
		withEmployee(employee_8).
		withState(Order.State.DUE).
		withCustomer(customer_10).
		addOrderItem(food_2).
		addOrderItem(food_5).
		addOrderItem(food_3).
		withPayment(new Payment("COD")).withTransactionDate("23/2/2020@12:20:20");
	public static Order order_15 = new Order("order_15").
		withEmployee(employee_8).
		withCustomer(customer_11).
		withState(Order.State.DUE).
		addOrderItem(food_2).
		addOrderItem(food_5).
		addOrderItem(food_3).
		withPayment(new Payment("COD")).withTransactionDate("25/7/2020@13:20:20");
	public static Order order_16 = new Order("order_16").
		withEmployee(employee_8).
		withCustomer(customer_11).
		withState(Order.State.DUE).
		addOrderItem(food_2).
		addOrderItem(food_5).
		addOrderItem(food_3).
		withPayment(new Payment("COD")).withTransactionDate("24/6/2020@14:20:20");
	public static Order order_17 = new Order("order_17").
		withEmployee(employee_3).
		withCustomer(customer_12).
		withState(Order.State.DUE).
		addOrderItem(food_2).
		addOrderItem(food_5).
		addOrderItem(food_3).
		withPayment(new Payment("COD")).withTransactionDate("26/5/2020@15:20:20");
	public static Order order_18 = new Order("order_18").
		withEmployee(employee_3).
		withCustomer(customer_12).
		addOrderItem(food_2).
		addOrderItem(food_5).
		withState(Order.State.DUE).
		addOrderItem(food_3).
		withPayment(new Payment("COD")).withTransactionDate("10/4/2020@15:20:20");
	public static Order order_19 = new Order("order_19").
		withEmployee(employee_3).
		withCustomer(customer_13).
		addOrderItem(food_19).
		addOrderItem(food_5).
		addOrderItem(food_3).
		withState(Order.State.DUE).
		withPayment(new Payment("Vietcombank")).withTransactionDate("22/3/2020@13:20:20");
	public static Order order_20 = new Order("order_20").
		withEmployee(employee_3).
		withCustomer(customer_13).
		withState(Order.State.DUE).
		addOrderItem(food_20).
		addOrderItem(food_5).
		addOrderItem(food_3).
		withPayment(new Payment("Vietcombank")).withTransactionDate("10/1/2020@12:20:20");

	public static Order order_41  = new Order("order_41").
		withEmployee(employee_5).
		withCustomer(customer_14).
		addOrderItem(food_18).
		addOrderItem(food_5).
		withState(Order.State.DUE).
		addOrderItem(food_3).
		withPayment(new Payment("Vietcombank")).
		withTransactionDate( "12/12/2020@18:20:20");

	public static Order order_42  = new Order("order_42").
		withEmployee(employee_5).
		withCustomer(customer_14).
		addOrderItem(food_2).
		addOrderItem(food_17).
		addOrderItem(food_3).
		withState(Order.State.DUE).
		withPayment(new Payment("COD"))
		.withTransactionDate("11/6/2020@10:20:20");
	public static Order order_43  = new Order("order_43").
		withEmployee(employee_5).
		withCustomer(customer_15).
		addOrderItem(food_2).
		addOrderItem(food_16).
		addOrderItem(food_3).
		withState(Order.State.DUE).
		withPayment(new Payment("COD")).withTransactionDate("13/5/2020@12:20:20");
	public static Order order_44  = new Order("order_44").
		withEmployee(employee_3).
		withCustomer(customer_15).
		addOrderItem(food_1).
		addOrderItem(food_4).
		addOrderItem(food_3).
		withState(Order.State.DUE).
		withPayment(new Payment("COD")).withTransactionDate("14/3/2020@13:20:20");
	public static Order order_45  = new Order("order_45").
		withEmployee(employee_3).
		withCustomer(customer_16).
		addOrderItem(food_2).
		addOrderItem(food_5).
		addOrderItem(food_3).
		withState(Order.State.CANCEL).
		withPayment(new Payment("COD")).withTransactionDate("15/2/2020@14:20:20");
	public static Order order_46  = new Order("order_46").
		withEmployee(employee_3).
		withCustomer(customer_16).
		addOrderItem(food_2).
		addOrderItem(food_5).
		addOrderItem(food_3).
		withState(Order.State.CANCEL).
		withPayment(new Payment("Vietcombank")).withTransactionDate("16/4/2020@15:20:20");
	public static Order order_47  = new Order("order_47").
		withEmployee(employee_1).
		withCustomer(customer_16).
		addOrderItem(food_2).
		addOrderItem(food_5).
		addOrderItem(food_3).
		withState(Order.State.DUE).
		withPayment(new Payment("Vietcombank")).withTransactionDate("17/7/2020@16:20:20");
	public static Order order_48  = new Order("order_48").
		withEmployee(employee_1).
		withCustomer(customer_16).
		addOrderItem(food_2).
		addOrderItem(food_5).
		addOrderItem(food_3).
		withState(Order.State.PAID).
		withPayment(new Payment("Vietcombank")).withTransactionDate("18/6/2020@16:20:20");
	public static Order order_49  = new Order("order_49").
		withEmployee(employee_1).
		withCustomer(customer_16).
		addOrderItem(food_2).
		addOrderItem(food_5).
		addOrderItem(food_3).
		withState(Order.State.CANCEL).
		withPayment(new Payment("COD")).withTransactionDate("19/5/2020@17:20:20");
	public static Order order_50 = new Order("order_50").
		withEmployee(employee_1).
		withCustomer(customer_20).
		addOrderItem(food_2).
		addOrderItem(food_5).
		addOrderItem(food_3).
		withPayment(new Payment("COD")).withTransactionDate("20/1/2020@18:20:20");
	public static Order order_51 = new Order("order_51").
		withEmployee(employee_8).
		withCustomer(customer_16).
		addOrderItem(food_2).
		addOrderItem(food_5).
		addOrderItem(food_3).
		withState(Order.State.CANCEL).
		withPayment(new Payment("COD")).withTransactionDate("21/3/2020@13:20:20");
	public static Order order_52 = new Order("order_52").
		withEmployee(employee_8).
		withCustomer(customer_16).
		addOrderItem(food_2).
		addOrderItem(food_5).
		addOrderItem(food_3).
		withState(Order.State.DUE).
		withPayment(new Payment("COD")).withTransactionDate("22/4/2020@12:20:20");
	public static Order order_63 = new Order("order_63").
		withEmployee(employee_8).
		withCustomer(customer_16).
		addOrderItem(food_2).
		addOrderItem(food_5).
		addOrderItem(food_3).
		withState(Order.State.DUE).
		withPayment(new Payment("Vietcombank")).withTransactionDate("23/3/2021@11:20:20");
	public static Order order_62 = new Order("order_62").
		withEmployee(employee_8).
		withCustomer(customer_16).
		addOrderItem(food_2).
		addOrderItem(food_5).
		addOrderItem(food_3).
		withState(Order.State.DUE).
		withPayment(new Payment("Vietcombank")).withTransactionDate("23/2/2021@12:20:20");
	public static Order order_61 = new Order("order_61").
		withEmployee(employee_9).
		withCustomer(customer_16).
		addOrderItem(food_2).
		addOrderItem(food_5).
		addOrderItem(food_3).
		withState(Order.State.DUE).
		withPayment(new Payment("Vietcombank")).withTransactionDate("25/7/2020@13:20:20");
	public static Order order_560 = new Order("order_560").
		withEmployee(employee_9).
		withCustomer(customer_17).
		addOrderItem(food_2).
		addOrderItem(food_5).
		addOrderItem(food_3).
		withState(Order.State.DUE).
		withPayment(new Payment("COD")).withTransactionDate("24/6/2020@14:20:20");
	public static Order order_571 = new Order("order_571").
		withEmployee(employee_9).
		withCustomer(customer_17).
		addOrderItem(food_2).
		addOrderItem(food_5).
		addOrderItem(food_3).
		withState(Order.State.DUE).
		withPayment(new Payment("COD")).withTransactionDate("26/5/2020@15:20:20");
	public static Order order_581 = new Order("order_581").
		withEmployee(employee_9).
		withCustomer(customer_17).
		addOrderItem(food_2).
		addOrderItem(food_5).
		addOrderItem(food_3).
		withState(Order.State.PAID).
		withPayment(new Payment("COD")).withTransactionDate("10/4/2020@15:20:20");
	public static Order order_591 = new Order("order_591").
		withEmployee(employee_9).
		withCustomer(customer_17).
		addOrderItem(food_2).
		addOrderItem(food_5).
		addOrderItem(food_3).
		withState(Order.State.DUE).
		withPayment(new Payment("Vietcombank")).withTransactionDate("22/3/2020@13:20:20");
	public static Order order_60 = new Order("order_60").
		withEmployee(employee_9).
		withCustomer(customer_18).
		addOrderItem(food_2).
		addOrderItem(food_5).
		addOrderItem(food_3).
		withState(Order.State.CANCEL).
		withPayment(new Payment("Vietcombank")).withTransactionDate("10/1/2020@12:20:20");

	public static Order order_21  = new Order("order_21").
		withEmployee(employee_3).
		withCustomer(customer_5).
		addOrderItem(food_1).
		addOrderItem(food_2).
		addOrderItem(food_4).
		withPayment(new Payment("COD")).
		withTransactionDate( "12/12/2020@18:20:20");

	public static Order order_22  = new Order("order_22").
		withEmployee(employee_4).
		withCustomer(customer_18).
		addOrderItem(food_2).
		addOrderItem(food_2).
		withState(Order.State.DUE).
		withPayment(new Payment("ATM"))
		.withTransactionDate("11/6/2020@10:20:20");
	public static Order order_23  = new Order("order_23").
		withEmployee(employee_10).
		withCustomer(customer_10).
		addOrderItem(food_5).
		addOrderItem(food_10).
		addOrderItem(food_20).
		withState(Order.State.CANCEL).
		withPayment(new Payment("COD")).withTransactionDate("13/5/2020@12:20:20");
	public static Order order_24  = new Order("order_24").
		withEmployee(employee_4).
		withCustomer(customer_18).
		addOrderItem(food_18).
		addOrderItem(food_2).
		addOrderItem(food_3).
		withState(Order.State.DUE).
		withPayment(new Payment("COD")).withTransactionDate("14/3/2020@13:20:20");
	public static Order order_25  = new Order("order_25").
		withEmployee(employee_4).
		withCustomer(customer_18).
		addOrderItem(food_2).
		addOrderItem(food_5).
		addOrderItem(food_3).
		withState(Order.State.DUE).
		withPayment(new Payment("COD")).withTransactionDate("15/2/2020@14:20:20");
	public static Order order_26  = new Order("order_26").
		withEmployee(employee_4).
		withCustomer(customer_18).
		addOrderItem(food_2).
		addOrderItem(food_5).
		addOrderItem(food_3).
		withState(Order.State.PAID).
		withPayment(new Payment("ATM")).withTransactionDate("16/4/2020@15:20:20");
	public static Order order_27  = new Order("order_27").
		withEmployee(employee_10).
		withCustomer(customer_5).
		addOrderItem(food_15).
		addOrderItem(food_3).withState(Order.State.PAID).
		withPayment(new Payment("COD")).withTransactionDate("17/7/2020@16:20:20");
	public static Order order_28  = new Order("order_28").
		withEmployee(employee_4).
		withCustomer(customer_18).
		addOrderItem(food_2).
		addOrderItem(food_5).
		addOrderItem(food_3).
		withState(Order.State.DUE).
		withPayment(new Payment("Vietcombank")).withTransactionDate("18/6/2020@16:20:20");
	public static Order order_29  = new Order("order_29").
		withEmployee(employee_5).
		withCustomer(customer_2).
		addOrderItem(food_2).
		addOrderItem(food_5).
		addOrderItem(food_3).
		withState(Order.State.DUE).
		withPayment(new Payment("Vietcombank")).withTransactionDate("19/5/2020@17:20:20");
	public static Order order_30 = new Order("order_30").
		withEmployee(employee_5).
		withCustomer(customer_2).
		addOrderItem(food_2).
		addOrderItem(food_5).
		addOrderItem(food_3).
		withState(Order.State.DUE).
		withPayment(new Payment("Vietcombank")).withTransactionDate("20/1/2020@18:20:20");
	public static Order order_31 = new Order("order_31").
		withEmployee(employee_5).
		withCustomer(customer_2).
		addOrderItem(food_2).
		addOrderItem(food_5).
		addOrderItem(food_3).
		withState(Order.State.DUE).
		withPayment(new Payment("COD")).withTransactionDate("21/3/2020@13:20:20");
	public static Order order_32 = new Order("order_32").
		withEmployee(employee_5).
		withCustomer(customer_2).
		addOrderItem(food_2).
		addOrderItem(food_5).
		withState(Order.State.DUE).
		addOrderItem(food_3).
		withPayment(new Payment("COD")).withTransactionDate("22/4/2020@12:20:20");
	public static Order order_53 = new Order("order_53").
		withEmployee(employee_5).
		withCustomer(customer_2).
		addOrderItem(food_2).
		addOrderItem(food_5).
		withState(Order.State.DUE).
		addOrderItem(food_3).
		withPayment(new Payment("Vietcombank")).withTransactionDate("23/3/2020@11:20:20");
	public static Order order_54 = new Order("order_54").
		withEmployee(employee_5).
		withCustomer(customer_2).
		addOrderItem(food_2).
		addOrderItem(food_5).
		addOrderItem(food_3).
		withState(Order.State.DUE).
		withPayment(new Payment("COD")).withTransactionDate("23/2/2020@12:20:20");
	public static Order order_55 = new Order("order_55").
		withEmployee(employee_2).
		withCustomer(customer_4).
		addOrderItem(food_2).
		addOrderItem(food_5).
		addOrderItem(food_3).
		withState(Order.State.CANCEL).
		withPayment(new Payment("COD")).withTransactionDate("25/7/2020@13:20:20");
	public static Order order_56 = new Order("order_56").
		withEmployee(employee_5).
		withCustomer(customer_4).
		addOrderItem(food_2).
		addOrderItem(food_5).
		addOrderItem(food_3).
		withState(Order.State.PAID).
		withPayment(new Payment("COD")).withTransactionDate("24/6/2020@14:20:20");
	public static Order order_57 = new Order("order_57").
		withEmployee(employee_5).
		withCustomer(customer_4).
		addOrderItem(food_2).
		addOrderItem(food_5).
		addOrderItem(food_3).
		withState(Order.State.DUE).
		withPayment(new Payment("COD")).withTransactionDate("26/5/2020@15:20:20");
	public static Order order_58 = new Order("order_58").
		withEmployee(employee_5).
		withCustomer(customer_4).
		addOrderItem(food_2).
		addOrderItem(food_5).
		addOrderItem(food_3).
		withState(Order.State.DUE).
		withPayment(new Payment("COD")).withTransactionDate("10/4/2020@15:20:20");
	public static Order order_59 = new Order("order_59").
		withEmployee(employee_5).
		withCustomer(customer_4).
		addOrderItem(food_2).
		addOrderItem(food_5).
		addOrderItem(food_3).
		withState(Order.State.DUE).
		withPayment(new Payment("Vietcombank")).withTransactionDate("22/3/2020@20:20:20");
	public static Order order_64 = new Order("order_64").
		withEmployee(employee_5).
		withCustomer(customer_4).
		addOrderItem(food_2).
		addOrderItem(food_5).
		addOrderItem(food_3).
		withState(Order.State.DUE).
		withPayment(new Payment("Vietcombank")).withTransactionDate("10/1/2020@18:20:20");

	public static Order order_65  = new Order("order_65").
		withEmployee(employee_5).
		withCustomer(customer_5).
		addOrderItem(food_2).
		addOrderItem(food_5).
		addOrderItem(food_3).
		withState(Order.State.DUE).
		withPayment(new Payment("COD")).withTransactionDate("15/2/2020@14:20:20");
	public static Order order_66  = new Order("order_66").
		withEmployee(employee_6).
		withCustomer(customer_5).
		addOrderItem(food_2).
		addOrderItem(food_5).
		addOrderItem(food_3).
		withState(Order.State.DUE).
		withPayment(new Payment("Vietcombank")).withTransactionDate("16/4/2020@15:20:20");
	public static Order order_67  = new Order("order_67").
		withEmployee(employee_6).
		withCustomer(customer_5).
		addOrderItem(food_2).
		addOrderItem(food_5).
		addOrderItem(food_3).
		withState(Order.State.DUE).
		withPayment(new Payment("Vietcombank")).withTransactionDate("17/7/2020@16:20:20");
	public static Order order_68  = new Order("order_68").
		withEmployee(employee_6).
		withCustomer(customer_5).
		addOrderItem(food_2).
		addOrderItem(food_5).
		addOrderItem(food_3).
		withState(Order.State.DUE).
		withPayment(new Payment("Vietcombank")).withTransactionDate("18/6/2020@16:20:20");
	public static Order order_69  = new Order("order_69").
		withEmployee(employee_2).
		withCustomer(customer_5).
		addOrderItem(food_2).
		addOrderItem(food_5).
		addOrderItem(food_3).
		withState(Order.State.DUE).
		withPayment(new Payment("Vietcombank")).withTransactionDate("19/5/2020@17:20:20");
	public static Order order_70 = new Order("order_70").
		withEmployee(employee_2).
		withCustomer(customer_6).
		addOrderItem(food_2).
		addOrderItem(food_5).
		addOrderItem(food_3).
		withState(Order.State.DUE).
		withPayment(new Payment("Vietcombank")).withTransactionDate("20/1/2020@18:20:20");
	public static Order order_71 = new Order("order_71").
		withEmployee(employee_2).
		withCustomer(customer_6).
		addOrderItem(food_2).
		addOrderItem(food_5).
		addOrderItem(food_3).
		withState(Order.State.DUE).
		withPayment(new Payment("Vietcombank")).withTransactionDate("21/3/2020@13:20:20");
	public static Order order_72 = new Order("order_72").
		withEmployee(employee_4).
		withCustomer(customer_6).
		addOrderItem(food_2).
		addOrderItem(food_5).
		addOrderItem(food_3).
		withState(Order.State.DUE).
		withPayment(new Payment("Vietcombank")).withTransactionDate("22/4/2020@12:20:20");
	public static Order order_73 = new Order("order_73").
		withEmployee(employee_4).
		withCustomer(customer_6).
		addOrderItem(food_2).
		addOrderItem(food_5).
		addOrderItem(food_3).
		withState(Order.State.DUE).
		withPayment(new Payment("COD")).withTransactionDate("23/3/2020@11:20:20");
	public static Order order_74 = new Order("order_74").
		withEmployee(employee_4).
		withCustomer(customer_6).
		addOrderItem(food_2).
		addOrderItem(food_5).
		addOrderItem(food_3).
		withState(Order.State.DUE).
		withPayment(new Payment("COD")).withTransactionDate("23/2/2020@12:20:20");
	public static Order order_75 = new Order("order_75").
		withEmployee(employee_9).
		withCustomer(customer_6).
		addOrderItem(food_2).
		addOrderItem(food_5).
		addOrderItem(food_3).
		withState(Order.State.DUE).
		withPayment(new Payment("COD")).withTransactionDate("25/7/2020@13:20:20");
	public static Order order_76 = new Order("order_76").
		withEmployee(employee_9).
		withCustomer(customer_2).
		addOrderItem(food_2).
		addOrderItem(food_5).
		addOrderItem(food_3).
		withState(Order.State.DUE).
		withPayment(new Payment("COD")).withTransactionDate("24/6/2020@14:20:20");
	public static Order order_77 = new Order("order_77").
		withEmployee(employee_9).
		withCustomer(customer_6).
		addOrderItem(food_2).
		addOrderItem(food_5).
		addOrderItem(food_3).
		withState(Order.State.DUE).
		withPayment(new Payment("COD")).withTransactionDate("26/5/2020@15:20:20");
	public static Order order_78 = new Order("order_78").
		withEmployee(employee_10).
		withCustomer(customer_6).
		addOrderItem(food_2).
		addOrderItem(food_5).
		addOrderItem(food_3).
		withState(Order.State.DUE).
		withPayment(new Payment("COD")).withTransactionDate("10/4/2020@15:20:20");
	public static Order order_79 = new Order("order_79").
		withEmployee(employee_10).
		withCustomer(customer_7).
		addOrderItem(food_19).
		addOrderItem(food_5).
		addOrderItem(food_3).
		withState(Order.State.PAID).
		withPayment(new Payment("Vietcombank")).withTransactionDate("22/3/2020@13:20:20");
	public static Order order_80 = new Order("order_80").
		withEmployee(employee_10).
		withCustomer(customer_20).
		addOrderItem(food_20).
		addOrderItem(food_5).
		addOrderItem(food_3).
		withState(Order.State.CANCEL).
		withPayment(new Payment("Vietcombank")).withTransactionDate("10/1/2020@12:20:20");

	public static Order order_81  = new Order("order_81").
		withEmployee(employee_10).
		withCustomer(customer_20).
		addOrderItem(food_18).
		addOrderItem(food_5).
		addOrderItem(food_3).
		withState(Order.State.CANCEL).
		withPayment(new Payment("Vietcombank")).
		withTransactionDate( "12/12/2020@18:20:20");

	public static Order order_82  = new Order("order_82").
		withEmployee(employee_4).
		withCustomer(customer_20).
		addOrderItem(food_2).
		addOrderItem(food_17).
		addOrderItem(food_3).
		withState(Order.State.DUE).
		withPayment(new Payment("COD"))
		.withTransactionDate("11/6/2020@10:20:20");
	public static Order order_83  = new Order("order_83").
		withEmployee(employee_4).
		withCustomer(customer_20).
		addOrderItem(food_2).
		addOrderItem(food_16).
		addOrderItem(food_3).
		withState(Order.State.DUE).
		withPayment(new Payment("COD")).withTransactionDate("13/5/2020@12:20:20");
	public static Order order_84  = new Order("order_84").
		withEmployee(employee_4).
		withCustomer(customer_20).
		addOrderItem(food_1).
		addOrderItem(food_4).
		addOrderItem(food_3).
		withState(Order.State.DUE).
		withPayment(new Payment("COD")).withTransactionDate("14/3/2020@13:20:20");
	public static Order order_85  = new Order("order_85").
		withEmployee(employee_4).
		withCustomer(customer_20).
		addOrderItem(food_2).
		addOrderItem(food_5).
		addOrderItem(food_3).
		withState(Order.State.DUE).
		withPayment(new Payment("COD")).withTransactionDate("15/2/2020@14:20:20");
	public static Order order_86  = new Order("order_86").
		withEmployee(employee_2).
		withCustomer(customer_20).
		addOrderItem(food_2).
		addOrderItem(food_5).
		addOrderItem(food_3).
		withState(Order.State.DUE).
		withPayment(new Payment("Vietcombank")).withTransactionDate("16/4/2020@15:20:20");
	public static Order order_87  = new Order("order_87").
		withEmployee(employee_2).
		withCustomer(customer_20).
		addOrderItem(food_2).
		addOrderItem(food_5).
		addOrderItem(food_3).
		withState(Order.State.DUE).
		withPayment(new Payment("Vietcombank")).withTransactionDate("17/7/2020@16:20:20");
	public static Order order_88  = new Order("order_88").
		withEmployee(employee_2).
		withCustomer(customer_20).
		addOrderItem(food_2).
		addOrderItem(food_5).
		addOrderItem(food_3).
		withState(Order.State.DUE).
		withPayment(new Payment("Vietcombank")).withTransactionDate("18/6/2020@16:20:20");
	public static Order order_91 = new Order("order_91").
		withEmployee(employee_1).
		withCustomer(customer_20).
		addOrderItem(food_2).
		addOrderItem(food_5).
		addOrderItem(food_3).
		withState(Order.State.DUE).
		withPayment(new Payment("COD")).withTransactionDate("20/1/2020@18:20:20");
	public static Order order_90 = new Order("order_90").
		withEmployee(employee_2).
		withCustomer(customer_20).
		addOrderItem(food_2).
		addOrderItem(food_5).
		addOrderItem(food_3).
		withState(Order.State.DUE).
		withPayment(new Payment("COD")).withTransactionDate("21/3/2020@13:20:20");
	public static Order order_89 = new Order("order_89").
		withEmployee(employee_2).
		withCustomer(customer_20).
		addOrderItem(food_2).
		addOrderItem(food_5).
		addOrderItem(food_3).
		withState(Order.State.DUE).
		withPayment(new Payment("COD")).withTransactionDate("22/4/2020@12:20:20");
	public static Order order_92 = new Order("order_92").
		withEmployee(employee_2).
		withCustomer(customer_20).
		addOrderItem(food_2).
		addOrderItem(food_5).
		addOrderItem(food_3).
		withState(Order.State.DUE).
		withPayment(new Payment("Vietcombank")).withTransactionDate("23/3/2021@11:20:20");
	public static Order order_93 = new Order("order_93").
		withEmployee(employee_2).
		withCustomer(customer_20).
		addOrderItem(food_2).
		addOrderItem(food_5).
		addOrderItem(food_3).
		withState(Order.State.DUE).
		withPayment(new Payment("Vietcombank")).withTransactionDate("23/2/2021@12:20:20");
	public static Order order_94 = new Order("order_94").
		withEmployee(employee_2).
		withCustomer(customer_11).
		addOrderItem(food_2).
		addOrderItem(food_5).
		addOrderItem(food_3).
		withState(Order.State.DUE).
		withPayment(new Payment("Vietcombank")).withTransactionDate("25/7/2020@13:20:20");
	public static Order order_95 = new Order("order_95").
		withEmployee(employee_2).
		withCustomer(customer_11).
		addOrderItem(food_2).
		addOrderItem(food_5).
		addOrderItem(food_3).
		withState(Order.State.DUE).
		withPayment(new Payment("COD")).withTransactionDate("24/6/2020@14:20:20");
	public static Order order_96 = new Order("order_96").
		withEmployee(employee_2).
		withCustomer(customer_11).
		addOrderItem(food_2).
		addOrderItem(food_5).
		addOrderItem(food_3).
		withState(Order.State.DUE).
		withPayment(new Payment("COD")).withTransactionDate("26/5/2020@15:20:20");
	public static Order order_97 = new Order("order_97").
		withEmployee(employee_2).
		withCustomer(customer_11).
		addOrderItem(food_2).
		addOrderItem(food_5).
		addOrderItem(food_3).
		withState(Order.State.DUE).
		withPayment(new Payment("COD")).withTransactionDate("10/4/2020@15:20:20");
	public static Order order_98 = new Order("order_98").
		withEmployee(employee_2).
		withCustomer(customer_11).
		addOrderItem(food_2).
		addOrderItem(food_5).
		addOrderItem(food_3).
		withState(Order.State.DUE).
		withPayment(new Payment("Vietcombank")).withTransactionDate("22/3/2020@13:20:20");
	public static Order order_99 = new Order("order_99").
		withEmployee(employee_2).
		withCustomer(customer_11).
		addOrderItem(food_2).
		addOrderItem(food_5).
		addOrderItem(food_3).
		withState(Order.State.DUE).
		withPayment(new Payment("Vietcombank")).withTransactionDate("10/1/2020@12:20:20");
	public static Order[] ALL_ORDERS = { order_1, order_2, order_3, order_4, order_5, order_6, order_10, order_11,
		order_12, order_13, order_14, order_15, order_16, order_17, order_18, order_19, order_20, order_7, order_8,
		order_9,order_21, order_22, order_23, order_24, order_25, order_26, order_30, order_31,
		order_32,  order_27, order_28,
		order_29,order_41, order_42, order_43, order_44, order_45, order_46, order_47, order_48,
		order_49, order_50, order_51, order_52, order_53, order_57, order_54, order_55, order_56, order_58, order_59,
		order_60,order_61,order_62,order_63,order_64,order_65,order_66,order_67,order_68,order_69,order_70,order_71,
		order_72,order_73,order_74,order_75,order_76,order_77,order_78,order_79,order_79,
		order_80,order_81,order_82,order_83,order_84,order_85,order_86,order_87,order_88,order_89,order_90,order_91,
		order_92,order_93,order_94,order_95,order_96,order_97,order_98,order_99,order_560,order_571,order_581,order_591
	};
}
