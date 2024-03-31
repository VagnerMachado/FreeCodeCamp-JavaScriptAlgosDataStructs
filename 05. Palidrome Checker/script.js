let input = document.getElementById("text-input");
let button = document.getElementById("check-btn");
let result = document.getElementById("result");

const check = () =>
{
    if(input.value === null || input.value === "" || input.value.length === 0)
        alert("Please input a value")
    else
    {
        let clean = input.value.replace(/[^a-z\d]/gi, '').toLowerCase();
        let start = 0;
        let end = clean.length - 1
        while(start < end)
            if(clean[start++] !== clean[end--])
                end = -1;       
        if(end >= 0)
            result.textContent = input.value + " is a palindrome";
        else           
            result.textContent = input.value + " is not a palindrome";
    }
}

button.addEventListener("click", check);