function solve(arr1, arr2) {
    let counter = 0;
    let lenght = Math.min(arr1.length, arr2.length);
    let maxLength = 0;
    for (let i = 0; i < lenght; i++) {

        if (arr1[i] === arr2[i]) {
            counter++;
        }
    }
    arr1 = arr1.reverse();
    arr2 = arr2.reverse();
    let revCounter = 0;

    for (let i = 0; i < lenght; i++) {

        if (arr1[i] === arr2[i]) {
            revCounter++;
        }
    }
    if (counter > revCounter) {
        console.log(counter);
    } else {
        console.log(revCounter);
    }
}
solve(["hi", "php", "java", "xml", "csharp", "sql", "html", "css", "js", "nakov", "java", "sql", "html", "css", "js"], ["nakov", "java", "sql", "html", "css", "js"]);