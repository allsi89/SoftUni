function solve(arr) {
    //   There will be always only one country in the input.
    //   The separator for the fractional num will always be dot
    //   All inputs in the array will be string
    
    let [startPoint, endPoint, rightWord, encryptedText] = arr;
    startPoint = Number(startPoint);
    endPoint = Number(endPoint);
    encryptedText = encryptedText.split(' ');
    let country;
    
    for (let word of encryptedText) {
        if (word.includes(',')){
           word = word.replace(',', '');
        }

        let upperCaseReg = /[A-Z]/;
        let isSearchedCountry = upperCaseReg.test(word[0]) && upperCaseReg.test(word[word.length - 1]);
        if (isSearchedCountry) {
            country = word;
            break;
        }
    }

    let partOfCountryToBeReplaced = country.slice(startPoint, endPoint + 1);
    country = country.replace(partOfCountryToBeReplaced, rightWord);
    let lastCharOfCountry = country[country.length - 1]
    country = country.replace(lastCharOfCountry, lastCharOfCountry.toLowerCase());
    let townArr = [];

    let numberReg = /[0-9]{3}(\.[0-9]+)*/g;
    for (let word of encryptedText) {
        let number;
        if (word.match(numberReg)) {
            number = numberReg.exec(word)[0];
            if (number.includes('.')) {
                number = Number(Math.ceil(number));
            }
            let currentChar = String.fromCharCode(Number(number));
            townArr.push(currentChar);
        }
    }

    let searchedTown = townArr[0].toUpperCase() + townArr
        .slice(1)
        .join('');

    let result = `${country} => ${searchedTown}`

    console.log(result);
}

solve(
    ["3",
     "5",
      "gar",
      "114 sDfia 1, riDl10 confin$4%#ed117 likewise it humanity aTe114.223432 BultoriA - Varnd railLery101 an unpacked as he"]
);