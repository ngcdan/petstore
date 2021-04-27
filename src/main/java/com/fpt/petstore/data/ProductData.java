package com.fpt.petstore.data;

import com.fpt.petstore.entities.Product;

public class ProductData {

  public Product product_1 =
      new Product("Nệm cho Chó/Mèo hình chữ nhật BOBBY")
          .withProductType(Product.ProductType.DOG)
          .withSortName("Nem-cho-Cho-Meo")
          .withPrice(450000)
          .withDescription("Nệm cho chó mèo hình chữ nhật được thiết kế dành riêng cho vật nuôi.")
          .withPic("product1.png");

  public Product product_2 =
      new Product("Balo phi hành gia cho Chó/Mèo")
          .withProductType(Product.ProductType.CAT)
          .withSortName("Balo-Phi-hanh-gia")
          .withPrice(200000)
          .withDescription(
              "Balo Phi Hành Gia Cho Chó Mèo có thiết kế thông minh, thông thoáng giúp cho thú cưng của bạn thoải mái và an toàn khi di chuyển."
                  + " Vòm kính có thể thay thế bằng lưới nhựa và phù hợp với nhu cầu của bạn. "
                  + "Lưới nhựa tặng kèm ngay bên trong Balo phi hành gia mà bạn không cần phải mua thêm. ")
          .withPic("product2.jpg");

  public Product product_3 =
      new Product("Áo thời trang Tết cho Chó/Mèo")
          .withProductType(Product.ProductType.CAT)
          .withSortName("Quan-ao-thoi-trang-Cho-Meo")
          .withPrice(120000)
          .withDescription("Quần áo chó mèo sẽ giúp cho thú cưng trở nên sành điệu.")
          .withPic("product3.jpg");

  public Product product_4 =
      new Product("Dây xích kỉ luật cho Chó")
          .withProductType(Product.ProductType.DOG)
          .withSortName("Day-xich-Cho")
          .withPrice(90000)
          .withDescription(
              "Dây xích kỷ luật cho chó phù hợp với thú cưng quá nghịch ngợm, "
                  + "thích chạy nhảy khi đi ra ngoài hay những chú chó lớn hung hăng, chó mèo đang trong quá trình huấn luyện.")
          .withPic("product4.jpg");

  public Product product_5 =
      new Product("Tã bỉm cho Chó/Mèo")
          .withProductType(Product.ProductType.DOG)
          .withSortName("Ta-bim Cho-Meo")
          .withPrice(140000)
          .withDescription(
              "Tã bỉm cho chó mèo với thiết kế đặc biệt bên trong chứa chất kháng khuẩn cao, "
                  + "có đầy đủ các kích thước khác nhau dành cho tất cả các giống chó từ nhỏ tới lớn.")
          .withPic("product5.jpg");

  public Product product_6 =
      new Product("Dầu tắm Chó-Mèo lông dài TRIXIE Langhaar Shampoo")
          .withProductType(Product.ProductType.DOG)
          .withSortName("Dau-tam-TRIXIE-Langhaar-Shampoo")
          .withPrice(180000)
          .withDescription(
              "Dầu tắm chó mèo lông dài TRIXIE Langhaar Shampoo dành cho tất cả các giống chó. "
                  + "Đặc biệt là những giống chó có bộ lông dài và dày như Poodle, Phốc sóc, Alaska, Samoyed…")
          .withPic("product6.jpg");

  public Product product_7 =
      new Product("Khay vệ sinh cho Chó/Mèo")
          .withProductType(Product.ProductType.CAT)
          .withSortName("Khay-ve-sinh Cho-Meo")
          .withPrice(390000)
          .withDescription(
              "Khay vệ sinh cho chó thành cao IRIS với thiết kế hình vuông nhỏ gọn, thuận tiện cho việc cún cưng đi vệ sinh. ")
          .withPic("product7.jpg");

  public Product product_8 =
      new Product("Nhà cho chó bằng nhựa dáng vuông")
          .withProductType(Product.ProductType.DOG)
          .withSortName("Nha-cho-cho-nhua-dang-vuong")
          .withPrice(690000)
          .withDescription(
              "Nhà cho chó bằng nhựa dáng vuông được sản xuất trên dây chuyền công nghệ hiện đại, sản phẩm với màu sắc đa dạng.")
          .withPic("product8.jpg");

