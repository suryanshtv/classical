const { MessageEmbed, CommandInteraction, Client } = require("discord.js")

module.exports = {
  name: "24-7",
  description: "24/7 in voice channel",

  /**
   * 
   * @param {Client} client 
   * @param {CommandInteraction} interaction 
   */

  run: async (client, interaction) => {
    await interaction.deferReply({
      ephemeral: false
    });
    if (!interaction.member.voice.channel) return interaction.editReply({ embeds: [new MessageEmbed().setColor(client.embedColor).setDescription("Connect to a VC first!")] });
    if (interaction.guild.me.voice.channel && interaction.guild.me.voice.channelId !== interaction.member.voice.channelId) return interaction.editReply({ embeds: [new MessageEmbed().setColor(client.embedColor).setDescription(`Please connect to <#${interaction.guild.me.voice.channelId}> to use this command.`)] });

    const player = interaction.client.manager.get(interaction.guildId);
    if (!player) {
      const embed = new MessageEmbed()
        .setDescription('The queue is empty so nothing is playing.')
        .setColor(client.embedColor)
      return interaction.editReply({ embeds: [embed] });
    }
    const { channel } = interaction.member.voice

    if (player.twentyFourSeven) {
      player.twentyFourSeven = false;
      const embed = new MessageEmbed()
        .setDescription("24/7 mode is **Disabled**")
        .setColor(client.embedColor)
      return interaction.editReply({ embeds: [embed] });
    } else {
      player.twentyFourSeven = true;
      const embed = new MessageEmbed()
        .setDescription("24/7 mode is **Enabled**")
        .setColor(client.embedColor)
      return interaction.editReply({ embeds: [embed] });

    }
  }
}
