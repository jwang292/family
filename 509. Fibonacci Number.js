// The Fibonacci numbers, commonly denoted F(n) form a sequence, 
// called the Fibonacci sequence, such that each number is the sum 
// of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

// if (n < 2) {
//     return n;
// }
// return fib(n - 1) + fib(n - 2);



// 滚动arr
const fib = (n) => {
    if (n <= 1) {
        return n;
    } else {
        const dp = [0, 1];
        var sum = null;
        for (let i = 2; i < n.length; i++) {
            sum = dp[0] + dp[1];
            dp[0] = dp[1];
            dp[1] = sum;
        }
        return sum;
    }


}