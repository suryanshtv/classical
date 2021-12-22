const { MessageEmbed, MessageActionRow, MessageButton, MessageAttachment} = require("discord.js");
const { convertTime } = require('../../utils/conversion');
const {base} = require("../../mapping/playerCanvas");
const ytSr = require("youtube-sr").default;
const spotifyLink = require("spotify-url-info");

module.exports = async (client, player, track, payload) => {

   let baseImage;
   let title = `${track.title}`;
   let artist = `${track.author}`;
   let durationMS = await convertTime(track.duration);
   let link = track.uri;
   let thumbnail;
   if (link.includes('spotify')) {
    const songInfo = await spotifyLink.getPreview(link);
    thumbnail = songInfo.image;
  } if (link.includes('youtube')) {
    const songInfo = await ytSr.searchOne(link);
    thumbnail = songInfo.thumbnail?.url;
  }

   await base(title, artist, durationMS, link, thumbnail).then((canvas)=> baseImage = new MessageAttachment(canvas.toBuffer(), "base.png"));

   const But1 = new MessageButton().setCustomId("skip").setEmoji("852479508408827915").setStyle("SECONDARY");
    
   const But2 = new MessageButton().setCustomId("stop").setEmoji("852482042445037588").setStyle("SECONDARY");

   const But3 = new MessageButton().setCustomId("pause").setEmoji("852646133100838913").setStyle("SECONDARY");

   const But4 = new MessageButton().setCustomId("vdown").setEmoji("852484113356685322").setStyle("SECONDARY");
    
   const But5 = new MessageButton().setCustomId("vup").setEmoji("852484422367444992").setStyle("SECONDARY");
   
   const row = new MessageActionRow().addComponents(But1, But2, But3, But4, But5);

  let NowPlaying = await client.channels.cache
    .get(player.textChannel)
    .send({ files: [baseImage], components: [row] })
  await player.setNowplayingMessage(NowPlaying);
  
  const collector = NowPlaying.createMessageComponentCollector({
    filter: (b) => {
      if(b.guild.me.voice.channel && b.guild.me.voice.channelId === b.member.voice.channelId) return true;
      else {
        b.reply({content: `You are not connected to ${b.guild.me.voice.channel} to use this buttons.`, ephemeral: true}); return false;
        }
     },
     time: track.duration,
      });
        collector.on("collect", async (i) => {
            if (i.customId === "vdown") {
               if (!player) {
                 return collector.stop();
               }
              let amount = Number(player.volume) - 10;
               await player.setVolume(amount);
              i.reply({content: `Volume set to ${amount} `, ephemeral: true});
           } else if (i.customId === "stop") {
                if (!player) {
                    return collector.stop();
                }
                await player.stop();
                await player.queue.clear();
                i.reply({content: "Music Is Stopped", ephemeral: true});
                return collector.stop();
            } else if (i.customId === "pause") {
                if (!player) {
                    return collector.stop();
                }
                player.pause(!player.paused);
                const Text = player.paused ? "paused" : "resume";
                i.reply({content: `I have ${Text} the music!`, ephemeral: true});
            } else if (i.customId === "skip") {
                if (!player) {
                    return collector.stop();
                }
                await player.stop();
                i.reply({content: "I have skipped to the next song!", ephemeral: true});
                if (track.length === 1) {
                    return collector.stop();
                }
            } else if (i.customId === "vup") {
               if (!player) {
                 return collector.stop();
               }
               let amount = Number(player.volume) + 10;
            if(amount >= 200) return i.reply({ content: `Cannot higher the player volume further more.`, ephemeral: true });
               await player.setVolume(amount);
               i.reply({content: `Volume set to ${amount} `, ephemeral: true});
                return;
            }
      });
}
