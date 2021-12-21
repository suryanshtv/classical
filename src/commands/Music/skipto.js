const { MessageEmbed } = require("discord.js");

module.exports = {
  	name: "skipto",
	  aliases: ["jump"],
  	category: "Music",
  	description: "Forward song",
  	args: true,
    usage: "<Number of song in queue>",
    permission: [],
    owner: false,
    player: true,
    inVoiceChannel: true,
    sameVoiceChannel: true,
 execute: async (message, args, client, prefix) => {
  
		const player = client.manager.get(message.guild.id);

        if (!player.queue.current) {
            return message.reply({content: "There is no music playing."});
        }

        const position = Number(args[0]);
		
		if (!position || position < 0 || position > player.queue.size) {
            return message.reply({content: `Usage: ${message.client.prefix}skipto <Number of song in queue>`});
		}

        player.queue.remove(0, position - 1);
        player.stop();
		
		const emojijump = client.emoji.jump;
			
		return message.reply({content: `${emojijump} Forward **${position}** Songs`});
	
    }
};