const delay = require("delay");
const { MessageEmbed, MessageAttachment} = require("discord.js");
const ms = require('ms');
const {queueEnd} = require("../../mapping/canvas");

module.exports = async (client, player) => {
	//const channel = client.channels.cache.get(player.textChannel);
	await player.deleteNowPlayingMessage();
}