let price = 1.87;
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
];

const values = [0.01, 0.05, 0.1, 0.25, 1.0, 5.0, 10.0, 20.0, 100.0];
const cashInput = document.getElementById("cash");
const changeOutput = document.getElementById("change-due");
const purchaseButton = document.getElementById("purchase-btn");
const status = document.getElementById("status");

const calculateChange = () => {
  const cashInRegister = getCashInRegister();
  const changeDue = parseFloat(
    parseFloat(cashInput.value) - parseFloat(price)
  ).toFixed(2);
  console.log("-----------------------------");
  console.log("Button was clicked");
  console.log("Cash Input: " + parseFloat(cashInput.value));
  console.log("Cash in Register: " + getCashInRegister());
  console.log("Change due: " + changeDue);
  changeOutput.textContent = "CHANGE " + changeDue;

  if (cashInRegister < changeDue) {
    status.textContent = "Status: INSUFFICIENT_FUNDS";
    console.log("Not enough cash in register");
  } else if (cashInRegister == changeDue) {
    status.textContent = "Status: CLOSED";
    console.log("Change is equal to cash in register");
  } else if (makeChange(changeDue) >= 0) {
    status.textContent = "Status: OPEN";
    console.log("Change can be made");
  } else {
    status.textContent = "Status: INSUFFICIENT_FUNDS";
    console.log("Cannot make change");
  }
};

const makeChange = (changeDue) => {
  let arrayPosition = 8;
  let partialChange = 0;
  while (arrayPosition >= 0) {
    while (
      cid[arrayPosition][1] != 0 &&
      partialChange + values[arrayPosition] <= changeDue
    ) {
      console.log(
        "Current Value of cid at " +
          values[arrayPosition] +
          " is " +
          cid[arrayPosition][1]
      );
      console.log("Adding that to partial change");
      partialChange += values[arrayPosition];
      cid[arrayPosition][1] -= values[arrayPosition];
    }
    console.log("Change due " + changeDue);
    console.log("Partial Change " + parseFloat(partialChange).toFixed(2));
    console.log("Done adding " + values[arrayPosition]);
    if (parseFloat(partialChange).toFixed(2) == changeDue) {
      return partialChange;
    }
    arrayPosition--;
  }
  console.log("return -1 from make change");
  return -1;
};
const getCashInRegister = () => {
  let total = 0.0;
  for (let v of cid) {
    total += parseFloat(v[1]);
  }
  return total.toFixed(2);
};

purchaseButton.addEventListener("click", calculateChange);

//ready to commit  need to do for 7/5
