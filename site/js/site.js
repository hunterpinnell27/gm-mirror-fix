(function () {
  // Mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { nav.classList.remove("open"); });
    });
  }

  // Scroll reveal
  var revealEls = document.querySelectorAll("[data-reveal]");
  if (revealEls.length && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  // Lightbox for gallery images
  var galleryImgs = document.querySelectorAll(".gallery img");
  if (galleryImgs.length) {
    var lb = document.createElement("div");
    lb.className = "lightbox";
    lb.innerHTML = '<span class="lightbox-close">&times;</span><img alt="">';
    document.body.appendChild(lb);
    var lbImg = lb.querySelector("img");
    galleryImgs.forEach(function (img) {
      img.addEventListener("click", function () {
        lbImg.src = img.src;
        lbImg.alt = img.alt;
        lb.classList.add("open");
      });
    });
    function closeLb() { lb.classList.remove("open"); }
    lb.addEventListener("click", closeLb);
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeLb();
    });
  }

  // Homepage intro animation — plays once per browser session
  var intro = document.getElementById("intro-overlay");
  if (intro) {
    if (sessionStorage.getItem("introShown")) {
      intro.remove();
    } else {
      document.body.style.overflow = "hidden";
      var dismissed = false;
      function dismissIntro() {
        if (dismissed) return;
        dismissed = true;
        intro.classList.add("hide");
        document.body.style.overflow = "";
        sessionStorage.setItem("introShown", "1");
        setTimeout(function () { intro.remove(); }, 550);
      }
      var skipBtn = document.getElementById("intro-skip");
      if (skipBtn) skipBtn.addEventListener("click", function (e) { e.stopPropagation(); dismissIntro(); });
      intro.addEventListener("click", dismissIntro);
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") dismissIntro();
      });
      if (location.search.indexOf("nodismiss") === -1) {
        setTimeout(dismissIntro, 3600);
      }
    }
  }
})();
