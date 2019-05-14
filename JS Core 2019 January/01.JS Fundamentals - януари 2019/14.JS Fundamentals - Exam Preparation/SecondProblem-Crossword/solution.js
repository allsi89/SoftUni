function solve() {
    let output = document.getElementById('output').children[0];

    let buttons = document.getElementsByTagName("button");
    let filterBtn = buttons[0].addEventListener('click', filter);
    let sortBtn = buttons[1].addEventListener('click', sort);
    let rotateBtn = buttons[2].addEventListener('click', rotate);
    let getBtn = buttons[3].addEventListener('click', extract);

    function filter() {
        let input = document.getElementById('input').value.split('');
        let secondaryCommand = document.getElementById('filterSecondaryCmd').value;
        let position = +(document.getElementById('filterPosition').value) - 1;

        switch (secondaryCommand) {
            case 'uppercase':
                output.textContent += input.filter((c) => c === c.toUpperCase() && isNaN(c))[position];
                break;
            case 'lowercase':
                output.textContent += input.filter((c) => c === c.toLowerCase() && isNaN(c))[position];
                break;
            case 'nums':
                output.textContent += input.filter((c) => !isNaN(c))[position];
                break;
        }
    }

    function sort() {
        let input = document.getElementById('input').value.split('');
        let secondaryCmd = document.getElementById('sortSecondaryCmd').value;
        let position = +document.getElementById('sortPosition').value - 1;

        switch (secondaryCmd) {
            case 'A':
                output.textContent += input.sort((a, b) => a.localeCompare(b))[position];
                break;
            case 'Z':
                output.textContent += input.sort((a, b) => b.localeCompare(a))[position];
                break;
        }
    }

    function rotate() {
        let input = document.getElementById('input').value.split('');
        let secondaryCmd = +document.getElementById('rotateSecondaryCmd').value;
        let position = +document.getElementById('rotatePosition').value - 1;

        let rotations = secondaryCmd % input.length;

        for (let i = 1; i <= rotations; i++) {
            let currentChar = input.pop();
            input.unshift(currentChar)
        }

        output.textContent += input[position];
    }

    function extract() {
        let input = document.getElementById('input').value.split('');
        let position = +document.getElementById('getPosition').value - 1;
        output.textContent += input[position];
    }
}