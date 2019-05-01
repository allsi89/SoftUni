function calculation(first, second, third) {
    let add = (first, second) => first + second;
    let sumResult = add(first,second);
    let subtract = (sumResult,third) => sumResult - third;
    console.log(subtract(sumResult, third));
}

calculation(1,
    17,
    30);