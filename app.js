const quotes = [
  {
    quote:
      "Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.",
    writer: "Linus Torvalds",
  },
  {
    quote:
      "Most of you are familiar with the virtues of a programmer. There are three, of course: laziness, impatience, and hubris.",
    writer: "Larry Wall",
  },
  {
    quote:
      "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.",
    writer: "Bill Gates",
  },
  {
    quote:
      "Computer system analysis is like child-rearing; you can do grievous damage, but you cannot ensure success.",
    writer: "Tom DeMarco",
  },
  {
    quote:
      "Beware of bugs in the above code; I have only proved it correct, not tried it.",
    writer: "Donald E. Knuth",
  },
  {
    quote:
      "Learning to program has no more to do with designing interactive software than learning to touch type has to do with writing poetry.",
    writer: "Ted Nelson",
  },
  {
    quote:
      "I invented the term ‘Object-Oriented’, and I can tell you I did not have C++ in mind.",
    writer: "Alan Kay",
  },
  {
    quote:
      "In theory, theory and practice are the same. In practice, they’re not.",
    writer: "Yoggi Berra",
  },
  {
    quote:
      "Perfection [in design] is achieved, not when there is nothing more to add, but when there is nothing left to take away.",
    writer: "Antoine de Saint-Exupéry",
  },
  {
    quote: "Good design adds value faster than it adds cost.",
    writer: "Thomas C. Gale",
  },
];

const images = [
  "sunny_night.webp",
  "sunny_earlyNight.webp",
  "cloudy_noon.webp",
  "cloudy_night.webp",
  "rainy_noon.webp",
  "rainy_night.webp",
  "sunny_afternoon.webp",
  "sunny_noon.webp",
  "sunny_morning.webp",
];

const name = document.querySelector("#name");
const nameButton = document.querySelector(".input-name__button");
const welcome = document.querySelector(".welcome");
const input_name = document.querySelector(".input-name");
const clock = document.querySelector(".clock");
const contentSection = document.querySelector(".content");

const USER_NAME = "Username";
const HIDE_CLASS = "hide";

document.body.style.backgroundImage = `url(images/${
  images[Math.floor(Math.random() * images.length)]
})`;
console.log(`images/${images[Math.floor(Math.random() * images.length)]}`);

if (localStorage.getItem(USER_NAME) != null) {
  input_name.classList.add(HIDE_CLASS);
  //   form.style.display = "none";
  //   contentSection.style.display = "block";
  contentSection.classList.remove(HIDE_CLASS);
  welcome.innerText = `Welcome! ${localStorage.getItem(USER_NAME)}`;
  //   imgTag = document.createElement("img");
  //   imgTag.src = `images/${images[Math.floor(Math.random() * images.length)]}`;
  //   document.body.appendChild(imgTag);
}

function onClickBtn(event) {
  event.preventDefault();
  localStorage.setItem(USER_NAME, name.value);

  welcome.innerText = `Welcome! ${localStorage.getItem(USER_NAME)}`;
  input_name.classList.add(HIDE_CLASS);
  contentSection.classList.remove(HIDE_CLASS);
  imgTag = document.createElement("img");
  imgTag.src = `images/${images[Math.floor(Math.random() * images.length)]}`;
  document.body.appendChild(imgTag);
}

nameButton.addEventListener("click", onClickBtn);

function printTime() {
  const now = new Date();
  const hour = now.getHours();
  const min = now.getMinutes();
  const sec = now.getSeconds();
  clock.innerText = `${hour}:${min}:${sec}`;
}

const quote = document.querySelector(".quote-box__quote");
const writer = document.querySelector(".quote-box__writer");

const QUOTE = "quote";
const WRITER = "writer";

const choice_quote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = choice_quote[QUOTE];
writer.innerText = choice_quote[WRITER];

printTime();
setInterval(printTime, 1000);
