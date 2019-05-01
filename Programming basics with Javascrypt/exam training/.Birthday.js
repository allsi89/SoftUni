function solve([arg1, arg2, arg3, arg4]){
   let lenght = Number(arg1);
   let width = Number(arg2);
   let height = Number(arg3);
   let procent = Number(arg4)*0.01;
   let aquariumArea = lenght*width*height*0.001;
   let realLitres = aquariumArea*(1-procent);

   console.log(realLitres.toFixed(3));
}
solve([105,77,89,18.5]);