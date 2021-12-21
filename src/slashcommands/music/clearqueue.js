const { MessageEmbed, CommandInteraction, Client } = require("discord.js")

module.exports = {
    name: "clearqueue",
    description: "Clear the present queue of Classical",
	
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
       if (!player.queue.current) {
            let thing = new MessageEmbed()
                .setColor("RED")
                .setDescription("The queue is empty so nothing is playing.");
             return interaction.editReply({embeds: [thing]});
        }
        
     		player.queue.clear();

		  const emojieject = client.emoji.remove;

		  let thing = new MessageEmbed()
	   		.setColor(client.embedColor)
  			.setTimestamp()
		  	.setDescription(`${emojieject} All songs have been removed from the current queue.`)
         return interaction.editReply({embeds: [thing]});
	
    }
};
