const btnSubmit = document.querySelector("#btn-submit");
const inputText = document.querySelector("#input-text");
const errorText = document.querySelector(".error-text");
const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

btnSubmit.addEventListener("click", () => {
  if (inputText.value.match(validRegex)) {
    errorText.innerText = "Valid Email Address";
    errorText.style.color = "green";
    inputText.style.background = "none";
    inputText.style.outline = "1px solid hsla(97, 100%, 50%, 1)";
    return true;
  } else {
    errorText.innerText = "Please provide a valid email";
    inputText.style.background = "url('../images/icon-error.svg') no-repeat";
    inputText.style.backgroundPosition = "80% 50%";
    inputText.style.outline = "1px solid hsl(0, 100%, 63%)";
    errorText.style.color = "hsl(0, 100%, 63%)";
    return false;
  }
});
