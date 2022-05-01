const { MessageEmbed } = require('discord.js');
module.exports = {
    name: "send",
    category: "main",
    aliases: ["broadcast"],
    description: "bsc to other servers",
    args: false,
    usage: "Nothing.",
    permission: [],
    owner: true,
    player: false,
    inVoiceChannel: false,
    sameVoiceChannel: false,
    execute: async (message, args, client) => {
        client.guilds.cache.map((guild) => {
            const channel = guild.channels.cache.find(
                (c) => c.type === "GUILD_TEXT" && c.permissionsFor(guild.me).has("SEND_MESSAGES")
            );
            embed = new MessageEmbed()
                .setAuthor(`Classical Developer `,`https://cdn.discordapp.com/avatars/690484458209542224/a_3f3013859b6933144e1054dcbbec0a65.gif?size=2048`)
                .setTitle("Announcement for all servers!")
                .setDescription(`Hi! I am Suryansh, developer of Classical 🤗. 
This is the first time I am sending a broadcast to every server where my bot is invited, I hope everyone is doing fine and good.
\`\`\`yaml
Reason: Survey and Feedback of Bot, Bug Fixing for next stable release.
MoreInfo: I know that Classical still has many bugs of disconnecting, playback issues and others but this time I need feedback directly from you all.
\`\`\`
**To mention out bugs or to give feedback you can join my discord server from [here](https://discord.gg/e4cAQ4nRU4).**`)
                .setColor("#eb8dd8")
                .setTimestamp()
                .setFooter(`⚠️ Reserved by the developers of Classical.`);
            channel.send({embeds: [embed]});
        })
    }
}