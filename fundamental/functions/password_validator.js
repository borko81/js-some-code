function validate_password(password) {

	let answer = []

	function validate_len() {
		if (password.length < 6 || password.length > 10) {
			answer.push('Password must be between six and ten characters')
		}
	}

	function isCharacterALetter(char) {
		return /[a-zA-Z]/.test(char)
	}

	for (let char of password.split("")) {
		if (isCharacterALetter(char) == false) {
			answer.push('Password must consist only of letters and digits')
			break
		}
	}

	function have_only_two_digits() {
		let digit = 0
		for (let char of password.split("")) {
			if ((/0-9/).test(char)) {
				digit += 1
			}
		}
		if (digit < 2) {
			answer.push('Password must have at least 2 digits')
		}
	}

	validate_len()
	have_only_two_digits()

	return answer.join("\n")
}


let choice = 'logI@'
console.log(validate_password(choice))