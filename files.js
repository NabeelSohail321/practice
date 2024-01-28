const { error } = require('console');
let fs = require ('fs');
let Data ;
let p = new Promise((resolve, reject) => {
    
    fs.readFile('./docs/blog.txt', (err, data)=> {
        if(err)
        {
            console.log(err)
        }
        else{
            
            Data=data.toString()
            console.log(data.toString())
            resolve(true)
        }
    })
}).then((value)=>{
    fs.writeFile('./docs/blog1.txt', Data , ()=>{
        console.log('file was written and created. ')
    })

}).catch((error)=>{
    console.log('Error loading file')
})





// fs.mkdir('./docs/documents', (err)=> {
//     if(err)
//     {
//         console.log(err)
//     }
//     else{
//         console.log('Directory Created. ')
//     }
// })

// if(fs.existsSync('./docs/documents'))
// {
//     fs.rmdir('./docs/documents', (err)=>{
//         if(err)
//         {
//             console.log(err)
//         }
//         console.log('directory deleted. ')
//     })
// }


// if(fs.existsSync('./docs/blog1.txt'))
// {
//     fs.unlink('./docs/blog1.txt', (err)=>{
//         if(err)
//         {
//             console.log(err)
//         }
//         console.log('file deleted. ')
//     })
// }