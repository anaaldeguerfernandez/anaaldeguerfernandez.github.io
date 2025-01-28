// JS for responsive menu - icon toggle

// const checkbtnContainer = document.querySelector(".checkbtn");
// const checkbtn = document.querySelector(".checkbtn i");

// checkbtnContainer.addEventListener("click", function () {
//   checkbtn.classList.toggle("fa-solid fa-xmark");
//   checkbtn.classList.toggle("fa-solid fa-bars");

//   return checkbtn.classList;
// });

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