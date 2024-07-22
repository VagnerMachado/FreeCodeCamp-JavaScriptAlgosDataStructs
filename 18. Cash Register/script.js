// --------------------   references ------------------------

let price = 3.26;
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

price = price * 100;
let values = [0.01, 0.05, 0.1, 0.25, 1.0, 5.0, 10.0, 20.0, 100.0];
values = values.map((val) => Math.ceil(val * 100.0));
let cidCopy = cid.map((item) => [item[0], Math.ceil(item[1] * 100.0)]);
console.log("values: " + values);
console.log("cid: " + cid);
console.log("copyCid: " + cidCopy);
const register = document.getElementById("register");
let cashInput = document.getElementById("cash");
const changeDue = document.getElementById("change-due");
const purchaseButton = document.getElementById("purchase-btn");
const itemPrice = document.getElementById("price");
itemPrice.textContent = `Price: ${(price / 100).toFixed(2)}`;

// -------------------------------------------------------

const getCashInRegister = () => {
  let total = 0.0;
  for (let v of cidCopy) {
    total += v[1];
  }
  return total;
};

// -------------------------------------------------------

const printRegister = () => {
  let res = "";
  for (let v of cid.reverse()) {
    if (v[1] != 0) res += v[0] + ": $" + v[1] + " ";
  }
  return res.substring(0, res.length - 1);
};

const updateRegister = () => {
  register.innerHTML = cid
    .map((item) => item[0] + " " + item[1] + "<br>")
    .toString()
    .split(",")
    .join(" ");
};

// -------------------------------------------------------

const calculateChange = () => {
  const cashInRegister = getCashInRegister();
  const changeAmount = cashInput.value * 100 - price;
  console.log("-----------------------------");
  console.log("Button was clicked");
  console.log("Cash Input: " + cashInput.value * 100);
  console.log("Cash in Register: " + getCashInRegister());
  console.log("Change due: " + changeAmount);

  if (changeAmount == 0) {
    changeDue.textContent = "No change due - customer paid with exact cash";
    cashInput.value = "";
  } else if (changeAmount < 0) {
    alert("Customer does not have enough money to purchase the item");
    cashInput.value = "";
  } else if (cashInRegister < changeAmount) {
    changeDue.textContent = "Status: INSUFFICIENT_FUNDS";
    cashInput.value = "";
    console.log("Not enough cash in register");
  } else if (cashInRegister == changeAmount) {
    changeDue.textContent = "Status: CLOSED" + printRegister();
    console.log("#Status: CLOSED " + printRegister() + "#");
    cashInput.value = "";
    console.log("Change is equal to cash in register");
  } else if (makeChange(changeAmount) >= 0) {
    console.log("Change can be made");
    // assign cidCopy to cid
    console.log("CID after change made: " + cid);
  } else {
    changeDue.textContent = "Status: INSUFFICIENT_FUNDS";
    console.log("Cannot make change");
  }
  console.log("CID: " + cid);
};

// -------------------------------------------------------
const makeChange = (changeAmount) => {
  let arrayPosition = 8;
  let partialChange = 0;
  let fromDrawer = 0;
  let changeGiven = "";
  while (arrayPosition >= 0) {
    fromDrawer = 0;
    while (
      cidCopy[arrayPosition][1] != 0 &&
      partialChange + values[arrayPosition] <= changeAmount
    ) {
      console.log(
        "Current Value of cid at " +
          values[arrayPosition] +
          " is " +
          cidCopy[arrayPosition][1]
      );
      fromDrawer += values[arrayPosition];
      console.log("Adding that to partial change");
      partialChange += values[arrayPosition];
      cidCopy[arrayPosition][1] -= values[arrayPosition];
    }
    if (fromDrawer > 0)
      changeGiven +=
        cidCopy[arrayPosition][0] + ": $" + fromDrawer / 100.0 + " ";
    console.log("Change due " + changeAmount);
    console.log("Partial Change " + partialChange);
    console.log("Done adding " + values[arrayPosition]);
    if (partialChange == changeAmount) {
      cid = [...cidCopy];
      cid = cid.map((v, index) => {
        console.log("INDEX: " + index);
        return [
          v[0],
          index <= 3 ? (v[1] / 100).toFixed(2) : Math.trunc(v[1] / 100),
        ];
      });
      changeDue.textContent =
        "Status: OPEN " + changeGiven.substring(0, changeGiven.length - 1);
      console.log(
        "#Status: OPEN " +
          changeGiven.substring(0, changeGiven.length - 1) +
          "#"
      );
      updateRegister();
      console.log("change was made");
      return partialChange;
    }
    arrayPosition--;
  }
  console.log("return -1 from make change");
  return -1;
};

purchaseButton.addEventListener("click", calculateChange);
updateRegister();
//ready to commit  need to do for 7/5

// Status: OPEN TWENTY: $60 TEN: $20 FIVE: $15 ONE: $1 QUARTER: $0.5 DIME: $0.2 PENNY: $0.04"
