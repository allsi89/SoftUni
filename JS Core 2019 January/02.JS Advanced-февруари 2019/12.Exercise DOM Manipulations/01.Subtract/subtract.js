function subtract() {
    let firstNumber = $('#firstNumber').val();
    let secondNumber = $('#secondNumber').val();

    $('#result').text(Number(firstNumber) - Number(secondNumber));
}