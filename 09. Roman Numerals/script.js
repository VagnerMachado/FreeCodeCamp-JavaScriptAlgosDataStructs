const input = document.getElementById("number")
const output = document.getElementById("output")

output.textContent = "got it" + input.ariaValueMax;
const val = new Map();

val.set(1 , [ "I", "X", "C", "M"])
val.set(2 , [ "II", "XX", "CC", "MM"])
val.set(3 , [ "III", "XXX", "CCC", "MMM"])
val.set(4 , [ "IV", "XL", "CD"])
val.set(5 , [ "V", "L", "D"])
val.set(6 , [ "VI", "LX", "DC"])
val.set(7 , [ "VII", "LXX", "DCC"])
val.set(8 , [ "VIII", "LXXX", "DCCC"])
val.set(9 , ["IX", "XC", "CM"])

let userInput = "92195"
let reverseInput = userInput.split('').reverse();
let position = 0;
let output = "";

while (position < reverseInput.length)
{
    if (parseInt(userInput) > 3999)
    {
        window.alert("Enter val btw 1 and 3999")
        position = reverseInput.length
    }
    else if (parseInt(reverseInput[position]) != 0)
    {
        output = val.get(parseInt(reverseInput[position]))[position] + output
        position++;
    }
}

if(output.length)
    console.log("output:" + output)

