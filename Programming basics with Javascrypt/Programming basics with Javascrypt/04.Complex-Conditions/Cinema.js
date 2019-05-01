function cinema([type, rows, columns]) {
    typePrice = type;
    let price = 0;
    rows = Number(rows);
    columns = Number(columns);
    let seats = rows * columns;
    let profit = seats * price;

    if (typePrice == "Premiere") {
        price = 12;
       
    }
    else if (typePrice == "Normal") {
        price = 7.50;
        
    }
    else if (typePrice == "Discount") {
        price = 5;
    } 
        console.log((seats * price).toFixed(2));
}
cinema(["Discount", 12, 30]);