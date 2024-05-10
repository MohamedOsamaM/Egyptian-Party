"use strict";
$(function () {
  let w = $("#sidebar").innerWidth();
  $("#sidebar").css("left", -w);
  $("#sideBtn").click(function () {
    if ($("#sidebar").css("left") == "0px") {
      $("#sidebar").animate({ left: -w }, 1000);
      $("header h1,header p").animate({ "padding-left": "0px" }, 1000);
    } else {
      $("#sidebar").animate({ left: 0 }, 1000);
      $("header h1,header p").animate({ "padding-left": "200px" }, 1000);
    }
  });
  $("#closeBtn").click(function () {
    $("#sidebar").animate({ left: -w }, 1000);
    $("header h1,header p").animate({ "padding-left": "0px" }, 1000);
  });
  $(window).scroll(function () {
    let windowscroll = $(window).scrollTop();
    let sectionOffset = $("#duration").offset().top;
    if (windowscroll > sectionOffset - 400) {
      $("#sideBtn i,#sideBtn span").css({ color: "#153448" });
    } else {
      $("#sideBtn i,#sideBtn span").css({ color: "rgb(255,255,255)" });
    }
  });
  $("#sidebar a").click(function (e) {
    let linkhref = $(e.target).attr("href");
    let linkoffset = $(linkhref).offset().top;
    $("html,body").animate({ scrollTop: linkoffset }, 500);
  });
  $(`#box p`).eq(0).slideToggle(500);
  for (let i = 0; i < 5; i++) {
    $(`#box div`)
      .eq(i)
      .click(function () {
        for (let y = 0; y < 5; y++) {
          if (y == i) {
            $(`#box p`).eq(i).slideToggle(500);
          } else {
            $(`#box p`).eq(y).slideUp(500);
          }
        }
      });
  }

  let timerAnimated = setInterval(() => {
    let timerstart = new Date().getTime();
    // let timerend = new Date(2024, 12, 31, 23, 59, 59).getTime();
    let timerend = new Date("Dec 31, 2024 23:59:59").getTime();
    let timer = timerend - timerstart;
    let timerdays = Math.floor(timer / (1000 * 60 * 60 * 24));
    let timerhours = Math.floor(
      (timer % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let timerminutes = Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60));
    let timerseconds = Math.floor((timer % (1000 * 60)) / 1000);
    $("#days").html(`-${timerdays}D`);
    $("#hours").html(`${timerhours}H`);
    $("#minutes").html(`${timerminutes}M`);
    $("#seconds").html(`${timerseconds}S`);
  });
});

document.querySelector("textarea").addEventListener("input", function () {
  let msg = 100;
  let msglength = $("textarea").val().length;
  if(msglength>100)
  {
    $('#msgCounter').html('your available character finished');
  }
  else{
    $('#msgCounter').html(msg-msglength);
  }
});