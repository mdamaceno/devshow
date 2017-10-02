let errors = {
  notFound: () => {
    return {
      error: {
        statusCode: 404,
        message: 'Not found'
      }
    }
  },
  internalServerError: (err) => {
    if (err) {
      console.log(err)
    }

    return {
      error: {
        statusCode: 500,
        message: 'Something went wrong'
      }
    }
  }
}

module.exports = errors
