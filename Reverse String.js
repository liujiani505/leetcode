/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
// var reverseString = function(s) {
//     let i =0;
//     let j = s.length -1;
//     while(j > i) {
//         let tmp = s[i];
//         s[i] = s[j];
//         s[j] = tmp;
//         i++;
//         j--;
//     }
// };


var reverseString = function(s) {
    let i =0;
    let j = s.length -1;
    while( i < s.length) {
        s.splice(i, 0, s[j])
        s.splice(j+1, 1)
        i++;
    }
};