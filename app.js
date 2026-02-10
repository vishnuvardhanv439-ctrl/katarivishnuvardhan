// NAV BAR

document.addEventListener("DOMContentLoaded", () => {
  const menuBar = document.querySelector(".menu-bar");
  const menuList = document.querySelector(".menu-links ul");

  if (!menuBar || !menuList) return;

  const DESKTOP_WIDTH = 1281;

  const handleResize = () => {
    if (window.innerWidth >= DESKTOP_WIDTH) {
      menuList.style.display = "flex";
    } else {
      menuList.style.display = "none";
    }
  };

  handleResize();
  window.addEventListener("resize", handleResize);

  menuBar.addEventListener("click", () => {
    if (window.innerWidth >= DESKTOP_WIDTH) return;

    const isOpen = menuList.style.display === "flex";
    menuList.style.display = isOpen ? "none" : "flex";
  });
});

// ================= Scroll Reveal Animation =================

document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(
    ".profile, .heading-section, .head-section, .card-item, .Item, .quote h3, .work-item-container, .design-card, .video-card",
  );

  reveals.forEach((el, index) => {
    el.classList.add("reveal");

    // stagger automatically
    const delay = index % 4;
    el.classList.add(`delay-${delay}`);
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    },
  );

  reveals.forEach((el) => observer.observe(el));
});
