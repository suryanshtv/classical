const { MessageEmbed } = require("discord.js");

module.exports = async (client, player, oldChannel, newChannel) => {
      const channel = client.channel.cache.get(player.textChannel);
      if (!newChannel) {
        await player.destroy();
        return channel.send({ embeds: [new MessageEmbed().setDescription("eto~ Something errored while playing or switching, stopping and destroying the player.")]})
      } else {
        player.voiceChannel = newChannel;
        return await channel.send({ embeds: [new MessageEmbed().setDescription(`Watashiwa moved to <#${newChannel}>`)]})
      }
}