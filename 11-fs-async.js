const { readFile, writeFile, write } = require('fs')
console.log('start')
// This code asynchronously reads two text files and writes their contents to a new file.
readFile('./content/first.txt', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  const first = result
  readFile('./content/second.txt', (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    const second = result
    writeFile(
      './content/result-async.txt',
      `Here is the result: ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err)
          return
        }
       
        console.log('done with this task')
      }
    )
  })
})
console.log('starting next task')