// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
	// Ash' solution
	let number = n.toString().split('')
    let reversedNum = number.reverse().join('')

    return parseInt(reversedNum) * Math.sign(n)
}

module.exports = reverseInt;

// solution #1

 // let number = n.toString().split('')
 //    let reversedNum = number.reverse().join('')

 //    if (n < 0){
 //        return parseInt(reversedNum) * - 1
 //    }
 //    return parseInt(reversedNum)

