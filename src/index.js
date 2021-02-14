module.exports = function reverse (n) {
 let resultString = "";
 if (n < 0) n = -1 * n;
 if (n % 10 == 0) n = n /10;
 while (n > 1) {
     resultString += n % 10;
     n = (n - n % 10) / 10;
    if (n < 10) resultString += n;	
 }
    return Number(resultString);
}
