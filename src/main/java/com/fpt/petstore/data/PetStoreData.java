package com.fpt.petstore.data;

import com.fpt.petstore.entities.*;
import com.fpt.petstore.entities.Food.FoodType;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

/**
 * @author linuss
 */

public class PetStoreData {

  public static Customer customer_2 = new Customer("Nguyen Van Nhat").withEmail("vannhat98@gmail.com").withPassword( "12345").withBirthday("12/09/1998").withAddress("342-9B Thoai Ngoc Hau").withPhone("0345471020");
  public static Customer customer_3 = new Customer("Nguyen Tan Trong").withEmail("trongnt@gmail.com").withPassword( "12345").withBirthday("30/01/2000").withAddress("54 Le Van Si").withPhone("0851235898");
  public static Customer customer_4 = new Customer("Tran Dai Hung").withEmail("trandaihung@gmail.com").withPassword( "12345").withBirthday("06/12/2000").withAddress("11 Tran Hung Dao").withPhone("0914565476");
  public static Customer customer_5 = new Customer("Vo Thanh Truong").withEmail("vothanhtruong@gmail.com").withPassword("12345").withBirthday("06/09/2000").withAddress("235 Le Lai").withPhone("0917657212");
  public static Customer customer_6 = new Customer("Luu Nguyen Thanh Phuong").withEmail("phuonglnt@gmail.com").withPassword("12345").withBirthday("21/12/2000").withAddress("248 Le Van Si").withPhone("0928494156");
  public static Customer customer_7 = new Customer("Nguyen Thi Thanh Phuong").withEmail("phuongntt01@gmail.com").withPassword("12345").withBirthday("01/01/2000").withAddress("175-82 Huynh Van Banh").withPhone("0794930056");
  public static Customer customer_8 = new Customer("Nguyen Chi Hoa").withEmail("nguyenchihoa98@gmail.com").withPassword("12345").withBirthday("22/09/1998").withAddress("78 To Ki").withPhone("0335579595");
  public static Customer customer_9 = new Customer("Nguyen Vu Thien Nguyen").withEmail("nguyenvuthiennguyen@gmail.com").withPassword("12345").withBirthday("02/02/1986").withAddress("233 Le Van Si").withPhone("0967513214");
  public static Customer customer_10 = new Customer("Bui Thi Phuong Thanh").withEmail("kellybui@gmail.com").withPassword("12345").withBirthday("29/06/2000").withAddress("44 Nguyen Thi Minh Khai").withPhone("0915648654");
  public static Customer customer_11 = new Customer("Nguyen Duy Phuong").withEmail("nguyenduyphuong@gmail.com").withPassword("12345").withBirthday("12/01/1999").withAddress("79 To Ki").withPhone("0954765122");
  public static Customer customer_12 = new Customer("Đinh Văn Phượng").withEmail("dinhvanphuong12@gmail.com").withPassword("12345").withBirthday("13/09/1989").withAddress("55 Tran Huy Lieu").withPhone("0942314842");
	public static Customer customer_13 = new Customer("Nguyễn Xuân Sang").withEmail("nguyenxuansang@gmail.com").withPassword("12345").withBirthday("22/01/1993").withAddress("23 Nguyen Van Troi").withPhone("0953214561");
	public static Customer customer_14 = new Customer("Lê Phú Quý").withEmail("lephuquy@gmail.com").withPassword("12345").withBirthday("02/01/1996").withAddress("842 Truong Sa").withPhone("0923548965");
	public static Customer customer_15 = new Customer("Lý Quốc Quyền").withEmail("lyquocquyen@gmail.com").withPassword("12345").withBirthday("23/05/1995").withAddress("111 Nguyen Phi Khanh").withPhone("0915231545");
	public static Customer customer_16 = new Customer("Bùi Minh Quân").withEmail("buiminhquan11@gmail.com").withPassword("12345").withBirthday("05/01/999").withAddress("562 Hoang Sa").withPhone("093566512");
	public static Customer customer_17 = new Customer("Nguyễn Ngọc Sơn").withEmail("nguyenngocson@gmail.com").withPassword("12345").withBirthday("06/01/1979").withAddress("101 Nguyen Trai").withPhone("0923265548");
	public static Customer customer_18 = new Customer("Bùi Duy Qúy").withEmail("buiduyquy@gmail.com").withPassword("12345").withBirthday("08/03/1999").withAddress("556 Hai Ba Trung").withPhone("0938623132");
	public static Customer customer_19 = new Customer("Võ Hoàng Phương").withEmail("vohoangphuong@gmail.com").withPassword("12345").withBirthday("30/01/1998").withAddress("456 Vo Thi Sau").withPhone("0923548461");
	public static Customer customer_20 = new Customer("Trần Minh Phương").withEmail("tranminhphuong@gmail.com").withPassword("12345").withBirthday("28/02/1999").withAddress("96 Nguyen Kiem").withPhone("0945213786");
	public static Customer customer_21 = new Customer("Võ Khải Hoàng Ca").withEmail("vokhaihoangka@gmail.com").withPassword("12345").withBirthday("27/05/1979").withAddress("45 Pham Van Dong").withPhone("0956232542");
	public static Customer customer_22 = new Customer("Hà Thị Thùy Chi").withEmail("hathithuychi@gmail.com").withPassword("12345").withBirthday("26/07/1977").withAddress("215 Nguyen Thai Son").withPhone("0923254821");
	public static Customer customer_23 = new Customer("Lê Văn Minh Châu").withEmail("levanminhchau@gmail.com").withPassword("12345").withBirthday("07/01/1994").withAddress("24 Thoai Ngoc Hau").withPhone("0993214521");
	public static Customer customer_24 = new Customer("Nguyễn Linh Chi").withEmail("lelinhchi@gmail.com").withPassword("12345").withBirthday("17/01/1969").withAddress("333 Nguyen Kiem").withPhone("0956231545");
	public static Customer customer_25 = new Customer("Lê Thị Phương Chi").withEmail("lethiphuongchi@gmail.com").withPassword("12345").withBirthday("03/01/1968").withAddress("69 Hoang Hoa Tham").withPhone("0955695462");
	public static Customer customer_26 = new Customer("Nguyễn Duy Chinh").withEmail("nguyenduychinh@gmail.com").withPassword("12345").withBirthday("10/01/1996").withAddress("79 Dong Den").withPhone("0822655132");
	public static Customer customer_27 = new Customer("Nguyễn Thế Chiến").withEmail("nguyenthechien@gmail.com").withPassword("12345").withBirthday("31/03/1999").withAddress("363 D1").withPhone("0956254852");
	public static Customer customer_28 = new Customer("Trần Đức Thịnh").withEmail("tranducthinh@gmail.com").withPassword("12345").withBirthday("14/02/1993").withAddress("86 D5").withPhone("0912315486");
	public static Customer customer_29 = new Customer("Trần Viễn Chinh").withEmail("tranvienchinh@gmail.com").withPassword("12345").withBirthday("14/03/1999").withAddress("686 Bui Dinh Tuy").withPhone("0925486512");
	public static Customer customer_30 = new Customer("Bùi Văn Chương").withEmail("buivanchuong@gmail.com").withPassword("12345").withBirthday("17/10/1999").withAddress("214 Nguyen Trai").withPhone("0934561234");

