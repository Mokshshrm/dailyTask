
function trailingZero(str) {

    // frontside
    if (str[0] == '0') {
        for (let i = 0; i <= str.length; i++) {
            if (i == str.length) return "";
            if (i < str.length && str[i] != '0') {
                str = str.substr(i);
                break;
            }
        }
    }

    // 
    str = str.substr(0, str.indexOf('.'));

    return str;
}
console.log(trailingZero("230.000"));