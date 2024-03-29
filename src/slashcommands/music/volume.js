const { CommandInteraction, Client, MessageEmbed } = require("discord.js");

module.exports = {
    name: "volume",
    description: "Changes volume of currently playing music.",
      options: [
      {
        name: "number",
        description: "give your volume number ",
        required: true,
        type: "NUMBER"
	  	}
	],

    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     * @param {String} color 
     */

  run: async (client, interaction) => {
    await interaction.deferReply({
            ephemeral: false
        });
        if (!interaction.member.voice.channel) return interaction.editReply({ content: "You must be in a voice channel to use this command." });
        if (interaction.guild.me.voice.channel && interaction.guild.me.voice.channelId !== interaction.member.voice.channelId) return interaction.editReply({ content: `Please connect to <#${interaction.guild.me.voice.channelId}> to use this command.` });

        const volumeEmoji = client.emoji.volumehigh;
    const emojivolume = client.emoji.volumehigh;
		
    const vol = interaction.options.getNumber("number");

  	const player = client.manager.get(interaction.guildId);
	  if(!player) return await interaction.editReply({content: `There is no music playing.`}).catch(() => {});
    if (!player.queue.current) return await interaction.editReply({content: `There is no music playing.`}).catch(() => {});
  const volume = Number(vol);
		if (!volume || volume < 0 || volume > 100) return await interaction.editReply({content: `Usage: ${client.prefix}volume <Number of volume between 0 - 100>`}).catch(() => {});
   player.setVolume(volume);   
  if (volume > player.volume) return await interaction.editReply({content: `${volumeEmoji} Volume set to: **${volume}%**`}).catch(() => {});
  else if (volume < player.volume) return await interaction.editReply({content: `${volumeEmoji} Volume set to: **${volume}%**`}).catch(() => {});
   else 
  await interaction.editReply({ content: `${volumeEmoji} Volume set to: **${volume}%**`}).catch(() => {});
   }
			}
