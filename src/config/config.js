module.exports = {
    token: process.env.TOKEN || "NzgxODU2OTE5MDY0MjgxMTI5.X8Du_w.ho-MAoYuDus3MgQ4zElQ13Hv1jY",  // your bot token
    prefix: process.env.PREFIX || "--", // bot prefix
    ownerID: process.env.OWNERID || "690484458209542224", //your discord id
    SpotifyID: process.env.SPOTIFYID || "da8e3b26c42a499e854d63af02c067e8", // spotify client id
    SpotifySecret: process.env.SPOTIFYSECRET || "852c85311add4fcbbf23108f0ed0b5bd", // spotify client secret
    db: process.env.MONGO_URI || "mongodb+srv://Classical-DEV:adminrestapi@cluster0.y86iq.mongodb.net/test-classychan?retryWrites=true&w=majority", // MongoDb URL
    embedColor: process.env.COlOR || "#e592d8", // embed colour
    logs: process.env.LOGS || "915163877484933140", // channel id for guild create and delete logs
    version: process.env.VERSION || "2021.end", // bot version

  nodes: {

      host: "mc.minimal.team",
      port: 2333,
      password: "Hmnode.Minimal.LaLink.Erela",
      id: "1",
      retryDelay: 3000,
      secure: false

    },

}
