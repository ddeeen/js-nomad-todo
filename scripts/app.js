const name = document.querySelector("#name");
// const nameButton = document.querySelector(".input-name__button");
const welcome = document.querySelector(".welcome");
const input_name = document.querySelector(".input-name");
const contentSection = document.querySelector(".content");

const USER_NAME = "Username";
const HIDE_CLASS = "hide";
const FLEX_CLASS = "flex";
const GRID_CLASS = "grid";

if (localStorage.getItem(USER_NAME) != null) {
  input_name.classList.remove(FLEX_CLASS);
  input_name.classList.add(HIDE_CLASS);
  contentSection.classList.remove(HIDE_CLASS);
  contentSection.classList.add(GRID_CLASS);
  welcome.innerText = `Welcome! ${localStorage.getItem(USER_NAME)}`;
}

function onSubmitBtn(event) {
  event.preventDefault();
  console.log("hi");
  localStorage.setItem(USER_NAME, name.value);

  welcome.innerText = `Welcome! ${localStorage.getItem(USER_NAME)}`;
  input_name.classList.remove(FLEX_CLASS);
  input_name.classList.add(HIDE_CLASS);
  contentSection.classList.remove(HIDE_CLASS);
  contentSection.classList.add(GRID_CLASS);
}

input_name.addEventListener("submit", onSubmitBtn);
