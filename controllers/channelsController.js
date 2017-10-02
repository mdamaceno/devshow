let express = require('express')
let app = express()
let parseCSV = require('../helpers/parseCSV')
let httpError = require('../helpers/httpErrors')
let channelsFilepathCSV = require('../helpers/setDatabase')

app.get('/channels', (req, res) => {
  parseCSV(channelsFilepathCSV)
    .then(channels => res.json(
      { data: channels }
    ))
    .catch((err) => res.status(500).json(httpError.internalServerError(err)))
})

app.get('/channels/:id', (req, res) => {
  parseCSV(channelsFilepathCSV)
    .then(channels => channels.filter((c) => { return c.id === req.params.id }))
    .then((c) => {
      if (c.length === 0) {
        return res.status(404).json(httpError.notFound())
      }

      return res.json({ data: c[0] })
    })
    .catch((err) => res.status(500).json(httpError.internalServerError(err)))
})

module.exports = app
