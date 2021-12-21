const { MessageEmbed } = require("discord.js");

module.exports = {
	name: "skip",
	aliases: ["s"],
	category: "Music",
	description: "Skip the currently playing song",
	args: false,
  usage: "",
  permission: [],
  owner: false,
  player: true,
  inVoiceChannel: true,
  sameVoiceChannel: true,
execute: async (message, args, client, prefix) => {
  
		const player = message.client.manager.get(message.guild.id);

        if (!player.queue.current) {
         return message.reply({content: "There is no music playing."});
        }
    const song = player.queue.current;

           player.stop();
           
		const emojiskip = message.client.emoji.skip;

		return message.reply({content: `${emojiskip} **Skipped**\n[${song.title}](${song.uri})`}).then(msg => { setTimeout(() => {msg.delete()}, 3000);
       })
	
    }
};