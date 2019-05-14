//jshint esversion: 6

function solve() {
    let searchButton = document.getElementById('searchBtn');
    searchButton.addEventListener('click', () => {
        let userInput = document.getElementById('searchField').value;
        let tableRows = Array.from(document.querySelectorAll('tbody tr'));

        for (const row of tableRows) {
            if (row.textContent.toLowerCase().includes(userInput)) {
                row.setAttribute('class', 'select');
            }
        }
        document.getElementById('searchField').value = '';
    });
}