const container = document.querySelector('#container');
const resizeBtn = document.querySelector('#resize-btn')

const containerSize = 800; // Total widht and height in pixels

function createGrid(gridSize) {

    // Clear existing grid
    container.innerHTML = '';

    const SquareSize = containerSize / gridSize;
    const totalSquares = gridSize * gridSize;


    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('square');

        square.style.width = `${SquareSize}px`;
        square.style.height = `${SquareSize}px`;

        // Initialize opacity
        square.dataset.opacity = 0;

        square.addEventListener('mouseenter', () => {

            // square.style.backgroundColor = 'black';

            let currentOpacity = Number(square.dataset.opacity);
            if (currentOpacity < 1) {
                currentOpacity += 0.1;
                square.dataset.opacity = currentOpacity;
                // Random RGB color
                const r = Math.floor(Math.random() * 256);
                const g = Math.floor(Math.random() * 256);
                const b = Math.floor(Math.random() * 256);
                square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
                square.style.opacity = currentOpacity;
            }


        });

        container.appendChild(square);
    }
}

// Start Grid with 16x16
createGrid(16);

// Resize button
resizeBtn.addEventListener('click', () => {
    let userInput = prompt('Enger number of squares per size:')
    if (userInput === null) return;
    const gridSize = Number(userInput);

    if (gridSize < 1 || gridSize > 100 || isNaN(gridSize)) {
        alert("Please enter an integer number between 1 and 100");
        return;
    }

    createGrid(gridSize);

});