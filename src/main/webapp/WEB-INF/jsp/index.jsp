<%@ page pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<!DOCTYPE html>
<html lang="zxx">
<head>
    <jsp:include page="part/head.jsp" />
    <title>Trang chủ</title>
</head>

<body>
<jsp:include page="part/header.jsp" />
    <!-- Hero Section Begin -->
    <section class="hero">
        <div class="hero__slider owl-carousel">
            <div class="hero__items set-bg" data-setbg="img/hero/1.jpg">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-5 col-lg-7 col-md-8">
                            <div class="hero__text">
                                <h6 >VẬT DỤNG</h6>
                                <h2 class="text-left">VẬT DỤNG DÀNH CHO THÚ CƯNG</h2>
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
                                <h2 class="text-left">DỊCH VỤ CHĂM SÓC THÚ CƯNG</h2>
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
                                <h2 class="text-left">ĐỒ ĂN CHO THÚ CƯNG</h2>
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
                            <h2 class="text-left">Dịch vụ tắm rửa thú cưng</h2>
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
                            <h2 class="text-left">Vật Dụng</h2>
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
                            <h2 class="text-left">Đồ Ăn</h2>
                            <a href="#">Mua ngay</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Banner Section End -->
<ul class="filter__controls">
    <li class="active" data-filter="*">MENU</li>
</ul>
<div class="container">
    <img src="img/a.jpg" alt="">
</div>

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
                            <a href="/">ĐỌC THÊM</a>
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