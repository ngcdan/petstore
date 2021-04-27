package com.fpt.petstore.data;

import com.fpt.petstore.entities.Food;

public class FoodData {

  public Food food_1 =
      new Food("Bánh thưởng cho chó dạng que vị việt quất WUJI Jerky Stick Blueberry Flavor", 55000)
          .withType(Food.FoodType.SNACK)
          .withSortName("banh-thuong-cho-cho-dang-que")
          .withDescription(
              "NurCollagen làm giảm các dấu hiệu lão hóa, kẽm giúp duy trì tính toàn vẹn của da và lông")
          .withPic("food.jpg");

  public Food food_2 =
      new Food("Pate cho chó vị cơm gà IRIS Chicken & Rice", 60000)
          .withType(Food.FoodType.WET)
          .withSortName("Pate-cho-cho-vi-com-ga")
          .withDescription(
              "Đặc biệt với công thức chế biến riêng tạo nên khẩu phần ăn ngon miệng cho thú cưng, "
                  + "cung cấp đầy đủ chất đạm, béo, Vitamin B1 và khoáng chất,"
                  + "kiểm soát trọng lượng của chó,"
                  + "bạn có thể dùng làm thức ăn chính hoặc ăn kết hợp với các loại thức ăn khác cũng được, "
                  + "pate cho chó vị cơm gà IRIS Chicken & Rice làm hài lòng cả những chú chó kén ăn nhất.")
          .withPic("food1.jpg");
  public Food food_3 =
      new Food("Thức ăn cho chó kéo xe MOSHM Sled Dog Grain Free Nutrition", 265000)
          .withType(Food.FoodType.DRY)
          .withSortName("Thuc-an-cho-cho-keo-xe")
          .withDescription(
              "Thức ăn cho chó kéo xe MOSHM cung cấp đầy đủ chất dinh dưỡng, "
                  + "giúp duy trì độ bóng mượt và màu lông của chó, "
                  + "hỗ trợ hệ tiêu hóa hoạt động hiệu quả,"
                  + "tăng sức đề kháng cho chó, "
                  + "giúp chó con lớn nhanh, khỏe mạnh và duy trì thể trạng lý tưởng ở chó trưởng thành.")
          .withPic("food2.jpg");

