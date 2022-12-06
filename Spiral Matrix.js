var spiralOrder = function(matrix) {
    
    let toprow = 0;
    let leftcol = 0;
    let rightcol = matrix[0].length-1;
    let bottomrow = matrix.length -1;
    const result = [];
    const size = matrix.length * matrix[0].length;
    
    while(result.length < size){
        
        for(i=leftcol; i<= rightcol && result.length < size; i++){
            result.push(matrix[toprow][i])
        }
        toprow++;
        
        for(i=toprow; i<= bottomrow && result.length < size; i++){
            result.push(matrix[i][rightcol]) 
        }
        rightcol--;
            
        for(i=rightcol; i>=leftcol && result.length < size; i--){
            result.push(matrix[bottomrow][i])
        }
        bottomrow--;
        
        for(i=bottomrow; i>=toprow && result.length < size; i--){
            result.push(matrix[i][leftcol])
        }
        leftcol++;   
    }
    return result;
};