const img1 = document.querySelector(".image-1");
const img = document.querySelectorAll("#image");
const btn = document.querySelector(".btn");
const subtotal = document.querySelector(".subtotal");
const cartContainer = document.querySelector(".row-container");
const finalprice = document.querySelector(".finalprice");
const quantities = document.querySelectorAll("#quantity");

img.forEach((value) => {
  value.addEventListener("click", () => {
    imgSrc = value.src;
    img1.src = imgSrc;
  });
});

localStorage.clear();

btn.addEventListener("click", () => {
  const product = btn.parentElement.parentElement;
  const name = product.querySelector("h1").innerText;

  const price = product.querySelector(".rate").innerText;
  const quantity = product.querySelector(".quantity").value;
  const finalPrice = quantity * price;

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push({
    name: name,
    price: price,
    finalPrice: finalPrice,
    quantity: quantity,
    img: img1.src,
  });

  localStorage.setItem("cart", JSON.stringify(cart));
});

function renderCart() {
  cartContainer.innerHTML = "";

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.forEach((product) => {
    cartContainer.innerHTML += `
    <td class="buy-1">
      <img src=${product.img} />
      <div class="shirt-price">
        <p>${product.name}</p>
        <p>price: $${product.price}</p>
        <p class="remove">Remove</p>
      </div>
    </td>
    <td >$<span id="price">${product.price}</span></td>
    <td>
      <input
        id="quantity"
        class="quantity"
        type="number"
        value=${product.quantity}
        min="0"
        max="10"
      />
    </td>
    <td>$<span class="finalprice">${product.finalPrice}</span></td>
    `;
  });
}
renderCart();

window.addEventListener("storage", () => {
  renderCart();
});

quantities.forEach((quantity) => {
  quantity.addEventListener("click", () => {
    const price = quantity.parentElement.parentElement.parentElement;
    const price1 = price.querySelector("#price");
    const finalPrice = price.querySelector(".finalprice");
    const Final = quantity.value * price1.innerText;
    finalPrice.innerText = `$${Final}`;
  });
});
