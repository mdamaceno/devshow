let express = require('express')
let app = express()
let channelsController = require('./controllers/channelsController')

app.use(channelsController)

let server = app.listen(4000, (err) => {
  if (process.env.NODE_ENV !== 'test') {
    let port = server.address().port
    console.log(`App is running on port ${port}`)
  }
})

module.exports = server
