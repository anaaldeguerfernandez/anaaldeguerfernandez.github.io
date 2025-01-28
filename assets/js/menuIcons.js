// JS for responsive menu - icon toggle

const checkbtnContainer = document.querySelector(".checkbtn");
const checkbtn = document.querySelector("checkbtn i");

void checkbtnContainer.addEventListener("click", function () {
  checkbtn.classList.toggle("fa-solid fa-xmark");
  checkbtn.classList.toggle("fa-solid fa-bars");
});
