function solve(imput){
   let burkaniKomp = Number(imput[0]);
   let burkaniKonf = Number(imput[1]);
   let kompSum = ((burkaniKomp + 1) * 0.300) * 1.05;
   let konfSum = ((burkaniKonf + 1) * 0.650) * 1.10;
   let fruitsNeeded = (kompSum + konfSum); 

   console.log((fruitsNeeded * 3.2).toFixed(2));
}
solve([10,20]);