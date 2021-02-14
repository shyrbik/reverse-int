module.exports = function reverse (n) {
    if (n < 0) n = -1 * n;
    if (n % 10 == 0) n = n /10;
    let arr =(n + "").split("");
    console.log(arr);
    let resultString = "";
    
    for (let i = arr.length-1; i > -1; i--) {
        resultString += arr[i];
    }
       return Number(resultString);
}
