//jshint esversion:6
function solve() {
    let rangeOfCards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    document.querySelector('button').addEventListener('click', handOfCards);

    function handOfCards() {
        let from = document.querySelectorAll('input')[0].value;
        let to = document.querySelectorAll('input')[1].value;
        let suit = document.querySelector('select');
        let strSelected = suit.options[suit.selectedIndex].value;
        let color = strSelected.split(' ');

        if ((rangeOfCards.indexOf(from) <= rangeOfCards.indexOf(to)) &&
            (rangeOfCards.indexOf(from) !== -1 && rangeOfCards.indexOf(to) !== -1)) {

            let myHandArray = rangeOfCards.slice(rangeOfCards.indexOf(from), rangeOfCards.indexOf(to) + 1);
            for (let value of myHandArray) {
                let div = document.createElement('div');
                div.classList.add('card');
                document.querySelector('section').appendChild(div);

                let p1 = document.createElement('p');
                p1.innerHTML = color[1];
                div.appendChild(p1);

                let p2 = document.createElement('p');
                p2.innerHTML = value;
                div.appendChild(p2);

                let p3 = document.createElement('p');
                p3.innerHTML = color[1];
                div.appendChild(p3);
            }
        }
    }
}