  public Food food_4 =
      new Food("Xương gặm sạch răng cho chó vị thịt bò VEGEBRAND Orgo Beef Flavor Nutrients", 50000)
          .withType(Food.FoodType.DRY)
          .withSortName("Xuong-gam-sach-rang-cho-cho-vi-thit-bo")
          .withDescription(
              "Xương gặm sạch răng cho chó vị thịt bò VEGEBRAND Orgo Beef Flavor Nutrients làm sạch răng hiệu quả, "
                  + "với thiết kế xương hình bàn chải đánh răng, thúc đẩy khả năng nhai của thú cưng, "
                  + "hiệu quả trong việc làm sạch răng, loại bỏ cao răng, mảng bám, không còn tình trạng răng vàng, nướu chắc khỏe,"
                  + "hàm lượng canxi cao giúp xương thú cưng luôn khỏe, răng chắc, "
                  + "hơn nữa sản phẩm xương gặm còn thúc đẩy hệ tiêu hóa, tránh những bệnh về đường ruột.")
          .withPic("food3.jpg");
  public Food food_5 =
      new Food("Thức ăn cho chó con ROYAL CANIN Chihuahua Puppy", 135000)
          .withType(Food.FoodType.DRY)
          .withSortName("Thuc-an-cho-cho-con-chihuahua")
          .withDescription(
              "ROYAL CANIN Chihuahua Puppy được chế tạo với công thức đặc biệt, phù hợp với hàm răng nhỏ. Thích nghi chế độ ăn và nhai của giống chó Chihuahua, "
                  + "sản phẩm được biết đến như kích thích sự thèm ăn kén chọn của chó Chihuahua. Do đó, đem lại bữa ăn ngon miệng và được đáp ứng đầy đủ những dưỡng chất cần thiết. ROYAL CANIN Chihuahua Puppy thỏa mãn sự thèm ăn của Chihuahua. Với sự kết hợp của ba yếu tố: lựa chọn cẩn thận, hương thơm đặc biệt và hình dáng thức ăn tùy chỉnh phù hợp với chúng, "
                  + "thức ăn còn giúp làm giảm mùi phân. Giúp hỗ trợ tiêu hóa tốt với protein dễ tiêu hóa (LIP), một hàm lượng chất xơ thích hợp và các nguồn carbohydrate chất lượng cao.")
          .withPic("food4.jpg");
  public Food food_6 =
      new Food("Nước sốt pate cho mèo CIAO vị thịt gà, cá ngừ & cá ngần trắng IC-86C", 25000)
          .withType(Food.FoodType.WET)
          .withSortName("Nuoc-sot-pate-cho-meo-vi-thit-ga")
          .withDescription(
              "Vitamin E & Selen giúp bảo vệ tổn thương do các gốc tự do gây ra (Chất chống oxy hóa), "
                  + "protein giúp phát triển cơ bắp và sửa chữa các mô.")
          .withPic("food5.jpg");
  public Food food_7 =
      new Food("Thức ăn cho mèo tiêu hóa búi lông ROYAL CANIN Hairball Care", 110000)
          .withType(Food.FoodType.DRY)
          .withSortName("Thuc-an-cho-meo-tieu-hoa-bui-long")
          .withDescription(
              "Thức ăn cho mèo kiểm soát búi lông ROYAL CANIN Hairball Care đặc trị cho mèo dễ bị tắc lông, viêm búi lông. Kiểm soát búi lông cho mèo giúp bổ sung chất xơ tự nhiên, giúp bài tiết búi lông qua đường tiêu hóa cho mèo. Trị bệnh búi lông cho mèo. Hạt mã đề hỗ trợ tiêu hóa cho mèo, phòng các bệnh về đường tiêu hóa., "
                  + "kiểm soát búi lông cho mèo giúp bổ sung chất xơ tự nhiên, "
                  + "giúp bài tiết búi lông qua đường tiêu hóa cho mèo, "
                  + "trị bệnh búi lông cho mèo.")
          .withPic("food6.jpg");
  public Food food_8 =
      new Food("Pate cho mèo vị cá ngừ và gà IRIS Tuna & Chicken", 35000)
          .withType(Food.FoodType.WET)
          .withSortName("pate-cho-meo-vi-ca-ngu-va-ga")
          .withDescription(
              "Pate cho mèo vị cá ngừ và gà IRIS Tuna & Chicken cung cấp đầy đủ chất đạm, béo, vitamin B1 và khoáng chất, "
                  + "cá ngừ bổ sung omega 3,6 hỗ trợ rất tốt cho da và lông của mèo cưng, "
                  + "thịt gà cung cấp protein giúp mèo cưng duy trì nguồn năng lượng hoạt động mỗi ngày,"
                  + "ổn định huyết áp, bảo vệ gan và hệ thống tim mạch, "
                  + "cá ngừ chứa ít chất béo nhưng lại nhiều protein, vì vậy đảm bảo cung cấp năng lượng cho cơ thể mèo cưng. Vừa giảm nguy cơ béo phì hiệu quả. ")
          .withPic("food7.jpg");
  public Food food_9 =
      new Food("Bánh thưởng cho mèo vị cá hồi JERHIGH Jinny Salmon", 35000)
          .withType(Food.FoodType.SNACK)
          .withSortName("Banh-thuong-cho-meo-vi-ca-hoi")
          .withDescription(
              "Bánh thưởng cho mèo vị cá hồi JERHIGH Jinny Salmon là món ăn được vô cùng yêu thích, "
                  + "là một món ăn được làm từ thịt gà và cá hồi thật, "
                  + "được chế biến với tiêu chuẩn chất lượng. Được đóng gói với Taurine, Vitamin E và dầu cá (Omega3,6),"
                  + "taurine là axit amin cần thiết., "
                  + "phân tích đảm bảo: Chất đạm 22% tối thiểu. Chất béo thô9% tối thiểu. Sợi thô tối đa 2%. Độ ẩm tối đa 20%.")
          .withPic("food8.jpg");

  public Food food_10 =
      new Food(
              "Bánh thưởng cho chó vị cá hồi VEGEBRAND 7 Dental Benefits Salmon Block Stick",
              125000)
          .withType(Food.FoodType.SNACK)
          .withSortName("banh-thuong-cho-cho-vi-ca-hoi")
          .withDescription(
              "Bánh thưởng cho chó vị cá hồi VEGEBRAND 7 Dental Benefits Salmon Block Stick hỗ trợ vấn đề răng miệng rất tốt cho thú cưng.\r\n"
                  + "Hạn chế được mảng bám trong răng, làm giảm mùi hôi miệng.\r\n"
                  + "Thúc đẩy quá trình tiêu hóa và tránh những bệnh về đường ruột.")
          .withPic("food9.jpg");

