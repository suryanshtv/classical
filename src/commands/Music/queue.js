
const { Client, Message, MessageEmbed, MessageButton, MessageActionRow, MessageAttachment} = require("discord.js");
const pms = require("pretty-ms");
const load = require("lodash");
const { queueMapCanvas} = require("../../mapping/queueCanvas");

module.exports = {
    name: "queue",
    category: "Music",
    aliases: ["q"],
    description: "Show the music queue and now playing.",
    args: false,
    usage: "",
    permission: [],
    owner: false,
    player: true,
    inVoiceChannel: false,
    sameVoiceChannel: false,
    execute: async (message, args, client, prefix) => {

        const player = client.manager.get(message.guild.id);
        if(!player) return message.channel.send({ embeds: [new MessageEmbed().setColor(client.embedColor).setTimestamp().setDescription(`Nothing is playing right now.`)]});

        if(!player.queue) return message.channel.send({ embeds: [new MessageEmbed().setColor(client.embedColor).setTimestamp().setDescription(`Nothing is playing right now.`)]});

        if(player.queue.length === 0 || !player.queue.length) {

            await message.channel.send({
                content: `Now playing ${player.queue.current.title} • \`[ ${pms(player.position)} / ${pms(player.queue.current.duration)} ]\` • [${player.queue.current.requester}]`
            }).catch(() => {});
        }
        else {
            let page = args[0];
            console.log(page);
            console.log(args)
            await queueMapCanvas(player, page).then(async (canvas) => await message.channel.send({content: `**Now playing**\n${player.queue.current.title} • \`[ ${pms(player.position)} / ${pms(player.queue.current.duration)} ]\` • [${player.queue.current.requester}]`, files: [await new MessageAttachment(canvas.toBuffer(), "queue.png")]}))
        }
    }
};