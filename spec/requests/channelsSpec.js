let request = require('axios')
let server = require('../../serve')
let localhost = 'http://127.0.0.1:4000'

describe('GET', () => {
  beforeAll(() => {
    server
  })

  afterAll(() => {
    server.close()
  })

  describe('/channels', () => {
    it('retrieves a list of channels', () => {
      return request.get(`${localhost}/channels`)
        .then((channels) => {
          expect(channels.data.data.length).toEqual(3)
        })
    })

    it('retrieves a list based on tag', () => {
      return request.get(`${localhost}/channels?tags=music,lyrics`)
        .then((channels) => {
          expect(channels.data.data.length).toEqual(2)
        })
    })

    it('retrieves a list based on language', () => {
      return request.get(`${localhost}/channels?lang=es`)
        .then((channels) => {
          expect(channels.data.data.length).toEqual(1)
        })
    })
  })

  describe('/channels/:id', () => {
    it('retrieves just one channel', () => {
      return request.get(`${localhost}/channels/2`)
        .then((channel) => {
          expect(channel.data.data.id).toEqual('2')
          expect(channel.data.data.name).toEqual('Xuxa')
        })
    })
  })
})
