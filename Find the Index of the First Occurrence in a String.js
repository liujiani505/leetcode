/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// var strStr = function(haystack, needle) {
//     for(let i=0; i<=haystack.length - needle.length; i++){
//         if(haystack.substring(i, i+ needle.length) === needle){
//             return i;
//         }
//     }
//     return -1;
// };


// NAIVE ALGORITHM
// var strStr = function(haystack, needle) {
//     for(let i=0; i<=haystack.length - needle.length; i++){
//         let j = 0;
//         for(; j<needle.length; j++){
//             if(needle[j] !== haystack[i+j]){
//                 break;
//             }
//         }
//         if(j === needle.length){
//             return i;
//         }
//     }
//     return -1;
// };


// KMP ALGORITHM

var strStr = function(haystack, needle) {
    const prefixTable =buildPrefixTable(needle);
    let i = 0;
    let j = 0;
    while(i<haystack.length && j<needle.length){
        if(haystack[i] === needle[j]){
            i+=1;
            j+=1;
        } else if (j > 0){
            j=prefixTable[j-1]
        } else {
            i+=1;
        }
    }
    if(j === needle.length){
        return i-j;
    }
    return -1;
}

// build the table
function buildPrefixTable(s){
    const table=[0]
    let i = 1;
    let j = 0; // length of repeating prefix and suffix
    while(i <s.length){
        if(s[i] === s[j]){
            j+=1;
            table[i]=j;
            i+=1;
        } else if (j>0){   // s[i] !== s[j] and j>0
            j = table[j-1];
        } else {   // s[i] !== s[j] and j=0
            table[i] = j;
            i+=1;
        }
    }
    return table;
}

// Time complexity: O(n+m) 
// Space complexity: O(m)  => because we build the prefixtable which length equals the length of the needle string