  public static Customer[] ALL_CUSTOMERS = { customer_2, customer_3, customer_4, customer_5, customer_6,
    customer_10, customer_11, customer_12, customer_13, customer_14, customer_15, customer_16, customer_17,
    customer_18, customer_19, customer_20, customer_7, customer_8, customer_9, customer_21, customer_22, customer_23,
    customer_24, customer_25, customer_26, customer_27, customer_28, customer_29, customer_30 };

  static public List<Customer> createDataCustomer() {
    List<Customer> customers = new ArrayList<>();
    for (int i = 0; i < ALL_CUSTOMERS.length; i++) {
      Customer customer = ALL_CUSTOMERS[i];
      customers.add(customer);
    }
    return customers;
  };

  /* Employee */
  public static Employee employee_1  = new Employee("Phạm Võ Hoài Anh").withAddress("Hải Phòng").withEmail("hoaianh@gmail.com").withPassword("12345").withUsername("phamvohoaianh");
  public static Employee employee_2  = new Employee("Hồ Thanh Bình").withAddress("Hải Phòng").withEmail("hothanhbinh@gmail.com").withPassword("12345").withUsername("hothanhbinh");
  public static Employee employee_3  = new Employee("Nguyễn Thái Bình").withAddress("Hải Phòng").withEmail("nguyenthaibinh@gmail.com").withPassword("12345").withUsername("nguyenthaibinh");
  public static Employee employee_4  = new Employee("Bùi Thái Chánh").withAddress("Hải Phòng").withEmail("buithaichanh@gmail.com").withPassword("12345").withUsername("buithaichanh");
  public static Employee employee_5  = new Employee("Đỗ Đình Biên").withAddress("Hải Phòng").withEmail("dodinhvien@gmail.com").withPassword("12345").withUsername("dodinhvien");
  public static Employee employee_6  = new Employee("Nguyễn Phước Biển").withAddress("Hà Nội").withEmail("nguyenphuocbien@gmail.com").withPassword("12345").withUsername("nguyenphuocbien");
  public static Employee employee_7  = new Employee("Lê Minh Chánh").withAddress("Hà Nội").withEmail("leminhchanh@gmail.com").withPassword("12345").withUsername("leminhchanh");
  public static Employee employee_8  = new Employee("Lê Thái Bình").withAddress("Hà Nội").withEmail("lethaibinh@gmail.com").withPassword("12345").withUsername("lethaibinh");
  public static Employee employee_9  = new Employee("Nguyễn Thái Bình").withAddress("Hà Nội").withEmail("nguyenthaibinh@gmail.com").withPassword("12345").withUsername("nguyenthaibinh");
  public static Employee employee_10 = new Employee("Đinh Hồng Châu").withAddress("Hà Nội").withEmail("dinhhongchaugmail.com").withPassword("12345").withUsername("dinhhongchau");

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
  public static Product   product_1    = new Product("Bánh thưởng cho chó dạng que vị việt quất WUJI Jerky Stick Blueberry Flavor").withPrice(500000).withDescription("des")
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

