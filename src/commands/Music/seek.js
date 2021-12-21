const { MessageEmbed } = require("discord.js");
const { convertTime } = require('../../utils/conversion');
const ms = require('ms');

module.exports = {
  	name: "seek",
  	aliases: [],
  	category: "Music",
  	description: "Seek the currently playing song",
  	args: true,
    usage: "<10s || 10m || 10h>",
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

        const time = ms(args[0])
        const position = player.position;
        const duration = player.queue.current.duration;

        const emojiforward = client.emoji.forward;
        const emojirewind = client.emoji.rewind;

        const song = player.queue.current;
        
        if (time <= duration) {
            if (time > position) {
                player.seek(time);
                return message.reply({content: `${emojiforward} **Forward**\n[${song.title}](${song.uri})\n\`${convertTime(time)} / ${convertTime(duration)}\``});
            } else {
                player.seek(time);
          return message.reply({content: `${emojirewind} **Rewind**\n[${song.title}](${song.uri})\n\`${convertTime(time)} / ${convertTime(duration)}\``});
            }
        } else {
            return message.reply({content: `Seek duration exceeds Song duration.\nSong duration: \`${convertTime(duration)}\``});
        }
	
    }
};