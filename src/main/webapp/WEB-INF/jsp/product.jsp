<%@ page pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

<!DOCTYPE html>
<html lang="zxx">

<head>

    <jsp:include page="part/head.jsp"/>
    <title>${title}</title>

</head>

<body>
<jsp:include page="part/header.jsp"/>

<!-- Breadcrumb Section Begin -->
<section class="breadcrumb-option">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="breadcrumb__text">
                    <h4>${title}</h4>
                    <div class="breadcrumb__links">
                        <a href="/">Trang chủ</a>
                        <strong><span>${title}</span></strong>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- Breadcrumb Section End -->

<!-- Shop Section Begin -->
<section class="shop spad">
    <div class="container">
        <div class="row">
            <div class="col-lg-3">
                <div class="shop__sidebar">
                    <div class="shop__sidebar__search m-auto">
                        <c:choose>
                            <c:when test="${category=='vat-pham-thu-cung'}">
                                <form id="formSearch1" action="/shop/searchProduct" method="post">
                                    <div class="shop__product__option__right m-auto float-left">
                                        <p>Tìm kiếm theo: </p>
                                        <select name="select">
                                            <option value="productName">Tên Sản phẩm</option>

                                        </select>
                                    </div>
                                    <input type="text" name="search" placeholder="Search...">
                                    <button type="submit" id="submit1"></button>
                                </form>
                            </c:when>
                            <c:otherwise>
                                <form id="formSearch2" action="/shop/searchFood" method="post">
                                    <div class="shop__product__option__right m-auto float-left">
                                        <p>Tìm kiếm theo: </p>
                                        <select name="select">
                                            <option value="productName">Tên Sản phẩm</option>
                                        </select>
                                    </div>
                                    <br/> <br/>
                                    <input type="text" name="search" placeholder="Search...">
                                    <br/><br/><br/>
                                    <button type="submit" id="submit2"></button>
                                </form>
                            </c:otherwise>
                        </c:choose>

                    </div>

                </div>
            </div>
            <div class="col-lg-9">
                <div class="shop__product__option">
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-6">
                            <div class="shop__product__option__left">
                                <p id="productSize">Showing ${productPerPage} of ${numberProduct} results</p>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6">
                            <div class="shop__product__option__right">
                                <p>Sort by Price:</p>
                                <select id="sortSelected" onchange="sortPrice()">
                                    <option value="tangdan">Tăng dần</option>
                                    <option value="giamdan">Giảm dần</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row" id="listProduct">
                    <c:forEach var="p" items="${listProduct}">
                        <div class="col-lg-4 col-md-6 col-sm-6 productItems">
                            <div class="product__item">
                                <div class="product__item__pic set-bg" data-setbg="/img/product/${p.pic}">
                                    <ul class="product__hover">
                                        <li><a href="#"><img src="/img/icon/heart.png" alt=""></a></li>
                                        <li><a href="javascript:void(0)"><img src="/img/icon/search.png" alt=""
                                                                              data-toggle="modal"
                                                                              data-target="#cartModal${p.id}"></a></li>
                                    </ul>
                                </div>
                                <div class="product__item__text">
                                    <h6>${p.name}</h6>
                                    <a href="/shop/addtocart/${category}/${p.sortName}" class="add-cart">+ Add To
                                        Cart</a>
                                    <h5><fmt:formatNumber value="${p.price}" type="number"/>VNĐ</h5>
                                    <input class="productPrice" type="hidden" value="${p.price}"/>
                                </div>
                                <div class="modallll">
                                    <div class="modal fade right" id="cartModal${p.id}" tabindex="-1"
                                         aria-labelledby="exampleModalLabel${p.id}" aria-hidden="true">
                                        <div class="modal-dialog modal-side modal-top-right">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title text-center" id="exampleModalLabel${p.id}">
                                                        Chi tiết sản phẩm </h5>
                                                </div>
                                                <div class="modal-body">
                                                    <div class="row">
                                                        <div class="col-lg-3 col-md-3"></div>
                                                        <div class="col-lg-6 col-md-9">
                                                            <div class="tab-content">
                                                                <div class="tab-pane active" id="tabs-1"
                                                                     role="tabpanel">
                                                                    <div class="product__details__pic__item">
                                                                        <img src="/img/product/${p.pic}" alt="">
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div class="product__details__content">
                                                            <div class="container">
                                                                <div class="row d-flex justify-content-center">
                                                                    <div class="col-lg-8">
                                                                        <div class="product__details__text">
                                                                            <h4>${p.name}</h4>
                                                                            <div class="rating">
                                                                                <i class="fa fa-star"></i> <i
                                                                                    class="fa fa-star"></i>
                                                                                <i class="fa fa-star"></i> <i
                                                                                    class="fa fa-star"></i>
                                                                                <i class="fa fa-star-o"></i>
                                                                            </div>
                                                                            <h3><fmt:formatNumber value="${p.price}"
                                                                                                  type="currency"
                                                                                                  currencySymbol=""/>VNĐ</h3>
                                                                            <p>${p.description }</p>
                                                                            <a href="/shop/addtocart/${category}/${p.sortName}"
                                                                               class="primary-btn">add to cart</a>
                                                                        </div>
                                                                        <br>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <br>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </c:forEach>
                </div>
                <div class="row" id="page">
                    <div class="col-lg-12">
                        <div class="product__pagination">
                            <c:forEach var="state" items="${pageSize}">
                                <c:choose>
                                    <c:when test="${(state+1) eq currentPage}">

                                        <a class="active" href="/shop/${category}/${state+1}">${state+1}</a>
                                    </c:when>
                                    <c:otherwise>
                                        <a href="/shop/${category}/${state+1}">${state+1}</a>
                                    </c:otherwise>
                                </c:choose>
                            </c:forEach>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- shop Section end -->
<jsp:include page="part/footer.jsp"/>
<jsp:include page="part/modal.jsp"/>
<jsp:include page="part/script.jsp"/>
</body>

</html>