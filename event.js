document.addEventListener('DOMContentLoaded', (event) => {
    // Handle click event
    const alertButton = document.getElementById('alertButton');
    alertButton.addEventListener('click', () => {
        alert('Button was clicked!');
    });

    // Handle mouseover and mouseout events
    const hoverParagraph = document.getElementById('hoverParagraph');
    hoverParagraph.addEventListener('mouseover', () => {
        hoverParagraph.style.color = 'blue';
    });
    hoverParagraph.addEventListener('mouseout', () => {
        hoverParagraph.style.color = 'black';
    });

    // Handle double-click event
    const toggleDiv = document.getElementById('toggleDiv');
    toggleDiv.addEventListener('dblclick', () => {
        if (toggleDiv.style.display === 'none') {
            toggleDiv.style.display = 'block';
        } else {
            toggleDiv.style.display = 'none';
        }
    });

    // Handle keydown event
    const keyInput = document.getElementById('keyInput');
    const keyOutput = document.getElementById('keyOutput');
    keyInput.addEventListener('keydown', (event) => {
        keyOutput.textContent = `Key code: ${event.keyCode}`;
    });
});
