function passwordGenerator(arr) {
    let text = arr[0] + arr[1];
    let letters = arr[2]
        .split('');

    let index = 0; // index for letter
    while(/[aeiou]/.test(text)){ // while we have vowels in string
        text = text.replace(/[aeiou]/, letters[index].toUpperCase()); // replace vowels with current given letter with upper case
        index++;
        if(index === letters.length){ // if given letters end and we have already vowels, start again
            index = 0;
        }
    }

    let textInArrayOfSymbols = text
        .split('')
        .reverse();

    console.log(`Your generated password is ${textInArrayOfSymbols.join('')}`);
}

passwordGenerator(['ilovepizza', 'ihatevegetables', 'orange']);