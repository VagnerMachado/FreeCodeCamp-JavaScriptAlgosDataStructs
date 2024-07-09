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

const cashInput = document.getElementById("cash");
const changeOutput = document.getElementById("change-due");
const purchaseButton = document.getElementById("purchase-btn");
const status = document.getElementById("status");

const calculateChange = () => {
  const cashInRegister = getCashInRegister();
  const changeDue = parseFloat(
    parseFloat(cashInput.value) - parseFloat(price)
  ).toFixed(2);

  changeOutput.textContent = "CHANGE " + changeDue;
  console.log("Button was clicked");
  console.log("Cash Input: " + parseFloat(cashInput.value));
  console.log("Cash in Register: " + getCashInRegister());
  console.log("Change due: " + changeDue);

  if (cashInRegister < changeDue)
    status.textContent = "Status: INSUFFICIENT_FUNDS";
  else if (cashInRegister == changeDue) status.textContent = "Status: CLOSED";
  else status.textContent = "Status: OPEN";
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
