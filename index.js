// Alternating text

const words = [
  "a Developer",
  "an Engineer",
  "a Problem Solver",
  "Reliable",
  "Efficient",
  "a Goal Getter",
];
let index = 0;

setInterval(() => {
  index++;
  if (index >= words.length) {
    index = 0;
  }
  document.getElementById("moving-word").innerHTML = words[index];
}, 2000);

// form validation

const form = document.getElementById("form");
const errorName = document.getElementById("error-name");
const errorEmail = document.getElementById("error-email");
const errorMessage = document.getElementById("error-message");

form.addEventListener("submit", (e) => {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  if (name.value === "" || name.value === null) {
    errorName.innerHTML = "Name must not be empty";
    e.preventDefault();
  }
  if (email.value === "" || !email.value.includes("@")) {
    errorEmail.innerHTML = "Please provide a valid email address";
  }
  e.preventDefault();
  if (message.value === "" || message.value.length > 100) {
    errorMessage.innerHTML = "Message must be greater than 100 chracters";
  }
  e.preventDefault();
});

const hamburger = document.getElementById("ham");
const closebtn = document.getElementById("close");
const icon1 = document.querySelector(".icon1");
const icon2 = document.querySelector(".icon2");
const nav_menu = document.querySelector("#mobile_menu");

hamburger.addEventListener("click", () => {
  icon1.style.display = "none";
  icon2.style.display = "block";
  nav_menu.style.display = "block";
});

closebtn.addEventListener("click", () => {
  icon1.style.display = "block";
  icon2.style.display = "none";
  nav_menu.style.display = "none";
});

// Typing Effect

const typing_name = document.getElementById("name_typing");
const displayName = " Marian.";

function typingEffect(element, text, i = 0) {
  if (i === 0) {
    element.textContent = ""; // Clear before starting typing
  }

  element.textContent += text[i];

  if (i < text.length - 1) {
    setTimeout(() => typingEffect(element, text, i + 1), 150);
  } else {
    setTimeout(() => {
      typingEffect(element, text, 0); // Start again from beginning
    }, 1000);
  }
}

typingEffect(typing_name, displayName);
