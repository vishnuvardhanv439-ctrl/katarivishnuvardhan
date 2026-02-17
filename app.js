// // NAV BAR

// document.addEventListener("DOMContentLoaded", () => {
//   const menuBar = document.querySelector(".menu-bar");
//   const menuList = document.querySelector(".menu-links ul");

//   if (!menuBar || !menuList) return;

//   const DESKTOP_WIDTH = 1281;

//   const handleResize = () => {
//     if (window.innerWidth >= DESKTOP_WIDTH) {
//       menuList.style.display = "flex";
//     } else {
//       menuList.style.display = "none";
//     }
//   };

//   handleResize();
//   window.addEventListener("resize", handleResize);

//   menuBar.addEventListener("click", () => {
//     if (window.innerWidth >= DESKTOP_WIDTH) return;

//     const isOpen = menuList.style.display === "flex";
//     menuList.style.display = isOpen ? "none" : "flex";
//   });
// });

// NAV BAR

// NAV BAR

document.addEventListener("DOMContentLoaded", () => {
  const menuBar = document.querySelector(".menu-bar");
  const menuList = document.querySelector(".menu-links ul");

  if (!menuBar || !menuList) return;

  const DESKTOP_WIDTH = 1281;

  function openMenu() {
    menuList.classList.add("open");
    menuBar.classList.add("active");
  }

  function closeMenu() {
    menuList.classList.remove("open");
    menuBar.classList.remove("active");
  }

  function toggleMenu() {
    menuList.classList.contains("open") ? closeMenu() : openMenu();
  }

  menuBar.addEventListener("click", (e) => {
    if (window.innerWidth >= DESKTOP_WIDTH) return;
    e.stopPropagation(); // prevent instant close
    toggleMenu();
  });

  // 🔥 Close when clicking ANYWHERE except menuBar
  document.addEventListener("click", (e) => {
    if (window.innerWidth >= DESKTOP_WIDTH) return;

    const clickedMenuButton = menuBar.contains(e.target);

    if (!clickedMenuButton) {
      closeMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= DESKTOP_WIDTH) {
      closeMenu();
    }
  });
});

// ================= Video Controls =================

const video = document.getElementById("portfolioVideo");
video.addEventListener("contextmenu", (e) => e.preventDefault());

// // ================= Scroll Reveal Animation =================

document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(
    ".profile, .heading-section, .head-section, .card-item, .Item, .quote h1, .work-item-container, .design-card, .video-card",
  );

  reveals.forEach((el, index) => {
    el.classList.add("reveal");

    // stagger automatically
    const delay = (index % 4) + 1; // start from delay-1
    el.classList.add(`delay-${delay}`);
  });

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -80px 0px",
    },
  );

  reveals.forEach((el) => {
    observer.observe(el);
  });
});
