function solve(first,second,last) {
    let sum = first+second+last;
    let parsedSum = parseInt(sum);

    if (sum === parsedSum){
        console.log(`${sum} - Integer`);
    }
    else{
        console.log(`${sum} - Float`);

    }
}
solve(9,100,1.1);