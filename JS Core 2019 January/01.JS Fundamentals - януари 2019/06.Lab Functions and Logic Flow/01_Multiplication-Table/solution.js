//jshint esversion: 6

function solve() {
  
  let number = +document.getElementById('num1').value;
  let multiplier = +document.getElementById('num2').value;
  let resultDiv = document.getElementById('result');

  function wrongInput() {
    if(number > multiplier) {
      resultDiv.innerHTML = "Try with other numbers.";
    }
  }

  function printTable(number, multiplier) {
    for (let i = number; i <= multiplier; i++) {
        let result = multiplier * i;
        let p = document.createElement('p');
        p.innerHTML = `${i} * ${multiplier} = ${result}`;
        resultDiv.appendChild(p);      
    }
  }
  resultDiv.innerHTML = '';
  wrongInput(number, multiplier);
  printTable(number, multiplier);
}