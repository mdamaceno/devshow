let parseString = require('xml2js').parseString

let parse = ((xml) => {
  return new Promise((resolve, reject) => {
    parseString(xml, (err, result) => {
      if (err) {
        reject(err)
      }

      let videos = result.feed.entry.map((v) => {
        let videoObj = {
          id: v['yt:videoId'][0],
          channelId: v['yt:channelId'][0],
          title: v.title[0],
          url: v.link[0]['$'].href,
          author: v.author[0].name[0],
          createdAt: v.published[0],
          updatedAt: v.updated[0],
          description: v['media:group'][0]['media:description'][0],
          thumbnail: {
            url: v['media:group'][0]['media:thumbnail'][0]['$'].url,
            width: v['media:group'][0]['media:thumbnail'][0]['$'].width,
            height: v['media:group'][0]['media:thumbnail'][0]['$'].height
          },
          views: v['media:group'][0]['media:community'][0]['media:statistics'][0]['$'].views
        }

        return videoObj;
      })
      
      let feedObj = {
        channel: {
          id: result.feed['yt:channelId'][0],
          name: result.feed.title[0],
          author: result.feed.author[0].name[0],
          createdAt: result.feed.published[0],
          videos: videos
        }
      }

      resolve(feedObj)
    })
  })
})

module.exports = parse