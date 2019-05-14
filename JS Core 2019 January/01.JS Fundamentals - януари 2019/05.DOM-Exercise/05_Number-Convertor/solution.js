//jshint esversion:6

function solve() {
    let convertBtn = document.getElementsByTagName('button')[0];

    // gets the option menu
    let selectElementTo = document.getElementById('selectMenuTo');

    // creates the first option (binary)
    let optionBinary = document.querySelector('#selectMenuTo option');
    optionBinary.textContent = 'Binary';
    
    // creates the second option (hexadecimal)
    let optionHexadecimal = document.createElement('option');
    optionHexadecimal.textContent = 'hexadecimal';
    selectElementTo.appendChild(optionHexadecimal);

    convertBtn.addEventListener('click', ()=>{
        let inputNum = +document.getElementById('input').value;
        
        if(inputNum < 0){
            inputNum = 0xFFFFFFFF + inputNum + 1;
        }
        if(optionBinary.selected){           
            let result =  parseInt(inputNum).toString(2);
            document.getElementById('result').value = result;
        }else{
            let result =  parseInt(inputNum).toString(16);
            document.getElementById('result').value = result.toUpperCase();
        }
    });
}