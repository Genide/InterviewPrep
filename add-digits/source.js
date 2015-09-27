/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
	var total = 0;

	if (num < 10)
		return num;
	else {
		while(Math.floor(num / 10 !== 0)) {
			total += num % 10;
			num = Math.floor(num / 10);
		}
		return addDigits(total);
	}
};

console.log(addDigits(12345));