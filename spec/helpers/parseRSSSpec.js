let xmlContent = require('../data/contentXML.js')
let parseXML = require('../../helpers/parseXML')

describe('#parse', () => {
  it('retrieves a list of with the content of xml', () => {
    return parseXML(xmlContent)
      .then((result) => {
        expect(result.channel.videos.length).toEqual(1)
        expect(result.channel.name).toEqual('Biossomos')
      })
  })
})