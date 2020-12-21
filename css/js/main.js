$(function () {
  $("#main_start").on("click", function () {
    $(".web").show();
    $("#top").animate(
      {
        top: "-60vh",
      },
      1000    );

    $("#bottom").animate(
      {
        bottom: "-60vh",
      },
      1000,
      function () {
        $("#main_start").hide(0);
      }
    );
  });

  hello = "Hey ,I am Pazim Goyal";
  hellos = hello.split("");
  hellos.forEach((element) => {
    $(".hello").append("<spam class='word'>" + element + "</spam>");
  });

  $(".contact")
    .mouseenter(function () {
      $("#name").text($(this).data("name")).show(500);
    })
    .mouseleave(function () {
      $("#name").hide(100);
    });

  $("#main").on("click", () => {
    $(".logo_main").hide(200, function () {
      $(".hello").slideUp(200, function () {
        $(".contacts").animate(
          {
            left: "+=1000",
            opacity: "0",
          },
          200,
          function () {
            $("#main_website").slideUp(() => {
              $(".technology").slideDown();
            });
          }
        );
      });
    });
  });

  $("#prev_main").on("click", () => {
    $(".technology").slideUp(() => {
      $("#main_website").slideDown(() => {
        $(".logo_main").show(200, function () {
          $(".hello").slideDown(200, function () {
            $(".contacts").animate(
              {
                left: "-=1000",
                opacity: "1",
              },
              200
            );
          });
        });
      });
    });
  });

  $("#work_exp").on('click',()=>{
    $(".technology").animate({
      opacity:'0'
    },1000,function(){
      $(this).hide();

      $("#workexp").show().animate({
        opacity:'1'
      },1000,function(){
        $(".grid2_item").animate({
          left:"+=100",
        });
      });
    });
  })


});
