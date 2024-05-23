const input = document.getElementById("user-input");
const output = document.getElementById("results-div");
const check = document.getElementById("check-btn");
const clear = document.getElementById("clear-btn");

const validate_input = () => {
  const inputValue = input.value;
  if (inputValue === "" || inputValue === null || inputValue === "null") {
    input.value = "";
    window.alert("Please provide a phone number");
    return;
  }

  const phoneNumberRegex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;
  if (phoneNumberRegex.test(inputValue)) {
    output.innerHTML = "Valid US number: " + inputValue;
  } else {
    output.innerHTML = "Invalid US number: " + inputValue;
  }
  input.value = "";
};

const clear_output = () => {
  output.innerHTML = ""; // Clear the outputs
};

check.addEventListener("click", validate_input);
clear.addEventListener("click", clear_output);
