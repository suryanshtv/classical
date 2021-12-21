const musicClient = require("./src/structures/MusicClient");
const client = new musicClient();

client.connect()


module.exports = client;
