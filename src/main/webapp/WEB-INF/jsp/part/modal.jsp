<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page pageEncoding="UTF-8" %>
<!--Login Modal-->
<!-- Modal -->
<div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="exampleModalLabel12" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel12">Đăng nhập</h5>
            </div>
            <form action="/login" method="post">
                <div class="modal-body">
                    <div class="mb-3">
                        <label for="email" class="col-form-label custom">Email:</label>
                        <input type="email" placeholder="Nhập Email" class="form-control" name="email" id="email"/>
                    </div>
                    <div class="mb-3">
                        <label  for="password" class="col-form-label custom">Password:</label>
                        <input type="password" placeholder="Nhập password" name="password" class="form-control" id="password"/>
                    </div>
                    <div> <p class="custom">Không có tài khoản? <strong><a href="#" data-target="#registerModal" data-toggle="modal" data-dismiss="modal">Đăng ký</a></strong></p></div>
                </div>
                <div class="modal-footer">
                    <button type="submit" id="submit" class="btn btn-danger custom">Login</button>
                </div>
            </form>
        </div>
    </div>
</div>
<div class="modal fade" id="registerModal" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title"  id="exampleModalLabel2">Đăng ký</h5>
                <p>${error1}</p>
               <div  class="custom1"> <a href="#"  data-target="#loginModal" data-toggle="modal" data-dismiss="modal">Quay lại</a></div>
            </div>
            <form action="/register" method="post">
                <div class="modal-body">
                    <div class="mb-3">
                        <input type="email" placeholder="Nhập Email" class="form-control" name="email" />
                    </div>
                    <div class="mb-3">
                        <input type="password" placeholder="Nhập password" name="password" class="form-control"/>
                    </div>
                    <div class="mb-3">
                        <input type="password" placeholder="Xác nhận mật khẩu" class="form-control" name="confirmPassword" />
                    </div>
                    <div class="mb-3">
                        <input type="number" placeholder="Nhập số diện thoại" class="form-control" name="phoneNumber" />
                    </div>
                    <div class="mb-3">
                        <input type="text" placeholder="Nhập họ và tên" class="form-control" name="fullName" />
                    </div>
                    <div class="mb-3">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="radio" id="flexRadioDefault1" value="Male" checked/>
                            <label class="form-check-label" for="flexRadioDefault1">Nam</label> &nbsp; &nbsp; &nbsp;
                            <input class="form-check-input" type="radio" name="radio" value="Female" id="flexRadioDefault2" >
                            <label class="form-check-label" for="flexRadioDefault2">Nữ</label>
                        </div>
                    </div>
                    <div class="mb-3">
                        <input type="text" placeholder="Nhập địa chỉ" class="form-control" name="address" />
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="submit"  class="btn btn-danger custom">Đăng ký</button>
                </div>
            </form>
        </div>
    </div>
</div>

<!-- Cart -->
<div class="modal fade" id="cartModal" tabindex="-1" aria-labelledby="exampleModalLabel23" aria-hidden="true">
    <div class="modal-dialog modal-side modal-top-right">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel23">Cart title</h5>
            </div>
            <div class="modal-body">
                <table style="margin: auto;">
                    <tr>
                        <td>Tên sản phẩm</td>
                        <td>Số Lượng</td>
                        <td>Giá sản phẩm</td>
                        <td>Tổng tiền</td>
                        <td></td>
                    </tr>


                    <c:forEach var="p" items="${listCart}">
                        <tr>
                            <input type="hidden" name="productid" value="${p.value.product.id}"/>
                            <input type="hidden" name="id" value="${p.value.food.id}"/>
                            <td>${p.value.product.name}${p.value.food.name}</td>
                            <td><input type="number" name="quantity" value="${p.value.quantity}"/></td>
                            <td>${p.value.product.price}${p.value.food.price}</td>
                            <td>${p.value.total}</td>

                        </tr>
                    </c:forEach>


                </table>

            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
        </div>
    </div>
</div>
<!-- Button trigger modal cart -->
<!-- <button type="button" class="btn btn-primary" data-mdb-toggle="modal" data-mdb-target="#cartModal">
Cart
</button> -->