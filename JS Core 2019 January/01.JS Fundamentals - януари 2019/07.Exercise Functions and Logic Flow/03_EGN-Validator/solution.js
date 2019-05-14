//jshint esversion:6
function validate() {

    let getEgnBtn = document.querySelector('#exercise > div > button')
        .addEventListener('click', getMyEgn);

    function getMyEgn() {
        let year = document.getElementById('year').value;

        if (year >= 1900 && year <= 2100) {
            year = (year[2] + year[3]);
        }

        let month = document.getElementById('month');
        month = month.options[month.selectedIndex].value; // selected option from dropdown menu;
        switch (month) {
            case 'January':
                month = '01';
                break;
            case 'February':
                month = '02';
                break;
            case 'March':
                month = '03';
                break;
            case 'April':
                month = '04';
                break;
            case 'May':
                month = '05';
                break;
            case 'June':
                month = '06';
                break;
            case 'July':
                month = '07';
                break;
            case 'August':
                month = '08';
                break;
            case 'September':
                month = '09';
                break;
            case 'October':
                month = '10';
                break;
            case 'November':
                month = '11';
                break;
            case 'December':
                month = '12';
                break;
        }

        let date = parseInt(document.getElementById('date').value);

        if (date < 10) {
            date = '0' + date;
        }

        let gender = Array.from(document.querySelectorAll('input[type="radio"]')); // get radio buttons
        let genderDigits;

        if (gender[0].checked) {
            genderDigits = 2;
        } else if (gender[1].checked) {
            genderDigits = 1;
        }

        let regCode = document.getElementById('region').value;

        if (regCode >= 43 && regCode <= 999) {
            regCode = regCode[0] + regCode[1];
        }

        let weightPosition = [2, 4, 8, 5, 10, 9, 7, 3, 6];

        let egnNumber = year + month + date + regCode + genderDigits;

        let sum = 0;
        for (let i = 0; i < egnNumber.length; i++) {
            let temp1 = egnNumber[i];
            let temp2 = weightPosition[i];
            sum += temp1 * temp2;
        }

        let reminder = sum % 11;

        if (reminder === 10) {
            reminder = 0;
        }

        egnNumber += reminder;

        let p = document.getElementById('egn').textContent = `Your EGN is: ${egnNumber}`;

        // reset the form
        document.getElementById('year').value = '';
        document.getElementById('month').selectedIndex = 'Select a month';
        document.getElementById('date').value = '';
        Array.from(document.querySelectorAll('input[type="radio"]')).forEach(radioBtn => radioBtn.checked = false);
        document.getElementById('region').value = '';
    }
}