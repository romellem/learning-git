// FizzBuzz Solution
<<<<<<< HEAD
function fizzBuzz(num = 100) {
	for (let i = 0; i < num; i++) {
		if (i % (3 * 5) == 0) {
=======
function fizzBuzz() {
	for (let i = 0; i < 100; i++) {
		if (i % (3 * 5) === 0) {
>>>>>>> c8ae4c8 (Uses strict equality check)
			console.log("FizzBuzz");
		} else if (i % 3 === 0) {
			console.log("Fizz");
		} else if (i % 5 === 0) {
			console.log("Buzz");
		} else {
			console.log(i);
		}
	}
}

function isTrue(value) {
	return value === true;
}