  public Food food_11 =
      new Food("Bánh thưởng cho chó vị thịt gà BUDGE Chicken Flavor", 60000)
          .withType(Food.FoodType.SNACK)
          .withSortName("banh-thuong-cho-cho-vi-thit-ga")
          .withDescription(
              "Bánh thưởng cho chó vị thịt gà BUDGE Chicken Flavor với các thành phần từ tự nhiên tạo nên hương vị thơm ngon, bổ dưỡng. Sản phẩm giúp loại bỏ 99% những mảng bám răng cứng đầu, làm giảm mùi hôi miệng. Thúc đẩy hệ tiêu hóa và tránh được những bệnh về đường ruột. Bổ sung canxi giúp xương và răng luôn chắc khỏe. Kích thích hoạt động nhai của cún cưng")
          .withPic("food10.jpg");
  public Food food_12 =
      new Food(
              "Bánh thưởng cho chó vị thịt bò và rau xanh VEGEBRAND 7 Dental Benefits Vegetable & Beef Stick",
              125000)
          .withType(Food.FoodType.SNACK)
          .withSortName("banh-thuong-cho-cho-vi-thit-bo-va-rau")
          .withDescription(
              "Với thành phần chính từ tự nhiên là rau củ quả không chứa chất bảo quản.\r\n"
                  + "Bánh thưởng cho chó vị thịt bò và rau xanh VEGEBRAND 7 Dental Benefits Vegetable & Beef Stick có thịt bò nhiều đạm và protein, hỗ trợ sức khỏe của thú cưng hơn\r\n"
                  + "Sản phẩm hỗ trợ vấn đề răng miệng, hạn chế được mảng bám trong răng, làm giảm mùi hôi miệng.\r\n"
                  + "Thúc đẩy quá trình tiêu hóa và tránh những bệnh về đường ruột. ")
          .withPic("food11.jpg");
  public Food food_13 =
      new Food("Xương cho chó gặm cỡ lớn VEGEBRAND 360 For Large Breed Dogs Bone", 80000)
          .withType(Food.FoodType.DRY)
          .withSortName("xuong-cho-cho-gam-co-lon")
          .withDescription(
              "Xương cho chó gặm cỡ lớn VEGEBRAND 360 For Large Breed Dogs Bone hỗ trợ vấn đề răng miệng rất tốt cho thú cưng.\r\n"
                  + "Hạn chế được mảng bám trong răng, làm giảm mùi hôi miệng.\r\n"
                  + "Thúc đẩy quá trình trao đổi chất trong đường ruột.\r\n"
                  + "Xương cho chó gặm cỡ lớn VEGEBRAND 360 For Large Breed Dogs Bone làm sạch răng toàn diện, loại bỏ 99% cao răng.\r\n"
                  + "Hơi thở thơm tho, giảm mùi hôi miệng.\r\n"
                  + "Hỗ trợ tiêu hóa tốt cho thú cưng. ")
          .withPic("food12.jpg");
  public Food food_14 =
      new Food(
              "Pate cho chó hỗ trợ chức năng gan và sáng mắt IRIS Benefit For Eyes & Liver ", 35000)
          .withType(Food.FoodType.WET)
          .withSortName("pate-cho-cho-ho-tro-chuc-nang-gan-va-sang-mat")
          .withDescription("Pate cho chó hỗ trợ chức năng gan và sáng mắt ")
          .withPic("food13.jpg");
  public Food food_15 =
      new Food("Pate cho chó vị gan và thịt gà JERHIGH Chicken & Liver", 45000)
          .withType(Food.FoodType.WET)
          .withSortName("pate-cho-cho-vi-gan-va-thit-ga")
          .withDescription(
              "Pate cho chó vị gan và thịt gà JERHIGH Chicken & Liver là thực phẩm ướt bổ sung vitamin E giúp cún cưng có làn da và lông khỏe mạnh. Bổ sung protein và đạm giúp cún cưng có đầy đủ năng lượng. Duy trì các vận động vui chơi và chạy nhảy. Bạn có thể yên tâm rằng JJERHIGH Chicken & Liver có mọi thứ mà thú cưng của bạn cần để giữ sức khỏe, hạnh phúc và tràn đầy năng lượng. Hỗ trợ hệ tiêu hóa, thúc đấy quá trình trao đổi chất, cân bằng dinh dưỡng. Là phần thưởng ý nghĩa nhất cho những người bạn bốn chân.\r\n"
                  + "\r\n"
                  + "Pate cho chó vị gan và thịt gà JERHIGH Chicken & Liver được đóng hộp vàng nhỏ gọn và tiện lợi. Phù hợp với bữa ăn hàng ngày của cún cưng. Bạn có thể dể dàng sử dụng. Có thể cho cún ăn trực tiếp hoặc trộn với thức ăn khô để chúng cảm thấy vui vẻ hơn. Thích hợp với cả những chú chó biếng và khảnh ăn nhất. Tùy chỉnh liều lượng theo chỉ số cân nặng của thú cưng.")
          .withPic("food14.jpg");
  public Food food_16 =
      new Food("Pate cho chó vị gan gà IRIS One Care Chicken Liverr", 35000)
          .withType(Food.FoodType.WET)
          .withSortName("pate-cho-cho-vi-gan-ga")
          .withDescription(
              "Đặc biệt với công thức chế biến riêng tạo nên khẩu phần ăn ngon miệng cho thú cưng.\r\n"
                  + "Bổ sung nhiều Protein, Vitamin đảm bảo một sức khỏe toàn diện hơn.\r\n"
                  + "Tạo nên cảm giác thèm ăn cho cún cưng.\r\n"
                  + "Pate cho chó vị gan gà IRIS One Care Chicken Liver làm hài lòng cả những chú chó kén ăn nhất.")
          .withPic("food15.jpg");

