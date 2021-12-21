const { MessageEmbed } = require("discord.js");
const {lazy} = require("../../mapping/lazy");

module.exports = {
    name: "ping",
    category: "Information",
    description: "🏓 Pong! aaa~ senpai i am slow dont ping me!!!",
    args: false,
    usage: "",
    permission: [],
    owner: false,
    execute: async (message, args, client, prefix) => {
      
  await message.reply({ content: "<a:load:857937540312465428>" }).then(async (msg) => {
  const ping = msg.createdAt - message.createdAt;
  const api_ping = client.ws.ping;
  let lazyPingReply;
  let lazyApi_pingReply;
  await lazy(ping).then((watashiwalazy)=> lazyPingReply = watashiwalazy)
  await lazy(api_ping).then((watashiwalazy)=> lazyApi_pingReply =  watashiwalazy)

  const PingEmbed = new MessageEmbed()
    .setAuthor("🏓", client.user.displayAvatarURL())
    .setColor("RED")
      .addField("My laziness...", `\`\`\`ini\n[ ${ping}ms ], ${lazyPingReply}\n\`\`\``, false)
      .addField("Discord laziness...", `\`\`\`ini\n[ ${api_ping}ms ], ${lazyApi_pingReply}\n\`\`\``, false)
    .setFooter(`Requested by ${message.author.username}-san`, message.author.avatarURL({ dynamic: true }))
    .setTimestamp();

  await msg.edit({
    content: `${message.author.username}-san, why you are checking my ping, I am already slow...`,
      embeds : [PingEmbed],
  })
 })
 }
}