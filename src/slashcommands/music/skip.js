const { CommandInteraction, Client, MessageEmbed } = require("discord.js");

module.exports = {
        name: "skip",
        description: "To skip a song/track from the queue.",

    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String} color
     */

  run: async (client, interaction) => {
    await interaction.deferReply({
            ephemeral: false
        });
        if (!interaction.member.voice.channel) return interaction.editReply({ content: "You must be in a voice channel to use this command." });
        if (interaction.guild.me.voice.channel && interaction.guild.me.voice.channelId !== interaction.member.voice.channelId) return interaction.editReply({ content: `Please connect to <#${interaction.guild.me.voice.channelId}> to use this command.` });

        const emojiskip = client.emoji.skip;
  if(!interaction.member.voice?.channel) return await interaction.editReply({content: "You are not connected to a voice channel to use this command."
    }).catch(() => {});

  if(interaction.guild.me.voice.channel && interaction.member.voice?.channelId !== interaction.guild.me.voice.channelId) return await interaction.editReply({ content: `You are not connected to ${interaction.guild.me.voice.channel} to use this command.`
    }).catch(() => {});
      const player = client.manager.get(interaction.guildId);
    if(!player) return await interaction.editReply({ content: `<:warn:923271071673766008> Nothing is playing right now.`
    }).catch(() => {});
    if(player && player.state !== "CONNECTED") {
       player.destroy();
      return await interaction.editReply({ content: `<:warn:923271071673766008> Nothing is playing right now.`
      }).catch(() => {});
    };
   if(!player.queue) return await interaction.editReply({ content: "<:warn:923271071673766008> Nothing is playing right now."
   }).catch(() => {});
        if(!player.queue.current) return await interaction.editReply({ content: "<:warn:923271071673766008> Nothing is playing right now."
      }).catch(() => {});

        if(!player.queue.size) return await interaction.editReply({ content: "<:warn:923271071673766008>  No songs left in the queue to skip."
      }).catch(() => {});

        player.stop();
        return await interaction.editReply({ content: `<:skip:923831762830897152>  Skipped Track: ${player.queue.current.title}`
        }).catch(() => {});
  }
					}
