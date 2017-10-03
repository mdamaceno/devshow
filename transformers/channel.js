let resource = (channel) => {
  channel.tags = channel.tags.split(',')

  return channel
}

let collection = (channels) => {
  channels = channels.map((c) => {
    c.tags = c.tags.split(',')

    return c
  })

  return channels
}

module.exports = {
  resource,
  collection
}
