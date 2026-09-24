document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  if (menu && nav) {
    menu.addEventListener("click", () => nav.classList.toggle("open"));
    nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));
  }
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
  const form = document.getElementById("subscribeForm");
  const message = document.getElementById("formMessage");
  if (form && message) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      message.textContent = "Thank you! Newsletter integration can be connected later.";
      form.reset();
    });
  }
});