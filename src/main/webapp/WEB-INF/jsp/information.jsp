<%@ page pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="zxx">
<head>
    <jsp:include page="part/head.jsp"/>
    <title>About us</title>
</head>
<jsp:include page="part/header.jsp"/>
<body>
<!-- Breadcrumb Section Begin -->
<section class="breadcrumb-option">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="breadcrumb__text">
                    <h4>Thông tin chi tiết</h4>
                    <div class="breadcrumb__links">
                        <a href="/">Home</a> <span>Thông tin chi tiết</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<br>
<section>
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <div class="box_image_logo">
                    <div class="my-account-litle">Ảnh đại diện</div>
                    <div>
                        <label for="photo_file"><img
                                src="/img/about/about-us.jpg" alt="">
                        </label> <input type="file" style="text-decoration: none;"
                                        class="btn btn-block" id="photo_file"/>
                    </div>

                </div>
            </div>

            <div class="col-md-8">
                <div class="box_info_account2">

                    <br>
                    <h3>THÔNG TIN CHI TIẾT</h3>
                    <br/>
                    <!--Form-->
                    <div class="form_info_update">
                        <div class="form-group row">
                            <label class="col-md-4 control-label">Họ và tên:</label>
                            <div class="col-md-8">
                                    <input class="form-control" type="text" name="hovaten"
                                           placeholder="Họ và tên">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-4 control-label">Ngày sinh:</label>
                            <div class="col-md-8">
                                    <input class="form-control" type="date" name="ngaysinh">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-4 control-label">Điện thoại:</label>
                            <div class="col-md-8">
                                    <input class="form-control numeric" type="text"
                                           placeholder="Số điện thoại" name="ngaysinh" maxlength="11">
                            </div>
                        </div>

                        <div class="form-group row">
                            <label class="col-md-4 control-label">Địa chỉ:</label>
                            <div class="col-md-8">
                                    <input class="form-control numeric" type="text"
                                           name="ngaysinh" placeholder="Địa Chỉ">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-4 control-label">Ngày tạo:</label>

                            <div class="col-md-8">
                                    <input class="form-control" type="date" name="ngaytao"
                                           placeholder="Ngày tạo">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-4 control-label">Username: </label>
                            <div class="col-md-8">
                                    <input class="form-control" type="text" name="Username"
                                           placeholder="Username">
                            </div>
                        </div>
                    </div>

                    <div class="form-group" style="margin-bottom: 40px;">
                        <button class="btn nut text-uppercase">Update</button>
                        <button class="btn nut1 text-uppercase" type="button"
                                data-toggle="modal" data-target="#exampleModalChange">ĐỔI
                            MẬT KHẨU
                        </button>
                        <br>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- Client Section End -->

</body>
<jsp:include page="part/footer.jsp"/>
<jsp:include page="part/modal.jsp"/>
<jsp:include page="part/script.jsp"/>
</html>