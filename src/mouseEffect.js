export const mouseEffect = () => {
  const bg = document.querySelector(".bg1");

  var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 60;

  if (bg) {
    bg.addEventListener("mousemove", e => {
      var lMouseX = Math.max(
        -100,
        Math.min(100, window.innerWidth / 2 - e.clientX)
      );
      var lMouseY = Math.max(
        -100,
        Math.min(100, window.innerHeight / 2 - e.clientY)
      );
      lFollowX = (30 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
      lFollowY = (15 * lMouseY) / 100;
    });
  }

  function moveBackground() {
    x += (lFollowX - x) * friction;
    y += (lFollowY - y) * friction;

    if (bg) {
      bg.style.transform =
        "translate3d(" + x + "px, " + y + "px, 0) scale(1.1)";
    }

    // console.log(x, y);

    // add out of translate 3d
    //scale(1.1)

    window.requestAnimationFrame(moveBackground);
  }

  moveBackground();
};