  public Product product_9 =
      new Product("Bát ăn inox cho Chó-Mèo")
          .withProductType(Product.ProductType.DOG)
          .withSortName("Bat-an-inox")
          .withPrice(90000)
          .withDescription(
              "Bát ăn inox cho chó mèo có vỏ được làm từ chất liệu nhựa cao cấp không gây hại.")
          .withPic("product9.jpg");

  public Product product_10 =
      new Product("Bình uống nước cho Chó/Mèo đi dạo")
          .withProductType(Product.ProductType.DOG)
          .withSortName("Binh-uong-nuoc")
          .withPrice(90000)
          .withDescription(
              "Bình uống nước cho chó mèo đi dạo không thể thiếu dành cho thú cưng hay đi offline, đi dạo và hoạt động thể lực thường xuyên.")
          .withPic("product10.jpg");

  public Product product_11 =
      new Product("Đồ chơi cho Chó-Mèo bằng bông chút chít ELITE hình con kỳ lân")
          .withProductType(Product.ProductType.DOG)
          .withSortName("Do-choi-chut-chit")
          .withPrice(150000)
          .withDescription(
              "Đồ chơi cho chó mèo bằng bông chút chít không gây độc hại cho thú cưng.\r\n")
          .withPic("product11.jpg");

  public Product product_12 =
      new Product("Đồ chơi cho chó bằng cao su SOLEIL hình xương")
          .withProductType(Product.ProductType.DOG)
          .withSortName("Do-choi-cao-su")
          .withPrice(150000)
          .withDescription(
              "Đồ chơi cho chó với chất liệu thừng kết hợp vòng cao su cao cấp tự nhiên, không gây độc hại cho chó. Có độ bền cao và khả năng đàn hồi tốt.")
          .withPic("product12.jpg");

  public Product product_13 =
      new Product("Đồ chơi chó nhồi bông IKEA Hoppig Bernese Mountain")
          .withProductType(Product.ProductType.DOG)
          .withSortName("Do-choi-nhoi-bong")
          .withPrice(390000)
          .withDescription(
              "Đồ chơi chó nhồi bông IKEA Hoppig Bernese Mountain có nhiều hình dạng ngộ nghĩnh đáng yêu thu hút sự chú ý của những người bạn 4 chân.")
          .withPic("product13.jpg");

  public Product product_14 =
      new Product("Roi huấn luyện chó mèo PAW")
          .withProductType(Product.ProductType.CAT)
          .withSortName("Roi-huan-luyen")
          .withPrice(90000)
          .withDescription(
              "Roi huấn luyện chó mèo PAW được dùng để huấn luyện, hướng dẫn, đào tạo thú cưng. "
                  + "Việc sử dụng roi huấn luyện cải thiện nhanh chóng thái độ của thú cưng với mệnh lệnh của bạn. "
                  + "Đệm cao su đàn hồi không lo cún cưng bị đau, bị thương.")
          .withPic("product14.jpg");

  public Product product_15 =
      new Product("Lược chải lông chó mèo DELE có nút bấm")
          .withProductType(Product.ProductType.CAT)
          .withSortName("Luoc-chải-long")
          .withPrice(130000)
          .withDescription(
              "Lược chải lông chó mèo có nút bấm phù hợp với tất cả các giống chó."
                  + " Bao gồm cả các giống chó nhỏ và chó lớn như Poodle, Phốc sóc, Samoyel, Alaska…")
          .withPic("product15.jpg");

  public Product product_16 =
      new Product("Tông đơ cạo lông chó mèo JOYU PHC 950")
          .withProductType(Product.ProductType.DOG)
          .withSortName("Tong-do-cao-long")
          .withPrice(999000)
          .withDescription(
              "Tông đơ cạo lông chó mèo JOYU PHC 950 sử dụng chức năng pin sạc điện kèm theo các phụ kiện. "
                  + "Sản phẩm được gia công thiết kế siêu chính xác với lưỡi dao bằng thép không gỉ, dễ tháo rời và vệ sinh. "
                  + "Độ rung thấp, thiết kế tiếng ồn thấp. Sản phẩm phù hợp nhất với tất cả giống chó.")
          .withPic("product16.jpg");

  public Product product_17 =
      new Product("Máy mài móng chó mèo JOYU Pet Nail Grinder N8")
          .withProductType(Product.ProductType.CAT)
          .withSortName("May-mao-mong-JOYU")
          .withPrice(340000)
          .withDescription(
              "Máy mài móng chó mèo – JOYU Pet Nail Grinder N8 thiết kế tiện dụng, bạn có thể cảm thấy tay cầm rất thoải mái và máy dễ vận hành. "
                  + "Bạn có thể dễ dàng mài móng chó mèo của bạn ở nhà. Có 3 chức năng mài móng theo tốc độ: nhỏ, trung bình-lớn và nhanh. ")
          .withPic("product17.jpg");

