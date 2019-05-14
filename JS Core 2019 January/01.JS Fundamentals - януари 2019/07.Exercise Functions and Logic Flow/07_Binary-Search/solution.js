// jshint esversion:6
function binarySearch() {
    let arr = document.getElementById('arr').value;
    let num = Number(document.getElementById('num').value);
    let result = document.getElementById('result');
    let val = false;
    let index;
    arr = arr.split(', ');
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        if (+arr[i] === num) {
            val = true;
            index = i;
        }
    }
    if (val === true) {
        result.innerHTML = `Found ${num} at index ${index}`;
    } else {
        result.innerHTML = `${num} is not in the array`;
    }
}