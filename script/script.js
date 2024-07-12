document.getElementById('itemForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const itemName = document.getElementById('itemName').value;
    const itemQuantity = parseInt(document.getElementById('itemQuantity').value);
    const itemPrice = parseFloat(document.getElementById('itemPrice').value);
    const itemRoom = document.getElementById('itemRoom').value;

    const itemSubtotal = itemQuantity * itemPrice;
    const shoppingList = document.getElementById('shoppingList');

    const itemDiv = document.createElement('div');
    itemDiv.className = 'item';
    itemDiv.innerHTML = `
        <span>${itemName} (${itemRoom})</span>
        <span>Quantidade: ${itemQuantity}</span>
        <span>R$ ${itemPrice.toFixed(2)}</span>
        <span>Subtotal: R$ ${itemSubtotal.toFixed(2)}</span>
    `;
    
    shoppingList.appendChild(itemDiv);
    
    updateTotal(itemSubtotal);
    
    document.getElementById('itemForm').reset();
});

function updateTotal(itemSubtotal) {
    const totalPriceElement = document.getElementById('totalPrice');
    const currentTotal = parseFloat(totalPriceElement.textContent);
    const newTotal = currentTotal + itemSubtotal;
    totalPriceElement.textContent = newTotal.toFixed(2);
}
