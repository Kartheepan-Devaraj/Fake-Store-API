const cards = document.getElementById("two");

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) =>
    json.forEach((element, index) => {
      const category = element.category;
      const html = `
      <div id="cards" data-id=${index}>
      <img
      src="${element.image}"
      alt=""
      height="200px"
      width="200px"
    />
      <br /><br />
      <h2>${category.toUpperCase()}</h2>
      <br />
      <h3>${"$" + element.price}</h3>
      <br />
      <button class="btn">View Details</button>
    </div>`;
      cards.insertAdjacentHTML("beforeend", html);
    })
  );

cards.addEventListener("click", function (event) {
  const clickedCard = event.target.closest("#cards");

  if (clickedCard) {
    const cardId = clickedCard.getAttribute("data-id");

    console.log(`Clicked Card ID: ${cardId}`);
    const productDetailsUrl = `product.html?id=${cardId}`;
    window.location.href = productDetailsUrl;
  }
});
