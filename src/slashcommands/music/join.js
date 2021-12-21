const { MessageEmbed, CommandInteraction, Client } = require("discord.js")

module.exports = {
  name: "join",
  description: "Join voice channel",
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

    const { channel } = interaction.member.voice;

    const emojiJoin = client.emoji.join;

    if (!interaction.guild.me.voice.channel) {

      const player = client.manager.create({
        guild: interaction.guildId,
        textChannel: interaction.channelId,
        voiceChannel: interaction.member.voice.channelId,
        selfDeafen: true,
        volume: 100
      });


      player.connect();
     
      let thing = new MessageEmbed()
        .setColor(client.embedColor)
        .setDescription(`${emojiJoin} **Join the voice channel**\nJoined <#${channel.id}> and bound to <#${interaction.channel.id}>`)
      return interaction.editReply({ embeds: [thing] });

    } else if (interaction.guild.me.voice.channel !== channel) {

      let thing = new MessageEmbed()
        .setColor("RED")
        .setDescription(`You must be in the same channel as ${interaction.client.user}`);
      return interaction.editReply({ embeds: [thing] });
    }

  }
};
