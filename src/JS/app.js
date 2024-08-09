// Phone number input
const phoneInput = document.getElementById("phone");
phoneInput.addEventListener("focus", (e) => {
  e.target.value = "+998 (__) ___-__-__";
  setTimeout(() => {
    phoneInput.setSelectionRange(6, 6);
  }, 10);

  IMask(phoneInput, {
    mask: "+{998} (00) 000-00-00",
    lazy: false,
  });
});

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
