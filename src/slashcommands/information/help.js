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
        const embed = new MessageEmbed()
        .setColor('#E3BEC6')
        .setAuthor(client.user.username , client.user.displayAvatarURL({ size: 1024, dynamic: true }))
        .setDescription(`**Version:** \`v2022.2.1\` \nA cute little music bot for everyone with all music features you could expect of.`)
        .addFields(
          { name: '/help', value: 'Displays commands of Classy-chan.' },
          { name: '/play', value: 'Plays the given song/link.' },
          { name: '/loop', value: 'Loops the song or the queue.' },
          { name: '/join', value: 'Joins the VC you are currently in.' },
          { name: '/leave', value: 'Leaves the VC ;-;' },
          { name: '/pause', value: 'Pauses the music.' },
          { name: '/stop', value: 'Stops the current music and resets the queue.' },
          { name: '/queue', value: 'Shows the queue list.' }
      )
        .setTimestamp()
        .setFooter('made by suryansh#0001 with 💖️', interaction.member.user.displayAvatarURL({ dynamic: true }));

        await interaction.editReply({ embeds: [embed] });
     }

 }
