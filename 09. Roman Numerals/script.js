const inputText = document.getElementById("number");
const outputDiv = document.getElementById("output");
const button = document.getElementById("convert-btn");

const val = new Map();
val.set("1", ["I", "X", "C", "M"]);
val.set("2", ["II", "XX", "CC", "MM"]);
val.set("3", ["III", "XXX", "CCC", "MMM"]);
val.set("4", ["IV", "XL", "CD"]);
val.set("5", ["V", "L", "D"]);
val.set("6", ["VI", "LX", "DC"]);
val.set("7", ["VII", "LXX", "DCC"]);
val.set("8", ["VIII", "LXXX", "DCCC"]);
val.set("9", ["IX", "XC", "CM"]);

const convert = () => {
  let userInputInt = parseInt(inputText.value);
  let reverseInputStr = inputText.value.split("").reverse();
  let position = 0;
  let output = "";
  if (reverseInputStr.length === 0) {
    output = "Please enter a valid number";
    outputDiv.style.border = "3px solid red";
  }

  while (position < reverseInputStr.length) {
    if (userInputInt <= 0) {
      output = "Please enter a number greater than or equal to 1";
      position = reverseInputStr.length;
      outputDiv.style.border = "3px solid orange";
    } else if (userInputInt > 3999) {
      output = "Please enter a number less than or equal to 3999";
      position = reverseInputStr.length;
      outputDiv.style.border = "3px solid orange";
    } else if (parseInt(reverseInputStr[position]) != 0) {
      output = val.get(reverseInputStr[position])[position] + output;
      outputDiv.style.border = "3px solid green";
    }
    position++;
  }
  outputDiv.style.visibility = "visible";
  outputDiv.textContent = output;
};
button.addEventListener("click", convert);
