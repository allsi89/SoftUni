function solve(input){
    let freeSpaceWidth = Number(input[0]);
    let freeSpaceLenght = Number(input[1]);
    let freeSpaceHeight = Number(input[2]);
    let boxesSpace = 0;
    let b = 3;
    
    let appartment = freeSpaceWidth * freeSpaceLenght * freeSpaceHeight
    
    for(let i = b; i <= appartment; i++ ){
        let boxes = String(input[i]);

        if(boxes == "Done"){
            break;
        }
        let oneBox = Number(boxes);
        boxesSpace += oneBox;
        
    }
    if(appartment > boxesSpace){
        console.log(`${appartment - boxesSpace} Cubic meters left.`);
    }
    else {
        console.log(`No more free space! You need ${boxesSpace - appartment} Cubic meters more.`)
    }
    
    
}
solve([10,1,2,"4","6","Done"]);