const { stat, createReadStream } = require('fs')
const { join, resolve } = require('path')
const { promisify } = require('util')

const statAsync = promisify(stat)

module.exports = (path = './') => (req, res) => {
  if (req.method === 'GET' && req.url === '/favicon.ico') {
    path = resolve(path)

    return statAsync(path)
      .then(stat => {
        if (stat.isDirectory()) {
          path = join(path + '/favicon.ico')
        }
        const stream = createReadStream(path)
        stream.on('error', error => {
          console.log(error)
          return
        })
        return stream.pipe(res)
      })
      .catch(error => {
        console.log(error)
        return
      })
  }
}