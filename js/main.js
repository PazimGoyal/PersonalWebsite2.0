var work_info = {
  GE: {
    name: "General Electric Renewable Energy",
    position: "Stagiaire HV3D / Python Developer",
    location: "Brossard, Quebec, Canada",
    refrence: {
      name: "Antoine Gardeux",
      position: " Analytics Software Engineer [GE Renewable, Belfort, France]",
      contact: "antoine.gardeux@ge.com",
    },
    start: "01-June-2020",
    end: "Present",
    technology:
      "Python , Django , Celery , Javascript , MongoDB, Channels, Docker",
    description: "Full Stack Web Developer",
  },
  CDI: {
    name: "CDI College",
    location: "Montreal, Quebec, Canada",
    refrence:{'name':'Jean Guy',
    position: "Co-ordinator",
    contact: "antoine.gardeux@ge.com",
},
    start: "11-May-2019",
    end: "Present",
    technology:
      " HTML, CSS, Adobe Illustrator, Photoshop, Javascript etc",
    position: "Web Design Instructor",
    description:"Teach Students basic web Desihning like"
  },
  TM: {
    name: "Tech Mahindra",
    position: "Android Developer intern",
    location: "Chandigarh, India",
    refrence: {
      name: "Rizma Aggarwal",
      position: " Analytics Software Engineer GE Renewable, Belfort, France",
      location: " Email: antoine.gardeux@ge.com",
    },
    start: "01-June-2020",
    end: "Present",
    technology:
      "Java, XML, Android App Development, Android Studio",
    description: "...... ..e.3e 3ry43ruy4br ",
  },
  CUj: {
    name: "Concordia University (Teaching Assistent)",
    position: "Teaching Assistent",
    location: "Montreal, Quebec, Canada",
    refrence: {
      name: "Antoine Gakrdeux",
      position: " Analytics Software Engineer GE Renewable, Belfort, France",
      location: " Email: antoine.gardeux@ge.com",
    },
    start: "01-June-2020",
    end: "Present",
    technology:
      "Python , Django , Celery , Javascript , MongoDB, Channels, Docker",
    description: "...... ..e.3e 3ry43ruy4br ",
  },
  CUs: {
    name: "Concordia Universitiy (Studies)",
    position: "Stagiaire HV3D / Python Developer",
    location: "Brossard, Quebec, Canada",
    refrence: {
      name: "Antoine Gardeux",
      position: " Analytics Software Engineer GE Renewable, Belfort, France",
      location: " Email: antoine.gardeux@ge.com",
    },
    start: "01-June-2020",
    end: "Present",
    technology:
      "Python , Django , Celery , Javascript , MongoDB, Channels, Docker",
    description: "...... ..e.3e 3ry43ruy4br ",
  },
  DAV: {
    name: "DAVr University",
    position: "Stagiaire HV3D / Python Developer",
    location: "Brossard, Quebec, Canada",
    refrence: {
      name: "Antoine Gardeux",
      position: " Analytics Software Engineer GE Renewable, Belfort, France",
      location: " Email: antoine.gardeux@ge.com",
    },
    start: "01-June-2020",
    end: "Present",
    technology:
      "Python , Django , Celery , Javascript , MongoDB, Channels, Docker",
    description: "...... ..e.3e 3ry43ruy4br ",
  },
};

$(function () {
  $("#main_start").on("click", function () {
    $(".web").show();
    $("#top").animate(
      {
        top: "-60vh",
      },
      1000
    );

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
          500,
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

  $("#work_exp").on("click", () => {
    $(".grid_item.g1").animate(
      {
        opacity: "0",
      },
      200,
      function () {
        $(".grid_item.g2").animate(
          {
            opacity: "0",
          },
          200,
          function () {
            $(".grid_item.g3").animate(
              {
                opacity: "0",
              },
              200,
              function () {
                $(".grid_item.g4").animate(
                  {
                    opacity: "0",
                  },
                  200,
                  function () {
                    $(".grid_item.g5").animate(
                      {
                        opacity: "0",
                      },
                      200,
                      function () {
                        $(".technology").animate(
                          {
                            opacity: "0",
                          },
                          500,
                          function () {
                            $(this).hide();
                            $("#workexp").show().animate(
                              {
                                opacity: "1",
                              },
                              1000
                            );
                          }
                        );
                      }
                    );
                  }
                );
              }
            );
          }
        );
      }
    );
  });

  $(".grid2 .img")
    .mouseenter(function () {
      let comp = work_info[$(this).data("comp")];
      let text_exp = " " + comp["name"];
      let new_text = "";
      $(".work_info").html(text_exp).css("opacity", 0.24);
      for (let i = 0; i < 5000; i++) {
        new_text += text_exp;
      }
      $(".description .dd1").html("<b>" + text_exp + "</b>");
      $(".description .dd2").html("<b></b>Position : </b>" + comp["position"]);
      $(".description .dd3").html(
        "<b>Start Date : </b>" +
          comp["start"] +
          " - <b>End Date : </b>" +
          comp["end"]
      );
      $(".description .dd4").html(
        "<b>Refrences : </b>" + comp["refrence"]["name"]
      );
      $(".description .dd5").html("<b>Location : </b>" + comp["location"]);
      $(".description .dd6").html("<b>Technology : </b>" + comp["technology"]);
      if ($(this).data("side") == "left") {
        console.log("YES");
        $(".description")
          .css("left", "100vw")
          .show(0)
          .animate({ left: "60vw" });
      } else {
        console.log("No");
        $(".description").css("left", "-45vw").show(0).animate({ left: "0px" });
      }
      $(".work_info").append(new_text);
      $(".hide").css("opacity", 0);
      $(".grid2_item.extra").css("opacity", 1);
      // $(".heading").text(text_exp);
      $(this).css("opacity", 0.7);
    })
    .mouseleave(function () {
      $(".work_info").css("opacity", 0);
      $(".hide").css("opacity", 1);
      $(".heading").text("Work Experience & Education");
      $(".grid2_item.extra").css("opacity", 0);
      $(".description").hide();
    });

  /*-------*/

  $("#torch_effect").mousemove(function (e) {
    $(".torch")
      .css("top", e.clientY - 250)
      .css("left", e.clientX - 250);
  });

  $("#switch").click(function () {
    $(".background").toggleClass("torch_off");
    $(".background").toggleClass("torch_on");
    $(".torch_main").toggleClass("torch");
  });

  $("#projects_btn").on("click", function () {
    $("#workexp").hide(1000, function () {
      $("#torch_effect").show(1000);
    });
  });
});
