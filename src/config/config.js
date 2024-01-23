module.exports = {
    token: process.env.TOKEN || "",  // your bot token
    prefix: process.env.PREFIX || "--", // bot prefix
    ownerID: process.env.OWNERID || "", //your discord id
    SpotifyID: process.env.SPOTIFYID || "", // spotify client id
    SpotifySecret: process.env.SPOTIFYSECRET || "", // spotify client secret
    db: process.env.MONGO_URI || "", // MongoDb URL
    embedColor: process.env.COlOR || "", // embed colour
    logs: process.env.LOGS || "", // channel id for guild create and delete logs
    version: process.env.VERSION || "", // bot version

  nodes: {

      host: "0.0.0.0",
      port: 2333,
      password: "",
      id: "1",
      retryDelay: 3000,
      secure: false

    },

}
