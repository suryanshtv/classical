const { MessageEmbed, version } = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
const os = require('os')

module.exports = {
    name: "status",
    category: "Information",
    aliases: ["stats"],
    description: "eto~ my status is already taken, but i can still tell you about myself",
    args: false,
    usage: "",
    permission: [],
    owner: false,
    execute: async (message, args, client) => {
        const duration1 = moment.duration(message.client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
        let ccount = client.channels.cache.size;
        let scount = client.guilds.cache.size;
        let mcount = 0;
        client.guilds.cache.forEach(guild => {
            mcount += guild.memberCount;
        });
        const embed = new MessageEmbed()
            .setColor("#F6C6EA")
            .setDescription(`My status 💖, already taken 😜`)
            .addField(`Discord.js version`, `\`${version}\``, true)
            .addField(`Node.js version`, `\`${process.version}\``, true)
            .addField(`Uptime`, `\`${duration1}\``, true)
            .addField(`Servers`, `\`${scount}\``, true)
            .addField(`Channels`, `\`${ccount}\``, true)
            .addField(`Users`, `\`${mcount}\``, true)
            .addField(`RAM`, `\`${Math.round(os.totalmem() / 1024 / 1024)} MB\``, true)
            .addField(`Heap Usage`, `\`${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)} MB\``, true)
            .addField(`Total Heap`, `\`${Math.round(process.memoryUsage().heapTotal / 1024 / 1024)} MB\``, true)
        message.reply({embeds: [embed]});
    }
}