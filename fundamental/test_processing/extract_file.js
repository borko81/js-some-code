function extract_file(filename) {
	let file_name_with_extension = filename.split('\\')
	let last_posiiton = file_name_with_extension.length - 1
	let result = file_name_with_extension[last_posiiton].split(".")

	let [file, extension] = result
	console.log(`File name: ${file}
File extension: ${extension}`)



}

let files = [
	'C:\\Internal\\training-internal\\Template.pptx',
	'C:\\Projects\\Data-Structures\\LinkedList.cs'
]

files.forEach(x => {
	extract_file(x)
})