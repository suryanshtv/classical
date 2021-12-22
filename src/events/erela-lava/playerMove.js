const { MessageEmbed } = require("discord.js");

module.exports = async (client, player, oldChannel, newChannel) => {
      if (!newChannel) {
        await player.destroy();
        return player.textChannel.send({ embeds: [new MessageEmbed().setDescription("eto~ Something errored while playing or switching, stopping and destroying the player.")]})
      } else {
        player.voiceChannel = newChannel;
        return await player.textChannel.send({ embeds: [new MessageEmbed().setDescription(`Watashiwa moved to ${newChannel}`)]})
      }
			}