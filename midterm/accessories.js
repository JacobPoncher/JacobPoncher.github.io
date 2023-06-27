let cart = [];
var total = 0 ;
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


    function addItemToCart(elementId) {
  var selectElement = document.getElementById(elementId + "-select");
  var addAmount = parseFloat(selectElement.value);
  total += addAmount;
  document.getElementById("total").innerHTML = total;
  sessionStorage.setItem("totalCost", total);

  var cart = sessionStorage.getItem("cart");
  if (cart) {
    cart = JSON.parse(cart);
    cart.push(selectElement.options[selectElement.selectedIndex].text);
  } else {
    cart = [selectElement.options[selectElement.selectedIndex].text];
  }
  sessionStorage.setItem("cart", JSON.stringify(cart));
}