package com.fpt.petstore.data;

import com.fpt.petstore.entities.Food;

public class FoodData {

	public Food food_1 =

		//Data mẫụ
		new Food("Bánh thưởng cho chó dạng que vị việt quất WUJI Jerky Stick Blueberry Flavor", 55000).
			withType(Food.FoodType.DRY).
			withSortName("Jerky-Blueberry-Flavor").
			withDescription("NurCollagen làm giảm các dấu hiệu lão hóa, kẽm giúp duy trì tính toàn vẹn của da và lông");

	public Food food_2 = new Food("Pate cho chó vị cơm gà IRIS Chicken & Rice", 60000).
		withDescription("Đặc biệt với công thức chế biến riêng tạo nên khẩu phần ăn ngon miệng cho thú cưng, " + "cung cấp đầy đủ chất đạm, béo, Vitamin B1 và khoáng chất," + "kiểm soát trọng lượng của chó," + "bạn có thể dùng làm thức ăn chính hoặc ăn kết hợp với các loại thức ăn khác cũng được, " + "pate cho chó vị cơm gà IRIS Chicken & Rice làm hài lòng cả những chú chó kén ăn nhất.").withPic("food1.jpg");
	public Food food_3 = new Food("Thức ăn cho chó kéo xe MOSHM Sled Dog Grain Free Nutrition", 265000).
		withDescription("Thức ăn cho chó kéo xe MOSHM cung cấp đầy đủ chất dinh dưỡng, " + "giúp duy trì độ bóng mượt và màu lông của chó, " + "hỗ trợ hệ tiêu hóa hoạt động hiệu quả," + "tăng sức đề kháng cho chó, " + "giúp chó con lớn nhanh, khỏe mạnh và duy trì thể trạng lý tưởng ở chó trưởng thành.").withPic("food2.jpg");

