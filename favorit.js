document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("favorites-container");
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  if (favorites.length === 0) {
    container.innerHTML = "<p style='font-size: 1.2rem;'>Обране порожнє.</p>";
    return;
  }

  container.innerHTML = favorites.map(item => `
    <div class="product__card">
      <img src="${item.img}" alt="${item.name}" class="product__image" />
      <h3>${item.name}</h3>
      <p class="price">₴${item.price}</p>
      <button onclick="addToCartFromFav(${item.id}, '${item.name}', ${item.price}, '${item.img}')">У кошик</button>
    </div>
  `).join("");
});

function addToCartFromFav(id, name, price, img) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (!cart.find(item => item.id === id)) {
    cart.push({ id, name, price, img });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Товар додано до кошика!");
  } else {
    alert("Товар вже є у кошику.");
  }
}
