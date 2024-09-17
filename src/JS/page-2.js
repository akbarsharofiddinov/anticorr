// Phone number input
// const phoneInput = document.getElementById("phone");
// phoneInput.addEventListener("focus", (e) => {
//   e.target.value = "+998 (__) ___-__-__";
//   setTimeout(() => {
//     phoneInput.setSelectionRange(6, 6);
//   }, 10);

//   IMask(phoneInput, {
//     mask: "+{998} (00) 000-00-00",
//     lazy: false,
//   });
// });

// Custon Select Element
document
  .querySelector(".select-selected")
  .addEventListener("click", function () {
    this.nextElementSibling.classList.toggle("show");
  });

document.querySelectorAll(".select-items div").forEach(function (item) {
  item.addEventListener("click", function () {
    const selected = document.querySelector(".select-selected");
    selected.textContent = this.textContent;
    document.querySelector(".select-items").classList.remove("show");
  });
});

document.addEventListener("click", function (e) {
  if (!e.target.closest(".custom-select")) {
    document.querySelector(".select-items").classList.remove("show");
  }
});

// Modal Opening handle

const sendButton = document.querySelector(".button-submit");
const modal = document.querySelector(".modal");
const modalInner = document.querySelector(".modal-inner");
const inputNumbers = document.querySelectorAll(".input-number");

sendButton.addEventListener("click", (e) => {
  modal.classList.add("active");
  inputNumbers[0].focus();
});

modal.addEventListener("click", (e) => {
  modal.classList.remove("active");
});

modalInner.addEventListener("click", (e) => {
  e.stopPropagation();
});

// SMS typing

inputNumbers.forEach((inputNumber, index) => {
  inputNumber.addEventListener("keydown", (e) => {
    if (e.target.value !== "" && e.key === "Backspace") {
      e.target.value === "";
    }
    if (e.target.value === "" && e.key === "Backspace") {
      inputNumbers[index - 1].focus();
    }
  });

  inputNumber.addEventListener("focus", () => {
    for (let i = 0; i < index; i++) {
      if (inputNumbers[i].value === "" && inputNumber.value === "") {
        inputNumbers[i].focus();
        break;
      }
    }
  });

  inputNumber.addEventListener("input", (e) => {
    if (e.target.value.length > 1) {
      e.target.value = e.target.value.slice(0, 1);
    }

    // Move to the next input if the current one is filled
    if (e.target.value.length === 1 && index < inputNumbers.length - 1) {
      inputNumbers[index + 1].focus();
    }
  });
});

const smsVarificationBtn = document.querySelector("#sms-varification-btn");
smsVarificationBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const smsModal = document.querySelector(".sms-varification");
  if (smsModal.classList.contains("modal")) {
    smsModal.classList.remove("active");
    document.querySelector(".sent-information").classList.add("active");
  } else {
    document.querySelector(".sent-information").classList.remove("active");
  }
});

const closeButton = document.querySelector("#sent-info-modal-close");
closeButton.addEventListener("click", (e) => {
  document.querySelector(".sent-information").classList.remove("active");
});
