const { readFile, writeFile} = require('fs')


readFile('./content/async subfolder/first.txt','utf8',(err, result)=>{
    if(err){
        console.log(err)
        return 
    }
    const firstText = result
    console.log('first read start')
    readFile('./content/async subfolder/second.txt','utf8', (err, result)=>{
        if(err){
            console.log(err)
            return 
        }            
        const secondText = result
        writeFile(
            './content/async subfolder/result-async.txt',
            `Here is the result: ${firstText}, ${secondText}`,
            (err, result)=>{
                if(err){
                    console.log(err)
                    return 
                }
                console.log('done with this task')
            }
        )
        
    })       
})
console.log('done and starting the next task')