  public Product product_18 =
      new Product("Máy sấy lông chó mèo chuyên dụng CODOS CP160")
          .withProductType(Product.ProductType.DOG)
          .withSortName("May-say-long")
          .withPrice(2300000)
          .withDescription(
              "Máy sấy lông chó mèo chuyên dụng với công suất 1600w màu tím theo tiêu chuẩn chính thức của Anh. "
                  + "Sản phẩm với công suất cực lớn. Tốc độ thổi sấy gió nhanh, không gây ồn và phạm vi sấy rộng. "
                  + "Phù hợp với tất cả các giống chó mèo như Poodle, Alaska, Husky…")
          .withPic("product18.jpg");

  public Product product_19 =
      new Product("Dây dắt cho chó mèo tự động DELE 007G")
          .withProductType(Product.ProductType.DOG)
          .withSortName("Day-dat")
          .withPrice(200000)
          .withDescription(
              "Dây dắt cho chó mèo tự động DELE là sản phẩm được thiết kế tay cầm bằng nhựa cao cấp."
                  + "Cùng với nút bấm giúp kéo dài hoặc thu gọn dây dắt dễ dàng."
                  + "Không còn trở nên cồng kềnh và bị rối như các dây dắt thông thường khác."
                  + "Dây dắt với chất liệu 100% nylon, cực chắc chắn."
                  + "Đầu dây có móc nối vào vòng cổ khi dắt cho đi dạo mà không hề gây hại cho da và lông của thú cưng.")
          .withPic("product19.jpg");

  public Product product_20 =
      new Product("Rọ mõm chó hình mỏ vịt PAW Aduck")
          .withProductType(Product.ProductType.DOG)
          .withSortName("Ro-mom")
          .withPrice(90000)
          .withDescription(
              "Rọ mõm chó hình mỏ vịt PAW Aduck được sản xuất từ nhựa silic mềm, màu sắc đẹp. Không độc không có mùi lạ.")
          .withPic("product20.jpg");

  public Product product_21 =
      new Product("Lồng vận chuyển chó mèo IRIS")
          .withProductType(Product.ProductType.CAT)
          .withSortName("Long-vạn-chuyen")
          .withPrice(1020000)
          .withDescription(
              "Lồng vận chuyển chó mèo IRIS sản xuất theo tiêu chuẩn quốc tế. "
                  + "Phía trên có tay cầm, tiện cho việc xách chó mèo, di chuyển dễ dàng. "
                  + "Lồng vận chuyển chó mèo IRIS kích thước 51 x 32 x 28.5 (cm)")
          .withPic("product21.jpg");

  public Product product_22 =
      new Product("Chuồng sắt cho chó mèo có mái IRIS")
          .withProductType(Product.ProductType.DOG)
          .withSortName("Chuong-sat")
          .withPrice(2220000)
          .withDescription(
              "Chuồng sắt cho chó mèo có mái IRIS được thiết kế thông minh, đảm bảo chắc chắn, an toàn cho thú cưng.")
          .withPic("product22.jpg");

  public Product product_23 =
      new Product("Chuồng gỗ cho chó mèo RICHELL")
          .withProductType(Product.ProductType.DOG)
          .withSortName("CHuong-go")
          .withPrice(2250000)
          .withDescription(
              "Chuồng gỗ cho chó mèo RICHELL RC03 với chất liệu khung gỗ tự nhiên, hàng rào thép sơn tĩnh điện, lót sàn nhựa ABS (màu đen).")
          .withPic("product23.jpg");

  public Product product_24 =
      new Product("Chuồng quây cho chó bằng nhựa nan mỏng AUPET")
          .withProductType(Product.ProductType.DOG)
          .withSortName("Chuong-quay")
          .withPrice(1550000)
          .withDescription(
              "Chuồng quây cho chó bằng nhựa nan mỏng AUPET 161 được sản xuất bởi chất liệu nhựa cao cấp PP an toàn cho thú cưng, thân thiện với môi trường, không gây độc hại.")
          .withPic("product24.jpg");

  public Product product_25 =
      new Product("Trụ cào móng cho mèo màu đỏ đen")
          .withProductType(Product.ProductType.CAT)
          .withSortName("Trụ-cao-mong")
          .withPrice(29000)
          .withDescription(
              "Trụ cào móng cho mèo màu đỏ đen được làm từ thừng sisal, sisal là loại vật liệu rất chắc, bền được làm thành dạng dây. ")
          .withPic("product25.jpg");

