(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-44699912-29', 'auto');
ga('require', 'displayfeatures');
ga('send', 'pageview');

$(document).ready(function() {
  $(".slide-select>div").click(function() {
    var bgim = $(this).css("background-image");
    $(this).closest(".slide").find(".preview").css("background-image", bgim);
    $(this).closest(".slide-select").find("div").removeClass("active");
    $(this).addClass("active");
  });

  $(".watch-video").click(function() {
    $(".video").css("display", "block");
    $(".video").animate({opacity: 1}, 200);
  });

  $(".video .close").click(function() {
    $(".video").animate({opacity: 0}, 200, function() {
      $(".video").css("display", "none");
    });
  });

  $(".buy-now").click(function() {
    $('html, body').animate({
      scrollTop: $(".pack-1").offset().top - 150
    }, 500);
  });
});
