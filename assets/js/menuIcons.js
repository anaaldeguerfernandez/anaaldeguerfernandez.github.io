// JS for responsive menu - icon toggle

let btn = document.querySelector(".toggle");
let icon = btn.querySelector(".fa-bars");

btn.onclick = function() {
  if(icon.classList.contains("fa-bars")) {
    icon.classList.replace("fa-bars", "fa-xmark");
  }
  else {
    icon.classList.replace("fa-xmark", "fa-bars");
  }
}