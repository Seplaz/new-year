document.addEventListener("DOMContentLoaded", () => {
  const сongratulationButton = document.querySelector(
    ".сongratulation__button"
  );
  const сongratulationBlock = document.querySelector(".сongratulation");

  сongratulationButton.addEventListener("click", (event) => {
    const elem = event.target;
    elem.classList.add("clicked");

    setTimeout(() => {
      elem.classList.remove("clicked");
    }, 400);

    сongratulationBlock.classList.add("visible");
    сongratulationButton.style.display = "none";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const rememberButton = document.querySelector(".remember__button");
  const rememberBlock = document.querySelector(".remember");

  rememberButton.addEventListener("click", (event) => {
    const elem = event.target;
    elem.classList.add("clicked");

    setTimeout(() => {
      elem.classList.remove("clicked");
    }, 400);

    rememberBlock.classList.add("visible");
    rememberButton.style.display = "none";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const supportButton = document.querySelector(".support__button");
  const supportBlock = document.querySelector(".support");

  supportButton.addEventListener("click", (event) => {
    const elem = event.target;
    elem.classList.add("clicked");

    setTimeout(() => {
      elem.classList.remove("clicked");
    }, 400);

    supportBlock.classList.add("visible");
    supportButton.style.display = "none";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const lastButton = document.querySelector(".last__button");
  const lastBlock = document.querySelector(".last");

  lastButton.addEventListener("click", (event) => {
    const elem = event.target;
    elem.classList.add("clicked");

    setTimeout(() => {
      elem.classList.remove("clicked");
    }, 400);

    lastBlock.classList.add("visible");
    lastButton.style.display = "none";
  });
});
