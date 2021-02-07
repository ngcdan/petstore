<%@ page pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<!DOCTYPE html>
<html lang="zxx">
<head>
    <jsp:include page="part/header.jsp" />
    <title>Trang chủ</title>
</head>

<body>
<jsp:include page="part/menu.jsp" />

    <!-- Hero Section Begin -->
    <section class="hero">
        <div class="hero__slider owl-carousel">
            <div class="hero__items set-bg" data-setbg="img/hero/1.jpg">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-5 col-lg-7 col-md-8">
                            <div class="hero__text">
                                <h6>VẬT DỤNG</h6>
                                <h2>VẬT DỤNG DÀNH CHO THÚ CƯNG</h2>
                           <p>Các loại vật dụng chất lượng cao, bảo hành 1 năm.</p>
                                <a href="#" class="primary-btn">MUA NGAY <span class="arrow_right"></span></a>
                                <div class="hero__social">
                                    <a href="https://www.facebook.com/PETS-Coffee-And-Services-100166812056116"><i class="fa fa-facebook"></i></a>
                                    <a href="#"><i class="fa fa-twitter"></i></a>
                                    <a href="#"><i class="fa fa-pinterest"></i></a>
                                    <a href="#"><i class="fa fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="hero__items set-bg" data-setbg="img/hero/ad.jpg">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-5 col-lg-7 col-md-8">
                            <div class="hero__text">
                                <h6>DỊCH VỤ</h6>
                                <h2>DỊCH VỤ CHĂM SÓC THÚ CƯNG</h2>
                                <p>Các dịch vụ chăm sóc sức khỏe, Spa, tắm rửa dành cho thú cưng.</p>
                                <a href="#" class="primary-btn">TRẢI NGHIỆM NGAY<span class="arrow_right"></span></a>
                                <div class="hero__social">
                                    <a href="https://www.facebook.com/PETS-Coffee-And-Services-100166812056116"><i class="fa fa-facebook"></i></a>
                                    <a href="#"><i class="fa fa-twitter"></i></a>
                                    <a href="#"><i class="fa fa-pinterest"></i></a>
                                    <a href="#"><i class="fa fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hero__items set-bg" data-setbg="img/hero/a.jpg">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-5 col-lg-7 col-md-8">
                            <div class="hero__text">
                                <h6>Đồ Ăn</h6>
                                <h2>ĐỒ ĂN CHO THÚ CƯNG</h2>
                                <p>Các loại hạt, pate, vitamin cho thú cưng.</p>
                                <a href="#" class="primary-btn">MUA NGAY <span class="arrow_right"></span></a>
                                <div class="hero__social">
                                    <a href="https://www.facebook.com/PETS-Coffee-And-Services-100166812056116"><i class="fa fa-facebook"></i></a>
                                    <a href="#"><i class="fa fa-twitter"></i></a>
                                    <a href="#"><i class="fa fa-pinterest"></i></a>
                                    <a href="#"><i class="fa fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Hero Section End -->

    <!-- Banner Section Begin -->
    <section class="banner spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 offset-lg-4">
                    <div class="banner__item">
                        <div class="banner__item__pic">
                            <img src="img/banner/c.jpg" alt="">
                        </div>	
                        <div class="banner__item__text">
                            <h2>Dịch vụ tắm rửa thú cưng</h2>
                            <a href="#">Trải nghiệm ngay</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="banner__item banner__item--middle">
                        <div class="banner__item__pic">
                            <img src="img/banner/b.jpg" alt="">
                        </div>
                        <div class="banner__item__text">
                            <h2>Vật Dụng</h2>
                            <a href="#">Mua ngay</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-7">
                    <div class="banner__item banner__item--last">
                        <div class="banner__item__pic">
                            <img src="img/banner/e.jpg" alt="">
                        </div>
                        <div class="banner__item__text">
                            <h2>Đồ Ăn</h2>
                            <a href="#">Mua ngay</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Banner Section End -->

    <!-- Product Section Begin -->
    <section class="product spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <ul class="filter__controls">
                        <li class="active" data-filter="*">Sản Phẩm Bán Chạy</li>
                        <li data-filter=".new-arrivals">Sản Phẩm Mới</li>
                        <li data-filter=".hot-sales">Hot Sales</li>
                    </ul>
                </div>
            </div>
            <div class="row product__filter">
                <div class="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals">
                    <div class="product__item">
                        <div class="product__item__pic set-bg" data-setbg="img/product/b.jpg">
                            <span class="label">New</span>
                            <ul class="product__hover">
                                <li><a href="#"><img src="img/icon/heart.png" alt=""></a><span>Yêu Thích</span></li>
                                <li><a href="#"><img src="img/icon/compare.png" alt=""> <span>So Sánh</span></a></li>
                                <li><a href="#"><img src="img/icon/search.png" alt=""></a><span>Tìm Kiếm</span></li>
                            </ul>
                        </div>
                        <div class="product__item__text">
                            <h6>CAGE</h6>
                            <a href="#" class="add-cart">+ Add To Cart</a>
                            <div class="rating">
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                            </div>
                            <h5>100.000 VNĐ</h5>
                            <div class="product__color__select">
                                <label for="pc-1">
                                    <input type="radio" id="pc-1">
                                </label>
                                <label class="active black" for="pc-2">
                                    <input type="radio" id="pc-2">
                                </label>
                                <label class="grey" for="pc-3">
                                    <input type="radio" id="pc-3">
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
    <!-- Product Section End -->

