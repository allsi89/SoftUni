function solve([town, sales]) {
    sales = Number(sales);
    let commision = -1;

    if (town == "Sofia") {
        if (sales > 0) {
           if (sales <= 500 && sales > 0) {
              commision = 0.05 * sales;
           } else if (sales <= 1000) {
              commision = 0.07 * sales;
           } else if (sales <= 10000) {
              commision = 0.08 * sales;
           } else if (sales > 10000) {
              commision = 0.12 * sales;
           }
        }       
    } else if (town == "Varna") {
        if (sales > 0) {
           if (sales <= 500 && sales > 0) {
              commision = 0.045 * sales;
           } else if (sales <= 1000) {
              commision = 0.075 * sales;
           } else if (sales <= 10000) {
              commision = 0.10 * sales;
           } else if (sales > 10000) {
              commision = 0.13 * sales;
           }
        }      
    } else if (town == "Plovdiv") {
        if (sales > 0) {
           if (sales <= 500 && sales > 0) {
              commision = 0.055 * sales;
           } else if (sales <= 1000) {
              commision = 0.08 * sales;
           } else if (sales <= 10000) {
              commision = 0.12 * sales;
           } else if (sales > 10000) {
              commision = 0.145 * sales;
           }
        }   
    } if (commision != -1) {
        console.log(commision.toFixed(2));
    } else {
        console.log("error");
    }
}
solve(["Sofia", 1500]);