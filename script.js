
document.getElementById("year").textContent =
  new Date().getFullYear();

document.getElementById("messageButton").addEventListener("click", () => {
  document.getElementById("message").textContent =
    "Hello! Thank you for visiting my cloud computing portfolio.";
});
