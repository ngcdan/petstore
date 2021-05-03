<%@ page pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="zxx">

<head>
    <jsp:include page="part/head.jsp" />
    <title>Blog</title>

</head>

<body>
<jsp:include page="part/header.jsp" />
    <!-- Breadcrumb Section Begin -->
    <section class="breadcrumb-blog set-bg" data-setbg="img/breadcrumb-bg1.jpg">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h2>Blog của chúng tôi</h2>
                </div>
            </div>
        </div>
    </section>
    <!-- Breadcrumb Section End -->

    <!-- Blog Section Begin -->
    <section class="blog spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="blog__item">
                        <div class="blog__item__pic set-bg" data-setbg="img/blog/blog-1.jpg"></div>
                        <div class="blog__item__text">
                            <span><img src="img/icon/calendar.png" alt=""> Ngày 16 tháng 2 năm 2021</span>
                            <h5>Kush</h5>
                            <a href="/chi-tiet-blog">Đọc Thêm</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="blog__item">
                        <div class="blog__item__pic set-bg" data-setbg="img/blog/blog-2.jpg"></div>
                        <div class="blog__item__text">
                            <span><img src="img/icon/calendar.png" alt=""> Ngày 14 tháng 2 năm 2021</span>
                            <h5>Mango</h5>
                            <a href="/chi-tiet-blog">Đọc Thêm</a>
                        </div>
                    </div>
                </div>
				<div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="blog__item">
                        <div class="blog__item__pic set-bg" data-setbg="img/blog/blog-3.jpg"></div>
                        <div class="blog__item__text">
                            <span><img src="img/icon/calendar.png" alt=""> Ngày 15 tháng 2 năm 2021</span>
                            <h5>Orange</h5>
                            <a href="/chi-tiet-blog">Đọc Thêm</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Blog Section End -->

<jsp:include page="part/footer.jsp" />
<jsp:include page="part/modal.jsp" />
<jsp:include page="part/script.jsp" />
</body>

</html>