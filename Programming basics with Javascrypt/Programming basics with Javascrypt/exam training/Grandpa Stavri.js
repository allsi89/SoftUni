function grandpaStavri(params) {
 
    let numberDays = Number(params[0])
    let totalLiters = 0
    let totalDegrees = 0
    let count1 = 1;
    let count2 = 2;
    for(let i = 1; i <= numberDays; i++) {

        currentLiters = Number(params[count1])            
        totalLiters += currentLiters
        totalDegrees += currentLiters * Number(params[count2])
        count1 += 2
        count2 += 2
    }
    degreesPerLiter = totalDegrees / totalLiters
    console.log(`Liter: ${totalLiters.toFixed(2)}`)
    console.log(`Degrees: ${degreesPerLiter.toFixed(2)}`)

    if(degreesPerLiter < 38) {
        console.log(`Not good, you should baking!`)
    } else if(degreesPerLiter >= 38 && degreesPerLiter < 42) {
        console.log(`Super!`)
    } else {
        console.log(`Dilution with distilled water!`)
    }

}
grandpaStavri([3,100,45,50,55,150,36]);
