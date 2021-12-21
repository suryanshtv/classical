const { MessageActionRow ,MessageButton, MessageEmbed, MessageAttachment } = require("discord.js");
const { TrackUtils } = require("erela.js");
const { convertTime } = require('../../utils/conversion');
const {spotifyPlaylist, spotifyTrack, youtubePlaylist, youtubeTrack} = require("../../mapping/playerCanvas");
const ytSr = require("youtube-sr").default;

module.exports = {
    name: "play",
    category: "Music",
    aliases: ["p"],
    description: "Plays audio from YouTube or Soundcloud",
    args: true,
    usage: "<YouTube URL | Video Name | Spotify URL>",
    permission: [],
    owner: false,
    player: false,
    inVoiceChannel: true,
    sameVoiceChannel: false,
   execute: async (message, args, client) => {

	  let SearchString = args.join(" ");
       
    const player = client.manager.create({
      guild: message.guild.id,
      voiceChannel: message.member.voice.channel.id,
      textChannel: message.channel.id,
      selfDeafen: true,
      volume: 80,
    });
    
    if (player.state !== "CONNECTED") await player.connect();
    try {
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
                        songs.push(TrackUtils.build(Searched.tracks[i], message.author));
                    player.queue.add(songs);
                    //if player is ded or something do something
                    if (!player.playing && !player.paused && player.queue.totalSize === Searched.tracks.length)
                        await player.play();
                    //image manipulation for spotify playlist.
                    let spotifyPlaylistImage;
                    await spotifyPlaylist(Searched.playlistInfo.name, Searched.tracks.length, message.author).then((canvas) => spotifyPlaylistImage = new MessageAttachment(canvas.toBuffer(), 'spotifyPlaylist.png'));
                    const linkButton = new MessageButton()
                        .setLabel('Playlist Link')
                        .setURL(SearchString)
                        .setStyle('LINK')
                    const row = new MessageActionRow().addComponents(linkButton);
                    return message.channel.send({files: [spotifyPlaylistImage], components: [row]});
                } else if((Searched.loadType.startsWith("TRACK"))) {
                    //adds the spotify track to the queue
                    player.queue.add(TrackUtils.build(Searched.tracks[0], message.author));
                    //if player is ded or something do something
                    if (!player.playing && !player.paused && !player.queue.size)
                        await player.play();
                    //image manipulation for track.
                    let spotifyTrackImage;
                    await spotifyTrack(Searched, message.author).then((canvas) => spotifyTrackImage = new MessageAttachment(canvas.toBuffer(), 'spotifyTrack.png'));
                    const linkButton = new MessageButton()
                        .setLabel('Track Link')
                        .setURL(SearchString)
                        .setStyle('LINK')
                    const row = new MessageActionRow().addComponents(linkButton);
                    return message.channel.send({files: [spotifyTrackImage], components: [row]});
                }

            } else {
                //youtube part
                let Searched = await player.search(SearchString, message.author);
                if (!player)
                    return message.channel.send({embeds: [new MessageEmbed().setColor(client.embedColor).setTimestamp().setDescription("Nothing is playing right now...")]});
                if (Searched.loadType === "NO_MATCHES") {
                    return message.channel.send({embeds: [new MessageEmbed().setColor(client.embedColor).setTimestamp().setDescription("No matches found for that query...")]});
                } else if (Searched.loadType === "PLAYLIST_LOADED") {
                    //adds the youtube playlist to the queue
                    player.queue.add(Searched.tracks);
                    //if player is ded or something do something
                    if (!player.playing && !player.paused && player.queue.totalSize === Searched.tracks.length)
                        await player.play();
                    //image manipulation for youtube playlist.
                    let youtubePlaylistImage;
                    await youtubePlaylist(Searched, message.author).then((canvas) => youtubePlaylistImage = new MessageAttachment(canvas.toBuffer(), 'youtubePlaylist.png'));
                    const linkButton = new MessageButton()
                        .setLabel('Playlist Link')
                        .setURL(SearchString)
                        .setStyle('LINK')
                    const row = new MessageActionRow().addComponents(linkButton);
                    return message.channel.send({files: [youtubePlaylistImage], components: [row]});
                }
                      //only track condition
                 else {
                    //adds the youtube track to the queue
                    player.queue.add(Searched.tracks[0]);
                    //metadata grab ytsr
                    //youtube metadata
                    const songInfo = await ytSr.searchOne(Searched.tracks[0].uri);
                    let song = {
                                title: songInfo.title,
                                url: songInfo.url,
                                thumbnail: songInfo.thumbnail?.url,
                                duration: songInfo.durationFormatted,
                                channel: songInfo.channel?.name,
                                views: songInfo.views,
                                uploadedAt: songInfo.uploadedAt,
                                channelIcon: songInfo.channel?.icon?.url,
                            };

                    //image manipulation for track.
                    let youtubeTrackImage;
                    await youtubeTrack(song, message.author).then((canvas) => youtubeTrackImage = new MessageAttachment(canvas.toBuffer(), 'youtubeTrack.png'));
                    const linkButton = new MessageButton()
                        .setLabel('Track Link')
                        .setURL(Searched.tracks[0].uri)
                        .setStyle('LINK')
                    const row = new MessageActionRow().addComponents(linkButton);
                    message.channel.send({files: [youtubeTrackImage], components: [row]});
                    //if player is ded or something do something
                    if (!player.playing && !player.paused && !player.queue.size)
                        return await player.play();
                }

        }
    } catch (e) {
        console.log(e);
    }
  },
}
