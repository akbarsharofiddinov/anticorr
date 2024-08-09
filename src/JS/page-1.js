// Textarea count words

// HTML Elements
const textarea = document.querySelector("#corruption_condition");
const word_counter = document.querySelector(".length");

// Variables
let count = 0;
const maxLength = Number.parseInt(textarea.getAttribute("maxlength"));

textarea.addEventListener("keyup", (e) => {
  const { value } = e.target;

  count = value.split(" ").length;

  word_counter.innerHTML = `${count}/${maxLength}`;
});
