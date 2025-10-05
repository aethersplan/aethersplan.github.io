const firstButton = document.getElementById("first-button");
const secondButton = document.getElementById("second-button");

const firstArticle = document.getElementById("first");
const secondArticle = document.getElementById("second");

let computerViewport = window.innerWidth > 600;

window.addEventListener("load", () => {
  if (computerViewport) {
    window.scrollTo(0, 0);

    setTimeout(() => {
      document.body.style.overflow = "hidden";
    }, 500);
  }
});

firstButton.addEventListener("click", () => {
  secondArticle.scrollIntoView({
    behavior: "smooth",
  });

  if (computerViewport) {
    setTimeout(() => {
      document.body.style.overflowX = "hidden";
      document.body.style.overflowY = "visible";
    }, 500);
  }
});

window.addEventListener("resize", () => {
  window.location.reload();
});
