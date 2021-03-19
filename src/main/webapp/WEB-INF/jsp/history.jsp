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
        <th>Mã Sản Phẩm</th>
        <th>Tên Sản Phẩm</th>
        <th>Ngày Đặt</th>
        <th>Ngày Giao</th>
        <th>Tên Khách Hàng</th>
        <th>Tổng Tiền</th>
        <th>Action</th>
    </tr>
    </thead>


    <tr>
        <td>MSP1</td>
        <td>Lồng thú cưng</td>
        <td>21/12/2000</td>
        <td>23/12/2000</td>
        <td>Lưu Nguyễn Thanh Phương</td>
        <td>500.000 VNĐ</td>
        <td class="row">
            <div class="button_admin">
                <a data-toggle="tooltip" data-placement="top" title="See Detail" href="/lien-he}"
                   type="button" class="button_see" class="btn"><i
                        class='fa fa-eye'></i> </a>

                <a type="button" data-toggle="modal" data-target="#${st.count}1" title="Xóa"
                   type="button" class="button_delete" class="btn"><i
                        class='fa fa-trash'></i></a>

            </div>
        </td>
    </tr>

    <tr>
        <td>MSP1</td>
        <td>Lồng thú cưng</td>
        <td>21/12/2000</td>
        <td>23/12/2000</td>
        <td>Lưu Nguyễn Thanh Phương</td>
        <td>500.000 VNĐ</td>
        <td class="row">
            <div class="button_admin">
                <a data-toggle="tooltip" data-placement="top" title="Xem chi tiết" href="#"
                   type="button" class="button_see" class="btn"><i
                        class='fa fa-eye'></i> </a>

                <a type="button" data-toggle="modal" data-target="#${st.count}1" title="Xóa"
                   type="button" class="button_delete" class="btn"><i
                        class='fa fa-trash'></i></a>
            </div>
        </td>
    </tr>
</table>
<br>
</body>
<jsp:include page="part/footer.jsp"/>
<jsp:include page="part/modal.jsp"/>
<jsp:include page="part/script.jsp"/>
</html>
