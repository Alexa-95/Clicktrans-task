let form = document.getElementById('mainForm');
let textarea = document.getElementById('description');
let radioButtons = document.querySelectorAll('[name="type"]');
let radioButtonsYes = document.getElementById('typeYes');
let radioButtonsNo = document.getElementById('typeNo');
let select = document.getElementById('vat');
let priceNetto = document.getElementById('priceNetto');
let priceBrutto = document.getElementById('priceBrutto');

// priceBrutto do 2 miejsc po przecinku, to samo cena netto
// żeby przecinek też był cyfra

function reSum() {
  priceBrutto.value = parseFloat(select.value) * parseFloat(priceNetto.value) + parseFloat(priceNetto.value);
}