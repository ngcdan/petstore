<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ page pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="zxx">

<head>
    <jsp:include page="part/head.jsp"/>
    <title>History</title>

</head>
<jsp:include page="part/header.jsp"/>
<body>
<section class="breadcrumb-option" >
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="breadcrumb__text">
                    <h4>Lịch sử giao dịch</h4>
                    <div class="breadcrumb__links">
                        <a href="/">Home</a>
                        <span>Lịch sử giao dịch</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<br>
<div style="text-align:center;">
    <h3>LỊCH SỬ GIAO DỊCH </h3>
</div>
<table class="content-table">
    <thead>
    <tr>
        <th>Mã Đơn hàng</th>
        <th>Tên Đơn hàng</th>
        <th>Ngày Đặt</th>
        <th>Tổng Tiền</th>
        <th>Xem chi tiết</th>
    </tr>
    </thead>

<c:forEach items="${listOrder}" var="o">
    <tr>
        <td>${o.code}</td>
        <td>${o.label}</td>
        <td><fmt:formatDate value="${o.createdTime}" pattern="dd/MM/yyyy HH:mm:ss" /></td>

        <td>${o.total} ${o.currency}</td>
        <td class="row">
            <div class="button_admin">
                <a data-toggle="tooltip" data-placement="top" title="See Detail"
                   type="button" class="button_see" class="btn"><i
                        class='fa fa-eye'></i> </a>

            </div>
        </td>
    </tr>
</c:forEach>

</table>
<br>
</body>
<jsp:include page="part/footer.jsp"/>
<jsp:include page="part/modal.jsp"/>
<jsp:include page="part/script.jsp"/>
</html>