  public Food food_17 =
      new Food(
              "Bánh thưởng cho chó vị thịt gà dạng que VEGEBRAND Orgo Dental Chew Chicken Flavor",
              50000)
          .withType(Food.FoodType.SNACK)
          .withSortName("banh-thuong-cho-cho-vi-thit-ga-dang-que")
          .withDescription(
              "Bánh thưởng cho chó vị thịt gà dạng que VEGEBRAND Orgo Dental Chew Chicken Flavor bổ sung Canxi cho chó  cưng. Chăm sóc răng và xương chắc khỏe. Cân bằng dinh dưỡng. Hỗ trợ da và lông trở nên mềm mượt hơn. Sản phẩm giúp loại bỏ 99% những mảng bám răng cứng đầu, làm giảm mùi hôi miệng. Lưu giữ hơi thở thơm tho. Thúc đẩy hệ tiêu hóa và tránh được những bệnh về đường ruột. Là phần thưởng dành cho cún cưng của bạn. ")
          .withPic("food16.jpg");

  public Food food_18 =
      new Food(" Xương gặm cho chó vị sữa IRIS GN5M ", 145000)
          .withType(Food.FoodType.DRY)
          .withSortName("xuong-gam-cho-cho-vi-sua")
          .withDescription(
              " Xương gặm cho chó vị sữa IRIS GN5M được làm bằng da bò, không có sản phẩm phụ từ da, không thêm chất màu. Tạo cảm giác ngon miệng và mùi thơm sữa tươi. Thành phần sữa, giúp răng chắc khỏe đồng thời có mùi thơm của sữa, lưu giữ hơi thở thơm mát. Đặc biệt hiệu quả ngăn chặn các mảng bám trên răng. Hạn sử dụng 16 tháng. ")
          .withPic("food17.jpg");

  public Food food_19 =
      new Food(
              " Xương cho chó gặm sạch răng vị sandwich VEGEBRAND Orgo American Hot Dog And Cleaning ",
              35000)
          .withType(Food.FoodType.DRY)
          .withSortName("xuong cho cho gam sach rang vi sandwich")
          .withDescription(
              " Làm sạch răng toàn diện, loại bỏ 99% cao răng\r\n"
                  + ". Hơi thở thơm tho, giảm mùi hôi miệng\r\n"
                  + ". Xương cho chó gặm sạch răng vị sandwich VEGEBRAND Orgo American Hot Dog And Cleaning chứa nhiều các Vitamin và khoáng chất quan trọng\r\n"
                  + ". Được dùng tốt cho tất cả các con chó, kể cả chó con và chó già ")
          .withPic("food18.jpg");

  public Food food_20 =
      new Food(" Bánh thưởng cho chó dạng hạt VEGEBRAND Orgo Endi Chew Chicken Flavor ", 50000)
          .withType(Food.FoodType.SNACK)
          .withSortName("banh-thuong-cho-cho-dang-hat")
          .withDescription(
              " Bánh thưởng cho chó dạng hạt VEGEBRAND Orgo Endi Chew Chicken Flavor với các thành phần từ tự nhiên cung cấp chất dinh dưỡng cực tốt cho thú cưng. Hỗ trợ da và lông trở nên mềm mượt hơn. Sản phẩm giúp loại bỏ 99% những mảng bám răng cứng đầu, làm giảm mùi hôi miệng. Thúc đẩy hệ tiêu hóa và tránh được những bệnh về đường ruột. ")
          .withPic("food19.jpg");

  public Food food_21 =
      new Food(" Xương Canxi cho chó VEGEBRAND Orgo Calcium Bone ", 65000)
          .withType(Food.FoodType.DRY)
          .withSortName("xuong-canxi-cho-cho")
          .withDescription(
              " Xương Canxi cho chó VEGEBRAND Orgo Calcium Bone chứa hàm lượng Canxi cao. Đảm bảo xương luôn chắc khỏe\r\n"
                  + ".Bổ sung năng lượng cho những hoạt động của thú cưng. Giúp làm sạch răng, loại bỏ triệt để những mảng cao răng cứng đầu\r\n"
                  + ".Giảm mùi hôi miệng của cún cưng\r\n"
                  + ".Sản phẩm xương gặm không chứa chất bảo quản, phù hợp với mọi kích cỡ và lứa tuổi ")
          .withPic("food20.jpg");

