const card = document.getElementById("cartDetails");

const cartItems = JSON.parse(localStorage.getItem("productId"));

console.log(cartItems);

cartItems.forEach((element, index) => {
  console.log(element);
  const html = `  
<div>
<img
  src="${element.imageUrl}"
  alt=""
  height="100px "
  width="100px"
/>
</div>
<div class="name">
<h2>${element.title}</h2>
<h2>${"$" + element.price}</h2>
</div>
<div class="quantity">
<button class="plus" data-index="${index}"><b>+</b></button>
<h2 class="number">${element.quantity}</h2>
<button class="minus" data-index="${index}"><b>-</b></button>
</div>`;

  card.insertAdjacentHTML("beforeend", html);
  document.getElementById("two").appendChild(card);
});

document.addEventListener("DOMContentLoaded", function () {
  const plusButton = document.querySelector(".plus");
  const minus = document.querySelector(".minus");
  const number = document.querySelector(".number");

  plusButton.addEventListener("click", function (e) {
    let currentNumber = Number(number.textContent);
    currentNumber += 1;
    number.textContent = currentNumber;
  });

  minus.addEventListener("click", function (e) {
    let currentNumber = Number(number.textContent);
    currentNumber -= 1;
    number.textContent = currentNumber;

    if (number.textContent < 1) {
    }
  });
});

// const urlParams = new URLSearchParams(window.location.search);
// const productId = urlParams.get("id");
// const id = Number(productId) + 1;
