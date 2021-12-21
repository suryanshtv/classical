
const { MessageEmbed, version, CommandInteraction, Client } = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
const os = require('os')
const si = require('systeminformation');

module.exports = {
    name: "status",
    description: "eto~ my status is already taken, but i can still tell you about myself",
    run: async (client, interaction) => {

      await interaction.deferReply({
            ephemeral: false
        });
        
       const duration1 = moment.duration(interaction.client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
        const cpu = await si.cpu();
        const about = interaction.client.emoji.about;
        let ccount = client.channels.cache.size;
        let scount = client.guilds.cache.size;
        let mcount = 0; 
client.guilds.cache.forEach((guild) => {
    mcount += guild.memberCount 

})
        const embed = new MessageEmbed()
            .setColor(interaction.client.embedColor)
            .setThumbnail(interaction.client.user.displayAvatarURL())
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
        await interaction.followUp({embeds: [embed]});
    }
}

