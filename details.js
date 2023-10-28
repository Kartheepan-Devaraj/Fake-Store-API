const cards = document.getElementById("two");

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");
const id = Number(productId) + 1;
console.log(productId, id);

let cartItems = JSON.parse(localStorage.getItem("productId")) || [];

// fetch(`https://fakestoreapi.com/products/${productId}`)
//   .then((res) => res.json())
//   .then((json) => {
//     const html = `
//         <div class="img">
//         <img  src="${json.image}" alt="" height="250px" width="250px">
//         </div>
//       <div class="details">
//       <p><b>${json.title}</b></p><br>
//       <p class="description"><b class="para">Info:</b>&nbsp&nbsp${json.description}</p><br>
//       <p><b class="para">Category:</b>&nbsp&nbsp${json.category}</p><br>
//       <p><b class="para">Price:</b>&nbsp&nbsp${json.price}</p><br>
//       <p><b class="para">Rate:</b>&nbsp&nbsp${json.rating.rate}</p><br>
//       <p>${json.rating.count} people rate this product</p><br>
//       <button class="btn">Add to Cart</button>
//     </div>`;

//     cards.insertAdjacentHTML("beforeend", html);
//   });

fetch(`https://fakestoreapi.com/products/${id}`)
  .then((res) => res.json())
  .then((json) => {
    const html = `  
            <div class="img">
            <img  src="${json.image}" alt="" height="250px" width="250px">
            </div>
          <div class="details">
          <p><b>${json.title}</b></p><br>
          <p class="description"><b class="para">Info:</b>&nbsp&nbsp${json.description}</p><br>
          <p><b class="para">Category:</b>&nbsp&nbsp${json.category}</p><br>
          <p><b class="para">Price:</b>&nbsp&nbsp${json.price}</p><br>
          <p><b class="para">Rate:</b>&nbsp&nbsp${json.rating.rate}</p><br>
          <p>${json.rating.count} people rate this product</p><br>
          <button id="add-to-cart" class="btn">Add to Cart</button>
        </div>`;

    cards.insertAdjacentHTML("beforeend", html);
    console.log(json);

    const addCart = document.getElementById("add-to-cart");

    // const productId = `cart_${json.id}`;
    console.log(productId);
    addCart.addEventListener("click", () => {
      console.log(cartItems);
      const existingProduct = cartItems.findIndex(
        (item) => item.id === json.id
      );
      console.log(existingProduct);

      if (existingProduct != -1) {
        cartItems[existingProduct].quantity += 1;
      } else {
        cartItems.push({
          id: json.id,
          title: json.category,
          price: json.price,
          imageUrl: json.image,
          quantity: 1,
        });
      }
      localStorage.setItem("productId", JSON.stringify(cartItems));
    });
  });

console.log(cartItems);

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => console.log(json));
