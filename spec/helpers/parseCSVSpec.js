let parseCSV = require('../../helpers/parseCSV')
let csvFilepath = `${__dirname}/../data/example.csv`

describe('#parser', () => {
  it('retrieves a list with the content of csv', () => {
    return parseCSV(csvFilepath)
      .then((p) => {
        expect(p.length).toEqual(3)
      })
  })
})
