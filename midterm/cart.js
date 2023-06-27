document.addEventListener("DOMContentLoaded", function() {
  cartTotal = sessionStorage.getItem("totalCost");
  document.getElementById("total").value = cartTotal;
});

document.addEventListener("DOMContentLoaded", function() {
  cartTotal = parseFloat(sessionStorage.getItem("totalCost"));
  document.getElementById("total").innerHTML = cartTotal || 0;

 

  var cartItems = sessionStorage.getItem("cart");
    if (cartItems) {
      cartItems = JSON.parse(cartItems);
      let itemsTextArea = document.getElementById("items-in-cart");
      itemsTextArea.value = cartItems.join('\n');
     
    }
});


