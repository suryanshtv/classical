const { MessageEmbed, CommandInteraction, Client } = require("discord.js")

module.exports = {
    name: "resume",
    description: "Resume currently playing music",
	
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
        const song = player.queue.current;

       if (!player.queue.current) {
             return interaction.editReply({content: "There is no music playing."});
        }

        const emojiresume = client.emoji.resume;

        if (!player.paused) {
           return interaction.editReply({content: `${emojiresume} The player is already **resumed**.`});
        }

        player.pause(false);

         return interaction.editReply({content: `${emojiresume} **Resumed**\n[${song.title}](${song.uri})`});
	
    }
};
