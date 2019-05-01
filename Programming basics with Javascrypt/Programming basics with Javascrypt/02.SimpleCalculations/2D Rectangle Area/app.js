function rectangleArea([x1, y1, x2, y2]) {
    x1 = Number(x1);
    x2 = Number(x2);
    y1 = Number(y1);
    y2 = Number(y2);

    let width = Math.max(x2, x1) - Math.min(x2, x1);
    let height = Math.max(y2, y1) - Math.min(y2, y1);
    let area = width * height;
    let perimeter = 2 * (width + height);
    console.log(area);
    console.log(perimeter);
}