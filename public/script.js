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
});
