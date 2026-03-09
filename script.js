const menuToggle = document.getElementById("menuToggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("show");
});

document.querySelectorAll(".menu a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("show");
  });
});

const registerForm = document.querySelector(".register-form");

registerForm.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Kayıt sistemi henüz aktif değil. Backend bağlanınca çalışacak.");
});