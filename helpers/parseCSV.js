let fs = require('fs')

let parse = (filepath, options) => {

  return new Promise((resolve, reject) => {
    if (options === undefined || Object.keys(options).length === 0) {
      options = {
        delimiter: ';'
      }
    }

    if (!options.hasOwnProperty('delimiter')) {
      reject(new Error('Invalid options!'))
    }

    fs.readFile(filepath, 'utf8', (err, result) => {
      if (err) { reject(err) }

      let output = result.trim().split('\n')
      let header = output[0].split(options.delimiter)
      let content = output.splice(1)

      let c = content.map((o) => {
        let attrs = o.split(options.delimiter)

        let element = {}

        header.map((h) => {
          element[h] = attrs[header.indexOf(h)]
        })

        return element
      })

      resolve(c)
    })
  })
}

// let opt = {
//   delimiter: ';'
// }

// parse('./data/channels.csv')
//   .then(channels => channels.filter((c) => { return c.id === 'UCpOIUW62tnJTtpWFABxWZ8g' }))
//   .then(c => console.log(c[0]))
//   .catch(err => console.log(err))

module.exports = parse
