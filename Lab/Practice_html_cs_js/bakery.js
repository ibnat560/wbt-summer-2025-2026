const calculateBtn = document.getElementById("calculate");
const clear = document.getElementById("clear");
const resultBox = document.querySelector(".result");

const chocolateCakePrice = 950;
const vanillaCakePrice = 900;

calculateBtn.addEventListener("click", (event) => {
  console.log("Button Clicked: ", event.target.id);

  const cccQty = Number(document.getElementById("cccQty").value);
  const cvcQty = Number(document.getElementById("cvcQty").value);

  const chocoloateCakeTotal = cccQty * chocolateCakePrice;
  const vanillaCakeTotal = cvcQty * vanillaCakePrice;

  const subTotal = chocoloateCakeTotal + vanillaCakeTotal;
  const vat = 0.19 * subTotal;
  const grandTotal = subTotal + vat;

  document.getElementById("ccCost").innerHTML =
    `<strong>Chocloate Cake Cost:</strong>$${chocoloateCakeTotal}`;

  document.getElementById("cvCost").innerHTML = `<Strong>
    Classic vanilla Cost :
</Strong> $${vanillaCakeTotal}`;

  document.getElementById("subtotal").innerHTML =
    `<strong> Sub Total Cost:</strong>$${subTotal1}`;

  document.getElementById("vat").innerHTML = `<strong> Vat : </strong>$${vat}`;

  document.getElementById("grandTotal").innerHTML =
    `<strong> Grand Total Cost:</strong>$${grandTotal}`;
});

clear.addEventListener("click", (event) => {
  console.log("Button Clicked :", event.target.id);

  document.getElementById("cccQty").value = 0;
  document.getElementById("cvcQty").value = 0;

  document.getElementById("ccCost").innerHTML = "";
  document.getElementById("cvCost").innerHTML = "";
});
