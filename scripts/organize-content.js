const sections = document.querySelectorAll("section");

window.addEventListener("load", () => {
  sections.forEach((section) => {
    section.innerHTML = `<div class="content">${section.innerHTML}</div>`;
  });
});
