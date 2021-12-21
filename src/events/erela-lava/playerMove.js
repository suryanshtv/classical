const { MessageEmbed } = require("discord.js");

module.exports = async (client, player, oldChannel, newChannel) => {
      if (!newChannel) {
        await player.destroy();
        return oldChannel.send({ embeds: [new MessageEmbed()].setDescription("Music stopped as I have been disconnected from the voice channel.")})
      } else {
        player.voiceChannel = newChannel;
        return await player.textChannel.send({ embeds: [new MessageEmbed()].setDescription("I have been moved to the new voice channel.")})
      }
			}