  public Product product_26 =
      new Product("Cát vệ sinh cho mèo siêu vón IRIS")
          .withProductType(Product.ProductType.CAT)
          .withSortName("Cat-ve-sinh")
          .withPrice(150000)
          .withDescription(
              "Cát vệ sinh cho mèo siêu vón IRIS với công dụng vón thành cục siêu nhanh.")
          .withPic("product26.jpg");

  public Product product_27 =
      new Product("Sữa tắm cho mèo BBN For Cats Shampoo")
          .withProductType(Product.ProductType.CAT)
          .withSortName("Sưa-tam-BBN")
          .withPrice(150000)
          .withDescription(
              "Sữa tắm cho mèo BBN For Cats Shampoo với chiết xuất từ quả đào tươi, tạo nên mùi hương dễ chịu, thơm mát cả ngày hoạt động.")
          .withPic("product27.jpg");

  public Product product_28 =
      new Product("Bộ đồ chơi cho mèo bằng cói BOBO")
          .withProductType(Product.ProductType.CAT)
          .withSortName("Bọ-do-choi-bằng-coi")
          .withPrice(60000)
          .withDescription(
              "Bộ đồ chơi cho mèo bằng cói BOBO kích thước size S với chất liệu bằng cói tự nhiên rất an toàn và không gây độc hại. ")
          .withPic("product28.jpg");

  public Product product_29 =
      new Product("Đồ chơi cho chó mèo Paw hình con gà")
          .withProductType(Product.ProductType.CAT)
          .withSortName("Do-choi-con-ga")
          .withPrice(50000)
          .withDescription(
              "Đồ chơi cho chó mèo Paw hình con gà có một tiếng kêu rất đặc biệt, họ nói tiếng kêu của sản phẩm nghe rất khổ sở nên họ đều gọi sản phẩm này là chú gà có tiếng kêu thảm thiết."
                  + "Sản phẩm được làm từ nhựa dẻo, rất an toàn với môi trường, khỏe mạnh, không hề có độc tố, không làm lọt hơi ra ngoài… chắc chắn thú cưng của bạn sẽ thích khi nghe tiếng kêu của sản phẩm này đấy.")
          .withPic("product29.jpg");

  public Product product_30 =
      new Product("Chuồng mèo 3 tầng bằng sắt cao cấp sàn kín AUPET")
          .withProductType(Product.ProductType.CAT)
          .withSortName("Chuong-meo-3-tang")
          .withPrice(2900000)
          .withDescription(
              "Chuồng mèo 3 tầng bằng sắt cao cấp sàn kín AUPET có 2 kích cỡ cho bạn lựa chọn:"
                  + "Size nhỏ: 73 – 52 – 160cm.\r\n"
                  + "Size to: 91 – 62 – 167cm.")
          .withPic("product30.jpg");

  public Product product_31 =
      new Product("Vòng cổ chống ve chó BIOLINE Flea and Tick Collar For Dogs")
          .withProductType(Product.ProductType.DOG)
          .withSortName("Vong-co-chong-ve")
          .withPrice(60000)
          .withDescription(
              "Vòng cổ chống ve chó BIOLINE Flea and Tick Collar For Dogs là sản phẩm ngăn ngừa và điều trị ve, bọ chét cho chó từ 8 tuần tuổi trở lên.")
          .withPic("product31.jpg");

  public Product product_32 =
      new Product("Thuốc nhỏ gáy trị ve chó Frontline Plus")
          .withProductType(Product.ProductType.DOG)
          .withSortName("Thuoc-trị-ve")
          .withPrice(250000)
          .withDescription(
              "Đáp ứng tất cả nhu cầu đó của bạn, Thuốc nhỏ gáy trị ve chó Frontline Plus MERIAL 20 – 40kg sẽ giúp bạn thật an tâm khi thú cưng sạch rận bọ mà lại an toàn. ")
          .withPic("product32.jpg");

  public Product product_33 =
      new Product("Banh Bóng Rổ Mon Ami Toy Vinyl")
          .withProductType(Product.ProductType.DOG)
          .withSortName("Banh-bong-rỏ")
          .withPrice(32000)
          .withDescription(
              "Thương hiệu Việt Nam."
                  + "Chất liệu nhựa tổng hợp cao cấp, an toàn cho chó khi chơi đùa."
                  + "Giúp chó vận động, hạn chế những bệnh về cân nặng.")
          .withPic("product33.jpg");

