<%@ page pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="zxx">

<head>
    <jsp:include page="part/head.jsp"/>
    <title>Quên mật khẩu</title>
</head>
<jsp:include page="part/header.jsp"/>
<body>
<form action="/changePassword" method="post">
    <input type="hidden" name="token" value="${token}"/>
    <div class="modal-body">
        <div class="form-group row">
            <label class="col-md-4 control-label">Mật khẩu mới:
            </label>
            <div class="col-md-4">
                <input class="form-control" type="password"
                       name="newPassword" placeholder="Mật khẩu mới">
            </div>
        </div>
        <div class="form-group row">
            <label class="col-md-4 control-label">Mật khẩu xác nhận:
            </label>
            <div class="col-md-4">
                <input class="form-control" type="password"
                       name="confirmPassword" placeholder="Mật khẩu xác nhận">
            </div>
        </div>

        <button class="btn nut1 col-md-2" type="submit">Đổi mật khẩu</button>
        <br/>  <br/>

    </div>
</form>

</body>
<jsp:include page="part/footer.jsp"/>
<jsp:include page="part/modal.jsp"/>
<jsp:include page="part/script.jsp"/>


</html>