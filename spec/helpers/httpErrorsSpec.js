let httpError = require('../../helpers/httpErrors')

describe('#notFound', () => {
  it('returns a json with status and message', () => {
    expect(httpError.notFound().error.statusCode).toEqual(404)
    expect(httpError.notFound().error.message).toEqual('Not found')
  })
})

describe('#internalServerError', () => {
  it('returns a json with status and message', () => {
    expect(httpError.internalServerError().error.statusCode).toEqual(500)
    expect(httpError.internalServerError().error.message).toEqual('Something went wrong')
  })
})
