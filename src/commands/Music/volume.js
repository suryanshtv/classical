const { MessageEmbed, MessageAttachment} = require("discord.js");
const {volumeChange} = require("../../mapping/canvas");


module.exports = {
	  name: "volume",
	  aliases: ["v", "vol"],
	  category: "Music",
  	description: "Change volume of currently playing music",
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
			return message.reply({content: "There is no music playing right now!"});
		}
		
		const volumeEmoji = client.emoji.volumehigh;

		if (!args.length) {
			return message.reply({content: `${volumeEmoji} The current volume is: **${player.volume}%**`});
		}

		const volume = Number(args[0]);
		
		if (!volume || volume < 0 || volume > 100) {
            return message.reply({content: `Usage: ${prefix}volume <Number of volume between 0 - 100>`})
		}

		player.setVolume(volume);

		if (volume > player.volume) {
		  return message.reply({content: `${volumeEmoji} Volume set to: **${volume}%**`});
		} else if (volume < player.volume) {
			return message.reply({content: `${volumeEmoji} Volume set to: **${volume}%**`});
		} else {
			return message.reply({content: `${volumeEmoji} Volume set to: **${volume}%**`});
		}
		
 	}
};