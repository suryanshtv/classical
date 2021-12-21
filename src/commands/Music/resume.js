const { MessageEmbed } = require("discord.js");

module.exports = {
	  name: "resume",
    aliases: ["r"],
    category: "Music",
    description: "Resume currently playing music",
    args: false,
    usage: "<Number of song in queue>",
    permission: [],
    owner: false,
    player: true,
    inVoiceChannel: true,
    sameVoiceChannel: true,
 execute: async (message, args, client, prefix) => {
  
		const player = client.manager.get(message.guild.id);
    const song = player.queue.current;

        if (!player.queue.current) {
            return message.reply({content: "There is no music playing."});
        }

        const emojiresume = client.emoji.resume;

        if (!player.paused) {
          return message.reply({content: `${emojiresume} The player is already **resumed**.`});
        }

        player.pause(false);

        return message.reply({content: `${emojiresume} **Resumed**\n[${song.title}](${song.uri})`});
	
    }
};