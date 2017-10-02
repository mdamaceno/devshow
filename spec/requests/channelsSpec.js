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
    it('retrieves a list of  channels', () => {
      return request.get(`${localhost}/channels`)
        .then((channels) => {
          expect(channels.data.data.length).toEqual(2)
        })
    })
  })

  describe('/channels/:id', () => {
    it('retrieves just one channel', () => {
      return request.get(`${localhost}/channels/UCeRY0LppLWdxWAymRANTb0g`)
        .then((channel) => {
          expect(channel.data.data.id).toEqual('UCeRY0LppLWdxWAymRANTb0g')
          expect(channel.data.data.name).toEqual('Cloud Academy')
        })
    })
  })
})
