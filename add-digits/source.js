/**
 * @param {number} num
 * @return {number}
 */
 // (First Attempt) Genide: Beats 86.42% of javascript submissions
var addDigits = function(num) {
	var total = 0;

	if (num < 10)
		return num;
	else {
		while(num !== 0) {
			total += num % 10;
			num = Math.trunc(num / 10);
		}
		return addDigits(total);
	}
};

/**
 * @param {number} num
 * @return {number}
 */
// (First Attempt) rtdickey: Beats 28.81% of javascript submissions
// var addDigits = function(num) {
//     var i = 0;
	
// 	while(num >= 10) {
// 		i += num % 10;
// 		num = Math.trunc(num / 10);
// 	}

// 	i = i + num

// 	if(i < 10){
// 		return i;
// 	} else {
// 		return addDigits(i);
// 	}
// };