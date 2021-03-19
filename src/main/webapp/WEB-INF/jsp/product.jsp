<%@ page pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<!DOCTYPE html>
<html lang="zxx">

<head>

    <jsp:include page="part/head.jsp" />
    <title>${title}</title>

</head>

<body>
<jsp:include page="part/header.jsp" />

    <!-- Breadcrumb Section Begin -->
    <section class="breadcrumb-option" >
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
                        <div class="shop__sidebar__search">
                            <form action="#">
                                <input type="text" placeholder="Search...">
                                <button type="submit"><span class="icon_search"></span></button>
                            </form>
                        </div>
                        <div class="shop__sidebar__accordion">
                            <div class="accordion" id="accordionExample">
                                <div class="card">
                                    <div class="card-heading">
                                        <a data-toggle="collapse" data-target="#collapseSix">Tags</a>
                                    </div>
                                    <div id="collapseSix" class="collapse show" data-parent="#accordionExample">
                                        <div class="card-body">
                                            <div class="shop__sidebar__tags">
                                                <a href="#">Chó</a>
                                                <a href="#">Mèo</a>
                                                <a href="#">Hamster</a>
                                                <a href="#">Thỏ</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-9">
                    <div class="shop__product__option">
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="shop__product__option__left">
                                    <p>Showing ${productPerPage} of ${numberProduct} results</p>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="shop__product__option__right">
                                    <p>Sort by Price:</p>
                                    <select>
                                        <option value="">Tăng dần</option>
                                        <option value="">Giảm dần</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <c:forEach var="p" items="${listProduct}">
                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="product__item">
                                    <div class="product__item__pic set-bg" data-setbg="/img/product/${p.pic}">
                                        <ul class="product__hover">
                                            <li><a href="#"><img src="/img/icon/heart.png" alt=""></a></li>
                                            <li><a href="javascript:void(0)"><img src="/img/icon/search.png" alt="" data-toggle="modal" data-target="#cartModal${p.id}"></a></li>
                                        </ul>
                                    </div>
                                    <div class="product__item__text">
                                        <h6>${p.name}</h6>
                                        <a href="/shop/addtocart/${category}/${p.code}" class="add-cart">+ Add To Cart</a>
                                        <h5>${p.price}VNĐ</h5>
                                    </div>
                                    <div class="modallll">
                                        <div class="modal fade right" id="cartModal${p.id}" tabindex="-1" aria-labelledby="exampleModalLabel${p.id}" aria-hidden="true">
                                            <div class="modal-dialog modal-side modal-top-right">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h5 class="modal-title" id="exampleModalLabel${p.id}">Modal title</h5>
                                                    </div>
                                                    <div class="modal-body">
                                                        <input type="text" value="${p.name}"/>
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-primary">Save changes</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </c:forEach>
                    </div>
                <div class="row">
                        <div class="col-lg-12">
                              <div class="product__pagination">
                              <c:forEach var ="state" items="${pageSize}">
                                  <c:choose >
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
    <jsp:include page="part/footer.jsp" />
    <jsp:include page="part/modal.jsp" />
    <jsp:include page="part/script.jsp" />
</body>

</html>