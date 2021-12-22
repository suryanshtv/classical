const delay = require("delay");
const { MessageEmbed } = require("discord.js");
const ms = require('ms');
const {queueEnd} = require("../../mapping/canvas");

module.exports = async (client, player) => {
	const channel = client.channels.cache.get(player.textChannel);
	await channel.send({embeds: [new MessageEmbed().setDescription(`Queue has ended`).setColor("#e592d8")]})
	await player.deleteNowPlayingMessage();
}