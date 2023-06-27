let cart = [];
      var total = 0 ;
      document.addEventListener("DOMContentLoaded", function() {
      var cart = sessionStorage.getItem("cart");
  });
      document.addEventListener("DOMContentLoaded", function() {
      cartTotal = parseFloat(sessionStorage.getItem("totalCost"));
      document.getElementById("total").innerHTML = cartTotal;

      if (cartTotal > 0){
        total = cartTotal;
       }
       else{
        total=0
       }
       document.getElementById("total").innerHTML = total;
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
