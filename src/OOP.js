
let str = 'some'
let strObj = new String(str)

console.log(typeof(str))
console.log(typeof(strObj))


console.dir([1,2,3])

const soldier = {
	healt: 400,
	armor: 100
}

const jonh = Object.create(soldier)



Object.setPrototypeOf(jonh, soldier)

