const {registerFont, createCanvas} = require("canvas");
const pms = require("pretty-ms");

module.exports = {
    async page2(queuedSongsMap, page, player) {
        let overlayCanvas;
        if (page === '2')
            if (player.queue.size > 11)
                if (queuedSongsMap[20]) {
                    //load font
                    registerFont('./src/mapping/fonts/NotoSans-Bold.ttf', {family: 'Noto'});
                    registerFont('./src/mapping/fonts/NotoSansJP-Bold.otf', {family: 'Noto'});
                    registerFont('./src/mapping/fonts/Poppins-Bold.ttf', {family: 'Poppins'});
                    registerFont('./src/mapping/fonts/Rubik-Bold.ttf', {family: 'Rubik'});
                    //canvas
                    const canvas = createCanvas(800, 600);
                    const ctx = canvas.getContext('2d');
                    //background
                    ctx.font = '26px "Rubik", "Poppins", "Noto"'
                    ctx.fillStyle = '#ffffff'
                    let titleS0 = queuedSongsMap[10].title;
                    let titleZero = titleS0.slice(0, 32);
                    let titleS1 = queuedSongsMap[11].title;
                    let titleOne = titleS1.slice(0, 32);
                    let titleS2 = queuedSongsMap[12].title;
                    let titleTwo = titleS2.slice(0, 32);
                    let titleS3 = queuedSongsMap[13].title;
                    let titleThree = titleS3.slice(0, 32);
                    let titleS4 = queuedSongsMap[14].title;
                    let titleFour = titleS4.slice(0, 32);
                    let titleS5 = queuedSongsMap[15].title;
                    let titleFive = titleS5.slice(0, 32);
                    let titleS6 = queuedSongsMap[16].title;
                    let titleSix = titleS6.slice(0, 32);
                    let titleS7 = queuedSongsMap[17].title;
                    let titleSeven = titleS7.slice(0, 32);
                    let titleS8 = queuedSongsMap[18].title;
                    let titleEight = titleS8.slice(0, 32);
                    let titleS9 = queuedSongsMap[19].title;
                    let titleNine = titleS9.slice(0, 32);
                    ctx.fillText(queuedSongsMap[10].index + 1 + '.', 38, 122)
                    ctx.fillText('' + titleZero + '...', 67, 122)
                    ctx.fillText('[' + pms(queuedSongsMap[10].duration) + ']', 598, 122)
                    ctx.fillText(queuedSongsMap[11].index + 1 + '.', 38, 170)
                    ctx.fillText('' + titleOne + '...', 67, 170)
                    ctx.fillText('[' + pms(queuedSongsMap[11].duration) + ']', 598, 170)
                    ctx.fillText(queuedSongsMap[12].index + 1 + '.', 38, 218)
                    ctx.fillText('' + titleTwo + '...', 67, 218)
                    ctx.fillText('[' + pms(queuedSongsMap[12].duration) + ']', 598, 218)
                    ctx.fillText(queuedSongsMap[13].index + 1 + '.', 38, 266)
                    ctx.fillText('' + titleThree + '...', 67, 266)
                    ctx.fillText('[' + pms(queuedSongsMap[13].duration) + ']', 598, 266)
                    ctx.fillText(queuedSongsMap[14].index + 1 + '.', 38, 314)
                    ctx.fillText('' + titleFour + '...', 67, 314)
                    ctx.fillText('[' + pms(queuedSongsMap[14].duration) + ']', 598, 314)
                    ctx.fillText(queuedSongsMap[15].index + 1 + '.', 38, 362)
                    ctx.fillText('' + titleFive + '...', 67, 362)
                    ctx.fillText('[' + pms(queuedSongsMap[15].duration) + ']', 598, 362)
                    ctx.fillText(queuedSongsMap[16].index + 1 + '.', 38, 410)
                    ctx.fillText('' + titleSix + '...', 67, 410)
                    ctx.fillText('[' + pms(queuedSongsMap[16].duration) + ']', 598, 410)
                    ctx.fillText(queuedSongsMap[17].index + 1 + '.', 38, 458)
                    ctx.fillText('' + titleSeven + '...', 67, 458)
                    ctx.fillText('[' + pms(queuedSongsMap[17].duration) + ']', 598, 458)
                    ctx.fillText(queuedSongsMap[18].index + 1 + '.', 38, 506)
                    ctx.fillText('' + titleEight + '...', 67, 506)
                    ctx.fillText('[' + pms(queuedSongsMap[18].duration) + ']', 598, 506)
                    ctx.fillText(queuedSongsMap[19].index + 1 + '.', 38, 554)
                    ctx.fillText('' + titleNine + '...', 67, 554)
                    ctx.fillText('[' + pms(queuedSongsMap[19].duration) + ']', 598, 554)
                    overlayCanvas = canvas.toBuffer()
                }
                else if (queuedSongsMap[19]) {
                    //load font
                    registerFont('./src/mapping/fonts/NotoSans-Bold.ttf', {family: 'Noto'});
                    registerFont('./src/mapping/fonts/NotoSansJP-Bold.otf', {family: 'Noto'});
                    registerFont('./src/mapping/fonts/Poppins-Bold.ttf', {family: 'Poppins'});
                    registerFont('./src/mapping/fonts/Rubik-Bold.ttf', {family: 'Rubik'});
                    //canvas
                    const canvas = createCanvas(800, 600);
                    const ctx = canvas.getContext('2d');
                    //background
                    ctx.font = '26px "Rubik", "Poppins", "Noto"'
                    ctx.fillStyle = '#ffffff'
                    let titleS0 = queuedSongsMap[10].title;
                    let titleZero = titleS0.slice(0, 32);
                    let titleS1 = queuedSongsMap[11].title;
                    let titleOne = titleS1.slice(0, 32);
                    let titleS2 = queuedSongsMap[12].title;
                    let titleTwo = titleS2.slice(0, 32);
                    let titleS3 = queuedSongsMap[13].title;
                    let titleThree = titleS3.slice(0, 32);
                    let titleS4 = queuedSongsMap[14].title;
                    let titleFour = titleS4.slice(0, 32);
                    let titleS5 = queuedSongsMap[15].title;
                    let titleFive = titleS5.slice(0, 32);
                    let titleS6 = queuedSongsMap[16].title;
                    let titleSix = titleS6.slice(0, 32);
                    let titleS7 = queuedSongsMap[17].title;
                    let titleSeven = titleS7.slice(0, 32);
                    let titleS8 = queuedSongsMap[18].title;
                    let titleEight = titleS8.slice(0, 32);
                    ctx.fillText(queuedSongsMap[10].index + 1 + '.', 38, 122)
                    ctx.fillText('' + titleZero + '...', 67, 122)
                    ctx.fillText('[' + pms(queuedSongsMap[10].duration) + ']', 598, 122)
                    ctx.fillText(queuedSongsMap[11].index + 1 + '.', 38, 170)
                    ctx.fillText('' + titleOne + '...', 67, 170)
                    ctx.fillText('[' + pms(queuedSongsMap[11].duration) + ']', 598, 170)
                    ctx.fillText(queuedSongsMap[12].index + 1 + '.', 38, 218)
                    ctx.fillText('' + titleTwo + '...', 67, 218)
                    ctx.fillText('[' + pms(queuedSongsMap[12].duration) + ']', 598, 218)
                    ctx.fillText(queuedSongsMap[13].index + 1 + '.', 38, 266)
                    ctx.fillText('' + titleThree + '...', 67, 266)
                    ctx.fillText('[' + pms(queuedSongsMap[13].duration) + ']', 598, 266)
                    ctx.fillText(queuedSongsMap[14].index + 1 + '.', 38, 314)
                    ctx.fillText('' + titleFour + '...', 67, 314)
                    ctx.fillText('[' + pms(queuedSongsMap[14].duration) + ']', 598, 314)
                    ctx.fillText(queuedSongsMap[15].index + 1 + '.', 38, 362)
                    ctx.fillText('' + titleFive + '...', 67, 362)
                    ctx.fillText('[' + pms(queuedSongsMap[15].duration) + ']', 598, 362)
                    ctx.fillText(queuedSongsMap[16].index + 1 + '.', 38, 410)
                    ctx.fillText('' + titleSix + '...', 67, 410)
                    ctx.fillText('[' + pms(queuedSongsMap[16].duration) + ']', 598, 410)
                    ctx.fillText(queuedSongsMap[17].index + 1 + '.', 38, 458)
                    ctx.fillText('' + titleSeven + '...', 67, 458)
                    ctx.fillText('[' + pms(queuedSongsMap[17].duration) + ']', 598, 458)
                    ctx.fillText(queuedSongsMap[18].index + 1 + '.', 38, 506)
                    ctx.fillText('' + titleEight + '...', 67, 506)
                    ctx.fillText('[' + pms(queuedSongsMap[18].duration) + ']', 598, 506)
                    overlayCanvas = canvas.toBuffer()
                }
                else if (queuedSongsMap[18]) {
                    //load font
                    registerFont('./src/mapping/fonts/NotoSans-Bold.ttf', {family: 'Noto'});
                    registerFont('./src/mapping/fonts/NotoSansJP-Bold.otf', {family: 'Noto'});
                    registerFont('./src/mapping/fonts/Poppins-Bold.ttf', {family: 'Poppins'});
                    registerFont('./src/mapping/fonts/Rubik-Bold.ttf', {family: 'Rubik'});
                    //canvas
                    const canvas = createCanvas(800, 600);
                    const ctx = canvas.getContext('2d');
                    //background
                    ctx.font = '26px "Rubik", "Poppins", "Noto"'
                    ctx.fillStyle = '#ffffff'
                    let titleS0 = queuedSongsMap[10].title;
                    let titleZero = titleS0.slice(0, 32);
                    let titleS1 = queuedSongsMap[11].title;
                    let titleOne = titleS1.slice(0, 32);
                    let titleS2 = queuedSongsMap[12].title;
                    let titleTwo = titleS2.slice(0, 32);
                    let titleS3 = queuedSongsMap[13].title;
                    let titleThree = titleS3.slice(0, 32);
                    let titleS4 = queuedSongsMap[14].title;
                    let titleFour = titleS4.slice(0, 32);
                    let titleS5 = queuedSongsMap[15].title;
                    let titleFive = titleS5.slice(0, 32);
                    let titleS6 = queuedSongsMap[16].title;
                    let titleSix = titleS6.slice(0, 32);
                    let titleS7 = queuedSongsMap[17].title;
                    let titleSeven = titleS7.slice(0, 32);
                    ctx.fillText(queuedSongsMap[10].index + 1 + '.', 38, 122)
                    ctx.fillText('' + titleZero + '...', 67, 122)
                    ctx.fillText('[' + pms(queuedSongsMap[10].duration) + ']', 598, 122)
                    ctx.fillText(queuedSongsMap[11].index + 1 + '.', 38, 170)
                    ctx.fillText('' + titleOne + '...', 67, 170)
                    ctx.fillText('[' + pms(queuedSongsMap[11].duration) + ']', 598, 170)
                    ctx.fillText(queuedSongsMap[12].index + 1 + '.', 38, 218)
                    ctx.fillText('' + titleTwo + '...', 67, 218)
                    ctx.fillText('[' + pms(queuedSongsMap[12].duration) + ']', 598, 218)
                    ctx.fillText(queuedSongsMap[13].index + 1 + '.', 38, 266)
                    ctx.fillText('' + titleThree + '...', 67, 266)
                    ctx.fillText('[' + pms(queuedSongsMap[13].duration) + ']', 598, 266)
                    ctx.fillText(queuedSongsMap[14].index + 1 + '.', 38, 314)
                    ctx.fillText('' + titleFour + '...', 67, 314)
                    ctx.fillText('[' + pms(queuedSongsMap[14].duration) + ']', 598, 314)
                    ctx.fillText(queuedSongsMap[15].index + 1 + '.', 38, 362)
                    ctx.fillText('' + titleFive + '...', 67, 362)
                    ctx.fillText('[' + pms(queuedSongsMap[15].duration) + ']', 598, 362)
                    ctx.fillText(queuedSongsMap[16].index + 1 + '.', 38, 410)
                    ctx.fillText('' + titleSix + '...', 67, 410)
                    ctx.fillText('[' + pms(queuedSongsMap[16].duration) + ']', 598, 410)
                    ctx.fillText(queuedSongsMap[17].index + 1 + '.', 38, 458)
                    ctx.fillText('' + titleSeven + '...', 67, 458)
                    ctx.fillText('[' + pms(queuedSongsMap[17].duration) + ']', 598, 458)
                    overlayCanvas = canvas.toBuffer()
                }
                else if (queuedSongsMap[17]) {
                    //load font
                    registerFont('./src/mapping/fonts/NotoSans-Bold.ttf', {family: 'Noto'});
                    registerFont('./src/mapping/fonts/NotoSansJP-Bold.otf', {family: 'Noto'});
                    registerFont('./src/mapping/fonts/Poppins-Bold.ttf', {family: 'Poppins'});
                    registerFont('./src/mapping/fonts/Rubik-Bold.ttf', {family: 'Rubik'});
                    //canvas
                    const canvas = createCanvas(800, 600);
                    const ctx = canvas.getContext('2d');
                    //background
                    ctx.font = '26px "Rubik", "Poppins", "Noto"'
                    ctx.fillStyle = '#ffffff'
                    let titleS0 = queuedSongsMap[10].title;
                    let titleZero = titleS0.slice(0, 32);
                    let titleS1 = queuedSongsMap[11].title;
                    let titleOne = titleS1.slice(0, 32);
                    let titleS2 = queuedSongsMap[12].title;
                    let titleTwo = titleS2.slice(0, 32);
                    let titleS3 = queuedSongsMap[13].title;
                    let titleThree = titleS3.slice(0, 32);
                    let titleS4 = queuedSongsMap[14].title;
                    let titleFour = titleS4.slice(0, 32);
                    let titleS5 = queuedSongsMap[15].title;
                    let titleFive = titleS5.slice(0, 32);
                    let titleS6 = queuedSongsMap[16].title;
                    let titleSix = titleS6.slice(0, 32);
                    ctx.fillText(queuedSongsMap[10].index + 1 + '.', 38, 122)
                    ctx.fillText('' + titleZero + '...', 67, 122)
                    ctx.fillText('[' + pms(queuedSongsMap[10].duration) + ']', 598, 122)
                    ctx.fillText(queuedSongsMap[11].index + 1 + '.', 38, 170)
                    ctx.fillText('' + titleOne + '...', 67, 170)
                    ctx.fillText('[' + pms(queuedSongsMap[11].duration) + ']', 598, 170)
                    ctx.fillText(queuedSongsMap[12].index + 1 + '.', 38, 218)
                    ctx.fillText('' + titleTwo + '...', 67, 218)
                    ctx.fillText('[' + pms(queuedSongsMap[12].duration) + ']', 598, 218)
                    ctx.fillText(queuedSongsMap[13].index + 1 + '.', 38, 266)
                    ctx.fillText('' + titleThree + '...', 67, 266)
                    ctx.fillText('[' + pms(queuedSongsMap[13].duration) + ']', 598, 266)
                    ctx.fillText(queuedSongsMap[14].index + 1 + '.', 38, 314)
                    ctx.fillText('' + titleFour + '...', 67, 314)
                    ctx.fillText('[' + pms(queuedSongsMap[14].duration) + ']', 598, 314)
                    ctx.fillText(queuedSongsMap[15].index + 1 + '.', 38, 362)
                    ctx.fillText('' + titleFive + '...', 67, 362)
                    ctx.fillText('[' + pms(queuedSongsMap[15].duration) + ']', 598, 362)
                    ctx.fillText(queuedSongsMap[16].index + 1 + '.', 38, 410)
                    ctx.fillText('' + titleSix + '...', 67, 410)
                    ctx.fillText('[' + pms(queuedSongsMap[16].duration) + ']', 598, 410)
                    overlayCanvas = canvas.toBuffer()
                }
                else if (queuedSongsMap[16]) {
                    //load font
                    registerFont('./src/mapping/fonts/NotoSans-Bold.ttf', {family: 'Noto'});
                    registerFont('./src/mapping/fonts/NotoSansJP-Bold.otf', {family: 'Noto'});
                    registerFont('./src/mapping/fonts/Poppins-Bold.ttf', {family: 'Poppins'});
                    registerFont('./src/mapping/fonts/Rubik-Bold.ttf', {family: 'Rubik'});
                    //canvas
                    const canvas = createCanvas(800, 600);
                    const ctx = canvas.getContext('2d');
                    //background
                    ctx.font = '26px "Rubik", "Poppins", "Noto"'
                    ctx.fillStyle = '#ffffff'
                    let titleS0 = queuedSongsMap[10].title;
                    let titleZero = titleS0.slice(0, 32);
                    let titleS1 = queuedSongsMap[11].title;
                    let titleOne = titleS1.slice(0, 32);
                    let titleS2 = queuedSongsMap[12].title;
                    let titleTwo = titleS2.slice(0, 32);
                    let titleS3 = queuedSongsMap[13].title;
                    let titleThree = titleS3.slice(0, 32);
                    let titleS4 = queuedSongsMap[14].title;
                    let titleFour = titleS4.slice(0, 32);
                    let titleS5 = queuedSongsMap[15].title;
                    let titleFive = titleS5.slice(0, 32);
                    ctx.fillText(queuedSongsMap[10].index + 1 + '.', 38, 122)
                    ctx.fillText('' + titleZero + '...', 67, 122)
                    ctx.fillText('[' + pms(queuedSongsMap[10].duration) + ']', 598, 122)
                    ctx.fillText(queuedSongsMap[11].index + 1 + '.', 38, 170)
                    ctx.fillText('' + titleOne + '...', 67, 170)
                    ctx.fillText('[' + pms(queuedSongsMap[11].duration) + ']', 598, 170)
                    ctx.fillText(queuedSongsMap[12].index + 1 + '.', 38, 218)
                    ctx.fillText('' + titleTwo + '...', 67, 218)
                    ctx.fillText('[' + pms(queuedSongsMap[12].duration) + ']', 598, 218)
                    ctx.fillText(queuedSongsMap[13].index + 1 + '.', 38, 266)
                    ctx.fillText('' + titleThree + '...', 67, 266)
                    ctx.fillText('[' + pms(queuedSongsMap[13].duration) + ']', 598, 266)
                    ctx.fillText(queuedSongsMap[14].index + 1 + '.', 38, 314)
                    ctx.fillText('' + titleFour + '...', 67, 314)
                    ctx.fillText('[' + pms(queuedSongsMap[14].duration) + ']', 598, 314)
                    ctx.fillText(queuedSongsMap[15].index + 1 + '.', 38, 362)
                    ctx.fillText('' + titleFive + '...', 67, 362)
                    ctx.fillText('[' + pms(queuedSongsMap[15].duration) + ']', 598, 362)
                    overlayCanvas = canvas.toBuffer()
                }
                else if (queuedSongsMap[15]) {
                    //load font
                    registerFont('./src/mapping/fonts/NotoSans-Bold.ttf', {family: 'Noto'});
                    registerFont('./src/mapping/fonts/NotoSansJP-Bold.otf', {family: 'Noto'});
                    registerFont('./src/mapping/fonts/Poppins-Bold.ttf', {family: 'Poppins'});
                    registerFont('./src/mapping/fonts/Rubik-Bold.ttf', {family: 'Rubik'});
                    //canvas
                    const canvas = createCanvas(800, 600);
                    const ctx = canvas.getContext('2d');
                    //background
                    ctx.font = '26px "Rubik", "Poppins", "Noto"'
                    ctx.fillStyle = '#ffffff'
                    let titleS0 = queuedSongsMap[10].title;
                    let titleZero = titleS0.slice(0, 32);
                    let titleS1 = queuedSongsMap[11].title;
                    let titleOne = titleS1.slice(0, 32);
                    let titleS2 = queuedSongsMap[12].title;
                    let titleTwo = titleS2.slice(0, 32);
                    let titleS3 = queuedSongsMap[13].title;
                    let titleThree = titleS3.slice(0, 32);
                    let titleS4 = queuedSongsMap[14].title;
                    let titleFour = titleS4.slice(0, 32);
                    ctx.fillText(queuedSongsMap[10].index + 1 + '.', 38, 122)
                    ctx.fillText('' + titleZero + '...', 67, 122)
                    ctx.fillText('[' + pms(queuedSongsMap[10].duration) + ']', 598, 122)
                    ctx.fillText(queuedSongsMap[11].index + 1 + '.', 38, 170)
                    ctx.fillText('' + titleOne + '...', 67, 170)
                    ctx.fillText('[' + pms(queuedSongsMap[11].duration) + ']', 598, 170)
                    ctx.fillText(queuedSongsMap[12].index + 1 + '.', 38, 218)
                    ctx.fillText('' + titleTwo + '...', 67, 218)
                    ctx.fillText('[' + pms(queuedSongsMap[12].duration) + ']', 598, 218)
                    ctx.fillText(queuedSongsMap[13].index + 1 + '.', 38, 266)
                    ctx.fillText('' + titleThree + '...', 67, 266)
                    ctx.fillText('[' + pms(queuedSongsMap[13].duration) + ']', 598, 266)
                    ctx.fillText(queuedSongsMap[14].index + 1 + '.', 38, 314)
                    ctx.fillText('' + titleFour + '...', 67, 314)
                    ctx.fillText('[' + pms(queuedSongsMap[14].duration) + ']', 598, 314)
                    overlayCanvas = canvas.toBuffer()
                }
                else if (queuedSongsMap[14]) {
                    //load font
                    registerFont('./src/mapping/fonts/NotoSans-Bold.ttf', {family: 'Noto'});
                    registerFont('./src/mapping/fonts/NotoSansJP-Bold.otf', {family: 'Noto'});
                    registerFont('./src/mapping/fonts/Poppins-Bold.ttf', {family: 'Poppins'});
                    registerFont('./src/mapping/fonts/Rubik-Bold.ttf', {family: 'Rubik'});
                    //canvas
                    const canvas = createCanvas(800, 600);
                    const ctx = canvas.getContext('2d');
                    //background
                    ctx.font = '26px "Rubik", "Poppins", "Noto"'
                    ctx.fillStyle = '#ffffff'
                    let titleS0 = queuedSongsMap[10].title;
                    let titleZero = titleS0.slice(0, 32);
                    let titleS1 = queuedSongsMap[11].title;
                    let titleOne = titleS1.slice(0, 32);
                    let titleS2 = queuedSongsMap[12].title;
                    let titleTwo = titleS2.slice(0, 32);
                    let titleS3 = queuedSongsMap[13].title;
                    let titleThree = titleS3.slice(0, 32);
                    ctx.fillText(queuedSongsMap[10].index + 1 + '.', 38, 122)
                    ctx.fillText('' + titleZero + '...', 67, 122)
                    ctx.fillText('[' + pms(queuedSongsMap[0].duration) + ']', 598, 122)
                    ctx.fillText(queuedSongsMap[11].index + 1 + '.', 38, 170)
                    ctx.fillText('' + titleOne + '...', 67, 170)
                    ctx.fillText('[' + pms(queuedSongsMap[11].duration) + ']', 598, 170)
                    ctx.fillText(queuedSongsMap[12].index + 1 + '.', 38, 218)
                    ctx.fillText('' + titleTwo + '...', 67, 218)
                    ctx.fillText('[' + pms(queuedSongsMap[12].duration) + ']', 598, 218)
                    ctx.fillText(queuedSongsMap[13].index + 1 + '.', 38, 266)
                    ctx.fillText('' + titleThree + '...', 67, 266)
                    ctx.fillText('[' + pms(queuedSongsMap[13].duration) + ']', 598, 266)
                    overlayCanvas = canvas.toBuffer()
                }
                else if (queuedSongsMap[13]) {
                    //load font
                    registerFont('./src/mapping/fonts/NotoSans-Bold.ttf', {family: 'Noto'});
                    registerFont('./src/mapping/fonts/NotoSansJP-Bold.otf', {family: 'Noto'});
                    registerFont('./src/mapping/fonts/Poppins-Bold.ttf', {family: 'Poppins'});
                    registerFont('./src/mapping/fonts/Rubik-Bold.ttf', {family: 'Rubik'});
                    //canvas
                    const canvas = createCanvas(800, 600);
                    const ctx = canvas.getContext('2d');
                    //background
                    ctx.font = '26px "Rubik", "Poppins", "Noto"'
                    ctx.fillStyle = '#ffffff'
                    let titleS0 = queuedSongsMap[10].title;
                    let titleZero = titleS0.slice(0, 32);
                    let titleS1 = queuedSongsMap[11].title;
                    let titleOne = titleS1.slice(0, 32);
                    let titleS2 = queuedSongsMap[12].title;
                    let titleTwo = titleS2.slice(0, 32);
                    ctx.fillText(queuedSongsMap[10].index + 1 + '.', 38, 122)
                    ctx.fillText('' + titleZero + '...', 67, 122)
                    ctx.fillText('[' + pms(queuedSongsMap[10].duration) + ']', 598, 122)
                    ctx.fillText(queuedSongsMap[11].index + 1 + '.', 38, 170)
                    ctx.fillText('' + titleOne + '...', 67, 170)
                    ctx.fillText('[' + pms(queuedSongsMap[11].duration) + ']', 598, 170)
                    ctx.fillText(queuedSongsMap[12].index + 1 + '.', 38, 218)
                    ctx.fillText('' + titleTwo + '...', 67, 218)
                    ctx.fillText('[' + pms(queuedSongsMap[12].duration) + ']', 598, 218)
                    overlayCanvas = canvas.toBuffer()
                }
                else if (queuedSongsMap[12]) {
                    //load font
                    registerFont('./src/mapping/fonts/NotoSans-Bold.ttf', {family: 'Noto'});
                    registerFont('./src/mapping/fonts/NotoSansJP-Bold.otf', {family: 'Noto'});
                    registerFont('./src/mapping/fonts/Poppins-Bold.ttf', {family: 'Poppins'});
                    registerFont('./src/mapping/fonts/Rubik-Bold.ttf', {family: 'Rubik'});
                    //canvas
                    const canvas = createCanvas(800, 600);
                    const ctx = canvas.getContext('2d');
                    //background
                    ctx.font = '26px "Rubik", "Poppins", "Noto"'
                    ctx.fillStyle = '#ffffff'
                    let titleS0 = queuedSongsMap[10].title;
                    let titleZero = titleS0.slice(0, 32);
                    let titleS1 = queuedSongsMap[11].title;
                    let titleOne = titleS1.slice(0, 32);
                    ctx.fillText(queuedSongsMap[10].index + 1 + '.', 38, 122)
                    ctx.fillText('' + titleZero + '...', 67, 122)
                    ctx.fillText('[' + pms(queuedSongsMap[10].duration) + ']', 598, 122)
                    ctx.fillText(queuedSongsMap[11].index + 1 + '.', 38, 170)
                    ctx.fillText('' + titleOne + '...', 67, 170)
                    ctx.fillText('[' + pms(queuedSongsMap[11].duration) + ']', 598, 170)
                    overlayCanvas = canvas.toBuffer()
                }
                else if (queuedSongsMap[11]) {
            //load font
            registerFont('./src/mapping/fonts/NotoSans-Bold.ttf', {family: 'Noto'});
            registerFont('./src/mapping/fonts/NotoSansJP-Bold.otf', {family: 'Noto'});
            registerFont('./src/mapping/fonts/Poppins-Bold.ttf', {family: 'Poppins'});
            registerFont('./src/mapping/fonts/Rubik-Bold.ttf', {family: 'Rubik'});
            //canvas
            const canvas = createCanvas(800, 600);
            const ctx = canvas.getContext('2d');
            //background
            ctx.font = '26px "Rubik", "Poppins", "Noto"'
            ctx.fillStyle = '#ffffff'
            let titleS0 = queuedSongsMap[10].title;
            let titleZero = titleS0.slice(0, 32);
            ctx.fillText(queuedSongsMap[10].index + 1 + '.', 38, 122)
            ctx.fillText('' + titleZero + '...', 67, 122)
            ctx.fillText('[' + pms(queuedSongsMap[10].duration) + ']', 598, 122)
            overlayCanvas = canvas.toBuffer()
        }
                else {
                    overlayCanvas = null;
                }
        return overlayCanvas;
    }
}