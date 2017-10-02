let csvFile

if (process.env.NODE_ENV === 'test') {
  csvFile = `${__dirname}/../spec/data/channelsTest.csv`
} else if (process.env.NODE_ENV === 'development') {
  csvFile = `${__dirname}/../data/channels.csv`
} else {
  csvFile = `${__dirname}/../data/channels.csv`
}

module.exports = csvFile