  public static Order order_1  = new Order("order_1 ").withCreatedTime("12/12/2020 18:20:20");
  public static Order order_2  = new Order("order_2 ").withCreatedTime("11/6/2020 10:20:20");
  public static Order order_3  = new Order("order_3 ").withCreatedTime("13/5/2020 12:20:20");
  public static Order order_4  = new Order("order_4 ").withCreatedTime("14/3/2020 13:20:20");
  public static Order order_5  = new Order("order_5 ").withCreatedTime("15/2/2020 14:20:20");
  public static Order order_6  = new Order("order_6 ").withCreatedTime("16/4/2020 15:20:20");
  public static Order order_7  = new Order("order_7 ").withCreatedTime("17/7/2020 16:20:20");
  public static Order order_8  = new Order("order_8 ").withCreatedTime("18/6/2020 16:20:20");
  public static Order order_9  = new Order("order_9 ").withCreatedTime("19/5/2020 17:20:20");
  public static Order order_10 = new Order("order_10").withCreatedTime("20/1/2020 18:20:20");
  public static Order order_11 = new Order("order_11").withCreatedTime("21/3/2020 13:20:20");
  public static Order order_12 = new Order("order_12").withCreatedTime("22/4/2020 12:20:20");
  public static Order order_13 = new Order("order_13").withCreatedTime("23/3/2020 11:20:20");
  public static Order order_14 = new Order("order_14").withCreatedTime("23/2/2020 12:20:20");
  public static Order order_15 = new Order("order_15").withCreatedTime("25/7/2020 13:20:20");
  public static Order order_16 = new Order("order_16").withCreatedTime("24/6/2020 14:20:20");
  public static Order order_17 = new Order("order_17").withCreatedTime("26/5/2020 15:20:20");
  public static Order order_18 = new Order("order_18").withCreatedTime("10/4/2020 15:20:20");
  public static Order order_19 = new Order("order_19").withCreatedTime("22/3/2020 13:20:20");
  public static Order order_20 = new Order("order_20").withCreatedTime("10/1/2020 12:20:20");

  public static Order[] ALL_ORDERS = { order_1, order_2, order_3, order_4, order_5, order_6, order_10, order_11,
    order_12, order_13, order_14, order_15, order_16, order_17, order_18, order_19, order_20, order_7, order_8,
    order_9 };
  public static List<Order> createDataOrder() {
    List<Order> orders = new ArrayList<>();
    for (Order order : ALL_ORDERS) {
      order.withCustomer(customer_2).withEmployee(employee_1).withPayment(new Payment("Vietcombank"))
        .withOrderItem(new OrderItem().withFood(food_1)).withOrderItem(new OrderItem().withFood(food_1))
        .withOrderItem(new OrderItem().withProduct(product_1));
      order.withTotal(order.getOrderItems());
      orders.add(order);
    }
    return orders;
  }
}
