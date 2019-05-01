function areaOfFigures([arg0, arg1, arg2]) {
    let figure = (arg0);
    let side = Number(arg1);
    let height = Number(arg2);
    let squareArea = side * side;
    let rectangleArea = side * height;
    let circleArea = Math.PI * side * side;
    let triangleArea = (side * height) / 2;

    if (figure == "square") {

        console.log(squareArea.toFixed(3));
    }
    else if (figure == "rectangle") {

        console.log(rectangleArea.toFixed(3));

    }
    else if (figure == "circle") {

        console.log(circleArea.toFixed(3));

    }
    else if (figure == "triangle") {

        console.log(triangleArea.toFixed(3));

    }
}
areaOfFigures(["circle", 10, 20]);