'use strict'

let num = 44

function showFirstMessage(text) {
	console.log(text)
 	let	num = 42
	console.log(num)
}
showFirstMessage('Hello function')
console.log(num)

function calc(a, b) {
	return (a + b)
}

console.log(calc(4, 32))
console.log(calc(4, 38))
console.log(calc(0, 42))

function ret () {
	let num = 50

	return num
}

const another	= ret()
console.log(another)

const logger = function() {
	console.log('Hello!')
};

logger()



const str = 'start'

console.log(str.toUpperCase())

const blackForest = 'Forest gump'
console.log(blackForest.lastIndexOf('g'))
