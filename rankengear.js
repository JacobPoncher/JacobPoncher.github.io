
var cart = [];
var total = 0;

document.addEventListener("DOMContentLoaded", function() {
  var cartTotal = parseFloat(sessionStorage.getItem("totalCost"));
  if (!isNaN(cartTotal)) {
    total = cartTotal;
    document.getElementById("total").innerHTML = total;
  }
  var storedCart = sessionStorage.getItem("cart");
  if (storedCart) {
    cart = JSON.parse(storedCart);
  }
});

function addItemToCart(item) {
  var itemPrice = parseFloat(document.getElementById(item + "-price").innerHTML);

  total += itemPrice;
  document.getElementById("total").innerHTML = total.toFixed(2);
  var newItem = item.charAt(0).toUpperCase() + item.slice(1) + '('+' '+ '$'+itemPrice+')';
  cart.push(newItem);


  sessionStorage.setItem("cart", JSON.stringify(cart));
  sessionStorage.setItem("totalCost", total);
}