  public Food food_22 =
      new Food(
              " Xương gặm sạch răng cho chó vị phô mai VEGEBRAND 7 Dental Effects Cheese Dental Bone ",
              60000)
          .withType(Food.FoodType.DRY)
          .withSortName("xuong-gam-sach-rang-cho-cho-vi-pho-mai")
          .withDescription(
              "Xương gặm sạch răng cho chó vị phô mai VEGEBRAND 7 Dental Effects Cheese Dental Bone với thành phần từ thiên nhiên, không chứa chất bảo quản\r\n"
                  + "Giúp cho hương vị trở nên thơm ngon, bổ dưỡng.\r\n"
                  + "Hàm lượng Protein cao và ít chất béo giúp cho cún cưng tránh được béo phì.\r\n"
                  + "Xương dinh dưỡng cho chó giúp làm sạch răng, loại bỏ 99% những mảng cao răng cứng đầu.\r\n"
                  + "Hơn nữa sản phẩm còn thúc đẩy hệ tiêu hóa, tránh những bệnh về đường ruột.\r\n"
                  + "Làm giảm mùi hôi miệng cho thú cưng.")
          .withPic("food21.jpg");

  public Food food_23 =
      new Food(" Thức ăn cho chó con JOSERA Young Star ", 100000)
          .withType(Food.FoodType.DRY)
          .withSortName("thuc-an-cho-cho-con")
          .withDescription(
              " Dễ tiêu hóa mà không có ngũ cốc.\r\n"
                  + "Được thiết kế đặc biệt để tăng trưởng với tỷ lệ canxi / phosphor phù hợp.\r\n"
                  + "Hàm lượng protein và năng lượng vừa phải.\r\n"
                  + "Cũng thích hợp cho ăn chó trẻ vào tuổi trưởng thành mà không cần phải thay đổi thức ăn.\r\n"
                  + "Công thức này không chứa ngũ cốc và phù hợp với chế độ ăn không có hạt hàng ngày của những con chó khỏe mạnh và nhạy cảm.\r\n"
                  + "Tỷ lệ canxi-phốt pho cân bằng, vitamin C và mangan và đồng ở dạng hơi hấp thụ hỗ trợ cấu trúc xương chắc khỏe và các khớp khỏe mạnh. ")
          .withPic("food22.jpg");

  public Food food_24 =
      new Food("  Thức ăn cho chó trưởng thành cỡ nhỏ EARTHBORN HOLISTIC Small Breed", 595000)
          .withType(Food.FoodType.DRY)
          .withSortName("thuc-an-cho-cho-truong-thanh-co-nho")
          .withDescription(
              " Các nguồn protein cao cấp, chẳng hạn như bột thịt gà và bột cá trắng, hỗ trợ xây dựng và duy trì khối lượng cơ nạc của chú chó.\r\n"
                  + "Vitamin, khoáng chất và Beta-carotene giúp duy trì hệ miễn dịch cho chó của bạn.\r\n"
                  + "Không có ngũ cốc, gluten và khoai tây, công thức đặc biệt này là lý tưởng như một chế độ ăn thay thế ngũ cốc giàu protein.\r\n"
                  + "L-Carnitine giúp chuyển đổi chất béo cơ thể thành cơ bắp và năng lượng, hỗ trợ khối lượng cơ nạc và điều hòa cơ thể tổng thể.\r\n"
                  + "Axit béo Omega-6 và Omega-3 cân bằng đóng vai trò quan trọng trong việc thiết lập hàng rào lipid của da, nuôi dưỡng da và lông chó của bạn.\r\n"
                  + "Được làm bằng các thành phần chất lượng cao và công nghệ chế biến, cung cấp khả năng tiêu hóa và hấp thụ chất dinh dưỡng tuyệt vời.\r\n"
                  + "Earthborn Holistic Small Breed được xây dựng để đáp ứng các mức dinh dưỡng được đưa ra bởi Hiệp hội kiểm soát dinh dưỡng thức ăn cho chó của Hoa Kỳ (AAFCO) cho tất cả các giai đoạn. ")
          .withPic("food23.jpg");

  public Food food_25 =
      new Food(" Thức ăn cho chó trưởng thành JOSERA Mini Deluxe 15kg ", 200000)
          .withType(Food.FoodType.DRY)
          .withSortName("thuc-an-cho-cho-truong-thanh")
          .withDescription(
              "Thịt cừu non thay vì thịt gia cầm.\r\n"
                  + "Giảm nguy cơ hình thành cao răng.\r\n"
                  + "Lý tưởng như là dinh dưỡng không hạt dành cho chó con\r\n"
                  + "Thức ăn cho chó trưởng thành JOSERA Mini Deluxe cung cấp cho thú y êu của chúng ta một bữa ăn không hề hối tiếc, đầy đủ hương vị nhưng dễ tiêu hóa. ")
          .withPic("food24.jpg");

