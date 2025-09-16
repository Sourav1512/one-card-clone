// onecardfront.js

document.addEventListener("DOMContentLoaded", () => {
  // ========== Sticky Navbar Shadow ==========
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
    } else {
      navbar.style.boxShadow = "none";
    }
  });

  // ========== Smooth Scroll for Nav Links ==========
  document.querySelectorAll(".navoption p").forEach((navItem) => {
    navItem.style.cursor = "pointer";
    navItem.addEventListener("click", () => {
      const targetId = navItem.innerText.toLowerCase().replace(/\s+/g, "");
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // ========== Apply Now Buttons ==========
  document.querySelectorAll(".applyback").forEach((btn) => {
    btn.style.cursor = "pointer";
    btn.addEventListener("click", () => {
      alert("Redirecting to Application Form 🚀");
      // Replace with actual link
      window.location.href = "https://www.getonecard.app/apply";
    });
  
  });

  // ========== Animate Elements on Scroll ==========
  const revealElements = document.querySelectorAll(
    ".box1, .box2, .box3, .box4, .finalbox, .finalbox1"
  );

  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.8;
    revealElements.forEach((el) => {
      const boxTop = el.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        el.classList.add("show");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Run on page load
});









