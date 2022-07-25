function inventory(args) {
	let word_args = [...args]
	let items = word_args[0].split(", ")
	let commands = word_args.splice(1)

	while (commands.length > 0) {
		let command = commands.shift()
		if (command == 'Craft') {
			break
		} else {
			let [what, item] = command.split(" - ")
			if (what == 'Collect') {
				if (!items.includes(item)) {
					items.push(item)
				}
			} else if (what == 'Drop') {
				if (items.includes(item)) {
					items = items.filter(x => x !== item)
				}
			} else if (what == 'Combine Items') {
				let [old_item, new_item] = item.split(":")
				if (items.includes(old_item)) {
					let position = items.indexOf(old_item)
					items.splice(position + 1, 0, new_item)
				}
			} else if (what == 'Renew') {
				if (items.includes(item)) {
					let position = items.indexOf(item)
					items.splice(position, 1)
					items.push(item)
				}
			}
		}
	}
	console.log(items.join(", "))

}

inventory([
	'Iron, Sword',
	'Drop - Bronze',
	'Combine Items - Sword:Bow',
	'Renew - Iron',
	'Craft!'
])