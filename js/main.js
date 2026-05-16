(function () {
  const PHONE = "+18199681015";
  const PHONE_DISPLAY = "(819) 968-1015";
  const WA_URL = "https://wa.me/18199681015";
  const SMS_URL = "sms:+18199681015";
  const EMAIL = "petro@asinyo.org";
  const MAIL_URL = "mailto:petro@asinyo.org";

  document.querySelectorAll("[data-phone]").forEach((el) => {
    el.href = "tel:" + PHONE;
    if (el.hasAttribute("data-phone-text")) {
      el.textContent = PHONE_DISPLAY;
    }
  });

  document.querySelectorAll("[data-whatsapp]").forEach((el) => {
    el.href = WA_URL;
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener noreferrer");
  });

  document.querySelectorAll("[data-sms]").forEach((el) => {
    el.href = SMS_URL;
  });

  document.querySelectorAll("[data-mail]").forEach((el) => {
    el.href = MAIL_URL;
    if (el.hasAttribute("data-mail-text")) {
      el.textContent = EMAIL;
    }
  });

  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open);
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  const current = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav a").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === current || (current === "" && href === "index.html")) {
      link.classList.add("active");
    }
  });

  const header = document.querySelector(".header");
  if (header) {
    window.addEventListener(
      "scroll",
      () => {
        header.classList.toggle("scrolled", window.scrollY > 20);
      },
      { passive: true }
    );
  }
})();
