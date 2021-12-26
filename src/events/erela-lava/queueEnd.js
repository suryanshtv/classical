const delay = require("delay");
const { MessageEmbed } = require("discord.js");
const ms = require('ms');
const {queueEnd} = require("../../mapping/canvas");

module.exports = async (client, player) => {
	const channel = client.channels.cache.get(player.textChannel);
	await channel.send({content: `<:warn:923271071673766008> **Queue has ended**`})
	await player.deleteNowPlayingMessage();
}