  public Product product_34 =
      new Product("Xương Gai Làm Sạch Răng Mon Ami Toy Dental")
          .withProductType(Product.ProductType.DOG)
          .withSortName("Xuong-gai-sạch-rang")
          .withPrice(39000)
          .withDescription(
              "Thương hiệu Việt Nam."
                  + "Hỗ trợ vệ sinh răng cho chó, giúp răng chó khỏe mạnh hơn."
                  + "Chất liệu cao cấp, không gây hại đến sức khỏe của chó.")
          .withPic("product34.jpg");

  public Product product_35 =
      new Product("Đồ Chơi Rượt Bắt Pawise Play")
          .withProductType(Product.ProductType.CAT)
          .withSortName("Do-choi-ruot-bat")
          .withPrice(484000)
          .withDescription(
              "Thương hiệu nổi tiếng ở Châu Âu và Mỹ."
                  + "- Kích thích sự tò mò của mèo."
                  + "- Hạn chế lười nhát ở mèo.")
          .withPic("product35.jpg");

  public Product product_36 =
      new Product("Bông Vụ Chứa Bánh Thưởng Pawise Play")
          .withProductType(Product.ProductType.DOG)
          .withSortName("Bong-vụ-Pawise")
          .withPrice(200000)
          .withDescription(
              "Thương hiệu nổi tiếng ở Châu Âu và Mỹ."
                  + "Thiết kế để nhét bánh thưởng bên trong nhằm kích thích chó chơi đùa.")
          .withPic("product36.jpg");

  public Product product_37 =
      new Product("Máy Bắn Banh Tự Động AFP Interactives")
          .withProductType(Product.ProductType.DOG)
          .withSortName("May-ban-banh")
          .withPrice(626000)
          .withDescription(
              "Thiết kế tại Pháp."
                  + "Tự động bắn banh giúp chó chơi một mình."
                  + "Tự động tặng bánh thưởng cho chó."
                  + "Hỗ trợ giảm stress cho chó."
                  + "Sản phẩm kèm theo 6 trái banh chính hãng.")
          .withPic("product37.jpg");

  public Product product_38 =
      new Product("Banh Dùng Cho Máy Bắn Tự Động AFP Interactives")
          .withProductType(Product.ProductType.DOG)
          .withSortName("Banh-dung-cho-may-ban")
          .withPrice(100000)
          .withDescription(
              "Sản phẩm của Pháp."
                  + "Được thiết kế đặc biệt hỗ trợ sự phát triển răng của chó."
                  + "Phù hợp với máy bắn banh tự động AFP."
                  + "1 lốc 6 trái banh")
          .withPic("product38.jpg");

  public Product product_39 =
      new Product("Bàn Chải Đánh Răng Hai Đầu Cho Chó Mèo Beaphar Toothbrush")
          .withProductType(Product.ProductType.CAT)
          .withSortName("Ban-chải-đanh-rang")
          .withPrice(112000)
          .withDescription(
              "Thiết kế 2 đầu đặc biệt giúp chải răng cho chó mèo sạch hơn."
                  + "Được thiết kế phù hợp với kẽ răng và kích cỡ răng của thú cưng.")
          .withPic("product39.jpg");

  public Product product_40 =
      new Product("Kềm Cắt Móng Mon Ami Enzo")
          .withProductType(Product.ProductType.CAT)
          .withSortName("Kem-cat-mong")
          .withPrice(60000)
          .withDescription(
              " Sản xuất tại Việt Nam."
                  + "Thiết kế chuẩn, không gây khó chịu cho chó mèo khi sử dụng."
                  + "Thiết kế cầm tay, gọn nhẹ.")
          .withPic("product40.jpg");

  public Product[] ALL_PRODUCTS = {
    product_1,
    product_2,
    product_3,
    product_4,
    product_5,
    product_6,
    product_7,
    product_8,
    product_9,
    product_10,
    product_11,
    product_12,
    product_13,
    product_14,
    product_15,
    product_16,
    product_17,
    product_18,
    product_19,
    product_20,
    product_21,
    product_22,
    product_23,
    product_24,
    product_25,
    product_26,
    product_27,
    product_28,
    product_29,
    product_30,
    product_31,
    product_32,
    product_33,
    product_34,
    product_35,
    product_36,
    product_37,
    product_38,
    product_39,
    product_40
  };
}
