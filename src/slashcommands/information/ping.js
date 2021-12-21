const { MessageEmbed, CommandInteraction, Client } = require("discord.js")
const {lazy} = require("../../mapping/lazy");

module.exports = {
    name: "ping",
    description: "🏓 Pong! aaa~ senpai i am slow dont ping me!!!",

    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     */

    run: async (client, interaction) => {
        await interaction.deferReply({
            ephemeral: false
        });
        await interaction.editReply({ content: "Pinging..." }).then(async () => {
            const ping = Date.now() - interaction.createdAt;
            const api_ping = client.ws.ping;
            let lazyPingReply;
            let lazyApi_pingReply;
            await lazy(ping).then((watashiwalazy)=> lazyPingReply = watashiwalazy)
            await lazy(api_ping).then((watashiwalazy)=> lazyApi_pingReply =  watashiwalazy)
            await interaction.editReply({
                content: `${interaction.member.user.username}-san, why you are checking my ping, I am already slow...`,
                embeds: [new MessageEmbed()
                    .setAuthor(`🏓`, client.user.displayAvatarURL({ dynamic: true }))
                    .setColor(client.embedColor)
                    .setFooter(`Requested by ${interaction.member.user.username}-san`, interaction.member.user.displayAvatarURL({ dynamic: true }))
                    .addField("My laziness...", `\`\`\`ini\n[ ${ping}ms ], ${lazyPingReply}\n\`\`\``, false)
                    .addField("Discord laziness...", `\`\`\`ini\n[ ${api_ping}ms ], ${lazyApi_pingReply}\n\`\`\``, false)
                    .setTimestamp()]
            });
        })
    }
			}