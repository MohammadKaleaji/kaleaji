// Variables

let openBtn = document.getElementById('open-btn');
let modalContainer = document.getElementById('modal-container');
let closeBtn = document.getElementById('close-btn');

// Function
const show = () => {
    modalContainer.style.display = 'block';
}

// Event Listners
openBtn.onclick = show;


// For the close button (addEventLisner) with anonymous function

closeBtn.addEventListener('click', function() {
    modalContainer.style.display = 'none';
});

