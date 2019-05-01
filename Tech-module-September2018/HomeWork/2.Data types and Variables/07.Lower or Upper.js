function solve(charracter) {

    let upperCase = charracter.toUpperCase() === charracter;

    console.log(upperCase ? 'upper-case' : 'lower-case');
}
solve('U');