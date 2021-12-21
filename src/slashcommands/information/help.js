const { MessageEmbed, CommandInteraction, Client } = require("discord.js");

module.exports = {
    name: "help",
    description: "Return all commands, or one specific command",
    owner: false,

    /**
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param prefix
     */

    run: async (client, interaction, prefix) => {
        await interaction.deferReply({
          ephemeral: false
        });
        const commands = client.commands.filter(x => x.showHelp !== false);
        const embed = new MessageEmbed()
        .setColor('RED')
        .setAuthor(client.user.username , client.user.displayAvatarURL({ size: 1024, dynamic: true }))
        .setDescription(`**Version:** \`v3.1.2\` \n**PREFIX:** \`${prefix}\` \nA cute little music bot for everyone with all music features you could expect of.`)
        .addField(`Commands:`, commands.map(x => `\`${x.name}\``).join(' | '))
        .setTimestamp()
        .setFooter('made by suryansh#0001 with 💖️', interaction.member.user.displayAvatarURL({ dynamic: true }));

        await interaction.editReply({ embeds: [embed] });
     }

 }
