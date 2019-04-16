/**
 * Lead with Zeroes
 * @description: Returns the same array, but moves all zeroes in the array to the front.
 * Do not return a new array. It must be the same array!
 *      Ex: leadZeroes([2,2,0,1,0]) => [0,0,2,2,1]
 *
 * @param {array} arr - An array of integers
 */
function leadZeroes(arr) {
    let temp = [];
    for (let i = 0; i < arr.length; i++) {
            if(arr[i] === 0) {
                temp = arr.splice(i, 1);
                arr.unshift(temp[0]);
            }
    }
    return arr
}

// or
// function leadZeroes(arr) {
//     return arr.sort((a,b) => {return a-b})
// }
// leadZeroes([2,2,0,1,0])


/**
 * Setter
 * @description: Returns an array of unique numbers.
 *      Ex: setter([1,1,2,2,3,3]) => [1,2,3]
 *
 * @param {array} arr - An array of data
 */
// function setter(arr) {
//     let newArr = []
//     for (let i = 0; i < arr.length; i++) {
//         if (!newArr.includes(arr[i])) {
//             newArr.push(arr[i])
//         }
//     }
//     return newArr
// }

// or
function setter(arr) {
    return [...new Set(arr)] 
}

// setter([1,1,2,2,3,3])


/**
 * Is Prime
 * @description: Return true if the given number is a prime number, false otherwise
 *      Ex: isPrime(3) => true
 *
 * Resources:
 * https://en.wikipedia.org/wiki/Prime_number
 * https://youtu.be/mIStB5X4U8M
 * @param num
 */
function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true
}
// isPrime(3)

/**
 * Modulus
 * @description: Write a function that returns the remainder form dividing 2 integers WITHOUT USING %
 *      Ex: modulus(7, 3) => 1
 *
 * @param dividend
 * @param divisor
 */

function modulo(dividend, divisor) {
    return dividend - divisor * Math.floor(dividend / divisor)
}
// modulo(7, 3)

/**
 * Next Five
 * @description: Write a function that takes a number and returns the next
 * multiple of 5
 *      Ex: nextFive(6) => 10
 *          nextFive(25) => 30
 *
 * @param num
 */
function nextFive(num) {
    return num + 5 - num % 5
}
// nextFive(6)

/**
 * Object Sort
 * @description: Write a function that takes an object and sorts it
 * alphabetically by key. Keys will always be alphabets (a-z or A-Z).
 *      Ex: osort({z: 3, a: 1}) => {a: 1, z: 3}
 *
 * @param obj
 */
// function osort(obj) {
//     let result = {}
//     Object.keys(obj)
//       .sort()
//       .forEach(a => {
//           result[a] = obj[a]
//        })
// }

//or 
function osort(obj) {
    return obj
}
// osort({z: 3, a: 1})



module.exports = {
    leadZeroes: leadZeroes,
    setter: setter,
    isPrime: isPrime,
    modulo: modulo,
    nextFive: nextFive,
    osort: osort
};