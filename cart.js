document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("cart-container");
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    container.innerHTML = "<p style='font-size: 1.2rem;'>Кошик порожній.</p>";
    return;
  }

  container.innerHTML = cart.map((item, index) => `
    <div class="cart-item">
      <img src="${item.img || 'drone1.webp'}" alt="${item.name}" class="cart-image" />
      <div class="details">
        <h3>${item.name}</h3>
        <p>${item.price} грн</p>
        <button onclick="removeFromCart(${index})" style="background-color: #dc775e; color: white; margin-top: 8px;">Видалити</button>
      </div>
    </div>
  `).join("");
});

function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}
