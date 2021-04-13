<%@ taglib prefix="fmt" uri="http://java.sun.com/jstl/fmt" %>
<%@ page pageEncoding="UTF-8" %>

<!-- Js Plugins -->

<script src="/js/jquery-3.3.1.min.js"></script>
<script src="/js/bootstrap.min.js"></script>
<script src="/js/jquery.nice-select.min.js"></script>
<script src="/js/jquery.nicescroll.min.js"></script>
<script src="/js/jquery.magnific-popup.min.js"></script>
<script src="/js/jquery.countdown.min.js"></script>
<script src="/js/jquery.slicknav.js"></script>
<script src="/js/mixitup.min.js"></script>
<script src="/js/owl.carousel.min.js"></script>
<script src="/js/main.js"></script>
<script src="/js/notifications.js"></script>
<script src="/js/messageNotification.js"></script>
<script src="/js/500er.js" type="text/javascript"></script>
<script src="/js/sort.js" type="text/javascript"></script>
<script>
    $(document).ready(function () {
        let productPerPage = "${numberProduct}";
        let themeNotif = "${themeNotification}";
        let callModal = "${callModal}";
        let callModalRegister = "${callModalRegister}";
        if (callModal === "callModal") {
            setTimeout(function () {
                //your code to be executed after 1 second
                $('#loginModal').modal('show');
            }, 1000);
        }
        if (callModalRegister === "callModalRegister") {
            setTimeout(function () {
                //your code to be executed after 1 second
                $('#registerModal').modal('show');
            }, 1000);
        }
        if ("${messageNotification}" !== "" || "${messageNotification}" !== null) {
            clickMessage("${messageNotification}", "${themeNotification}", "${titleNotification}");
        }
        if (themeNotif === "warning") {
            setTimeout(function () {
                //your code to be executed after 1 second
                $('#loginModal').modal('show');
            }, 1000);
        }


        // convert URL parameters to a JavaScript object
        //https://stackoverflow.com/questions/8648892/how-to-convert-url-parameters-to-a-javascript-object
        function convertURLParamToObject(urlParam) {
            return JSON.parse('{"' + decodeURI(urlParam.replace(/&/g, "\",\"").replace(/=/g, "\":\"")) + '"}')
        }

        $("#submit1").click(function (event) {
            event.preventDefault();
            let listProduct = $("#listProduct");
            let page = $("#page");
            //Serialize form data to JSON
            //https://stackoverflow.com/questions/11338774/serialize-form-data-to-json
            let formData = convertURLParamToObject($("#formSearch1").serialize());
            $.post('/shop/searchProduct', formData, function (response, status, xhr) {
                if (status === "success") {
                    listProduct.empty();
                    page.empty();
                    console.log(response);
                    for (let i = 0; i < response.length; i++) {
                        let id = response[i].id;
                        console.log(response[i].pic);
                        let name = response[i].name;
                        let price = response[i].price;
                        let description = response[i].description;
                        let formatPrice = price.toLocaleString('it-IT', {style: 'currency', currency: 'VND'});
                        let pic = response[i].pic;
                        let sortName = response[i].sortName;
                        $("#listProduct").append("<div class='col-lg-4 col-md-6 col-sm-6' id='productItem" + id + "' ></div>");
                        $("#productItem" + id).append("<div class='product__item' id='product__item" + id + "'></div>");
                        $("#product__item" + id).append("<div id='product__item__pic" + id + "' class='product__item__pic set-bg'></div>");
                        $("#product__item__pic" + id).css("background-image", 'url(' + "/img/product/" + pic + ')');
                        $("#product__item__pic" + id).append("<ul class='product__hover' id='product__hover" + id + "'></ul>");
                        $("#product__hover" + id).append("<li><a href='#'><img src='/img/icon/heart.png' alt=''></a></li>");
                        $("#product__hover" + id).append("<li><a href='javascript:void(0)' > <img src='/img/icon/search.png' alt='' data-toggle='modal' data-target='#cartModal" + id + "'></a></li>");
                        $("#product__item" + id).append("<div class='product__item__text' id='product__item__text" + id + "'></div>");
                        $("#product__item__text" + id).append(`<h6>` + name + `</h6>`);
                        $("#product__item__text" + id).append(`<a href='/shop/addtocart/${category}/` + sortName + `' class='add-cart'>+ Add To Cart</a>`);
                        $("#product__item__text" + id).append(`<h5>` + formatPrice + `</h5>`);
                        $("#product__item__text" + id).append(`<input class='productPrice' type='hidden' value='` + price + `' />`);
                        $("#productSize").text("Showing " + response.length + " of " + productPerPage + " results");
                        $("#product__item" + id).append("<div class='modallll' id='modall" + id + "'></div>");
                        $("#modall" + id).append("<div class='modal fade right' id='cartModal" + id + "' tabindex='-1' aria-labelledby='exampleModalLabel" + id + "' aria-hidden='true'></div>");
                        $("#cartModal" + id).append("<div class='modal-dialog modal-side modal-top-right' id='modal-dialog" + id + "'>");
                        $("#modal-dialog" + id).append("<div class='modal-content' id='modal-content" + id + "'></div>");
                        $("#modal-content" + id).append("<div class='modal-header' id='modal-header" + id + "'></div>");
                        $("#modal-header" + id).append("  <h5 class='modal-title text-center' id='exampleModalLabel" + id + "'>Chi tiết sản phẩm </h5>");
                        $("#modal-content" + id).append("<div class='modal-body' id='modal-body" + id + "'></div>");
                        $("#modal-body" + id).append("<div class='row' id='row" + id + "'></div>");
                        $("#row" + id).append("  <div class='col-lg-3 col-md-3'></div>");
                        $("#row" + id).append("<div class='col-lg-6 col-md-9' id='row-content" + id + "'></div>");
                        $("#row-content" + id).append(" <div class='tab-content' id='tab-content" + id + "'></div>");
                        $("#tab-content" + id).append("<div class='tab-pane active' id='tabs-" + id + "' role='tabpanel'></div>");
                        $("#tabs-" + id).append("<div class='product__details__pic__item' id='product__details__pic__item" + id + "'>");
                        $("#product__details__pic__item" + id).append(" <img src='/img/product/" + pic + "' alt=''/>");
                        $("#row" + id).append("<div class='product__details__content' id='product__details__content" + id + "'></div>");
                        $("#product__details__content"+id).append("<div class='container' id='container"+id+"'></div>");
                        $("#container"+id).append("<div class='row d-flex justify-content-center' id='rowContainer"+id+"'></div>");
                        $("#rowContainer"+id).append(" <div class='col-lg-8' id='colRowContainer"+id+"'></div>");
                        $("#colRowContainer"+id).append("<div class='product__details__text' id='product__details__text"+id+"'></div>");
                        $("#product__details__text"+id).append(" <h4>"+name+"</h4>");
                        $("#product__details__text"+id).append("<div class='rating' id='rating"+id+"'></div>");
                        $("#rating"+id).append("  <i class='fa fa-star'></i> <i class='fa fa-star'></i> <i class='fa fa-star'></i> <iclass='fa fa-star'></i> <i class='fa fa-star-o'></i>");
                        $("#product__details__text"+id).append("<h3>"+formatPrice+"</h3>");
                        $("#product__details__text"+id).append("<p>"+description+"</p>");
                        $("#product__details__text"+id).append("<a href='/shop/addtocart/${category}/" + sortName + "'class='primary-btn'> Add To Cart</a> <br/><br/><br/><br/><br/>");


                    }
                    if(response && !response.length){
                        $("#listProduct").append("<h4>Không có sản phẩm nào tương thích</h4> ");
                        $("#productSize").text("Showing 0 of " + productPerPage + " results");
                    }


                }
            });
        });

                /*$.ajax({
                 type: 'POST',
                 url: '/shop/searchProduct',
                 data: JSON.stringify(formData), // or JSON.stringify ({name: 'jonas'}),
                 success: function(response) {
                 listProduct.empty();
                 page.empty();
                 console.log(response);
                 for (let i = 0; i < response.length; i++) {
                 let id = response[i].id;
                 console.log(response[i].pic);
                 let name = response[i].name;
                 let price = response[i].price;
                 let formatPrice = price.toLocaleString('it-IT', {style: 'currency', currency: 'VND'});
                 let pic = response[i].pic;
                 let sortName = response[i].sortName;
                 $("#listProduct").append(` <div class='col-lg-4 col-md-6 col-sm-6'  id='mainProduct'></div>`);
                 $("#mainProduct").append(`<div class='product__item'></div>`);
                 $(".product__item").append(`<div  class='product__item__pic set-bg' data-setbg='/img/product/` + pic + `'></div>`);
                 $('.set-bg').each(function () {
                 let bg = $(this).data('setbg');
                 $(this).css('background-image', 'url(' + bg + ')');
                 });
                 $(".product__item__pic ").append(` <ul class='product__hover'></ul>`);
                 $(".product__hover").append(`<li><a href='#'><img src='/img/icon/heart.png' alt=''></a></li>`);
                 $(".product__hover").append(`<li><a href='javascript:void(0)' > <img src='/img/icon/search.png' alt='' data-toggle='modal' data-target='#cartModal` + id + `'></a></li>`);
                 $(".product__item").append(`<div class='product__item__text'></div>`);
                 $(".product__item__text").append(`<h6>` + name + `</h6>`);
                 $(".product__item__text").append(`<a href='/shop/addtocart/
${category}/` + sortName + `' class='add-cart'>+ Add To Cart</a>`);
             $(".product__item__text").append(`<h5>` + formatPrice + `</h5>`);
             $(".product__item__text").append(`<input class='productPrice' type='hidden' value='` + price + `' />`);
             }
             },
             contentType: "application/json"
             });*/

        $("#submit2").click(function (event) {
            event.preventDefault();
            let listProduct = $("#listProduct");
            let page = $("#page");
            //Serialize form data to JSON
            //https://stackoverflow.com/questions/11338774/serialize-form-data-to-json
            let formData = convertURLParamToObject($("#formSearch2").serialize());
            $.post('/shop/searchFood', formData, function (response, status, xhr) {
                if (status === "success") {
                    listProduct.empty();
                    page.empty();
                    console.log(response);
                    for (let i = 0; i < response.length; i++) {
                        let id = response[i].id;
                        console.log(response[i].pic);
                        let name = response[i].name;
                        let price = response[i].price;
                        let description = response[i].description;
                        let formatPrice = price.toLocaleString('it-IT', {style: 'currency', currency: 'VND'});
                        let pic = response[i].pic;
                        let sortName = response[i].sortName;
                        $("#listProduct").append("<div class='col-lg-4 col-md-6 col-sm-6' id='productItem" + id + "' ></div>");
                        $("#productItem" + id).append("<div class='product__item' id='product__item" + id + "'></div>");
                        $("#product__item" + id).append("<div id='product__item__pic" + id + "' class='product__item__pic set-bg'></div>");
                        $("#product__item__pic" + id).css("background-image", 'url(' + "/img/product/" + pic + ')');
                        $("#product__item__pic" + id).append("<ul class='product__hover' id='product__hover" + id + "'></ul>");
                        $("#product__hover" + id).append("<li><a href='#'><img src='/img/icon/heart.png' alt=''></a></li>");
                        $("#product__hover" + id).append("<li><a href='javascript:void(0)' > <img src='/img/icon/search.png' alt='' data-toggle='modal' data-target='#cartModal" + id + "'></a></li>");
                        $("#product__item" + id).append("<div class='product__item__text' id='product__item__text" + id + "'></div>");
                        $("#product__item__text" + id).append(`<h6>` + name + `</h6>`);
                        $("#product__item__text" + id).append(`<a href='/shop/addtocart/${category}/` + sortName + `' class='add-cart'>+ Add To Cart</a>`);
                        $("#product__item__text" + id).append(`<h5>` + formatPrice + `</h5>`);
                        $("#product__item__text" + id).append(`<input class='productPrice' type='hidden' value='` + price + `' />`);
                        $("#productSize").text("Showing " + response.length + " of " + productPerPage + " results");
                        $("#product__item" + id).append("<div class='modallll' id='modall" + id + "'></div>");
                        $("#modall" + id).append("<div class='modal fade right' id='cartModal" + id + "' tabindex='-1' aria-labelledby='exampleModalLabel" + id + "' aria-hidden='true'></div>");
                        $("#cartModal" + id).append("<div class='modal-dialog modal-side modal-top-right' id='modal-dialog" + id + "'>");
                        $("#modal-dialog" + id).append("<div class='modal-content' id='modal-content" + id + "'></div>");
                        $("#modal-content" + id).append("<div class='modal-header' id='modal-header" + id + "'></div>");
                        $("#modal-header" + id).append("  <h5 class='modal-title text-center' id='exampleModalLabel" + id + "'>Chi tiết sản phẩm </h5>");
                        $("#modal-content" + id).append("<div class='modal-body' id='modal-body" + id + "'></div>");
                        $("#modal-body" + id).append("<div class='row' id='row" + id + "'></div>");
                        $("#row" + id).append("  <div class='col-lg-3 col-md-3'></div>");
                        $("#row" + id).append("<div class='col-lg-6 col-md-9' id='row-content" + id + "'></div>");
                        $("#row-content" + id).append(" <div class='tab-content' id='tab-content" + id + "'></div>");
                        $("#tab-content" + id).append("<div class='tab-pane active' id='tabs-" + id + "' role='tabpanel'></div>");
                        $("#tabs-" + id).append("<div class='product__details__pic__item' id='product__details__pic__item" + id + "'>");
                        $("#product__details__pic__item" + id).append(" <img src='/img/product/" + pic + "' alt=''/>");
                        $("#row" + id).append("<div class='product__details__content' id='product__details__content" + id + "'></div>");
                        $("#product__details__content"+id).append("<div class='container' id='container"+id+"'></div>");
                        $("#container"+id).append("<div class='row d-flex justify-content-center' id='rowContainer"+id+"'></div>");
                        $("#rowContainer"+id).append(" <div class='col-lg-8' id='colRowContainer"+id+"'></div>");
                        $("#colRowContainer"+id).append("<div class='product__details__text' id='product__details__text"+id+"'></div>");
                        $("#product__details__text"+id).append(" <h4>"+name+"</h4>");
                        $("#product__details__text"+id).append("<div class='rating' id='rating"+id+"'></div>");
                        $("#rating"+id).append("  <i class='fa fa-star'></i> <i class='fa fa-star'></i> <i class='fa fa-star'></i> <iclass='fa fa-star'></i> <i class='fa fa-star-o'></i>");
                        $("#product__details__text"+id).append("<h3>"+formatPrice+"</h3>");
                        $("#product__details__text"+id).append("<p>"+description+"</p>");
                        $("#product__details__text"+id).append("<a href='/shop/addtocart/${category}/" + sortName + "'class='primary-btn'> Add To Cart</a> <br/><br/><br/><br/><br/>");

                    }
                    if(response && !response.length){
                        $("#listProduct").append("<h4>Không có sản phẩm nào tương thích</h4> ");
                        $("#productSize").text("Showing 0 of " + productPerPage + " results");
                    }
                }
            });
        });
    });
</script>