const delay = require("delay");
const { MessageEmbed } = require("discord.js");
const ms = require('ms');
const {queueEnd} = require("../../mapping/canvas");

module.exports = async (client, player) => {
	const channel = client.channels.cache.get(player.textChannel);
	await channel.send({content: `<:warn:923271071673766008> **Queue has ended**`})
	await player.deleteNowPlayingMessage();
	//delayed
	if (!player.twentyFourSeven)
	{
    await delay(120000);
	if (player.queue.totalSize === 0 && !player.twentyFourSeven)
	{
    await player.destroy();
	await client.logger.log(`Idle Timeout at ${player.guild}`, "log");
	await channel.send({content: `<:warn:923271071673766008> **Disconnected from VC as their is no queue. If you want me to be in VC please turn on 24/7**`})
	}
	}
}
