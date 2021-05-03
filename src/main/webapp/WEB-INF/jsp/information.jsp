<%@ page pageEncoding="UTF-8" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>
<html lang="zxx">
<head>
    <jsp:include page="part/head.jsp"/>
    <title>Thông tin chi tiết</title>
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
                        <a href="/">Trang chủ</a> <span>Thông tin chi tiết</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<br>
<section>
    <div class="container">
        <form action="/updateInfor" method="post" name="myForm"  enctype="multipart/form-data">
            <div class="row">
                <div class="col-md-4">
                    <div class="box_image_logo">
                        <div class="my-account-litle">Ảnh đại diện</div>
                        <div  style="width:330px; height: 236px;">
                            <label for="image"><img style="width:330px; height: 236px;"
                                    src="/user-photos/${customer1.id}/${customer1.avatarUrl}" id="thumbnail"  alt="Image Preview" >
                            </label> <input type="file" name="avatarUrl" style="text-decoration: none;" class="btn btn-block"
                                             id="image"  accept="image/jpeg,image/png,image/jpg"/>
                        </div>
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="box_info_account2">
                        <br>
                        <h3 class="text-center">THÔNG TIN CHI TIẾT</h3>
                        <br/>
                        <!--Form-->

                        <div class="form_info_update">
                            <div class="form-group row">
                                <label class="col-md-4 control-label">Email :</label>
                                <div class="col-md-8">
                                    <input required class="form-control numeric" type="text"
                                           name="email" placeholder="Địa Chỉ" readonly value="${customer1.email}">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-md-4 control-label">Họ và tên:</label>
                                <div class="col-md-8">
                                    <input required class="form-control" type="text" name="fullName"
                                           value="${customer1.fullName}"
                                           placeholder="Họ và tên" pattern="^[a-zA-Z\s]+$">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-md-4 control-label">Ngày sinh:</label>
                                <div class="col-md-8">
                                    <input class="form-control" type="date" name="birthday" required
                                           value="<fmt:formatDate value="${customer1.birthday}" pattern="yyyy-MM-dd"/>"/>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-md-4 control-label">Điện thoại:</label>
                                <div class="col-md-8">
                                    <input  class="form-control numeric" type="text" minlength="10"
                                           placeholder="Số điện thoại" name="phoneNumber"  maxlength="10" pattern="(0)+([0-9]{9})\b"
                                           value="${customer1.phone}" required>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-md-4 control-label">Địa chỉ:</label>
                                <div class="col-md-8">
                                    <input required class="form-control numeric" type="text"
                                           name="address" placeholder="Địa Chỉ" value="${customer1.address}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group" style="margin-bottom: 40px;">
                            <button class="btn nut text-uppercase" type="submit">Cập nhật</button>
                            <button class="btn nut1 text-uppercase" type="button"
                                    data-toggle="modal" data-target="#changePasswordModal">ĐỔI
                                MẬT KHẨU
                            </button>
                            <br>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</section>
<!-- Client Section End -->

</body>
<jsp:include page="part/footer.jsp"/>
<jsp:include page="part/modal.jsp"/>
<jsp:include page="part/script.jsp"/>
<script type="text/javascript">
    $(document).ready(function () {

        $("#image").change(function () {
            showImageThumbnail(this);
        });
        function showImageThumbnail(fileInput) {
            file = fileInput.files[0];
            reader = new FileReader();
            reader.onload = function (e) {
                $('#thumbnail').attr('src', e.target.result);
            };
            reader.readAsDataURL(file);
        }
    });
</script>
</html>