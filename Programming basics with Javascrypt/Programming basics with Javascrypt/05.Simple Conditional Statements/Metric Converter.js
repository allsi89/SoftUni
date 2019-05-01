function metricConverter([lenght, inputType, outputType]) {
    lenght = Number(lenght);
    let milimeters = 1000;
    let centimeters = 100;
    let miles = 0.000621371192;
    let inches = 39.3700787;
    let kilometers = 0.001;
    let feet = 3.2808399;
    let yards = 1.0936133;
     
    let resultInMeters = lenght;
    
    if (inputType == "mm"){
        resultInMeters = lenght / milimeters;
    } else if (inputType == "cm"){
        resultInMeters = lenght / centimeters;
    } else if (inputType == "mi"){
        resultInMeters = lenght / miles;
    } else if (inputType == "in"){
        resultInMeters = lenght / inches;
    } else if (inputType == "km"){
        resultInMeters = lenght / kilometers;
    } else if (inputType == "ft"){
        resultInMeters = lenght / feet;
    } else if (inputType == "yd"){
        resultInMeters = lenght / yards; 
    }

    let resultInOutput = resultInMeters;
    if (outputType == "mm"){
        resultInOutput = resultInMeters * milimeters;
    } else if (outputType == "cm"){
        resultInOutput = resultInMeters * centimeters;
    } else if (outputType == "mi"){
        resultInOutput = resultInMeters * miles;
    } else if (outputType == "in"){
        resultInOutput = resultInMeters * inches;
    } else if (outputType == "km"){
        resultInOutput = resultInMeters * kilometers;
    } else if (outputType == "ft"){
        resultInOutput = resultInMeters * feet;
    } else if (outputType == "yd"){
        resultInOutput = resultInMeters * yards; 
    }   
        console.log(resultInOutput + " " + outputType);         
}
metricConverter([10, "km", "yd"]);