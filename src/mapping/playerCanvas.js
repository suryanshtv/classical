const { loadImage, registerFont, createCanvas } = require('canvas');
const spotifyLink = require("spotify-url-info");
const { convertTime } = require('../utils/conversion');
const {viewsFormatted} = require("./viewsFormatted");
const ytSr = require("youtube-sr").default;

module.exports = {
    async base(title, artist, durationMS, link, thumbnail) {
        //metadata
        let songtitlemain = title;
        let songtitle = songtitlemain.slice(0, 28)
        let songtitle1 = songtitlemain.slice(28, 66)+("...")
        // Create the canvas
        registerFont('./src/mapping/fonts/NotoSans-Bold.ttf', { family: 'Noto' });
        registerFont('./src/mapping/fonts/NotoSansJP-Bold.otf', { family: 'Noto' });
        registerFont('./src/mapping/fonts/Poppins-Bold.ttf', { family: 'Poppins' });
        registerFont('./src/mapping/fonts/Rubik-Bold.ttf', { family: 'Rubik' });
        const canvas = createCanvas(980, 300);
        const ctx = canvas.getContext('2d');
        const base = await loadImage('./src/mapping/images/base.png');
        const thumb = await loadImage(thumbnail);
        const cover = await loadImage('./src/mapping/images/coverPlayer.png');
        if (link.includes('spotify')) {
            ctx.drawImage(thumb, 43, -30, 360, 360);
        } if (link.includes('youtube')) {
            ctx.drawImage(thumb, 40, 40, 363, 226);
        }
        ctx.drawImage(cover, 419, 44, 360, 215);
        ctx.font = '26px "Rubik", "Poppins", "Noto"';
        ctx.fillStyle = '#ffffff';
        ctx.fillText(songtitle, 432, 85);
        ctx.fillText(songtitle1, 432, 125);
        ctx.font = '26px "Rubik", "Poppins", "Noto"';
        ctx.fillText(``+artist, 432, 205);
        ctx.fillText(``+durationMS, 432, 235);
        ctx.drawImage(base, 0, 0, canvas.width, canvas.height);
        return canvas
    },
    async spotifyPlaylist(title, length, author) {
        //fonts
        registerFont('./src/mapping/fonts/NotoSans-Bold.ttf', { family: 'Noto' });
        registerFont('./src/mapping/fonts/NotoSansJP-Bold.otf', { family: 'Noto' });
        registerFont('./src/mapping/fonts/Poppins-Bold.ttf', { family: 'Poppins' });
        registerFont('./src/mapping/fonts/Rubik-Bold.ttf', { family: 'Rubik' });
        //canvas integration
        const canvas = createCanvas(980, 300);
        const ctx = canvas.getContext('2d');
        const base = await loadImage('./src/mapping/images/backCover.png');
        ctx.drawImage(base, 482, 2, 483, 295);
        ctx.fillStyle = '#b7ff70';
        ctx.fillText(`Spotify`, 495, 80);
        ctx.font = '26px "Rubik", "Poppins", "Noto"';
        ctx.fillStyle = '#ffffff';
        ctx.fillText(`Added `+ title +` to the queue.`, 495, 48);
        ctx.font = '22px "Rubik", "Poppins", "Noto"';
        ctx.fillText(`tracks: `+ length, 492, 124);
        ctx.fillText(`loaded.`, 680, 124);
        ctx.fillText(`Requested by `+ author.username, 495, 276)
        const overlay = await loadImage('./src/mapping/images/spotifyPlaylist.png');
        ctx.drawImage(overlay, 0, 0, canvas.width, canvas.height);
        return canvas;
    },
    async spotifyTrack(searched, author) {
        //fonts
        registerFont('./src/mapping/fonts/NotoSans-Bold.ttf', { family: 'Noto' });
        registerFont('./src/mapping/fonts/NotoSansJP-Bold.otf', { family: 'Noto' });
        registerFont('./src/mapping/fonts/Poppins-Bold.ttf', { family: 'Poppins' });
        registerFont('./src/mapping/fonts/Rubik-Bold.ttf', { family: 'Rubik' });
        //spotify metadata
        const songInfoFirst = await spotifyLink.getData(searched.tracks[0].info.uri);
        const songInfoSecond = await spotifyLink.getPreview(searched.tracks[0].info.uri);
        let song = {
            title: songInfoFirst.name,
            url: songInfoSecond.link,
            thumbnail: songInfoSecond.image,
            duration: songInfoFirst.duration_ms,
            channel: songInfoSecond.artist,
        }
        //canvas integration
        const canvas = createCanvas(980, 300);
        const ctx = canvas.getContext('2d');
        const thumbnail = await loadImage(song.thumbnail);
        ctx.drawImage(thumbnail, 16, -100, 460, 460)
        const base = await loadImage('./src/mapping/images/backCover.png');
        ctx.drawImage(base, 482, 2, 483, 295);
        ctx.font = '26px "Rubik", "Poppins", "Noto"';
        ctx.fillStyle = '#ffffff';
        ctx.fillText(`Added `+ song.title + ` to the queue.`, 495, 48);
        ctx.fillStyle = '#b7ff70';
        ctx.fillText(`Spotify`, 495, 80);
        ctx.fillStyle = '#ffffff';
        ctx.font = '22px "Rubik", "Poppins", "Noto"';
        ctx.fillText(`By `+ song.channel, 492, 124);
        ctx.fillText(``, 680, 124);
        ctx.fillText(`Requested by `+ author.username, 495, 274)
        const overlay = await loadImage('./src/mapping/images/spotifyTrack.png');
        ctx.drawImage(overlay, 0, 0, canvas.width, canvas.height);
        ctx.font = '23px "Rubik", "Poppins", "Noto"';
        ctx.fillText(`${(await convertTime(song.duration))}`, 395, 281);
        return canvas;
    },
    async youtubePlaylist(searched, author) {
        //fonts
        registerFont('./src/mapping/fonts/NotoSans-Bold.ttf', { family: 'Noto' });
        registerFont('./src/mapping/fonts/NotoSansJP-Bold.otf', { family: 'Noto' });
        registerFont('./src/mapping/fonts/Poppins-Bold.ttf', { family: 'Poppins' });
        registerFont('./src/mapping/fonts/Rubik-Bold.ttf', { family: 'Rubik' });
        //youtube metadata
        let playlistTitle = searched.playlist.name;
        //canvas integration
        const canvas = createCanvas(980, 300);
        const ctx = canvas.getContext('2d');
        const base = await loadImage('./src/mapping/images/backCover.png');
        ctx.drawImage(base, 482, 2, 483, 295);
        const thumbnail = await loadImage(searched?.tracks[0].thumbnail);
        ctx.drawImage(thumbnail, 16, 13, 458, 272)
        ctx.font = '26px "Rubik", "Poppins", "Noto"';
        ctx.fillStyle = '#ff3247';
        ctx.fillText(`YouTube`, 495, 80);
        ctx.fillStyle = '#ffffff';
        ctx.fillText(`Added `+ playlistTitle +` to the queue.`, 495, 48);
        ctx.font = '22px "Rubik", "Poppins", "Noto"';
        ctx.fillText(`tracks: `+ searched.tracks.length, 492, 124);
        ctx.fillText(`loaded.`, 680, 124);
        ctx.fillText(`Requested by `+ author.username, 495, 276)
        const overlay = await loadImage('./src/mapping/images/youtubePlaylist.png');
        ctx.drawImage(overlay, 0, 0, canvas.width, canvas.height);
        return canvas;
    },
    async youtubeTrack(song, author) {
        //fonts
        registerFont('./src/mapping/fonts/NotoSans-Bold.ttf', {family: 'Noto'});
        registerFont('./src/mapping/fonts/NotoSansJP-Bold.otf', {family: 'Noto'});
        registerFont('./src/mapping/fonts/Poppins-Bold.ttf', {family: 'Poppins'});
        registerFont('./src/mapping/fonts/Rubik-Bold.ttf', {family: 'Rubik'});

        //fixes with titles and some metadata
        const thumb = song.thumbnail
        const thumbnail = await loadImage(thumb)
        const channelIcon = await loadImage(song.channelIcon)
        const ytTrackBase = await loadImage('./src/mapping/images/backCover.png')
        const ytTrackOverlay = await loadImage('./src/mapping/images/youtubeTrack.png');
        const views = viewsFormatted(song.views)
        let songtitlemain = song.title
        let songtitle = songtitlemain.slice(0, 34)
        let songtitle1 = songtitlemain.slice(34, 66)+("...")
        let channelName = song.channel;

        //canvas integration
        const canvas = createCanvas(980, 300)
        const ctx = canvas.getContext('2d')
        ctx.drawImage(thumbnail, 16, 13, 458, 272)
        ctx.drawImage(ytTrackBase, 482, 2, 483, 295)
        ctx.drawImage(channelIcon, 482, 137, 65, 65)
        ctx.font = '26px "Rubik", "Poppins", "Noto"'
        ctx.fillStyle = '#ffffff'
        ctx.fillText(songtitle, 495, 48)
        ctx.fillText(songtitle1, 495, 80)
        ctx.font = '22px "Rubik", "Poppins", "Noto"'
        ctx.fillText(views, 492, 124)
        ctx.fillText(song.uploadedAt, 680, 124)
        ctx.fillText(channelName, 563, 174);
        ctx.fillText(`Requested by ` + author.username, 495, 276);
        ctx.drawImage(ytTrackOverlay, 0, 0, canvas.width, canvas.height);
        ctx.font = '23px "Rubik", "Poppins", "Noto"';
        ctx.fillText(`${song.duration}`, 395, 281);
        return canvas;
    },
};