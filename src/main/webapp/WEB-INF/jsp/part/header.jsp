
<!-- Page Preloder -->
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page pageEncoding="utf-8"%>
<div id="preloder">
    <div class="loader"></div>
</div>

<!-- Header Section Begin -->
<header class="header">
    <div class="header__top">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-7">
                    <div class="header__top__left">
                        <p>Mua những vật dụng thú cưng chỉ có tại PetStore</p>
                    </div>
                </div>
                <div class="col-lg-6 col-md-5">
                    <div class="header__top__right">
                        <div class="header__top__links">
                            <c:choose>
                                <c:when test="${customer.email == null}">
                                    <a href="#" data-target="#loginModal" data-toggle="modal">Đăng nhập</a>
                                </c:when>
                                <c:otherwise>
                                    <div style="width:230px" class="header__top__hover">
                                        <span>Hello <strong style="color:#e53637">${customer.fullName}</strong> <em
                                            class="arrow_carrot-down"></em></span>
                                        <ul>
                                            <li class="custom"><a href="/information">Thông tin</a></li>
                                            <li class="custom"><a href="/lich-su-giao-dich">Lịch sử giao dịch</a></li>
                                            <li><a href="/loggout" id="logout">Đăng xuất</a></li>
                                        </ul>
                                    </div>
                                </c:otherwise>
                            </c:choose>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-lg-2 col-md-1">
                <div class="header__logo">
                    <a href="/"><img src="/img/logo1.png" alt=""></a>
                </div>
            </div>
            <div class="col-lg-8 col-md-1">
                <nav class="header__menu mobile-menu">
                    <ul>
                        <li><a href="/">Trang Chủ</a></li>
                        <li><a href="/ve-chung-toi">Giới Thiệu</a></li>
                        <!-- <li><a href="/product">Dịch Vụ</a> tu tu roi xai cai nay
                            <ul class="dropdown">
                            <li><a href="/product-details">Spa</a></li>
                             <li><a href="/product-details">Cắt, tỉa</a></li>
                              <li><a href="/product-details">Tắm rửa</a></li>
                               <li><a href="/product-details">Khám sức khỏe</a></li>

                            </ul>
                        </li> -->
                        <li><a href="javascript:void(0)">Sản Phẩm</a>
                            <ul class="dropdown">
                                <li><a href="/shop/vat-pham-thu-cung/1">Vật phẩm thú cưng</a></li>
                                <li><a href="/shop/food/1">Thức ăn-đồ uống</a></li>
                            </ul>
                        </li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/lien-he">Liên Hệ</a></li>
                    </ul>
                </nav>
            </div>
            <div class="col-lg-2 col-md-1">
                <div class="header__nav__option">
                        <button type="button" class="btn btn-demo" data-toggle="modal" data-target="#myModal2"><i class="fa fa-cart-plus"></i></button>
                </div>
            </div>
        </div>
    </div>
</header>
<!-- Header Section End -->