const options = {
	name: 'test',
	width: 1920,
	height: 1080,
	color: {
			border: 'black',
			bg: 'red'
	}
}


delete options.name

console.log(options)


for (let key in options) {
	if(typeof(options[key]) === 'object') {
		for(let i in options[key]) {
			console.log(`Свойство ${i} имеет зеначение ${options[key][i]}`)

		}
	} else {
		console.log(`Свойство ${key} имеет зеначение ${options[key]}`)
	}
}