<%--    <!-- Categories Section Begin -->
    <section class="categories spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-3">
                    <div class="categories__text">
                        <h2>Clothings Hot <br /> <span>Shoe Collection</span> <br /> Accessories</h2>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="categories__hot__deal">
                        <img src="img/product-sale.png" alt="">
                        <div class="hot__deal__sticker">
                            <span>Sale Of</span>
                            <h5>$29.99</h5>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 offset-lg-1">
                    <div class="categories__deal__countdown">
                        <span>Deal Of The Week</span>
                        <h2>Multi-pocket Chest Bag Black</h2>
                        <div class="categories__deal__countdown__timer" id="countdown">
                            <div class="cd-item">
                                <span>3</span>
                                <p>Days</p>
                            </div>
                            <div class="cd-item">
                                <span>1</span>
                                <p>Hours</p>
                            </div>
                            <div class="cd-item">
                                <span>50</span>
                                <p>Minutes</p>
                            </div>
                            <div class="cd-item">
                                <span>18</span>
                                <p>Seconds</p>
                            </div>
                        </div>
                        <a href="#" class="primary-btn">Shop now</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Categories Section End -->--%>

    <!-- Instagram Section Begin -->
    <section class="instagram spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="instagram__pic">
                        <div class="instagram__pic__item set-bg" data-setbg="img/instagram/a.jpg"></div>
                        <div class="instagram__pic__item set-bg" data-setbg="img/instagram/b.jpg"></div>
                        <div class="instagram__pic__item set-bg" data-setbg="img/instagram/c.jpg"></div>
                        <div class="instagram__pic__item set-bg" data-setbg="img/instagram/d.jpg"></div>
                        <div class="instagram__pic__item set-bg" data-setbg="img/instagram/e.jpg"></div>
                        <div class="instagram__pic__item set-bg" data-setbg="img/instagram/f.jpg"></div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="instagram__text">
                        <h2>Instagram</h2>
                        <p>Vào Instagram đi </p>
                        <h3>#PETS_Coffee_And_Services</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Instagram Section End -->

    <!-- Latest Blog Section Begin -->
      <!--  -->
    <section class="latest spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title">
                    
                        <h2>BLOG CUA CHUNG TOI</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="blog__item">
                        <div class="blog__item__pic set-bg" data-setbg="img/blog/d.jpg"></div>
                        <div class="blog__item__text">
                            <span><img src="img/icon/calendar.png" alt=""> 16 February 2020</span>
                            <h5>Kush</h5>
                            <a href="/chi-tiet-blog">ĐỌC THÊM</a>
                        </div>
                    </div>
                    
                </div>
          
                  <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="blog__item">
                        <div class="blog__item__pic set-bg" data-setbg="img/blog/c.jpg"></div>
                        <div class="blog__item__text">
                            <span><img src="img/icon/calendar.png" alt=""> 16 February 2020</span>
                            <h5>Orange</h5>
                            <a href="/chi-tiet-blog">ĐỌC THÊM</a>
                        </div>
                    </div>
                    
                </div>
          
                  <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="blog__item">
                        <div class="blog__item__pic set-bg" data-setbg="img/blog/e.jpg"></div>
                        <div class="blog__item__text">
                            <span><img src="img/icon/calendar.png" alt=""> 16 February 2020</span>
                            <h5>Mango</h5>
                            <a href="/chi-tiet-blog">ĐỌC THÊM</a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
    <!-- Latest Blog Section End -->
    <jsp:include page="part/footer.jsp" />
    <jsp:include page="part/modal.jsp" />
    <jsp:include page="part/script.jsp" />
</body>

</html>