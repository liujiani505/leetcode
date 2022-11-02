

 var romanToInt = function(s) {
    const romanNumerals = { I:1, V:5, X:10, L:50, C:100, D:500, M:1000 };
    let int = 0;
    s.split('').forEach((num, i) => {
        if(romanNumerals[num] < romanNumerals[s[i+1]]) {
            int -= romanNumerals[num]
        } else {
            int += romanNumerals[num]
        }
    })
    return int;
};