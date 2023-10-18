const {readFile, writeFile} = require('fs')
const { result } = require('lodash')
const util = require('util')

const getText = (path) => {
	return new Promise((resolve, reject) => {
		readFile(path, 'utf8', (err, data) =>{
			if (err) {
				reject(err)
			}else{
				resolve(data)
			}
		})
	})
}

const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

// getText('./content/async subfolder/first.txt')
// 	.then((result) => console.log(result))
// 	.then((err) => console.log(err))

// const start = async() =>{
// 	try {
// 		const first = await getText('./content/async subfolder/first.txt')
// 		const second = await getText('./content/async subfolder/second.txt')
// 		console.log(first, second)
// 	} catch (error){
// 		console.log(error)
// 	}
// }

const start = async() =>{
	try {
		const first = await readFilePromise('./content/async subfolder/first.txt')
		const second = await readFilePromise('./content/async subfolder/second.txt')
		await writeFilePromise(
			'./content/async subfolder/result-async.txt',
			`This is the two files added together: ${first}, and then ${second}`,
			{flag: 'a'}
			
		)
		console.log(`${first} - ${second}`)
	} catch (error){
		console.log(error)
	}
}

start()