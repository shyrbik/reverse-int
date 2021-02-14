module.exports = function reverse (n) {
 let resultString = "";
 while (n > 1) {
     resultString += n % 10;
     n = (n - n % 10) / 10;
    if (n < 10) resultString += n;	
 }
    return Number(resultString);
}
