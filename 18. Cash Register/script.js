// Global variables
let price = 19.5;
let cid = [
  ["PENNY", 0.5],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
];

document.getElementById("purchase-btn").addEventListener("click", function () {
  let cash = parseFloat(document.getElementById("cash").value);

  function checkCashRegister(price, cash, cid) {
    const currencyUnit = [
      ["PENNY", 0.01],
      ["NICKEL", 0.05],
      ["DIME", 0.1],
      ["QUARTER", 0.25],
      ["ONE", 1],
      ["FIVE", 5],
      ["TEN", 10],
      ["TWENTY", 20],
      ["ONE HUNDRED", 100],
    ];

    let changeDue = cash - price;
    let totalCid = cid
      .reduce((sum, currency) => sum + currency[1], 0)
      .toFixed(2);

    if (changeDue > totalCid) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    } else if (changeDue.toFixed(2) === totalCid) {
      return { status: "CLOSED", change: cid.filter((v) => v[1] != 0) };
    } else {
      let changeArray = [];
      for (let i = currencyUnit.length - 1; i >= 0; i--) {
        let currencyName = currencyUnit[i][0];
        let currencyValue = currencyUnit[i][1];
        let amountInDrawer = cid[i][1];
        let amountToReturn = 0;

        while (changeDue >= currencyValue && amountInDrawer > 0) {
          changeDue -= currencyValue;
          changeDue = changeDue.toFixed(2);
          amountInDrawer -= currencyValue;
          amountToReturn += currencyValue;
        }

        if (amountToReturn > 0) {
          changeArray.push([currencyName, amountToReturn]);
        }
      }

      if (changeDue > 0) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
      } else {
        return { status: "OPEN", change: changeArray };
      }
    }
  }

  if (cash < price) {
    alert("Customer does not have enough money to purchase the item");
  } else if (cash === price) {
    document.getElementById("change-due").innerText =
      "No change due - customer paid with exact cash";
  } else {
    let result = checkCashRegister(price, cash, cid);
    let changeMessage = `Status: ${result.status}`;
    if (result.change.length > 0) {
      changeMessage +=
        " " +
        result.change
          .map((currency) => `${currency[0]}: $${currency[1].toFixed(2)}`)
          .join(" ");
    }
    document.getElementById("change-due").innerText = changeMessage;
  }
});
