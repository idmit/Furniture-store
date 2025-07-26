function getCart() {
  try { return JSON.parse(localStorage.getItem('cart') || '[]'); }
  catch { return []; }
}
function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}
function addToCart(id) {
  let cart = getCart();
  const idx = cart.findIndex(i => i.id === id);
  if (idx !== -1) {
    cart[idx].qty++;
  } else {
    cart.push({id, qty: 1});
  }
  saveCart(cart);
  updateCartCount();
  alert("Товар добавлен в корзину!");
}
function updateCartCount() {
  const el = document.getElementById('cart-count');
  if (!el) return;
  const cart = getCart();
  const count = cart.reduce((sum, i) => sum + i.qty, 0);
  el.textContent = count ? `(${count})` : "";
}
updateCartCount();