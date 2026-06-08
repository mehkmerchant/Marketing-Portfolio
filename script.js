const header = document.querySelector(".site-header");
const navLinks = Array.from(document.querySelectorAll(".nav-links a"));
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

function updateHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 20);
}

function updateActiveLink() {
  const current = sections
    .filter((section) => section.getBoundingClientRect().top < window.innerHeight * 0.42)
    .pop();

  navLinks.forEach((link) => {
    link.classList.toggle("is-active", current && link.getAttribute("href") === `#${current.id}`);
  });
}

window.addEventListener("scroll", () => {
  updateHeader();
  updateActiveLink();
});

updateHeader();
updateActiveLink();
