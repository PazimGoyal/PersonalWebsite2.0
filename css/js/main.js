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


  $(".grid2 .img").mouseenter(function () {
      // $("#name").text($(this).data("name")).show(500);
      // $(".flex-center2").css("justify-content","start");
      let text_exp=" "+$(this).data('info');
      let new_text='';
      $('.work_info').html(text_exp).css('opacity',0.1);      
      for(let i=0;i<5000;i++){
        new_text += text_exp;
      }
      $('.grid2_item.e1').html('Starting Date :<br>'+$(this).data('dates_start'));
      $('.grid2_item.e2').html('Ending Date :<br>'+$(this).data('dates_end'));
      $('.grid2_item.e5').html('Jobs Position :<br>' + $(this).data('position'));
      $('.grid2_item.e6').html('Location :<br>' + $(this).data('location'));
      $('.grid2_item.e7').html('References: <br>'+$(this).data('refrence'));

      $('.work_info').append(new_text);
      $(".hide").css('opacity',0);
      $('.grid2_item.extra').css('opacity',1);
     $(this).css('opacity',1);
    })    .mouseleave(function () {
     $(".work_info").css('opacity',0);      
     $(".hide").css('opacity',1);
     $('.grid2_item.extra').css('opacity',0);

    });


});
