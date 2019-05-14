function solve() {
    let inputText = document.getElementById('str').value;
    let resultElement = document.getElementById('result');

    let numbers = [];
    inputText
        .split(' ')
        .filter(x => x)
        .forEach(x => {
            if (isNaN(x)) {
                let resultRow = x.split('')
                    .map(ch => ch.charCodeAt(0))
                    .join(' ');

                let paragraphElement = document.createElement('p');
                    paragraphElement.textContent = resultRow;
                resultElement.appendChild(paragraphElement);
            } else {
                numbers.push(x);
            }
        });

    let outputWord = String.fromCharCode(...numbers);
    let paragraphElement = document.createElement('p');
        paragraphElement.textContent = outputWord;
    resultElement.appendChild(paragraphElement);
}