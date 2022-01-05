module.exports = function toReadable(number) {
		const dictionary = {
			0: 'zero',
			1: 'one',
			2: 'two',
			3: 'three',
			4: 'four',
			5: 'five',
			6: 'six',
			7: 'seven',
			8: 'eight',
			9: 'nine',
			10: 'ten',
			11: 'eleven',
			12: 'twelve',
			13: 'thirteen',
			14: 'fourteen',
			15: 'fifteen',
			16: 'sixteen',
			17: 'seventeen',
			18: 'eighteen',
			19: 'nineteen',
			20: 'twenty',
			30: 'thirty',
			40: 'forty',
			50: 'fifty',
			60: 'sixty',
			70: 'seventy',
			80: 'eighty',
			90: 'ninety',
			100: 'hundred',
		}
	
		if (number.toString().length == 1) {
			return dictionary[number];
		} else if (number.toString().length == 2 && number <= 19) {
			return dictionary[number];
		} else if (number.toString().length == 2 && number > 19) {
			if ((number % 10 === 0)) {
				return `${dictionary[Math.trunc(number / 10) * 10]}`;
			} else {
				return `${dictionary[Math.trunc(number / 10) * 10]} ${dictionary[Math.floor(number % 10)]}`;
			}
		}
		if (number.toString().length == 3 && number >= 100) {
			if (number % 100 === 0) {
				return `${dictionary[Math.trunc(number / 100)]} ${dictionary[100]}`;
			} else if (number % 100 != 0) {
				if (Math.trunc(Math.floor((number % 100) / 10) * 10) === 0) {
					return `${dictionary[Math.trunc(number / 100)]} ${dictionary[100]} ${dictionary[(Math.floor(number % 10))]}`;
				} else if ((Math.floor(number % 100) % 10) === 0) {
					return `${dictionary[Math.trunc(number / 100)]} ${dictionary[100]} ${dictionary[Math.trunc(Math.floor((number % 100) / 10) * 10)]}`;
				} else if (Math.trunc((number % 100) * 1) <= 19) {
					return `${dictionary[Math.trunc(number / 100)]} ${dictionary[100]} ${dictionary[Math.trunc((number % 100) * 1)]}`;
				} else {
					return `${dictionary[Math.trunc(number / 100)]} ${dictionary[100]} ${dictionary[Math.trunc(Math.floor((number % 100) / 10) * 10)]} ${dictionary[(Math.floor(number % 100) % 10)]}`;
				}
			}
		}
	}
