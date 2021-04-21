<%@ page pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="zxx">

<head>
    <jsp:include page="part/head.jsp" />
    <title>Liên hệ</title>

</head>

<body>
<jsp:include page="part/header.jsp" />

    <!-- Map Begin -->
    <div class="map">
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62710.759007393746!2d106.6618194171175!3d10.778921960908619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529a18fa325fd%3A0x25f815f86c6d39c1!2sVincom%20Center%20Landmark%2081!5e0!3m2!1svi!2s!4v1612553207440!5m2!1svi!2s" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
       </div>
    <!-- Map End -->

    <!-- Contact Section Begin -->
    <section class="contact spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-6">
                    <div class="contact__text">
                        <div class="section-title">
                            <span>Thông Tin</span>
                            <h2 class="text-left">Liên Hệ</h2>
                            <p>Mọi thắc mắc vui lòng liên hệ với chúng tôi.</p>
                        </div>
                        <ul>
                            <li>
                                <h4>Chi Nhánh 1</h4>
                                <p>Tòa Nhà Landmark 81 <br />Hotline: +84 928 494 156</p>
                            </li>
                            
                        </ul>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6">
                    <div class="contact__form">
                        <form action="/contact" method="post">
                            <div class="row">
                                <div class="col-lg-6">
                                    <input type="text" name="name" required placeholder="Tên">
                                </div>
                                <div class="col-lg-6">
                                    <input type="email" name="email" required placeholder="Email">
                                </div>
                                <div class="col-lg-12">
                                    <textarea name="message" placeholder="Tin Nhắn"></textarea>
                                    <button type="submit" class="site-btn">Gửi Tin Nhắn</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Contact Section End -->

<jsp:include page="part/footer.jsp" />
<jsp:include page="part/modal.jsp" />
<jsp:include page="part/script.jsp" />
</body>

</html>