  public Food food_26 =
      new Food(
              " Xương gặm sạch răng cho chó vị thịt bò VEGEBRAND 7 Dental Effects Roast Beef Stick ",
              95000)
          .withType(Food.FoodType.DRY)
          .withSortName("xuong-gam-sach-rang-cho-cho-vi-thit-bo")
          .withDescription(
              " Sản phẩm với thành phần từ thiên nhiên, không chứa chất bảo quản giúp cho hương vị trở nên thơm ngon, bổ dưỡng\r\n"
                  + "Xương dinh dưỡng cho chó giúp làm sạch răng, loại bỏ 99% những mảng cao răng cứng đầu\r\n"
                  + "Xương gặm sạch răng cho chó vị thịt bò VEGEBRAND 7 Dental Effects Roast Beef Stick còn hỗ trợ hệ tiêu hóa, làm giảm hôi miệng cho thú cưng ")
          .withPic("food25.jpg");

  public Food food_27 =
      new Food(" Thức ăn cho chó vị thịt vịt ANF Organic 6 Free Duck ", 95000)
          .withType(Food.FoodType.DRY)
          .withSortName("thuc-an-cho-cho-vi-thit-vit")
          .withDescription(
              " Thức ăn cho chó vị thịt vịt ANF Organic 6 Free Duck bao gồm Thịt vịt là nguồn protein cao cấp tuyệt vời chứa các axit amin thiết yếu cân bằng\r\n"
                  + "Thịt vịt cũng chứa nhiều sắt, kẽm, đồng, vitamin B1, B2, B6, B12…\r\n"
                  + "Nhờ áp dụng phương pháp nghiền nhỏ trực tiếp thịt vịt thay vì sử dụng bột giúp giữ nguyên vị thịt và bảo toàn các chất dinh dưỡng bên trong ANF 6 FREE DUCK\r\n"
                  + "Thức ăn cho chó vị thịt vịt ANF 6 Free Duck chứa nhiều hơn 40% chất chống oxy hóa thiên nhiên, nhờ vậy giúp tăng cường hệ miễn dịch cũng như giảm thiểu dị ứng gây ra do thức ăn. Giúp giảm các hiện tượng như kích ứng, viêm da atopic… ")
          .withPic("food26.jpg");

  public Food food_28 =
      new Food(" Xương cho chó gặm vị cá hồi VEGEBRAND Meat Salmon Bone Small ", 60000)
          .withType(Food.FoodType.DRY)
          .withSortName("xuong-cho-cho-gam-vi-ca-hoi")
          .withDescription(
              " Xương cho chó gặm vị cá hồi VEGEBRAND Meat Salmon Bone Small với thành phần từ tự nhiên không chất bảo quản.\r\n"
                  + "Tạo nên hương vị thơm ngon, bổ dưỡng.\r\n"
                  + "Là một sản phẩm hỗ trợ cực tốt cho nướu răng của cún cưng, chắc và khỏe hơn.\r\n"
                  + "Hạn chế những mảng bám trên răng hiệu quả.\r\n"
                  + "Sản phẩm xương gặm có các kích cỡ phù hợp với khuôn miệng của thú cưng.\r\n"
                  + "Có kích thước size S và L phù hợp với miệng của thú cưng. ")
          .withPic("food27.jpg");

  public Food food_29 =
      new Food(" Thức ăn cho chó con PRO PAC ULTIMATES Puppy Chicken & Brown Rice Formula ", 445000)
          .withType(Food.FoodType.DRY)
          .withSortName("thuc-an-cho-cho-con-pro-pac-ultimates")
          .withDescription(
              " PRO PAC ULTIMATES Puppy Chicken & Brown Rice Formula cung cấp dinh dưỡng hoàn chỉnh và một chế độ ăn uống cân bằng cho chó con\r\n"
                  + "Đáp ứng các mức độ dinh dưỡng được đưa ra bởi Hiệp hội kiểm soát thức ăn của Mỹ (AAFCO) về danh mục dinh dưỡng trong thức ăn dành cho chó trong giai đoạn cho con bú, mang thai và tăng trưởng\r\n"
                  + "Cung cấp thêm Protein, hình thành cơ bắp, các cơ quan và xương chắc khỏe. Tăng cường với DHA để giúp hỗ trợ phát triển não và mắt khỏe mạnh\r\n"
                  + "Bột thịt gà thật là thành phần số 1 và Axit béo Omega cân bằng hỗ trợ làn da khỏe mạnh, áo lông và hệ miễn dịch\r\n"
                  + "Thêm L-Carnitine giúp thú cưng của bạn đốt cháy chất béo và duy trì khối lượng cơ nạc. ")
          .withPic("food28.jpg");

  public Food food_30 =
      new Food(" Pate cho chó vị bò và rau IRIS HRBV375 Beef & Vegetable ", 85000)
          .withType(Food.FoodType.WET)
          .withSortName("pate-cho-cho-vi-bo-va-rau")
          .withDescription(
              " Pate cho chó vị bò và rau IRIS HRBV375 Beef & Vegetable bao gồm: gà, bò, cà rốt thái sợi, đậu nành xanh… Cung cấp đầy đủ dưỡng chất cho thú cưng trong mỗi bữa ăn. ")
          .withPic("food29.jpg");

