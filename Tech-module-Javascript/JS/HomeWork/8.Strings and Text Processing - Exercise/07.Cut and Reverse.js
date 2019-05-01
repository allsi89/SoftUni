function solve(text) {
   let firstString = text.substring(0, text.length / 2);
   let secondString = text.substring(text.length / 2);

   firstString = firstString
       .split('')
       .reverse()
       .join('');
    console.log(firstString);

    secondString = secondString
        .split('')
        .reverse()
        .join('');
    console.log(secondString);
}

solve('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');