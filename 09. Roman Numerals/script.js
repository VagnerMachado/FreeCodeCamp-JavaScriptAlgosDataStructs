const inputText = document.getElementById("number")
const outputDiv = document.getElementById("output")
const button = document.getElementById("convert-btn")

const val = new Map();
val.set(1 , [ "I",  "X", "C", "M"])
val.set(2 , [ "II", "XX", "CC", "MM"])
val.set(3 , [ "III", "XXX", "CCC", "MMM"])
val.set(4 , [ "IV", "XL", "CD"])
val.set(5 , [ "V", "L", "D"])
val.set(6 , [ "VI", "LX", "DC"])
val.set(7 , [ "VII", "LXX", "DCC"])
val.set(8 , [ "VIII", "LXXX", "DCCC"])
val.set(9 , [ "IX", "XC", "CM"])

const convert = () => {
    let userInput = parseInt(inputText.value);
    let reverseInput = inputText.value.split('').reverse();
    let position = 0;
    let output = "";
    if (inputText.value.length === 0)
        output = "Please enter a valid number";
    while (position < reverseInput.length) {
        if (userInput <= 0) {
            output = "Please enter a number greater than or equal to 1";
            position = reverseInput.length
        }
        else if (userInput > 3999) {
            output = "Please enter a number less than or equal to 3999";
            position = reverseInput.length
        }
        else if (parseInt(reverseInput[position]) != 0) {
            output = val.get(parseInt(reverseInput[position]))[position] + output
        }
        position++;
    }
    outputDiv.textContent = output;
}
button.addEventListener("click", convert)