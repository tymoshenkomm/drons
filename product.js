function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("open");
}

function addToStorage(key, product) {
  let items = JSON.parse(localStorage.getItem(key)) || [];

  if (!items.find(item => item.id === product.id)) {
    items.push(product);
    localStorage.setItem(key, JSON.stringify(items));
    alert(`${product.name} додано до ${key === "cart" ? "кошика" : "обраного"}!`);
  } else {
    alert(`${product.name} вже є в ${key === "cart" ? "кошикy" : "обраному"}.`);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const buyBtn = document.querySelector(".buy-btn");
  const favBtn = document.querySelector(".favorite-btn");

  if (buyBtn) {
    buyBtn.addEventListener("click", function () {
      const product = {
        id: this.dataset.id,
        name: this.dataset.name,
        price: this.dataset.price,
        img: this.dataset.img
      };
      addToStorage("cart", product);
    });
  }

  if (favBtn) {
    favBtn.addEventListener("click", function () {
      const product = {
        id: this.dataset.id,
        name: this.dataset.name,
        price: this.dataset.price,
        img: this.dataset.img
      };
      addToStorage("favorites", product);
    });
  }
});
