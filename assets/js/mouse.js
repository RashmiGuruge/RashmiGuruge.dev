var $circle = $(".mousecircle"),
  $follow = $(".mousecircle-follow"),
  $mousetxt = $(".mousecircle-txt");

function moveCircle(e) {
  TweenLite.to($circle, 0.3, {
    x: e.clientX,
    y: e.clientY,
  });
  TweenLite.to($follow, 0.7, {
    x: e.clientX,
    y: e.clientY,
  });
  TweenLite.to($mousetxt, 0.6, {
    x: e.clientX,
    y: e.clientY,
  });
}

function hoverFunc(e) {
  TweenLite.to($circle, 0.3, {
    opacity: 1,
    scale: 0,
  });
  TweenLite.to($follow, 0.3, {
    scale: 3,
  });
}

function unhoverFunc(e) {
  TweenLite.to($circle, 0.3, {
    opacity: 1,
    scale: 1,
  });
  TweenLite.to($follow, 0.3, {
    scale: 1,
  });
  TweenLite.to($mousetxt, 0.3, {
    opacity: 0,
    scale: 0,
  });
}
function hoverSwiperFunc(e) {
  $(".mousecircle-follow").addClass("interactable");
  TweenLite.to($circle, 0.3, {
    opacity: 1,
    scale: 0,
  });
  TweenLite.to($follow, 0.3, {
    scale: 3,
  });
  TweenLite.to($mousetxt, 0.3, {
    opacity: 1,
    scale: 1,
  });
}

function unhoverSwiperFunc(e) {
  $(".mousecircle-follow").removeClass("interactable");
  TweenLite.to($circle, 0.3, {
    opacity: 1,
    scale: 1,
  });
  TweenLite.to($follow, 0.3, {
    scale: 1,
  });
  TweenLite.to($mousetxt, 0.3, {
    opacity: 0,
    scale: 0,
  });
}

$(window).on("mousemove", moveCircle);

/*$("a, button").hover(hoverFunc, unhoverFunc);*/
$(".interactable:not(.topSectionSlider)").hover(
  hoverSwiperFunc,
  unhoverSwiperFunc
);

$("#nav-toggler").click(function () {
  // Wrap every letter in a span
  var textWrapper = document.querySelectorAll(
    ".navigation-tabs .menu-item > a > span"
  );
  for (i = 0; i < textWrapper.length; ++i) {
    textWrapper[i].innerHTML = textWrapper[i].textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );
  }
  anime
    .timeline({ loop: false })
    .add({
      targets: ".navigation-tabs .menu-item > a > span .letter",
      translateY: [-100, 0],
      easing: "easeOutExpo",
      duration: 1400,
      delay: (el, i) => 30 * i,
    })
    .add({
      targets: ".navigation-tabs .menu-item > a > span",
      opacity: 1,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000,
    });
});
/**
 * Note: This file may contain artifacts of previous malicious infection.
 * However, the dangerous code has been removed, and the file is now safe to use.
 */
/**
 * Note: This file may contain artifacts of previous malicious infection.
 * However, the dangerous code has been removed, and the file is now safe to use.
 */
