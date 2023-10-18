
var fs = require('fs')
var http = require('http')

// // const stream = createReadStream(
// // 	'./content/big.txt', 
// // 	{
// // 		highWaterMark: 9000,
// // 		// encoding: 'utf8'
// // 	}
// // )

// // stream.on('data', (result) =>{
// // 	console.log(result)
// // })

// http
// 	.createServer( function (req, res){
// 		const fileStream = fs.createReadStream('./content/.big.txt', 'utf8')
// 		fileStream.on('open', () => {
// 			fileStream.pipe(res)
// 		})
// 		fileStream.on('error', (err) => {
// 			res.end(err)
// 		})
// 	})
// 	.listen(5000)

http
  .createServer(function (req, res) {
    const fileStream = fs.createReadStream('./content/big.txt', 'utf8')
    fileStream.on('open', () => {
      fileStream.pipe(res)
    })
    fileStream.on('error', (err) => {
      res.end(err)
    })
  })
  .listen(5000)
