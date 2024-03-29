const { CommandInteraction, Client, MessageEmbed } = require("discord.js");
const pre = require("../../schema/prefix.js");
const mongoose = require('mongoose')
module.exports = {
    name: "setprefix",
    description: "Set Custom Prefix",
    options: [
        {
            name: "prefix",
            description: "Set a custom prefix for Classical",
            required: true,
            type: "STRING"
        }
    ],


    run: async (client, interaction,) => {
        await interaction.deferReply({
        });
        const args = interaction.options.getString("prefix");

        if (!interaction.member.permissions.has('MANAGE_GUILD')) return await interaction.editReply({ ephemeral: true, embeds: [new MessageEmbed().setColor(client.embedColor).setDescription("You must have `Manage Guild` permission to use this command.")]
        }).catch(() => {});

        if (!args[0]) {
            const embed = new MessageEmbed()
                .setDescription("Please prove a prefix you want to set")
                .setColor(client.embedColor)
            return await interaction.editReply({ embeds: [embed] });
        }

        if (args[1]) {
            const embed = new MessageEmbed()
                .setDescription("Prefix cannot be two arguments.")
                .setColor(client.embedColor)
            return await interaction.editReply({ embeds: [embed] });
        }

        if (args[0].length > 3) {
            const embed = new MessageEmbed()
                .setDescription("Prefix cannot be longer than 2 characters")
                .setColor(client.embedColor)
            return await interaction.editReply({ embeds: [embed] });
        }

        const res = await pre.findOne({ guildid:interaction.guildId })
        let prefix = args();
        let p;
        if (!res) p = "!"
        else p = res.prefix;
        const noperms = new MessageEmbed()
            .setColor("#651FFF")
            .setDescription(`Prefix for this server is \`${p}\``)
        let newprefix = args();
        if (!args[0]) return interaction.editReply({embeds: [noperms]});
        else {
            pre.findOne({ guildid: message.guild.id }).then(result => {
                let update = new pre({
                    _id: new mongoose.Types.ObjectId(),
                    guildid: message.guild.id,
                    prefix: prefix
                })
                let send = new MessageEmbed()
                    .setDescription(`Changed prefix to \`${newprefix}\``)
                    .setTimestamp()
                    .setColor("#651FFF")
                message.reply({embeds: [send]});
                if (!result || result == []) {
                    update.save().catch(console.error);
                } else {
                    pre.deleteOne({ guildid: message.guild.id }).catch(console.error)
                    update.save().catch(console.error)
                }
            })}
    }
}
