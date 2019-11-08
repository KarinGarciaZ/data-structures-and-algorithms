/*
Write a program to find the n-th ugly number.
Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. 
Example:
Input: n = 10
Output: 12
Explanation: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 is the sequence of the first 10 ugly numbers.
Note:  
1 is typically treated as an ugly number.
n does not exceed 1690.
*/

/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    if(!n || n === 1) return 0 | 1

    let cont = 1
    let i = 2
    let num = i
    let num2 = i
    while(true) {
        num = i
        while(num) {
            num2 = num

            if( num % 5 === 0 ) num /= 5
            if( num % 3 === 0 ) num /= 3
            if( num % 2 === 0 ) num /= 2

            if( num === num2 )
                num = false
            else if( num < 6) {
                cont++
                num = false
                if(cont === n)
                    return i
            }
        }
        i++
    }
};

var nthUglyNumber = function(n) {
    if(!n || n === 1) return 0 | 1

    let cont = 1
    let i = 2
    let mem = {}
    mem[cont] = cont
    while(true) {
        num = i

        if( num % 5 === 0 ) num /= 5
        if( num % 3 === 0 ) num /= 3
        if( num % 2 === 0 ) num /= 2

        if(mem[num]) {
            cont++
            mem[i] = i
        }

        if(cont === n)
            return i

        i++
    }
};

/**
 * @param {number} n
 * @return {number}
 */

 //chinese solution
var nthUglyNumber = function(n) {
    var cache = [1];
    var p2 = 0;
    var p3 = 0;
    var p5 = 0;

    var m,r2,r3,r5;
    var i = cache.length;
    for(;i < n ; i++)
    { 
        r2 = cache[p2] * 2;
        r3 = cache[p3] * 3;
        r5 = cache[p5] * 5;
        m = Math.min(r2,r3,r5);
        if(m === r2) p2++; 
        if(m === r3) p3++;
        if(m === r5) p5++;
        cache[i] = m;
    }
    return cache[n-1]; 
};

nthUglyNumber(1000)