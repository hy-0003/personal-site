/* =========================================================
   贺毅 · Yi He — 个人主页交互脚本
   ========================================================= */
(function () {
  "use strict";

  /* ---------- 主题切换 ---------- */
  const root = document.documentElement;
  const toggle = document.getElementById("themeToggle");

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
  }

  function getInitialTheme() {
    const saved = localStorage.getItem("hy-theme");
    if (saved) return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  applyTheme(getInitialTheme());

  if (toggle) {
    toggle.addEventListener("click", function () {
      const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(next);
      localStorage.setItem("hy-theme", next);
    });
  }

  /* ---------- 导航状态 ---------- */
  const nav = document.getElementById("nav");
  const heroCover = document.querySelector(".hero-cover");

  function onScroll() {
    if (!nav) return;
    nav.classList.toggle("scrolled", window.scrollY > 40);
    // 仍在封面 banner 上时，导航文字反白
    if (heroCover) {
      const coverBottom = heroCover.offsetTop + heroCover.offsetHeight - 64;
      nav.classList.toggle("over", window.scrollY < coverBottom);
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Hero 关键词轮换 ---------- */
  const words = [
    "自我进化",
    "永远热泪盈眶",
    "Gaping",
    "创业中",
    "运动",
    "艺术",
    "开源与传播",
    "体验",
    "少年心气"
  ];
  const el = document.getElementById("rotatingText");
  if (el) {
    let i = 0;
    setInterval(function () {
      i = (i + 1) % words.length;
      el.classList.remove("anim");
      void el.offsetWidth; // 重启动画
      el.textContent = words[i];
      el.classList.add("anim");
    }, 2600);
  }

  /* ---------- 滚动渐入 ---------- */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("visible"); });
  }

  /* ---------- 年份 ---------- */
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
