function solve(sideA,sideB,sideC) {

    let semiPerimeter = (sideA + sideB + sideC)/ 2;
    let area = Math.sqrt(semiPerimeter*(semiPerimeter - sideA)*(semiPerimeter-sideB)*(semiPerimeter-sideC));
    console.log(area);
}
solve(2, 3.5, 4);