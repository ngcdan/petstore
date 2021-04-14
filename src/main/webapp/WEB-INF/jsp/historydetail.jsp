<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ page pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="en">

<head>
    <jsp:include page="part/head.jsp"/>
    <title>Chi tiết đơn hàng</title>

</head>

<body>
<jsp:include page="part/header.jsp"/>


<!-- Breadcrumb Section Begin -->
<section class="breadcrumb-option">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="breadcrumb__text">
                    <h4>Chi tiết đơn hàng</h4>
                    <div class="breadcrumb__links">
                        <a href="/">Trang chủ</a>
                        <span>Chi tiết đơn hàng</span>
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

            <div class="col-lg-12">

                    <div class="shopping__cart__table">

                        <table>
                            <thead>
                            <tr>
                                <th>Tên sản phẩm</th>
                                <th>Số lượng sản phẩm</th>
                                <th>Đơn giá sản phẩm</th>
                                <th>Tổng tiền sản phẩm</th>
                            </tr>
                            </thead>

                            <tbody>
                            <c:forEach var="orItem" items="${orderItemList}">
                                    <tr>

                                        <td class="product__cart__item">
                                            <div class="product__cart__item__pic">
                                                        <%--<img style="max-width:230px;max-height:95px;width:auto;height: auto;"--%>
                                                             <%--src="/img/product/${orItem.pic}" alt="">--%>

                                            </div>
                                            <div class="product__cart__item__text">

                                                        <h6>${orItem.name}</h6>


                                            </div>
                                        </td>
                                        <td class="cart__price">
                                            ${orItem.quantity}
                                        </td>
                                        <td class="cart__price"><h5><fmt:formatNumber value="${orItem.total/orItem.quantity}"
                                                                                      type="number"/> VNĐ</h5>
                                        </td>
                                        <td class="cart__price"><fmt:formatNumber value="${orItem.total}"
                                                                                  type="number"/> VNĐ
                                        </td>

                                    </tr>
                            </c:forEach>
                            </tbody>
                        </table>
                    </div>
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <div class="continue__btn update__btn">
                                <h5 class="text-uppercase font-weight-bold">Tổng tiền giỏ hàng của bạn</h5>
                                    <h6 class="text-uppercase font-weight-bold"> <fmt:formatNumber value="${totalPrice}" type="number"/> VNĐ</h6>

                            </div>
                        </div>

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