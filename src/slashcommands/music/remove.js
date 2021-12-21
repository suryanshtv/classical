const { CommandInteraction, Client, MessageEmbed } = require("discord.js");

module.exports = {
    name: "remove",
    description: "Remove song from the queue",
    options: [
      {
        name: "number",
        description: "Number of song in queue",
        required: true,
        type: "NUMBER"
		}
	],

    /**
     * @param {Client} client
     * @param {CommandInteraction} interaction
     */

    run: async (client, interaction, prefix ) => {
        await interaction.deferReply({
          ephemeral: false
        });
        if (!interaction.member.voice.channel) return interaction.editReply({ content: "You must be in a voice channel to use this command." });
        if (interaction.guild.me.voice.channel && interaction.guild.me.voice.channelId !== interaction.member.voice.channelId) return interaction.editReply({ content: `Please connect to <#${interaction.guild.me.voice.channelId}> to use this command.` });

        const args = interaction.options.getNumber("number");
    	const player = interaction.client.manager.get(interaction.guildId);

        if (!player.queue.current) {
           return await interaction.editReply({content: "There is no song playing right now!"});
        }

       const position = (Number(args) - 1);
       if (position > player.queue.size) {
         const number = (position + 1);
          return await interaction.editReply({ content: `No songs at number ${number}.\nTotal Songs: ${player.queue.size}` });
       }
     
    const song = player.queue[position]
    player.queue.remove(position);

    const emojieject = client.emoji.remove;

    return await interaction.editReply({ content: `${emojieject} Removed\n[${song.title}](${song.uri})` });
     
       }
     };
