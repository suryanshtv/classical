const { MessageEmbed, CommandInteraction, Client } = require("discord.js")

module.exports = {
    name: "shuffle",
    description: "Shuffle queue",
	
    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     */

    run: async (client, interaction) => {
        await interaction.deferReply({
          ephemeral: false
        });
        if (!interaction.member.voice.channel) return interaction.editReply({ content: "You must be in a voice channel to use this command." });
        if (interaction.guild.me.voice.channel && interaction.guild.me.voice.channelId !== interaction.member.voice.channelId) return interaction.editReply({ content: `Please connect to <#${interaction.guild.me.voice.channelId}> to use this command.` });

        const player = interaction.client.manager.get(interaction.guildId);              
       if (!player.queue.current) {
             return interaction.editReply({content: "There is no music playing."});
        }
        player.queue.shuffle();
        
        const emojishuffle = client.emoji.shuffle;

         return interaction.editReply({content: `${emojishuffle} Shuffled the queue`});
	
    }
};
