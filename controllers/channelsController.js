let express = require('express')
let app = express()
let qs = require('qs')
let parseCSV = require('../helpers/parseCSV')
let httpError = require('../helpers/httpErrors')
let channelsFilepathCSV = require('../helpers/setDatabase')

app.get('/channels', (req, res) => {
  parseCSV(channelsFilepathCSV)
    .then((channels) => {
      channels = channels.map((c) => {
        c['tags'] = c.tags.split(',')

        return c
      })

      if (req.query.tags !== undefined) {
        channels = channels.filter((c) => {
          let reqTags = req.query.tags.split(',')

          let foundTags = reqTags.filter((r) => {
            return (c.tags.indexOf(r) > -1)
          })

          return (foundTags.length > 0)
        })
      }

      res.json({ data: channels })
    })
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
