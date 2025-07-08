document.addEventListener("DOMContentLoaded", () => {
  const themeToggleBtn = document.querySelector(".theme-toggle");
  const letterboxedLink = document.querySelector(".letterboxed-link");
  const body = document.body;

  //Apply system theme initially
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    body.classList.toggle("dark-mode", savedTheme === "dark");
  } else if (systemPrefersDark) {
    body.classList.add("dark-mode");
  }

  //Toggle theme on button click
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", (e) => {
      const isDark = body.classList.toggle("dark-mode");
      localStorage.setItem("theme", isDark ? "dark" : "light");
      themeToggleBtn.setAttribute("aria-pressed", isDark);
    });
  };

  //Letterboxed popup question
  if (letterboxedLink) {
      letterboxedLink.addEventListener("click", (e) => {
    e.preventDefault();
    const name = prompt("Hey! Before you go, what’s your name?");
    if (name) {
    alert(`Nice to meet you, ${name.trim()}! Hope you find some amazing documentaries. Feel free to send me your top picks too! 🎥`);
    window.open("https://boxd.it/zGlyo", "_blank");
  } else {
    alert("All good — enjoy exploring the doc vault! 🕵️‍♀️");
  }
});
  }
});