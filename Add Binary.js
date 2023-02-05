/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
// var addBinary = function(a, b) {
//      return (parseInt(a, 2) + parseInt(b, 2)).toString(2);
// };

// var addBinary = function(a, b) {
//     let sum = '';
//     let carry = 0;
//     let i = a.length -1;
//     let j = b.length -1;
    
//     while( i>=0 || j>=0) {
//         let bitA= a[i] ? a[i]: "0";
//         let bitB = b[j] ? b[j]: "0";
//         sum = String(bitA ^ bitB ^ carry) + sum;
//         console.log(sum)
//         if( bitA === bitB && bitA !== String(carry)) {
//             carry = Number(!carry); //convert boolean value !carry to 0 or 1
//             console.log(carry)
//         }
//         i--;
//         j--;
//     }
    
//     if(carry){ // if carry is true or carry = 1
//         sum = String(carry) + sum;
//         console.log(sum)
//     }
//     return sum;
// };

var addBinary = function (a, b) {
    // Resultant string
    let result = "";
    // Indices for a and b
    let i = a.length - 1;
    let j = b.length - 1;
    // Carry
    let carry = 0;
    while (i >= 0 || j >= 0) {
        // Sum of two bits
        let sum = carry;
        if (i >= 0) {
            sum += a[i] - '0';  // -'0' to convert a string to a number
        }
        if (j >= 0) {
            sum += b[j] - '0';
        }
        // If sum = 1+1, 2 % 2 =0, so add 0 to the result
        result = sum % 2 + result;
        // Modify carry
        carry = parseInt(sum / 2); 
        i--;
        j--;
    }
    // Final check if carry exists
    if (carry > 0) {
        result = 1 + result;
    }
    return result;
};

