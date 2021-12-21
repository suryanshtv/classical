const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "help",
    category: "Information",
    aliases: [ "h" ],
    description: "Return all commands, or one specific command",
    args: false,
    usage: "",
    permission: [],
    owner: false,
    execute: async (message, args, client, prefix) => {
        const embed = new MessageEmbed();

        embed.setColor('RED');
        embed.setAuthor(client.user.username , client.user.displayAvatarURL({ size: 1024, dynamic: true }));

        const commands = client.commands.filter(x => x.showHelp !== false);

        embed.setDescription(`**Version:** \`v3.1.2\` \n**PREFIX:** \`${prefix}\` \nA cute little music bot for everyone with all music features you could expect of.`);
        embed.addField(`Commands:`, commands.map(x => `\`${x.name}\``).join(' | '));

        embed.setTimestamp();
        embed.setFooter('made by suryansh#0001 with 💖️', message.author.avatarURL({ dynamic: true }));

        message.channel.send({ embeds: [embed] });
    },
};