// JS for responsive menu - icon toggle

const checkbtnContainer = document.querySelector(".checkbtn");
const checkbtn = document.querySelector("checkbtn i");

checkbtnContainer.addEventListener("click", function () {
  checkbtn.classList.toggle("fa-light fa-xmark");
  checkbtn.classList.toggle("fa-bars");
});
