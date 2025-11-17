const themeToggle = document.getElementById("switch");
const root = document.documentElement;

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  root.classList.add("dark");
  themeToggle.checked = true;
} else if (savedTheme === "light") {
  root.classList.remove("dark");
  themeToggle.checked = false;
}

themeToggle.addEventListener("change", () => {
  if (themeToggle.checked) {
    root.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    root.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
});