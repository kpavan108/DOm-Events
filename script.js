document.addEventListener('DOMContentLoaded', (event) => {
    const addItemBtn = document.getElementById('addItemBtn');
    const changeColorBtn = document.getElementById('changeColorBtn');
    const itemList = document.getElementById('itemList');
    const itemInput = document.getElementById('itemInput');

    // Function to add a new item to the list
    function addItem() {
        const newItemText = itemInput.value;
        if (newItemText.trim() !== '') {
            const newItem = document.createElement('li');
            newItem.textContent = newItemText;

            const deleteBtn = document.createElement('span');
            deleteBtn.textContent = 'Delete';
            deleteBtn.classList.add('deleteBtn');
            deleteBtn.addEventListener('click', () => {
                itemList.removeChild(newItem);
            });

            newItem.appendChild(deleteBtn);
            itemList.appendChild(newItem);

            itemInput.value = '';
            itemInput.focus();
        }
    }

    // Function to change the background color
    function changeBackgroundColor() {
        const colors = ['#f1c40f', '#e74c3c', '#8e44ad', '#3498db', '#2ecc71'];
        const currentColor = document.body.style.backgroundColor;
        let newColor = colors[Math.floor(Math.random() * colors.length)];
        while (newColor === currentColor) {
            newColor = colors[Math.floor(Math.random() * colors.length)];
        }
        document.body.style.backgroundColor = newColor;
    }

    // Event listener for the Add Item button
    addItemBtn.addEventListener('click', addItem);

    // Event listener for the Enter key in the input field
    itemInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            addItem();
        }
    });

    // Event listener for the Change Background Color button
    changeColorBtn.addEventListener('click', changeBackgroundColor);
});
