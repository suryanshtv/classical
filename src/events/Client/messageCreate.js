const { MessageEmbed, Permissions } = require("discord.js");
const pre= require("../../schema/prefix.js");

module.exports = async (client, message) => {
   
   if (!message.guild) return;
    let prefix = client.prefix;
    const channel = message?.channel;
    const ress =  await pre.findOne({guildid: message.guild.id})
   if(ress && ress.prefix)prefix = ress.prefix;

    const mention = new RegExp(`^<@!?${client.user.id}>( |)$`);
    if (message.content.match(mention)) {
      const embed = new MessageEmbed()
        .setColor(client.embedColor)
        //.setDescription(`Please do not use this bot for now, we are upgrading some stuffs.`)
        .setDescription(`**› Namaste, Konichiwa, Hello, Hola <3** **\n> My prefix is \`${prefix}\`**`);
      message.channel.send({embeds: [embed]})
    }
   const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

    const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(prefix)})\\s*`);
    if (!prefixRegex.test(message.content)) return;

    const [ matchedPrefix ] = message.content.match(prefixRegex);

    const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName) ||
        client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));

    if (!command) return;
    if(!message.guild.me.permissions.has(Permissions.FLAGS.SEND_MESSAGES)) return await message.author.dmChannel.send({ content: `I don't have **\`SEND_MESSAGES\`** permission in <#${message.channelId}> to execute this **\`${command.name}\`** command.` }).catch(() => {});

    if(!message.guild.me.permissions.has(Permissions.FLAGS.VIEW_CHANNEL)) return;

    if(!message.guild.me.permissions.has(Permissions.FLAGS.EMBED_LINKS)) return await message.channel.send({ content: `I don't have **\`EMBED_LINKS\`** permission to execute this **\`${command.name}\`** command.` }).catch(() => {});

    const embed = new MessageEmbed()
        .setColor("RED");

    // args: true,
    if (command.args && !args.length) {
        let reply = `${message.author.tag}-san, please provide any arguments, ${message.author}!`;

        // usage: '',
        if (command.usage) {
        	reply += `\nUsage: \`${prefix}${command.name} ${command.usage}\``;
        }

        embed.setDescription(reply);
        return message.channel.send({embeds: [embed]});
    }

    if (command.permission && !message.member.permissions.has(command.permission)) {
        embed.setDescription(`${message.author.tag}-san, you can't use this command.`);
        return message.channel.send({embeds: [embed]});
    }
   if (!channel.permissionsFor(message.guild.me)?.has(Permissions.FLAGS.EMBED_LINKS) && client.user.id !== userId) {
        return channel.send({ content: `Error: I need \`EMBED_LINKS\` permission to work.` });
      }
    if (command.owner && message.author.id !== `${client.owner}`) {
        embed.setDescription("Only <@690484458209542224>-sama can use this command!");
        return message.channel.send({embeds: [embed]});
    }

    const player = message.client.manager.get(message.guild.id);

    if (command.player && !player) {
        embed.setDescription("There is no player for this guild.");
        return message.channel.send({embeds: [embed]});
    }

    if (command.inVoiceChannel && !message.member.voice.channel) {
        embed.setDescription(`${message.author.tag}-san, you must be in a VC.`);
        return message.channel.send({embeds: [embed]});
    }

    if (command.sameVoiceChannel && message.member.voice.channel !== message.guild.me.voice.channel) {
        embed.setDescription(`${message.author.tag}-san, you must be in the same channel as ${message.client.user}!`);
        return message.channel.send({embeds: [embed]});
    }

    try {
        command.execute(message, args, client, prefix);
    } catch (error) {
        console.log(error);
        embed.setDescription(`${message.author.tag}-san, an error occured while executing the command, I had mentioned up owner-sama.`);
        return message.channel.send({embeds: [embed]});
    }
  }
