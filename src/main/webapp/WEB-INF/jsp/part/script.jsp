
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
<script src="/js/search.js" type="text/javascript"></script>
<script src="/js/sort.js" type="text/javascript"></script>
<script>
    $(document).ready(function() {
        var themeNotif = "${themeNotification}";
        if ("${messageNotification}" !== "" || "${messageNotification}" !== null) {
            clickMessage("${messageNotification}","${themeNotification}","${titleNotification}");
        }
        if(themeNotif === "warning"){
            setTimeout(function() {
                //your code to be executed after 1 second
                $('#loginModal').modal('show');
            }, 1000);
        }


    });
</script>