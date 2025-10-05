const firstButton = document.getElementById("first-button");
const secondButton = document.getElementById("second-button");

const firstArticle = document.getElementById("first");
const secondArticle = document.getElementById("second");

window.addEventListener("load", () => {
  window.scrollTo(0, 0);

  setTimeout(() => {
    document.body.style.overflow = "hidden";
  }, 500);
});

firstButton.addEventListener("click", () => {
  secondArticle.scrollIntoView({
    behavior: "smooth",
  });

  setTimeout(() => {
    document.body.style.overflowX = "hidden";
    document.body.style.overflowY = "visible";
  }, 500);
});
