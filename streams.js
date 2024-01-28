const fs = require('fs');

const readStream = fs.createReadStream('./docs/blogs.txt', { encoding : 'utf8'   });
const writeStream = fs.createWriteStream('./docs/blogs2.txt')

readStream.on('data', (chunks)=>{
    console.log('----newchunks----');
    // console.log(chunks);
    writeStream.write('\n\n\n\n\n\n\n\n\n----new_Chunk----\n\n\n\n\n\n\n\n\n')
    writeStream.write(chunks)
})

// piping

// readStream.pipe(writeStream)
