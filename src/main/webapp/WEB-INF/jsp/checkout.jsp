<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ page pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="zxx">

<head>
    <jsp:include page="part/head.jsp"/>
    <title>Thanh toán</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" />


</head>

<body>
<jsp:include page="part/header.jsp"/>

<!-- Breadcrumb Section Begin -->
<section class="breadcrumb-option">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="breadcrumb__text">
                    <h4>Check Out</h4>
                    <div class="breadcrumb__links">
                        <a href="/">Trang chủ</a>
                        <a href="/gio-hang">Giỏ hàng</a>
                        <span>Thanh toán</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- Breadcrumb Section End -->

<!-- Checkout Section Begin -->
<section class="checkout spad">
    <div class="container">
        <div class="checkout__form">
            <form action="/shop/checkkout" method="post">
                <div class="row">
                    <div class="col-lg-8 col-md-6">
                        <c:if test="${customer.email!=null}">
                            <h6 class="coupon__code"><span class="fas fa-user"></span> Chào bạn  <em><strong>${customer.fullName}</strong></em></h6>
                        </c:if>
                        <h6 class="checkout__title">Thông tin cá nhân</h6>
                        <div class="checkout__input">
                            <p>Họ và tên<span>*</span></p>
                            <input style="color:blue" type="text" name="fullName" readonly value="<c:if test="${customer.email!=null}">${customer.fullName}</c:if>" placeholder="Nhập họ và tên của bạn"/>
                        </div>
                        <div class="checkout__input">
                            <p>Địa chỉ<span>*</span></p>
                            <input type="text" name="address"  style="color:blue" readonly value="<c:if test="${customer.email!=null}">${customer.address}</c:if>" placeholder="Nhập địa chỉ của bạn"
                                   class="checkout__input__add">
                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="checkout__input">
                                    <p>Phone<span>*</span></p>
                                    <input type="text"  style="color:blue" name="phoneNumber" readonly value="<c:if test="${customer.email!=null}">${customer.phone}</c:if>"placeholder="Nhập số điện thoại của bạn">
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="checkout__input">
                                    <p>Email<span>*</span></p>
                                     <input type="email" name="email"  style="color:blue" readonly value="<c:if test="${customer.email!=null}">${customer.email}</c:if>" placeholder="Nhập địa chỉ email của bạn">
                                </div>
                            </div>
                        </div>
                        <div class="checkout__input__checkbox">
                            <p><em><a href="javascript:void(0)" style="color:blue" data-target="#registerModal"
                                      data-toggle="modal">Đăng ký </a> tại đây để trở thành thành viên và nhận thêm
                                nhiều khuyến mãi</em></p>
                        </div>
                        <div class="checkout__input">
                            <p>Ghi chú cho order của bạn<span>*</span></p>
                            <input type="text" name="note"
                                  placeholder="Ghi chú">
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="checkout__order">
                            <h4 class="order__title">Order của bạn</h4>
                            <div class="checkout__order__products">Sản phẩm <span>Tổng cộng</span></div>
                            <ul class="checkout__total__products">

                                <c:forEach var="p" items="${listCart}">
                                    <li>
                                        <c:choose>
                                            <c:when test="${not empty p.value.product.code}">
                                                <h6>${p.value.product.name}</h6>
                                                <span><fmt:formatNumber type="number" value="${p.value.total}" />  VNĐ</span>
                                            </c:when>
                                            <c:otherwise>
                                                <h6>${p.value.food.name}</h6>
                                                <span> <fmt:formatNumber type="number" value="${p.value.total}" /> VNĐ</span>
                                            </c:otherwise>
                                        </c:choose>
                                    </li>
                                </c:forEach>
                            </ul>
                            <ul class="checkout__total__all">
                                <li>Tổng cộng order <span> <fmt:formatNumber value="${totalPrice}" type="number"/>  VNĐ</span></li>
                            </ul>
                            <p>Hình thức thanh toán</p>
                            <div class="checkout__input__checkbox">
                                <label for="COD">
                                    Thanh toán COD
                                    <input type="radio" required value="COD" id="COD" name="transaction" onclick="myFunction()"/>
                                    <span class="checkmark"></span>
                                </label>
                                <label for="ATM">
                                    ATM
                                    <input type="radio" required value="ATM" id="ATM" name="transaction" onclick="myFunction()"/>
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                            <p id="text2" style="display:none"> <strong>Vui lòng Chọn hình thức thanh toán</strong></p>
                            <p id="text" style="display:none">Chuyển qua tài khoản Sacombank TK: <strong>0501 0913
                                6686</strong> với cú pháp: <br/><strong><em>Mua hàng Petstore</em></strong></p>
                            <button type="submit" onclick="myFunction()" id="submit" class="site-btn">Đặt ngay</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</section>
<!-- Checkout Section End -->

<jsp:include page="part/footer.jsp"/>
<jsp:include page="part/modal.jsp"/>
<jsp:include page="part/script.jsp"/>
<script>
    function myFunction() {
        var checkBox = document.getElementById("ATM");
        var checkBoxCOD = document.getElementById("COD");
        var text = document.getElementById("text");
        var text2=document.getElementById("text2");

        if($("#submit").click && !$('input[name="transaction"]').is(':checked')){
            text2.style.display = "block";
        }else{
            text2.style.display = "none";
        }
        if (checkBox.checked) {
            text.style.display = "block";
        } else if (checkBoxCOD.checked) {
            text.style.display = "none";
        }
    }
</script>
</body>

</html>