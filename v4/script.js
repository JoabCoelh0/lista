let total = 0;

function addItem() {
    const itemName = document.getElementById('item-name').value;
    if (itemName.trim() !== "") {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            ${itemName}
            <input type="number" min="0" step="0.01" placeholder="R$" onchange="updateTotal(this) ">
        `;
        document.getElementById('shopping-list').appendChild(listItem);
        document.getElementById('item-name').value = "";
    }
}

function updateTotal(input) {
    const value = parseFloat(input.value);
    if (!isNaN(value)) {
        total += value;
    } else {
        total -= parseFloat(input.getAttribute('data-prev') || 0);
    }
    input.setAttribute('data-prev', value);
    document.getElementById('total-price').textContent = total.toFixed(2);
}
