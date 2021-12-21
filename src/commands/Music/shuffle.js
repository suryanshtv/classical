const { MessageEmbed } = require("discord.js");

module.exports = {
  	name: "shuffle",
    category: "Music",
    description: "Shuffle queue",
    args: false,
    usage: "",
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
        player.queue.shuffle();
        
        const emojishuffle = client.emoji.shuffle;

        return message.reply({content: `${emojishuffle} Shuffled the queue`}).catch(error => client.logger.log(error, "error"));
	
    }
};