const { CommandInteraction, Client, MessageEmbed, MessageAttachment, MessageButton, MessageActionRow} = require("discord.js");
const { TrackUtils} = require("erela.js");
const { convertTime } = require('../../utils/conversion');
const {spotifyPlaylist, spotifyTrack, youtubePlaylist, youtubeTrack} = require("../../mapping/playerCanvas");
module.exports = {
  name: "play",
  description: "To play some song.",
  options: [
    {
      name: "input",
      description: "The search input (name/url)",
      required: true,
      type: "STRING"
		}
	],

  /**
   * @param {Client} client
   * @param {CommandInteraction} interaction
   */

  run: async (client, interaction,) => {
   await interaction.deferReply({
            ephemeral: false
        });
      if (!interaction.member.voice.channel) return interaction.editReply({ content: "You must be in a voice channel to use this command." });
      if (interaction.guild.me.voice.channel && interaction.guild.me.voice.channelId !== interaction.member.voice.channelId) return interaction.editReply({ content: `Please connect to <#${interaction.guild.me.voice.channelId}> to use this command.` });

      const emojiplaylist = client.emoji.playlist;
      let SearchString = interaction.options.getString("input");
      let res;
    
    let player = client.manager.create({
      guild: interaction.guildId,
      textChannel: interaction.channelId,
      voiceChannel: interaction.member.voice.channelId,
      selfDeafen: true,
      volume: 100
    });
    
      if (player.state !== "CONNECTED") await player.connect();
      try {
          if (player.queue.current === null) {
              //no songs in queue part initialization
              if (SearchString.match(client.Lavasfy.spotifyPattern)) {
                  await client.Lavasfy.requestToken();
                  let node = client.Lavasfy.nodes.get(client.config.nodes.id);
                  let Searched = await node.load(SearchString);
                  //playlist
                  if (Searched.loadType === "PLAYLIST_LOADED") {
                      let songs = [];
                      for (let i = 0; i < Searched.tracks.length; i++)
                          songs.push(TrackUtils.build(Searched.tracks[i], interaction.user));
                      player.queue.add(songs);
                      if (!player.playing && !player.paused && player.queue.totalSize === Searched.tracks.length)
                          await player.play();
                      return await interaction.editReply({content: `**Added Playlist to queue** [${Searched.playlistInfo.name}](${SearchString}) - [\`${Searched.tracks.length}\`]`});
                      //only song
                  } else if (Searched.loadType.startsWith("TRACK")) {
                      player.queue.add(TrackUtils.build(Searched.tracks[0], interaction.user));
                      if (!player.playing && !player.paused && !player.queue.size)
                          await player.play();
                      return await interaction.editReply({content: `**Added to queue** - [${Searched.tracks[0].info.title}](${Searched.tracks[0].info.uri})`});
                      //no results
                  } else {
                      return await interaction.editReply({content: `**No results found**`});
                  }

              } else {
                  //youtube part
                  let Searched = await player.search(SearchString, interaction.user);
                  if (!player)
                      return await interaction.editReply({content: `**No results found**`});

                  if (Searched.loadType === "NO_MATCHES")
                      return await interaction.editReply({content: `**No results found**`});
                  else if (Searched.loadType === "PLAYLIST_LOADED") {
                      player.queue.add(Searched.tracks);
                      if (!player.playing && !player.paused &&
                          player.queue.totalSize === Searched.tracks.length)
                          await player.play();
                      return await interaction.editReply({content: `Playlist added to queue - [${Searched.playlist.name}](${SearchString}) - \`${Searched.tracks.length}\` songs - \`[${await convertTime(Searched.playlist.duration)}]\``});
                  } else {
                      player.queue.add(Searched.tracks[0], interaction.user);
                      if (!player.playing && !player.paused && !player.queue.size)
                          await player.play();
                      return await interaction.editReply({content: `**Added Song to queue**\n[${Searched.tracks[0].title}](${Searched.tracks[0].uri}) - \`[${await convertTime(Searched.tracks[0].duration)}]\``});
                  }
              }
          } else {
              //has songs and has to show the adding images canvas implementation
              //spotify part
              if (SearchString.match(client.Lavasfy.spotifyPattern)) {
                  await client.Lavasfy.requestToken();
                  let node = client.Lavasfy.nodes.get(client.config.nodes.id);
                  let Searched = await node.load(SearchString);
                  if (Searched.loadType === "PLAYLIST_LOADED") {
                      //init songs to be loaded
                      let songs = [];
                      //separating songs from playlist
                      for (let i = 0; i < Searched.tracks.length; i++)
                          songs.push(TrackUtils.build(Searched.tracks[i], interaction.user));
                      player.queue.add(songs);
                      //if player is ded or something do something
                      if (!player.playing && !player.paused && player.queue.totalSize === Searched.tracks.length)
                          await player.play();
                      //image manipulation for spotify playlist.
                      let spotifyPlaylistImage;
                      await spotifyPlaylist(SearchString, interaction.user).then((canvas) => spotifyPlaylistImage = new MessageAttachment(canvas.toBuffer(), 'spotifyPlaylist.png'));
                      const linkButton = new MessageButton()
                          .setLabel('Playlist Link')
                          .setURL(SearchString)
                          .setStyle('LINK')
                      const row = new MessageActionRow().addComponents(linkButton);
                      return await interaction.editReply({files: [spotifyPlaylistImage], components: [row]});
                  } else if((Searched.loadType.startsWith("TRACK"))) {
                      //adds the spotify track to the queue
                      player.queue.add(TrackUtils.build(Searched.tracks[0], interaction.user));
                      //if player is ded or something do something
                      if (!player.playing && !player.paused && !player.queue.size)
                          await player.play();
                      //image manipulation for track.
                      let spotifyTrackImage;
                      await spotifyTrack(Searched, interaction.user).then((canvas) => spotifyTrackImage = new MessageAttachment(canvas.toBuffer(), 'spotifyTrack.png'));
                      const linkButton = new MessageButton()
                          .setLabel('Track Link')
                          .setURL(SearchString)
                          .setStyle('LINK')
                      const row = new MessageActionRow().addComponents(linkButton);
                      return await interaction.editReply({files: [spotifyTrackImage], components: [row]});
                  }

              } else {
                  //youtube part
                  let Searched = await player.search(SearchString, interaction.user);
                  if (!player)
                      return await interaction.editReply({content: `Nothing is playing right now.`});
                  if (Searched.loadType === "NO_MATCHES") {
                      return await interaction.editReply({content: "No matches found for that query..."});
                  } else if (Searched.loadType === "PLAYLIST_LOADED") {
                      //adds the youtube playlist to the queue
                      player.queue.add(Searched.tracks);
                      //if player is ded or something do something
                      if (!player.playing && !player.paused && player.queue.totalSize === Searched.tracks.length)
                          await player.play();
                      //image manipulation for youtube playlist.
                      let youtubePlaylistImage;
                      await youtubePlaylist(Searched, interaction.user).then((canvas) => youtubePlaylistImage = new MessageAttachment(canvas.toBuffer(), 'youtubePlaylist.png'));
                      const linkButton = new MessageButton()
                          .setLabel('Playlist Link')
                          .setURL(SearchString)
                          .setStyle('LINK')
                      const row = new MessageActionRow().addComponents(linkButton);
                      return await interaction.editReply({files: [youtubePlaylistImage], components: [row]});
                  }
                  //only track condition
                  else {
                      //adds the youtube track to the queue
                      player.queue.add(Searched.tracks[0]);
                      //if player is ded or something do something
                      if (!player.playing && !player.paused && !player.queue.size)
                          await player.play();
                      //image manipulation for track.
                      let youtubeTrackImage;
                      await youtubeTrack(Searched, interaction.user).then((canvas) => youtubeTrackImage = new MessageAttachment(canvas.toBuffer(), 'youtubeTrack.png'));
                      const linkButton = new MessageButton()
                          .setLabel('Track Link')
                          .setURL(Searched.tracks[0].uri)
                          .setStyle('LINK')
                      const row = new MessageActionRow().addComponents(linkButton);
                      return await interaction.editReply({files: [youtubeTrackImage], components: [row]});
                  }
              }
          }
      } catch (err) {
        console.log(err);
      }



      // if (search.match(client.Lavasfy.spotifyPattern)) {
      //   await client.Lavasfy.requestToken();
      //   let node = client.Lavasfy.nodes.get(client.config.nodes.id);
      //   let Searched = await node.load(search);
      //
      //
      //   switch (Searched.loadType) {
      //     case "LOAD_FAILED":
      //       if (!player.queue.current) player.destroy();
      //       return await interaction.editReply({ content: ":x: Could not load the song." });
      //
      //     case "NO_MATCHES":
      //       if (!player.queue.current) player.destroy();
      //       return await interaction.editReply({ content: ":x: Could not find any songs." });
      //
      //     case "TRACK_LOADED":
      //       player.queue.add(TrackUtils.build(Searched.tracks[0], interaction.user));
      //       if (!player.playing && !player.paused && !player.queue.length)
      //         player.play();
      //    return await interaction.editReply({content: `${emojiplaylist} **Added to queue** - [${Searched.tracks[0].info.title}](${Searched.tracks[0].info.uri})`});
      //
      //     case "SEARCH_RESULT":
      //       player.queue.add(TrackUtils.build(Searched.tracks[0], interaction.user));
      //       if (!player.playing && !player.paused && !player.queue.length)
      //         player.play();
      //       return await interaction.editReply({ content: `${emojiplaylist} **Added to queue** - [${Searched.tracks[0].info.title}](${Searched.tracks[0].info.uri})` });
      //
      //     case "PLAYLIST_LOADED":
      //       let songs = [];
      //       for (let i = 0; i < Searched.tracks.length; i++)
      //         songs.push(TrackUtils.build(Searched.tracks[i], interaction.user));
      //       player.queue.add(songs);
      //       if (
      //         !player.playing &&
      //         !player.paused &&
      //         player.queue.totalSize === Searched.tracks.length
      //       )
      //         player.play();
      //    return await interaction.editReply({ content: `${emojiplaylist} **Added Playlist to queue** [${Searched.playlistInfo.name}](${search}) - [\`${Searched.tracks.length}\`]`});
      //   }
      // }
      // else {
      //   try {
      //     res = await player.search(search);
      //     if (res.loadType === "LOAD_FAILED") {
      //       if (!player.queue.current) player.destroy();
      //       return await interaction.editReply({ content: ":x: Could not load the song." });
      //     }
      //   } catch (err) {
      //     console.log(err)
      //   }
      //   switch (res.loadType) {
      //     case "NO_MATCHES":
      //       if (!player.queue.current) player.destroy();
      //       return await interaction.editReply({ content: ":x: Could not find any songs." });
      //     case "TRACK_LOADED":
      //       player.queue.add(res.tracks[0], interaction.user);
      //       if (!player.playing && !player.paused && !player.queue.length)
      //         player.play();
      //        return await interaction.editReply({content: `${emojiplaylist} Added to queue [${res.tracks[0].title}](${res.tracks[0].uri}) - \`[${convertTime(res.tracks[0].duration)}]\``});
      //      case "PLAYLIST_LOADED":
      //       player.queue.add(res.tracks);
      //       await player.play();
      //       return await interaction.editReply({content: `${emojiplaylist} Playlist added to queue [${res.playlist.name}](${interaction.data.options[0].value}) - \`[${convertTime(res.playlist.duration)}]\``});
      //     case "SEARCH_RESULT":
      //       const track = res.tracks[0];
      //       player.queue.add(track);
      //       if (!player.playing && !player.paused && !player.queue.length) {
      //         player.play();
      //       return await interaction.editReply({content: `**${emojiplaylist} Added to queue ***${track.title}*** - \`[${convertTime(track.duration)}]\`**`});
      //       } else {
      //           return await interaction.editReply({content: `**${emojiplaylist} Added to queue ***${track.title}*** - \`[${convertTime(track.duration)}]\`**`});
      //
      //       }
      //   }
      // }
  }
}
