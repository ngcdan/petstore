<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ page pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="en">

<head>
    <jsp:include page="part/head.jsp"/>
    <title>Giỏ hàng</title>

</head>

<body>
<jsp:include page="part/header.jsp"/>


<!-- Breadcrumb Section Begin -->
<section class="breadcrumb-option">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="breadcrumb__text">
                    <h4>Giỏ hàng của bạn</h4>
                    <div class="breadcrumb__links">
                        <a href="/">Trang chủ</a>
                        <span>Giỏ hàng</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- Breadcrumb Section End -->

<!-- Shopping Cart Section Begin -->
<section class="shopping-cart spad">
    <div class="container">

        <div class="row">

            <div class="col-lg-8">
                <form method="post" action="/shop/updateCart">
                    <div class="shopping__cart__table">

                        <table>

                            <thead>
                            <tr>
                                <th>Tên sản phẩm</th>
                                <th>Số lượng</th>
                                <th>Tổng tiền</th>
                                <th></th>
                            </tr>
                            </thead>

                            <tbody>
                            <c:if test="${ empty listCart}">
                                <tr>
                                    <td>Chưa có items nào trong giỏ hàng</td>
                                </tr>
                            </c:if>
                            <c:if test="${not empty listCart}">
                                <c:forEach items="${listCart}" var="p">
                                    <tr>
                                        <c:choose>
                                            <c:when test="${not empty p.value.product.sortName}">
                                                <input type="hidden" name="productSortName"
                                                       value="${p.value.product.sortName}"/>
                                            </c:when>
                                            <c:otherwise>
                                                <input type="hidden" name="foodSortName"
                                                       value="${p.value.food.sortName}"/>
                                            </c:otherwise>
                                        </c:choose>


                                        <td class="product__cart__item">
                                            <div class="product__cart__item__pic">
                                                <c:choose>
                                                    <c:when test="${not empty p.value.product.sortName}">
                                                        <img style="max-width:230px;max-height:95px;width:auto;height: auto;"
                                                             src="/img/product/${p.value.product.pic}" alt="">
                                                    </c:when>
                                                    <c:otherwise>
                                                        <img style="max-width:230px;max-height:95px;width:auto;height: auto;"
                                                             src="/img/product/${p.value.food.pic}" alt="">
                                                    </c:otherwise>
                                                </c:choose>
                                            </div>
                                            <div class="product__cart__item__text">
                                                <c:choose>
                                                    <c:when test="${not empty p.value.product.sortName}">
                                                        <h6>${p.value.product.name}</h6>
                                                        <h5><fmt:formatNumber value="${p.value.product.price}"
                                                                              type="number"/> VNĐ</h5>
                                                    </c:when>
                                                    <c:otherwise>
                                                        <h6>${p.value.food.name}</h6>
                                                        <h5><fmt:formatNumber value="${p.value.food.price}"
                                                                              type="number"/> VNĐ</h5>
                                                    </c:otherwise>
                                                </c:choose>
                                            </div>
                                        </td>
                                        <td class="quantity__item">
                                            <div class="quantity">
                                                <div class="pro-qty-2">
                                                    <c:choose>
                                                        <c:when test="${not empty p.value.food.sortName}">
                                                            <input type="text" name="foodQuantity"
                                                                   value="${p.value.quantity}">
                                                        </c:when>
                                                        <c:otherwise>
                                                            <input type="text" name="productQuantity"
                                                                   value="${p.value.quantity}">
                                                        </c:otherwise>
                                                    </c:choose>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="cart__price"><fmt:formatNumber value="${p.value.total}"
                                                                                  type="number"/> VNĐ
                                        </td>
                                        <c:if test="${not empty p.value.product.sortName}">
                                            <td class="cart__close"><a
                                                    href="/shop/delete/${p.value.product.sortName}"><i
                                                    class="fa fa-close"></i></a></td>
                                        </c:if>
                                        <c:if test="${not empty p.value.food.sortName}">
                                            <td class="cart__close"><a href="/shop/delete/${p.value.food.sortName}"><i
                                                    class="fa fa-close"></i></a></td>
                                        </c:if>
                                    </tr>

                                </c:forEach>
                            </c:if>
                            </tbody>
                        </table>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-6">
                            <div class="continue__btn">
                                <a href="/shop/vat-pham-thu-cung/1">Tiếp tục mua</a>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6">
                            <div class="continue__btn update__btn">
                                <c:if test="${empty listCart}">
                                    <button type="submit" disabled><i class="fa fa-spinner"></i> Cập nhật giỏ hàng
                                    </button>
                                </c:if>
                                <c:if test="${not empty listCart}">
                                    <button type="submit"><i class="fa fa-spinner"></i> Cập nhật giỏ hàng</button>
                                </c:if>
                            </div>
                        </div>

                    </div>
                </form>
            </div>

            <div class="col-lg-4">
                <div class="cart__total">
                    <h6>Tổng tiền giỏ hàng của bạn</h6>
                    <ul>

                        <li>Tổng cộng <span> <fmt:formatNumber value="${totalPrice}" type="number"/> VNĐ</span></li>
                    </ul>

                    <a href="/thanh-toan" class="primary-btn">Tiến đến thanh toán</a>

                </div>
            </div>
        </div>
    </div>
</section>
<!-- Shopping Cart Section End -->
<jsp:include page="part/footer.jsp"/>
<jsp:include page="part/modal.jsp"/>
<jsp:include page="part/script.jsp"/>
</body>

</html>