// Starfield with gentle mouse parallax
(function () {
  const canvas = document.getElementById("stars");
  const ctx = canvas.getContext("2d");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let w, h, stars = [], mx = 0, my = 0;

  function resize() {
    const dpr = window.devicePixelRatio || 1;
    w = canvas.width = innerWidth * dpr;
    h = canvas.height = innerHeight * dpr;
    const count = Math.min(160, Math.floor(innerWidth / 8));
    stars = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      z: Math.random() * 0.9 + 0.1,
      p: Math.random() * Math.PI * 2
    }));
  }

  function draw(t) {
    ctx.clearRect(0, 0, w, h);
    for (const s of stars) {
      const x = (s.x + mx * s.z * 40 + w) % w;
      const y = (s.y + my * s.z * 40 + h) % h;
      const twinkle = reduce ? 1 : 0.6 + 0.4 * Math.sin(t / 900 + s.p);
      ctx.beginPath();
      ctx.arc(x, y, s.z * 1.8 * (window.devicePixelRatio || 1), 0, Math.PI * 2);
      ctx.fillStyle = `rgba(230, 222, 255, ${s.z * twinkle})`;
      ctx.fill();
    }
    if (!reduce) requestAnimationFrame(draw);
  }

  addEventListener("resize", resize);
  addEventListener("mousemove", (e) => {
    mx = e.clientX / innerWidth - 0.5;
    my = e.clientY / innerHeight - 0.5;
  });
  resize();
  requestAnimationFrame(draw);
})();

// Tilt the 3D scene toward the pointer
(function () {
  const scene = document.getElementById("scene");
  const world = scene.querySelector(".world");
  addEventListener("mousemove", (e) => {
    const x = e.clientX / innerWidth - 0.5;
    const y = e.clientY / innerHeight - 0.5;
    world.style.setProperty("--ry", 25 + x * 50 + "deg");
    world.style.setProperty("--rx", -18 - y * 40 + "deg");
  });
})();

// 3D tilt on cards
document.querySelectorAll(".tilt").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    card.style.setProperty("--ty", x * 14 + "deg");
    card.style.setProperty("--tx", -y * 14 + "deg");
  });
  card.addEventListener("mouseleave", () => {
    card.style.setProperty("--ty", "0deg");
    card.style.setProperty("--tx", "0deg");
  });
});
