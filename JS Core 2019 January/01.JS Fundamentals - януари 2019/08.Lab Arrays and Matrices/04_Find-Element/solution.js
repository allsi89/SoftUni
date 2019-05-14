//jshint esversion:6
function solve() {
  let number = document.getElementById('num').value;
  let array = JSON.parse(document.getElementById('arr').value);
  let result = document.getElementById('result');
  let newArray = [];

  for (let element of array) {

    let index = element.indexOf(number);
    let output;
    let validElement = (element === element.toString());

    if (index !== -1 && validElement) {
      output = `true -> ${index}`;
      newArray.push(output);
    } else {
      output = `false -> -1`;
      newArray.push(output);
    }
  }

  newArray = newArray.join(',');
  result.textContent = newArray;
}