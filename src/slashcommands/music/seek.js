const { CommandInteraction, Client, MessageEmbed } = require("discord.js");
const { convertTime } = require('../../utils/conversion')
const ms = require('ms');

module.exports = {
    name: "seek",
    description: "Seek the currently playing song",
    options: [
      {
        name: "time",
        description: "<10s || 10m || 10h>",
        required: true,
        type: "STRING"
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

        const args = interaction.options.getString("time");
    	const player = interaction.client.manager.get(interaction.guildId);

        if (!player.queue.current) {
           return await interaction.editReply({content: "There is no music playing."});
        }

        const time = ms(args)
        const position = player.position;
        const duration = player.queue.current.duration;

        const emojiforward = client.emoji.forward;
        const emojirewind = client.emoji.rewind;

        const song = player.queue.current;
        
        if (time <= duration) {
            if (time > position) {
                player.seek(time);
                 return await interaction.editReply({content: `${emojiforward} **Forward**\n[${song.title}](${song.uri})\n\`${convertTime(time)} / ${convertTime(duration)}\``});
            } else {
                player.seek(time);
           return await interaction.editReply({content: `${emojirewind} **Rewind**\n[${song.title}](${song.uri})\n\`${convertTime(time)} / ${convertTime(duration)}\``});
            }
        } else {
             return await interaction.editReply({content: `Seek duration exceeds Song duration.\nSong duration: \`${convertTime(duration)}\``});
        }
	
    }
};
