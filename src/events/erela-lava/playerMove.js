const { MessageEmbed } = require("discord.js");

module.exports = async (client, player, oldChannel, newChannel) => {
      const channel = client.channels.cache.get(player.textChannel);
      if (!newChannel) {
        await player.destroy();
        return channel.send({ embeds: [new MessageEmbed().setDescription("Someone disconnected me from the VC!")]})
      } else {
        player.voiceChannel = newChannel;
        return await channel.send({ embeds: [new MessageEmbed().setDescription(`Someone moved me to <#${newChannel}>`)]})
      }
}
