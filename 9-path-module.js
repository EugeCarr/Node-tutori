const path = require('path')

const filepath = path.join('/folder_path_mod', 'testfile.txt')

console.log(filepath)
console.log(path.basename(filepath))

const abs = path.resolve(__dirname, 'folder_path_mod', 'testfile.txt')

console.log(abs)