	public Food food_4 = new Food("Xương gặm sạch răng cho chó vị thịt bò VEGEBRAND Orgo Beef Flavor Nutrients", 50000).
		withDescription("Xương gặm sạch răng cho chó vị thịt bò VEGEBRAND Orgo Beef Flavor Nutrients làm sạch răng hiệu quả, " + "với thiết kế xương hình bàn chải đánh răng, thúc đẩy khả năng nhai của thú cưng, " + "hiệu quả trong việc làm sạch răng, loại bỏ cao răng, mảng bám, không còn tình trạng răng vàng, nướu chắc khỏe," + "hàm lượng canxi cao giúp xương thú cưng luôn khỏe, răng chắc, " + "hơn nữa sản phẩm xương gặm còn thúc đẩy hệ tiêu hóa, tránh những bệnh về đường ruột.").withPic("food3.jpg");
	public Food food_5 = new Food("Thức ăn cho chó con ROYAL CANIN Chihuahua Puppy", 135000).
		withDescription("ROYAL CANIN Chihuahua Puppy được chế tạo với công thức đặc biệt, phù hợp với hàm răng nhỏ. Thích nghi chế độ ăn và nhai của giống chó Chihuahua, " + "sản phẩm được biết đến như kích thích sự thèm ăn kén chọn của chó Chihuahua. Do đó, đem lại bữa ăn ngon miệng và được đáp ứng đầy đủ những dưỡng chất cần thiết. ROYAL CANIN Chihuahua Puppy thỏa mãn sự thèm ăn của Chihuahua. Với sự kết hợp của ba yếu tố: lựa chọn cẩn thận, hương thơm đặc biệt và hình dáng thức ăn tùy chỉnh phù hợp với chúng, "

			+ "thức ăn còn giúp làm giảm mùi phân. Giúp hỗ trợ tiêu hóa tốt với protein dễ tiêu hóa (LIP), một hàm lượng chất xơ thích hợp và các nguồn carbohydrate chất lượng cao.").withPic("food4.jpg");
	public Food food_6 = new Food("Nước sốt pate cho mèo CIAO vị thịt gà, cá ngừ & cá ngần trắng IC-86C", 25000).
		withDescription("Vitamin E & Selen giúp bảo vệ tổn thương do các gốc tự do gây ra (Chất chống oxy hóa), " + "protein giúp phát triển cơ bắp và sửa chữa các mô.").withPic("food5.jpg");
	public Food food_7 = new Food("Thức ăn cho mèo tiêu hóa búi lông ROYAL CANIN Hairball Care", 110000).
		withDescription("Thức ăn cho mèo kiểm soát búi lông ROYAL CANIN Hairball Care đặc trị cho mèo dễ bị tắc lông, viêm búi lông. Kiểm soát búi lông cho mèo giúp bổ sung chất xơ tự nhiên, giúp bài tiết búi lông qua đường tiêu hóa cho mèo. Trị bệnh búi lông cho mèo. Hạt mã đề hỗ trợ tiêu hóa cho mèo, phòng các bệnh về đường tiêu hóa., "

			+ "kiểm soát búi lông cho mèo giúp bổ sung chất xơ tự nhiên, " + "giúp bài tiết búi lông qua đường tiêu hóa cho mèo, " + "trị bệnh búi lông cho mèo.").withPic("food6.jpg");
	public Food food_8 = new Food("Pate cho mèo vị cá ngừ và gà IRIS Tuna & Chicken", 35000).
		withDescription("Pate cho mèo vị cá ngừ và gà IRIS Tuna & Chicken cung cấp đầy đủ chất đạm, béo, vitamin B1 và khoáng chất, " + "cá ngừ bổ sung omega 3,6 hỗ trợ rất tốt cho da và lông của mèo cưng, " + "thịt gà cung cấp protein giúp mèo cưng duy trì nguồn năng lượng hoạt động mỗi ngày," + "ổn định huyết áp, bảo vệ gan và hệ thống tim mạch, " + "cá ngừ chứa ít chất béo nhưng lại nhiều protein, vì vậy đảm bảo cung cấp năng lượng cho cơ thể mèo cưng. Vừa giảm nguy cơ béo phì hiệu quả. ").withPic("food7.jpg");
	public Food food_9 = new Food("Bánh thưởng cho mèo vị cá hồi JERHIGH Jinny Salmon", 35000).
		withDescription("Bánh thưởng cho mèo vị cá hồi JERHIGH Jinny Salmon là món ăn được vô cùng yêu thích, " + "là một món ăn được làm từ thịt gà và cá hồi thật, " + "được chế biến với tiêu chuẩn chất lượng. Được đóng gói với Taurine, Vitamin E và dầu cá (Omega3,6)," + "taurine là axit amin cần thiết., " + "phân tích đảm bảo: Chất đạm 22% tối thiểu. Chất béo thô9% tối thiểu. Sợi thô tối đa 2%. Độ ẩm tối đa 20%.").withPic("food8.jpg");
	public Food food_10 = new Food("Dầu xả cho chó dưỡng lông TRIXIE Naturol Spulung", 180000).
		withDescription("Dầu xả cho chó dưỡng lông TRIXIE Naturol Spulung chiết xuất từ hạt Macadamia, " + "là loại hạt có nguồn gốc từ Châu Úc. Chứa khoảng 22% các axit omega-7 palmitoleic, " + "và hơn 20 loại vitamin được coi là thần dược trong chăm sóc da. Giúp dưỡng ẩm, làm mềm mượt lông, thân thiện với da của chó nhỏ lẫn chó có làn da nhạy cảm,"

			+ "sử dụng sau khi đã tắm qua sữa tắm, dùng tay thoa dầu xả đã pha loãng lên khắp bề mặt cơ thể chó mèo bắt đầu từ phần cổ xuống thân. Mát xa nhẹ nhàng khắp cơ thể thú cưng cho thấm rồi xả. Lau, sấy khô lông cho thú cưng.").withPic("food9.jpg");
	public Food food_11 = new Food("Bánh thưởng cho chó vị thịt gà BUDGE Chicken Flavor", 60000).
		withDescription("Bánh thưởng cho chó vị thịt gà BUDGE Chicken Flavor với các thành phần từ tự nhiên tạo nên hương vị thơm ngon, bổ dưỡng. Sản phẩm giúp loại bỏ 99% những mảng bám răng cứng đầu, làm giảm mùi hôi miệng. Thúc đẩy hệ tiêu hóa và tránh được những bệnh về đường ruột. Bổ sung canxi giúp xương và răng luôn chắc khỏe. Kích thích hoạt động nhai của cún cưng").withPic("food10.jpg");
	public Food food_12 = new Food("Bánh thưởng cho chó vị thịt bò và rau xanh VEGEBRAND 7 Dental Benefits Vegetable & Beef Stick", 125000).
		withDescription("Với thành phần chính từ tự nhiên là rau củ quả không chứa chất bảo quản.\r\n" + "Bánh thưởng cho chó vị thịt bò và rau xanh VEGEBRAND 7 Dental Benefits Vegetable & Beef Stick có thịt bò nhiều đạm và protein, hỗ trợ sức khỏe của thú cưng hơn\r\n" + "Sản phẩm hỗ trợ vấn đề răng miệng, hạn chế được mảng bám trong răng, làm giảm mùi hôi miệng.\r\n" + "Thúc đẩy quá trình tiêu hóa và tránh những bệnh về đường ruột. ").withPic("food11.jpg");
	public Food food_13 = new Food("Xương cho chó gặm cỡ lớn VEGEBRAND 360 For Large Breed Dogs Bone", 80000).
		withDescription("Xương cho chó gặm cỡ lớn VEGEBRAND 360 For Large Breed Dogs Bone hỗ trợ vấn đề răng miệng rất tốt cho thú cưng.\r\n" + "Hạn chế được mảng bám trong răng, làm giảm mùi hôi miệng.\r\n" + "Thúc đẩy quá trình trao đổi chất trong đường ruột.\r\n" + "Xương cho chó gặm cỡ lớn VEGEBRAND 360 For Large Breed Dogs Bone làm sạch răng toàn diện, loại bỏ 99% cao răng.\r\n" + "Hơi thở thơm tho, giảm mùi hôi miệng.\r\n" + "Hỗ trợ tiêu hóa tốt cho thú cưng. ").withPic("food12.jpg");
	public Food food_14 = new Food("Pate cho chó hỗ trợ chức năng gan và sáng mắt IRIS Benefit For Eyes & Liver", 35000).
		withDescription("Đặc biệt với công thức chế biến riêng hỗ trợ rất tốt cho mắt.\r\n" + "Cải thiện được chức năng gan cho thú cưng.\r\n" + "Tạo nên một sức khỏe toàn diện hơn.\r\n" + "Hỗ trợ chức năng gan.\r\n" + "Duy trì đôi mắt sáng rõ.").withPic("food13.jpg");
	public Food food_15 = new Food("Pate cho chó vị gan và thịt gà JERHIGH Chicken & Liver", 45000).
		withDescription("Pate cho chó vị gan và thịt gà JERHIGH Chicken & Liver là thực phẩm ướt bổ sung vitamin E giúp cún cưng có làn da và lông khỏe mạnh. Bổ sung protein và đạm giúp cún cưng có đầy đủ năng lượng. Duy trì các vận động vui chơi và chạy nhảy. Bạn có thể yên tâm rằng JJERHIGH Chicken & Liver có mọi thứ mà thú cưng của bạn cần để giữ sức khỏe, hạnh phúc và tràn đầy năng lượng. Hỗ trợ hệ tiêu hóa, thúc đấy quá trình trao đổi chất, cân bằng dinh dưỡng. Là phần thưởng ý nghĩa nhất cho những người bạn bốn chân.\r\n" + "\r\n" + "Pate cho chó vị gan và thịt gà JERHIGH Chicken & Liver được đóng hộp vàng nhỏ gọn và tiện lợi. Phù hợp với bữa ăn hàng ngày của cún cưng. Bạn có thể dể dàng sử dụng. Có thể cho cún ăn trực tiếp hoặc trộn với thức ăn khô để chúng cảm thấy vui vẻ hơn. Thích hợp với cả những chú chó biếng và khảnh ăn nhất. Tùy chỉnh liều lượng theo chỉ số cân nặng của thú cưng.").withPic("food14.jpg");
	public Food food_16 = new Food("Pate cho chó vị gan gà IRIS One Care Chicken Liverr", 35000).
		withDescription("Đặc biệt với công thức chế biến riêng tạo nên khẩu phần ăn ngon miệng cho thú cưng.\r\n" + "Bổ sung nhiều Protein, Vitamin đảm bảo một sức khỏe toàn diện hơn.\r\n" + "Tạo nên cảm giác thèm ăn cho cún cưng.\r\n" + "Pate cho chó vị gan gà IRIS One Care Chicken Liver làm hài lòng cả những chú chó kén ăn nhất.").withPic("food15.jpg");
	public Food food_17 = new Food("Pate cho chó hỗ trợ chức năng gan và sáng mắt IRIS Benefit For Eyes & Liver", 35000).
		withDescription("Đặc biệt với công thức chế biến riêng hỗ trợ rất tốt cho mắt.\r\n" + "Cải thiện được chức năng gan cho thú cưng.\r\n" + "Tạo nên một sức khỏe toàn diện hơn.\r\n" + "Hỗ trợ chức năng gan.\r\n" + "Duy trì đôi mắt sáng rõ.").withPic("food13.jpg");
	public Food food_18 = new Food("Pate cho chó hỗ trợ chức năng gan và sáng mắt IRIS Benefit For Eyes & Liver", 35000).
		withDescription("Đặc biệt với công thức chế biến riêng hỗ trợ rất tốt cho mắt.\r\n" + "Cải thiện được chức năng gan cho thú cưng.\r\n" + "Tạo nên một sức khỏe toàn diện hơn.\r\n" + "Hỗ trợ chức năng gan.\r\n" + "Duy trì đôi mắt sáng rõ.").withPic("food13.jpg");
	public Food food_19 = new Food("Pate cho chó hỗ trợ chức năng gan và sáng mắt IRIS Benefit For Eyes & Liver", 35000).
		withDescription("Đặc biệt với công thức chế biến riêng hỗ trợ rất tốt cho mắt.\r\n" + "Cải thiện được chức năng gan cho thú cưng.\r\n" + "Tạo nên một sức khỏe toàn diện hơn.\r\n" + "Hỗ trợ chức năng gan.\r\n" + "Duy trì đôi mắt sáng rõ.").withPic("food13.jpg");
	public Food food_20 = new Food("Pate cho chó hỗ trợ chức năng gan và sáng mắt IRIS Benefit For Eyes & Liver", 35000).
		withDescription("Đặc biệt với công thức chế biến riêng hỗ trợ rất tốt cho mắt.\r\n" + "Cải thiện được chức năng gan cho thú cưng.\r\n" + "Tạo nên một sức khỏe toàn diện hơn.\r\n" + "Hỗ trợ chức năng gan.\r\n" + "Duy trì đôi mắt sáng rõ.").withPic("food13.jpg");

	public Food[] ALL_FOODS = {food_1, food_2, food_3, food_4, food_5, food_6, food_7, food_8, food_9, food_10, food_11, food_12, food_13, food_14, food_15, food_16, food_17, food_18, food_19, food_20};

}
