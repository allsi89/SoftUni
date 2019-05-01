function solve(radius, height) {
    let volume = (1/3) * Math.PI * (radius * radius)  * height;
    let s = Math.sqrt((radius*radius) + (height*height));
    let l = Math.PI*s*radius;
    let b = Math.PI*radius*radius;
    let totalArea = l+b;
    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${totalArea.toFixed(4)}`);

}
solve(3, 5);