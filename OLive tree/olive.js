'use strict'
document.getElementById('cart-oil').addEventListener('submit', estimateTotal);
function estimateTotal(event) {
    event.preventDefault();

    if (document.getElementById('s-state').value === '') {
        alert('please choose your shipping state');

        document.getElementById('s-state').focus();
    }

    let btlCold = parseInt(document.getElementById('txt-q-cold').value, 10) || 0,
        btlExtra = parseInt(document.getElementById('txt-q-extra').value, 10) || 0,
        btlGarlic = parseInt(document.getElementById('txt-q-garlic').value, 10) || 0,
        btlLemon = parseInt(document.getElementById('txt-q-lemon').value, 10) || 0,
        state = document.getElementById('s-state').value,
        shippingMethod = document.getElementById('r-method-pickup').value;
    var methods = document.getElementById('cart-oil').r_method;
    for (var i = 0; i < methods.length; i++) {
        if (methods[i].checked == true) {
            shippingMethod = methods[i].value;
        }
    }
    let taxFactor = 1;
    if (state === 'CA') {
        taxFactor = 1.075;  // tax is 7.5% in California state.
    } else if (state === 'WA') {
        taxFactor = 1.065
    } else {
        taxFactor = 1;
    }
    let shippingCostPer = 0;
    switch (shippingMethod) {
        case 'pickup':
            shippingCostPer = 0;
            break;
        case 'us mail':
            shippingCostPer = 2;
            break;
        case 'ups':
            shippingCostPer = 3;
            break;
    }
    let totalBottles = btlCold + btlExtra + btlGarlic + btlLemon
    let shippingCost = totalBottles * shippingCostPer;

    var subtotal = ((btlExtra * 10) + (btlCold * 8) + (btlGarlic * 10)) + (btlLemon * 10) * taxFactor;

    var estimate = "$" + (subtotal + shippingCost).toFixed(2);
    document.getElementById('txt-estimate').value = estimate;
    document.getElementById('results').innerHTML = 'Total bottles: ' + totalBottles + '<br>';
    document.getElementById('results').innerHTML += 'Total shipping: $' + shippingCost.toFixed(2) + '<br>';
    document.getElementById('results').innerHTML += 'tax: ' + ((taxFactor - 1) * 100).toFixed(2) + '%';

}