  public Food food_31 =
      new Food(" Thức ăn cho chó con ROYAL CANIN Shiba Inu Junior ", 90000)
          .withType(Food.FoodType.DRY)
          .withSortName("thuc-an-cho-cho-con-shiba")
          .withDescription(
              " Thức ăn cho chó ROYAL CANIN Shiba Inu Junior với công thức đặc chế riêng cho nhu cầu dinh dưỡng của chó Shiba. Sản phẩm được chế biến theo công thức đề cao hệ miễn dịch, giúp da lông chắc khỏe. Bảo vệ da và lông. EPA/DHA: có tác dụng giúp da và lông phát triển khỏe mạnh. Tăng sức đề kháng. Chất chống oxy hóa CELT: hỗ trợ hệ miễn dịch của chó. ")
          .withPic("food30.jpg");

  public Food food_32 =
      new Food(" Sữa bột cho chó BBN Goat’s Milk New Zealand ", 320000)
          .withType(Food.FoodType.MILK)
          .withSortName("sua-bot-cho-cho")
          .withDescription(
              " Sản phẩm sữa bột cho chó BBN Goat’s Milk New Zealand được chế biến sản xuất từ sữa dê thô đặc biệt tại New Zealand trên dây chuyền công nghệ cao.\r\n"
                  + "Đảm bảo giữ được hàm lượng dinh dưỡng cao nhất.\r\n"
                  + "Sản phẩm này có thể thay thế cho sữa chó mẹ với nguồn dinh dưỡng giàu Protein, Canxi, không chứa chất gây dị ứng dành cho chó ở mọi lứa tuổi có thể sử dụng.\r\n"
                  + "Sữa bột cho chó BBN Goat’s Milk New Zealand rất tốt cho dạ dày của thú cưng.\r\n"
                  + "Kích thích tiêu hóa tránh táo bón.\r\n"
                  + "Thành phần có chứa cả EFG có trong sữa chó mẹ giúp bảo vệ dạ dày của chó con một cách tốt nhất. ")
          .withPic("food31.jpg");

  public Food food_33 =
      new Food(" Bánh thưởng cho chó vị thịt bò BUDGE Beef Flavor ", 60000)
          .withType(Food.FoodType.SNACK)
          .withSortName("banh-thuong-cho-cho-vi-thit-bo")
          .withDescription(
              " Bánh thưởng cho chó vị thịt bò BUDGE Beef Flavor bổ sung vitamin và khoáng chất thiết yếu cho cún cưng. Xương dinh dưỡng cho chó giúp làm sạch răng, loại bỏ 99% những mảng cao răng cứng đầu. Hơn nữa sản phẩm còn thúc đẩy hệ tiêu hóa, tránh những bệnh về đường ruột. Làm giảm mùi hôi miệng cho thú cưng. ")
          .withPic("food32.jpg");

  public Food food_34 =
      new Food(" Pate cho chó vị thịt và rau củ IRIS Chicken Beef & Vegetable ", 35000)
          .withType(Food.FoodType.WET)
          .withSortName("pate-cho-cho-vi-thit-va-rau-cu")
          .withDescription(
              " Đặc biệt với công thức chế biến riêng tạo nên khẩu phần ăn ngon miệng cho thú cưng.\r\n"
                  + "Bổ sung protein đảm bảo một sức khỏe toàn diện hơn.\r\n"
                  + "Thức ăn có chất xơ hỗ trợ hệ tiêu hóa cực tốt.\r\n"
                  + "Pate cho chó vị thịt và rau củ IRIS Chicken Beef & Vegetable làm hài lòng những chú chó kén ăn nhất. ")
          .withPic("food33.jpg");

  public Food food_35 =
      new Food(" Thức ăn cho chó MEC Wild Taste Nutrition for Poodle ", 265000)
          .withType(Food.FoodType.DRY)
          .withSortName("thuc-an-cho-cho-mec-wild")
          .withDescription(
              " Thức ăn cho chó MEC Wild Taste Nutrition for Poodle được chế biến từ nguyên liệu hoàn toàn tự nhiên\r\n"
                  + "Hương vị thơm ngon, phù hợp khẩu vị của chó\r\n"
                  + "Không chứa chất bảo quản, chất tạo màu, tạo mùi và phụ gia thực phẩm độc hại\r\n"
                  + "Giảm các vấn đề về da và lông, giúp mắt chó Poodle luôn khỏe mạnh\r\n"
                  + "Hạt thức ăn có kích thước phù hợp với hàm răng của chó, giúp làm sạch và bảo vệ răng miệng cho chó. ")
          .withPic("food34.jpg");

