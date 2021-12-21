/*
 * package loading
 */
const { loadImage, createCanvas } = require('canvas');
const pms = require("pretty-ms");
const {page1} = require("./mapPages/page1");
const {page2} = require("./mapPages/page2");

/*
 * queueMapping
 */
module.exports = {
    async queueMapCanvas(player, page) {
        let queueInfoPage;
        const queuedSongsMap = player.queue.map((t, i) => {
            return queueInfoPage = {
                title: t.title,
                requester: t.requester,
                duration: t.duration,
                uri: t.uri,
                index: i
            }
        });
        let mainCanvas
        let overlayCanvas;
        /*
         * page separation and callbacks
         */
        await page1(queuedSongsMap, page).then((pageOverlay1) => {
            if (pageOverlay1 != null) overlayCanvas = pageOverlay1;
        })
        await page2(queuedSongsMap, page, player).then((pageOverlay2) => {
            if (pageOverlay2 != null) overlayCanvas = pageOverlay2;
        })
        if (page >= 3) {
            mainCanvas = "String"
                return mainCanvas;
        }
        /*
         * canvas
         */
        mainCanvas = createCanvas(800, 600);
        const mainCtx = mainCanvas.getContext('2d');
        const bg = await loadImage('./src/mapping/images/bgQueue.png')
        mainCtx.drawImage(bg, 0, 0, 800, 600);
        const overlay = await loadImage(overlayCanvas);
        mainCtx.drawImage(overlay, 0, 0, 800, 600);
        /*
         * return
         */
        return mainCanvas;
    }
}