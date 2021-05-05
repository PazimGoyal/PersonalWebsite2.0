var work_info = {
  GE: {
    name: "General Electric Renewable Energy",
    position: "<b>Position : </b>Stagiaire HV3D / Python Developer",
    location: "<b>Location : </b>Brossard, Quebec, Canada",
    refrence: {
      type: "<b>Refrences : </b>",
      name: "Antoine Gardeux",
      position: "Analytics Software Engineer [GE Renewable, Belfort, France]",
      contact: "antoine.gardeux@ge.com",
    },
    start: "<b>Start Date: </b>01-June-2020 - <b>End Date</b> Current",
    technology:
      "<b>Technologies : </b>Python , Django , Celery , Javascript , MongoDB, Channels, Docker",
    description: `<b>Description : </b>
    <ul><li>
    Worked on Python Django app to schedule jobs to import data
    at scheduled intervals asynchronously using Celery, Celery
    beat, Redis. Worked on websockets to load page in parts to
    reduce client size load time.
    </li><li>
    Developed tools to be used by Clients and internal customers.
    </li>
    Worked on many parts of project working using python for
    backend and TypeScript, Jquery, for frontend.</li></ul>`,
  },
  CDI: {
    name: "CDI College",
    location: "<b>Location: </b>Montreal, Quebec, Canada",
    refrence: {
      type: "<b>Refrences: </b>",
      name: "Jean-Guy Turgeon",
      position: "Enseignant en Design Graphique",
      contact: "jean-guy.turgeon@collegecdi.ca",
    },
    start: "<b>Start Date: </b>11-May-2019 - <b>End Date</b> Current",
    technology:
      "<b>Technologies : </b>HTML, CSS, Adobe Illustrator, Photoshop, Javascript etc",
    position: "<b>Position : </b>Web Design Instructor",
    description: `<b>Description : </b>    <ul><li>
    Delivered theoretical and practical lectures on Web
    technologies such as HTML, CSS, JavaScript, Database,
    PHP and Adobe Software’s such as Adobe (Photoshop,
    Adobe Illustrator and many more.</li><li>
    Invigilating and Conducting exams.</li></ul>`,
  },
  TM: {
    name: "Tech Mahindra",
    position: "<b>Position: </b>Android Developer intern",
    location: "<b>Location: </b>Chandigarh, India",
    refrence: {
      type: "<b>Refrences: </b>",
      name: "Er. Rizma Aggarwal",
      position: "(now) Manager Backend Developer at Morgan Stanley",
      contact: "karisagoyal@gamil.com / rizma.aggarwal@morganstanley.com",
    },
    start: "2015",
    technology:
      "<b>Technologies : </b>Java, XML, Android App Development, Android Studio",
    description: `<b>Description : </b>    <ul><li>
      Android 5.0 development Training.
    </li><li>Developed android app and learned about core android
    concepts</li></ul>`,
  },
  CUj: {
    name: "Concordia University (Teaching Assistent)",
    position: "<b>Position: </b>Teaching Assistent",
    location: "<b>location: </b>Montreal, Quebec, Canada",
    refrence: {
      type: "<b>Refrences: </b>",
      name: "Dr. Aiman Hanna",
      position: "Senior Lecturer, Computer Science and Software Engineering",
      contact: "Aiman.hanna@concordia.ca",
    },
    start: "<b>Year: </b>2019",
    technology:
      "<b>Technologies : </b>Python , Java, Websockets, Curl, Datastructures",
    description: `<b>Description : </b>    <ul>
    <li>
      Teaching Assistent for Computer Networks Graduate Class
      <ul>
      <li>Responsibilities : </li>
      <li>Practical Laboratory</li>
      <li>Project Demo</li>
      <li>Exam marking</li>
      </ul>
    </li>
    <li>
      Teaching Assistent for Data Structures Under-Graduate Class
      <ul>
      <li>Responsibilities : </li>
      <li>Project Demo</li>
      <li>Exam marking</li>
      </ul>
    </li>
    </ul>
      `,
  },
  CUs: {
    name: "Concordia Universitiy (Studies)",
    position: "Masters of Applied Computer Science",
    location: "Montreal, Quebec, Canada",
    refrence: {
      name: "-",
      position: "-",
      contact: "-",
    },
    start: "<b>Start Date: </b>01-January-2018 - <b>End Date</b> 31-December-2019",
    technology:
      "<b>Main Subjects: </b>Algorithm Design",
    description: "-",
  },
  DAV: {
    name: "DAV University",
    position: "",
    location: "Brossard, Quebec, Canada",
    refrence: {
      name: "Antoine Gardeux",
      position: " Analytics Software Engineer GE Renewable, Belfort, France",
      contact: " Email: antoine.gardeux@ge.com",
    },
    start: "01-June-2020",
    end: "Present",
    technology:
      "<b>Main Subjects: </b>Python , Django , Celery , Javascript , MongoDB, Channels, Docker",
    description: "...... ..e.3e 3ry43ruy4br ",
  },
};

function main_page(current_class) {
  $(current_class).slideUp(() => {
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
}
function reset_technologies() {
  $(".grid_item").css("opacity", 1);
  $(".technology").css("opacity", 1);
}

$(function () {
  //First Page MAin Button
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
    main_page(".technology");
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
      $(".description .dd1").html("<b>" + text_exp + "</b>");
      $(".description .dd2").html(comp["position"]);
      $(".description .dd4").html(comp["start"]);
      $(".description .dd3").html(comp["location"]);
      $(".description .dd5").html(comp["technology"]);

      $(".description .dd6").html(
        comp["refrence"]["type"] +
          `<ul>
        <li> ${comp["refrence"]["name"]}</li>
        <li> ${comp["refrence"]["position"]}</li>
        <li> ${comp["refrence"]["contact"]}</li>
        </ul>`
      );
      $(".description .dd7").html(comp["description"]);

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
      for (let i = 0; i < 5000; i++) {
        new_text += text_exp;
      }

      $(".work_info").text(new_text);
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

  /*-----------Buttons--------------------*/

  $("#projects_btn").on("click", function () {
    $("#workexp").hide(1000, function () {
      $("#contact_us").show(1000);
    });
  });
});

$("#work_exp_prev_main").on("click", function () {
  main_page("#workexp");
  reset_technologies();
});

$("#work_exp_prev").on("click", () => {
  $("#workexp").animate(
    {
      opacity: "0",
    },
    400,
    function () {
      $(this).hide();
      $(".technology")
        .show()
        .animate(
          {
            opacity: "1",
          },
          300,
          function () {
            $(".grid_item.g5").animate(
              {
                opacity: "1",
              },
              100,
              function () {
                $(".grid_item.g4").animate(
                  {
                    opacity: "1",
                  },
                  100,
                  function () {
                    $(".grid_item.g3").animate(
                      {
                        opacity: "1",
                      },
                      100,
                      function () {
                        $(".grid_item.g2").animate(
                          {
                            opacity: "1",
                          },
                          100,
                          function () {
                            $(".grid_item.g1").animate(
                              {
                                opacity: "1",
                              },
                              100
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
