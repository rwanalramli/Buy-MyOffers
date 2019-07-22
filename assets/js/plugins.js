$(document).ready(function() {


});

function increaseValue() {
  var quantityValue = parseInt(document.getElementById('quantity').value, 10);
  var priceValue = parseInt(document.getElementById('price').value, 10);

  quantityValue = isNaN(quantityValue) ? 0 : quantityValue;
  quantityValue++;
  priceValue = priceValue + 30;
  document.getElementById('quantity').value = quantityValue;
  document.getElementById('price').value = priceValue;


}

function decreaseValue() {
  var quantityValue = parseInt(document.getElementById('quantity').value, 10);
  var priceValue = parseInt(document.getElementById('price').value, 10);
  quantityValue = isNaN(quantityValue) ? 0 : quantityValue;
  quantityValue < 1 ? quantityValue = 1 : '';
  priceValue = priceValue - 30;
  priceValue < 30 ? priceValue = 0 : '';
  quantityValue--;
  document.getElementById('quantity').value = quantityValue;
  document.getElementById('price').value = priceValue;
}
