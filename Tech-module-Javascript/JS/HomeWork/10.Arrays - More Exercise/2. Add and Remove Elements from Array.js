function solve(arr) {

    let output = [];
    let outputElement = 0;

    for (let i = 0; i < arr.length; i++) {
        let command = arr[i];
        if (command === 'add') {
            outputElement++;
            output.push(outputElement);
        } else {
            outputElement++;
            output.splice(output[i - 2]);
        }
    }
    if (!arr.includes('add')) {
        console.log("Empty");
    }
    else {
        console.log(output.join(' '));
    }
}

solve(['add', 'adsd', 'advvd', 'add']);