  public Food food_36 =
      new Food(" Pate cho chó vị thịt bò và mề gà IRIS Beef & Chicken Gizzard ", 60000)
          .withType(Food.FoodType.WET)
          .withSortName("pate-cho-cho-vi-thit-bo-va-me-ga")
          .withDescription(
              " Đặc biệt với công thức chế biến riêng tạo nên khẩu phần ăn ngon miệng cho thú cưng.\r\n"
                  + "Cung cấp đầy đủ chất đạm, béo, Vitamin B1 và khoáng chất.\r\n"
                  + "Kiểm soát trọng lượng của chó.\r\n"
                  + "Bạn có thể dùng làm thức ăn chính hoặc ăn kết hợp với các loại thức ăn khác cũng được.\r\n"
                  + "Pate cho chó vị thịt bò và mề gà IRIS Beef & Chicken Gizzard làm hài lòng cả những chú chó kén ăn nhất. ")
          .withPic("food35.jpg");

  public Food food_37 =
      new Food(" Pate cho chó vị cá IRIS One Care Fish ", 35000)
          .withType(Food.FoodType.WET)
          .withSortName("pate-cho-cho-vi-ca")
          .withDescription(
              " Đặc biệt với công thức chế biến riêng tạo nên khẩu phần ăn ngon miệng cho thú cưng.\r\n"
                  + "Đem lại nhiều chất dinh dưỡng cần thiết cho một ngày.\r\n"
                  + "Đảm bảo một sức khỏe toàn diện hơn.\r\n"
                  + "Cá bổ sung omega 3, 6 giúp cho lông mềm mượt hơn, mắt sáng rõ hơn.\r\n"
                  + "Pate cho chó vị cá IRIS One Care Fish tạo nên cảm giác thèm ăn cho cún cưng. ")
          .withPic("food36.jpg");

  public Food food_38 =
      new Food(" Pate cho chó trưởng thành ROYAL CANIN Chihuahua Adult ", 55000)
          .withType(Food.FoodType.WET)
          .withSortName("pate-cho-cho-truong-thanh")
          .withDescription(
              " Được chế biến đặc biệt với tất cả các nhu cầu dinh dưỡng của chú chó trưởng thành của bạn\r\n"
                  + "Giúp duy trì cơ khớp của Chihuahua khỏe mạnh và tăng cường sức khỏe thể chất của chó\r\n"
                  + "Hỗ trợ sức khỏe làn da của Chihuahua để giúp duy trì lớp lông sáng bóng và đẹp\r\n"
                  + "Tăng độ ngon miệng nhằm giúp thỏa mãn cơn thèm ăn của cả Chihuahua\r\n"
                  + "Kích thích sự thèm ăn của Chihuahua ")
          .withPic("food37.jpg");

  public Food food_39 =
      new Food(" Thức ăn cho chó trưởng thành JOSERA Josidog Agilo Sport ", 100000)
          .withType(Food.FoodType.DRY)
          .withSortName("thuc-an-cho-cho-truong-thanh-josera-josidog")
          .withDescription(
              " Preulinotic inulin thúc đẩy hệ đường ruột\r\n"
                  + "Taurine giúp hỗ trợ chức năng tim, thị lực và khả năng sinh sản\r\n"
                  + "Một hàm lượng cao các chất chống oxy hóa có giá trị hỗ trợ các tế bào trong việc bảo vệ chống lại các gốc tự do\r\n"
                  + "Các axit béo có giá trị thúc đẩy làn da khỏe mạnh và một lớp lông sáng bóng\r\n"
                  + "Nhiều vitamin và khoáng chất\r\n"
                  + "Biotine hỗ trợ da và áo khỏe mạnh, cũng như khuyến khích chuyển đổi hiệu quả protein, carbohydrate và chất béo\r\n"
                  + "Dễ nhai và tiêu hóa ")
          .withPic("food38.jpg");

  public Food food_40 =
      new Food(" Que bánh thưởng cho chó BOWWOW Stick Jerky Lamd ", 40000)
          .withType(Food.FoodType.SNACK)
          .withSortName("que-banh-thuong-cho-cho")
          .withDescription(
              " Thành phần tươi sạch, thích hợp với mọi giống chó, lứa tuổi, cân nặng\r\n"
                  + "Que bánh thưởng cho chó BOWWOW Stick Jerky Lamd được làm từ thịt cừu tươi Úc, chứa hàm lượng protein cao, giúp làn da và bộ lông của chó khỏe mạnh, hỗ trợ hệ tiêu hóa và khả năng hấp thụ dưỡng chất. ")
          .withPic("food39.jpg");

  public Food[] ALL_FOODS = {
    food_1, food_2, food_3, food_4, food_5, food_6, food_7, food_8, food_9, food_10, food_11,
    food_12, food_13, food_14, food_15, food_16, food_17, food_18, food_19, food_20, food_21,
    food_22, food_23, food_24, food_25, food_26, food_27, food_28, food_29, food_30, food_31,
    food_32, food_33, food_34, food_35, food_36, food_37, food_38, food_39, food_40
  };
}
