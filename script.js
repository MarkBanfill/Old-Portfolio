$(document).ready(function() {
  $(".scroll").click(function(event) {
    event.preventDefault();
    $("html,body").animate({ scrollTop: $(this.hash).offset().top }, 1000);
    $(".navbar-default a").removeClass("selected");
    $(this).addClass("selected");
    $(".navbar-toggle").click();
  });

  $(".waypoint").each(function(index) {
    $(this).waypoint(
      function(direction) {
        if (direction === "down") {
          $(this).fadeTo(1000, 1);
          $("div.col-sm-8", this).removeClass("fadeOutLeft");
          $("img", this).removeClass("fadeOutRight");
          $("div.col-sm-8", this).addClass("fadeInLeft");
          $("img", this).addClass("fadeInRight");
        }
      },
      {
        offset: "80%"
      }
    );
  });
});
