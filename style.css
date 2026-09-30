/* =========================================
   STARFIELD
   Gentle mouse parallax + twinkling stars
========================================= */

(function () {
  const canvas = document.getElementById("stars");

  if (!canvas) return;

  const ctx = canvas.getContext("2d");

  if (!ctx) return;

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  let w;
  let h;

  let stars = [];

  let mx = 0;
  let my = 0;


  function resize() {
    const dpr = window.devicePixelRatio || 1;

    w = canvas.width = innerWidth * dpr;
    h = canvas.height = innerHeight * dpr;

    canvas.style.width = innerWidth + "px";
    canvas.style.height = innerHeight + "px";

    const count = Math.min(
      180,
      Math.floor(innerWidth / 7)
    );

    stars = Array.from(
      { length: count },
      () => ({
        x: Math.random() * w,
        y: Math.random() * h,

        z:
          Math.random() * 0.9 +
          0.1,

        p:
          Math.random() *
          Math.PI *
          2
      })
    );
  }


  function draw(time = 0) {
    ctx.clearRect(
      0,
      0,
      w,
      h
    );

    const dpr =
      window.devicePixelRatio || 1;


    for (const star of stars) {

      const x =
        (
          star.x +
          mx * star.z * 40 +
          w
        ) % w;

      const y =
        (
          star.y +
          my * star.z * 40 +
          h
        ) % h;


      const twinkle =
        reduceMotion
          ? 1
          : 0.6 +
            0.4 *
              Math.sin(
                time / 900 +
                star.p
              );


      ctx.beginPath();

      ctx.arc(
        x,
        y,
        star.z * 1.7 * dpr,
        0,
        Math.PI * 2
      );

      ctx.fillStyle =
        `rgba(230, 222, 255, ${star.z * twinkle})`;

      ctx.fill();
    }


    if (!reduceMotion) {
      requestAnimationFrame(draw);
    }
  }


  window.addEventListener(
    "resize",
    resize
  );


  window.addEventListener(
    "mousemove",
    (event) => {

      mx =
        event.clientX /
          innerWidth -
        0.5;

      my =
        event.clientY /
          innerHeight -
        0.5;
    }
  );


  resize();

  requestAnimationFrame(draw);

})();


/* =========================================
   3D HERO SCENE
   Follows the mouse pointer
========================================= */

(function () {

  const scene =
    document.getElementById("scene");

  if (!scene) return;

  const world =
    scene.querySelector(".world");

  if (!world) return;


  const reduceMotion =
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;


  if (reduceMotion) return;


  window.addEventListener(
    "mousemove",
    (event) => {

      const x =
        event.clientX /
          innerWidth -
        0.5;

      const y =
        event.clientY /
          innerHeight -
        0.5;


      world.style.setProperty(
        "--ry",
        25 + x * 50 + "deg"
      );


      world.style.setProperty(
        "--rx",
        -18 - y * 40 + "deg"
      );
    }
  );

})();


/* =========================================
   3D CARD TILT
========================================= */

document
  .querySelectorAll(".tilt")
  .forEach((card) => {

    card.addEventListener(
      "mousemove",
      (event) => {

        const rect =
          card.getBoundingClientRect();


        const x =
          (event.clientX -
            rect.left) /
            rect.width -
          0.5;


        const y =
          (event.clientY -
            rect.top) /
            rect.height -
          0.5;


        card.style.setProperty(
          "--ty",
          x * 10 + "deg"
        );


        card.style.setProperty(
          "--tx",
          -y * 10 + "deg"
        );
      }
    );


    card.addEventListener(
      "mouseleave",
      () => {

        card.style.setProperty(
          "--ty",
          "0deg"
        );

        card.style.setProperty(
          "--tx",
          "0deg"
        );
      }
    );

  });


/* =========================================
   SMOOTH BUTTON FEEDBACK
========================================= */

document
  .querySelectorAll(".btn, .pill")
  .forEach((button) => {

    button.addEventListener(
      "click",
      () => {

        button.style.transform =
          "translateY(-1px)";

        setTimeout(() => {

          button.style.transform =
            "";

        }, 120);

      }
    );

  });
