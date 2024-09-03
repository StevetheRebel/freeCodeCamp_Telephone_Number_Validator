const inputs = document.querySelectorAll(".input");
const disNum = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const resultEl = document.getElementById("results-div");
const clearBtn = document.getElementById("clear-btn");

// Handle input into the container through the display numbers
inputs.forEach((input) => {
  input.addEventListener("click", () => {
    updateInput(input.innerText);
  });
});

function updateInput(value) {
  disNum.value += value;
}

// End

// Function to check if the telephone number is valid
function telephoneChecker(num) {
  const pattern = /^(1\s?)?(\(\d{3}\)\s?|\d{3}[-\s]?)\d{3}[-\s]?\d{4}$/;

  return pattern.test(num);
}

// Function to handle the error when there's no input
function handleError() {
  alert("Please provide a phone number");
}

// Function to clear the input space once number is checked
function clearInput() {
  disNum.value = "";
}

function validStatement(num) {
  const msg = `<p class="valid-msg">Valid US number: <br/> ${num}</p>`;
  resultEl.innerHTML += msg;
}

function invalidStatement(num) {
  const msg = `<p class="invalid-msg">Invalid US number: <br/> ${num}</p>`;
  resultEl.innerHTML += msg;
}

// checking the number validity
checkBtn.addEventListener("click", () => {
  event.preventDefault();

  if (disNum.value == "") {
    handleError();
  } else if (telephoneChecker(disNum.value)) {
    validStatement(disNum.value);

    clearInput();
  } else {
    invalidStatement(disNum.value);
    clearInput();
  }
});

//clearing the result container
clearBtn.addEventListener("click", () => {
  resultEl.innerHTML = "";
});
