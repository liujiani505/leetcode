var generate = function(numRows) {
    let pascalstriangle = new Array(numRows);
    
    for(let i = 0; i< numRows; i++){
        let row = new Array(i+1);
        row[0] = 1;
        row[row.length-1] = 1;
        
        for(let j = 1; j< row.length-1; j++){
            let rowabove = pascalstriangle[i-1];
            row[j] = rowabove[j] + rowabove[j-1];
        }
     pascalstriangle[i] = row;  
    }
    return pascalstriangle;
};