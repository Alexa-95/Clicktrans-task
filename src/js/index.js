const form = document.getElementById('mainForm');
const textarea = document.getElementById('description');
const radioButtons = document.querySelectorAll('[name="type"]');
const radioButtonsYes = document.getElementById('typeYes');
const radioButtonsNo = document.getElementById('typeNo');
const select = document.getElementById('vat').value;
const priceNetto = document.getElementById('priceNetto').value;
const priceBrutto = document.getElementById('priceBrutto').value;

// priceBrutto = priceNetto + (priceNetto * select.value);