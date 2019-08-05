const singles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

// map returns a new array
const doubles = singles.map(function(num) {
	return num * 2
})

// pass in two args => first is element, second is index of element
singles.map(function(num, index) {
	console.log(num, index)
})

// console.log(doubles)
