let resource = (channel) => {
  if (!channel.hasOwnProperty('tags')) {
    channel.tags = []
  } else {
    channel.tags = channel.tags.split(',')
  }

  if (channel.tags.length === 1 && channel.tags[0] === '') {
    channel.tags = []
  }

  return channel
}

let collection = (channels) => {
  channels = channels.map((c) => {
    if (!c.hasOwnProperty('tags')) {
      c.tags = []
    } else {
      c.tags = c.tags.split(',')
    }

    if (c.tags.length === 1 && c.tags[0] === '') {
      c.tags = []
    }

    return c
  })

  return channels
}

module.exports = {
  resource,
  collection
}
