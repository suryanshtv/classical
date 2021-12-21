/*
 * package loading
 */
const { loadImage, registerFont, createCanvas } = require('canvas');
const pms = require("pretty-ms");

/*
 * queueMapping
 */
module.exports = {
    async page1(queuedSongsMap, page) {
        let overlayCanvas;
        console.log("ooohoohoohho")
        if (page === '1' || page === undefined) {
            console.log("ooohoohoohho")
            if (queuedSongsMap[9]) {
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
                let titleS0 = queuedSongsMap[0].title;
                let titleZero = titleS0.slice(0, 32);
                let titleS1 = queuedSongsMap[1].title;
                let titleOne = titleS1.slice(0, 32);
                let titleS2 = queuedSongsMap[2].title;
                let titleTwo = titleS2.slice(0, 32);
                let titleS3 = queuedSongsMap[3].title;
                let titleThree = titleS3.slice(0, 32);
                let titleS4 = queuedSongsMap[4].title;
                let titleFour = titleS4.slice(0, 32);
                let titleS5 = queuedSongsMap[5].title;
                let titleFive = titleS5.slice(0, 32);
                let titleS6 = queuedSongsMap[6].title;
                let titleSix = titleS6.slice(0, 32);
                let titleS7 = queuedSongsMap[7].title;
                let titleSeven = titleS7.slice(0, 32);
                let titleS8 = queuedSongsMap[8].title;
                let titleEight = titleS8.slice(0, 32);
                let titleS9 = queuedSongsMap[9].title;
                let titleNine = titleS9.slice(0, 32);
                ctx.fillText(queuedSongsMap[0].index + 1 + '.', 38, 122)
                ctx.fillText('' + titleZero + '...', 67, 122)
                ctx.fillText('[' + pms(queuedSongsMap[0].duration) + ']', 598, 122)
                ctx.fillText(queuedSongsMap[1].index + 1 + '.', 38, 170)
                ctx.fillText('' + titleOne + '...', 67, 170)
                ctx.fillText('[' + pms(queuedSongsMap[1].duration) + ']', 598, 170)
                ctx.fillText(queuedSongsMap[2].index + 1 + '.', 38, 218)
                ctx.fillText('' + titleTwo + '...', 67, 218)
                ctx.fillText('[' + pms(queuedSongsMap[2].duration) + ']', 598, 218)
                ctx.fillText(queuedSongsMap[3].index + 1 + '.', 38, 266)
                ctx.fillText('' + titleThree + '...', 67, 266)
                ctx.fillText('[' + pms(queuedSongsMap[3].duration) + ']', 598, 266)
                ctx.fillText(queuedSongsMap[4].index + 1 + '.', 38, 314)
                ctx.fillText('' + titleFour + '...', 67, 314)
                ctx.fillText('[' + pms(queuedSongsMap[4].duration) + ']', 598, 314)
                ctx.fillText(queuedSongsMap[5].index + 1 + '.', 38, 362)
                ctx.fillText('' + titleFive + '...', 67, 362)
                ctx.fillText('[' + pms(queuedSongsMap[5].duration) + ']', 598, 362)
                ctx.fillText(queuedSongsMap[6].index + 1 + '.', 38, 410)
                ctx.fillText('' + titleSix + '...', 67, 410)
                ctx.fillText('[' + pms(queuedSongsMap[6].duration) + ']', 598, 410)
                ctx.fillText(queuedSongsMap[7].index + 1 + '.', 38, 458)
                ctx.fillText('' + titleSeven + '...', 67, 458)
                ctx.fillText('[' + pms(queuedSongsMap[7].duration) + ']', 598, 458)
                ctx.fillText(queuedSongsMap[8].index + 1 + '.', 38, 506)
                ctx.fillText('' + titleEight + '...', 67, 506)
                ctx.fillText('[' + pms(queuedSongsMap[8].duration) + ']', 598, 506)
                ctx.fillText(queuedSongsMap[9].index + 1 + '.', 38, 554)
                ctx.fillText('' + titleNine + '...', 69, 554)
                ctx.fillText('[' + pms(queuedSongsMap[9].duration) + ']', 598, 554)
                overlayCanvas = canvas.toBuffer()
                return overlayCanvas;
            } else if (queuedSongsMap[8]) {
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
                let titleS0 = queuedSongsMap[0].title;
                let titleZero = titleS0.slice(0, 32);
                let titleS1 = queuedSongsMap[1].title;
                let titleOne = titleS1.slice(0, 32);
                let titleS2 = queuedSongsMap[2].title;
                let titleTwo = titleS2.slice(0, 32);
                let titleS3 = queuedSongsMap[3].title;
                let titleThree = titleS3.slice(0, 32);
                let titleS4 = queuedSongsMap[4].title;
                let titleFour = titleS4.slice(0, 32);
                let titleS5 = queuedSongsMap[5].title;
                let titleFive = titleS5.slice(0, 32);
                let titleS6 = queuedSongsMap[6].title;
                let titleSix = titleS6.slice(0, 32);
                let titleS7 = queuedSongsMap[7].title;
                let titleSeven = titleS7.slice(0, 32);
                let titleS8 = queuedSongsMap[8].title;
                let titleEight = titleS8.slice(0, 32);
                ctx.fillText(queuedSongsMap[0].index + 1 + '.', 38, 122)
                ctx.fillText('' + titleZero + '...', 67, 122)
                ctx.fillText('[' + pms(queuedSongsMap[0].duration) + ']', 598, 122)
                ctx.fillText(queuedSongsMap[1].index + 1 + '.', 38, 170)
                ctx.fillText('' + titleOne + '...', 67, 170)
                ctx.fillText('[' + pms(queuedSongsMap[1].duration) + ']', 598, 170)
                ctx.fillText(queuedSongsMap[2].index + 1 + '.', 38, 218)
                ctx.fillText('' + titleTwo + '...', 67, 218)
                ctx.fillText('[' + pms(queuedSongsMap[2].duration) + ']', 598, 218)
                ctx.fillText(queuedSongsMap[3].index + 1 + '.', 38, 266)
                ctx.fillText('' + titleThree + '...', 67, 266)
                ctx.fillText('[' + pms(queuedSongsMap[3].duration) + ']', 598, 266)
                ctx.fillText(queuedSongsMap[4].index + 1 + '.', 38, 314)
                ctx.fillText('' + titleFour + '...', 67, 314)
                ctx.fillText('[' + pms(queuedSongsMap[4].duration) + ']', 598, 314)
                ctx.fillText(queuedSongsMap[5].index + 1 + '.', 38, 362)
                ctx.fillText('' + titleFive + '...', 67, 362)
                ctx.fillText('[' + pms(queuedSongsMap[5].duration) + ']', 598, 362)
                ctx.fillText(queuedSongsMap[6].index + 1 + '.', 38, 410)
                ctx.fillText('' + titleSix + '...', 67, 410)
                ctx.fillText('[' + pms(queuedSongsMap[6].duration) + ']', 598, 410)
                ctx.fillText(queuedSongsMap[7].index + 1 + '.', 38, 458)
                ctx.fillText('' + titleSeven + '...', 67, 458)
                ctx.fillText('[' + pms(queuedSongsMap[7].duration) + ']', 598, 458)
                ctx.fillText(queuedSongsMap[8].index + 1 + '.', 38, 506)
                ctx.fillText('' + titleEight + '...', 67, 506)
                ctx.fillText('[' + pms(queuedSongsMap[8].duration) + ']', 598, 506)
                overlayCanvas = canvas.toBuffer()
                return overlayCanvas;
            } else if (queuedSongsMap[7]) {
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
                let titleS0 = queuedSongsMap[0].title;
                let titleZero = titleS0.slice(0, 32);
                let titleS1 = queuedSongsMap[1].title;
                let titleOne = titleS1.slice(0, 32);
                let titleS2 = queuedSongsMap[2].title;
                let titleTwo = titleS2.slice(0, 32);
                let titleS3 = queuedSongsMap[3].title;
                let titleThree = titleS3.slice(0, 32);
                let titleS4 = queuedSongsMap[4].title;
                let titleFour = titleS4.slice(0, 32);
                let titleS5 = queuedSongsMap[5].title;
                let titleFive = titleS5.slice(0, 32);
                let titleS6 = queuedSongsMap[6].title;
                let titleSix = titleS6.slice(0, 32);
                let titleS7 = queuedSongsMap[7].title;
                let titleSeven = titleS7.slice(0, 32);
                ctx.fillText(queuedSongsMap[0].index + 1 + '.', 38, 122)
                ctx.fillText('' + titleZero + '...', 67, 122)
                ctx.fillText('[' + pms(queuedSongsMap[0].duration) + ']', 598, 122)
                ctx.fillText(queuedSongsMap[1].index + 1 + '.', 38, 170)
                ctx.fillText('' + titleOne + '...', 67, 170)
                ctx.fillText('[' + pms(queuedSongsMap[1].duration) + ']', 598, 170)
                ctx.fillText(queuedSongsMap[2].index + 1 + '.', 38, 218)
                ctx.fillText('' + titleTwo + '...', 67, 218)
                ctx.fillText('[' + pms(queuedSongsMap[2].duration) + ']', 598, 218)
                ctx.fillText(queuedSongsMap[3].index + 1 + '.', 38, 266)
                ctx.fillText('' + titleThree + '...', 67, 266)
                ctx.fillText('[' + pms(queuedSongsMap[3].duration) + ']', 598, 266)
                ctx.fillText(queuedSongsMap[4].index + 1 + '.', 38, 314)
                ctx.fillText('' + titleFour + '...', 67, 314)
                ctx.fillText('[' + pms(queuedSongsMap[4].duration) + ']', 598, 314)
                ctx.fillText(queuedSongsMap[5].index + 1 + '.', 38, 362)
                ctx.fillText('' + titleFive + '...', 67, 362)
                ctx.fillText('[' + pms(queuedSongsMap[5].duration) + ']', 598, 362)
                ctx.fillText(queuedSongsMap[6].index + 1 + '.', 38, 410)
                ctx.fillText('' + titleSix + '...', 67, 410)
                ctx.fillText('[' + pms(queuedSongsMap[6].duration) + ']', 598, 410)
                ctx.fillText(queuedSongsMap[7].index + 1 + '.', 38, 458)
                ctx.fillText('' + titleSeven + '...', 67, 458)
                ctx.fillText('[' + pms(queuedSongsMap[7].duration) + ']', 598, 458)
                overlayCanvas = canvas.toBuffer()
                return overlayCanvas;
            } else if (queuedSongsMap[6]) {
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
                let titleS0 = queuedSongsMap[0].title;
                let titleZero = titleS0.slice(0, 32);
                let titleS1 = queuedSongsMap[1].title;
                let titleOne = titleS1.slice(0, 32);
                let titleS2 = queuedSongsMap[2].title;
                let titleTwo = titleS2.slice(0, 32);
                let titleS3 = queuedSongsMap[3].title;
                let titleThree = titleS3.slice(0, 32);
                let titleS4 = queuedSongsMap[4].title;
                let titleFour = titleS4.slice(0, 32);
                let titleS5 = queuedSongsMap[5].title;
                let titleFive = titleS5.slice(0, 32);
                let titleS6 = queuedSongsMap[6].title;
                let titleSix = titleS6.slice(0, 32);
                ctx.fillText(queuedSongsMap[0].index + 1 + '.', 38, 122)
                ctx.fillText('' + titleZero + '...', 67, 122)
                ctx.fillText('[' + pms(queuedSongsMap[0].duration) + ']', 598, 122)
                ctx.fillText(queuedSongsMap[1].index + 1 + '.', 38, 170)
                ctx.fillText('' + titleOne + '...', 67, 170)
                ctx.fillText('[' + pms(queuedSongsMap[1].duration) + ']', 598, 170)
                ctx.fillText(queuedSongsMap[2].index + 1 + '.', 38, 218)
                ctx.fillText('' + titleTwo + '...', 67, 218)
                ctx.fillText('[' + pms(queuedSongsMap[2].duration) + ']', 598, 218)
                ctx.fillText(queuedSongsMap[3].index + 1 + '.', 38, 266)
                ctx.fillText('' + titleThree + '...', 67, 266)
                ctx.fillText('[' + pms(queuedSongsMap[3].duration) + ']', 598, 266)
                ctx.fillText(queuedSongsMap[4].index + 1 + '.', 38, 314)
                ctx.fillText('' + titleFour + '...', 67, 314)
                ctx.fillText('[' + pms(queuedSongsMap[4].duration) + ']', 598, 314)
                ctx.fillText(queuedSongsMap[5].index + 1 + '.', 38, 362)
                ctx.fillText('' + titleFive + '...', 67, 362)
                ctx.fillText('[' + pms(queuedSongsMap[5].duration) + ']', 598, 362)
                ctx.fillText(queuedSongsMap[6].index + 1 + '.', 38, 410)
                ctx.fillText('' + titleSix + '...', 67, 410)
                ctx.fillText('[' + pms(queuedSongsMap[6].duration) + ']', 598, 410)
                overlayCanvas = canvas.toBuffer()
                return overlayCanvas;
            } else if (queuedSongsMap[5]) {
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
                let titleS0 = queuedSongsMap[0].title;
                let titleZero = titleS0.slice(0, 32);
                let titleS1 = queuedSongsMap[1].title;
                let titleOne = titleS1.slice(0, 32);
                let titleS2 = queuedSongsMap[2].title;
                let titleTwo = titleS2.slice(0, 32);
                let titleS3 = queuedSongsMap[3].title;
                let titleThree = titleS3.slice(0, 32);
                let titleS4 = queuedSongsMap[4].title;
                let titleFour = titleS4.slice(0, 32);
                let titleS5 = queuedSongsMap[5].title;
                let titleFive = titleS5.slice(0, 32);
                ctx.fillText(queuedSongsMap[0].index + 1 + '.', 38, 122)
                ctx.fillText('' + titleZero + '...', 67, 122)
                ctx.fillText('[' + pms(queuedSongsMap[0].duration) + ']', 598, 122)
                ctx.fillText(queuedSongsMap[1].index + 1 + '.', 38, 170)
                ctx.fillText('' + titleOne + '...', 67, 170)
                ctx.fillText('[' + pms(queuedSongsMap[1].duration) + ']', 598, 170)
                ctx.fillText(queuedSongsMap[2].index + 1 + '.', 38, 218)
                ctx.fillText('' + titleTwo + '...', 67, 218)
                ctx.fillText('[' + pms(queuedSongsMap[2].duration) + ']', 598, 218)
                ctx.fillText(queuedSongsMap[3].index + 1 + '.', 38, 266)
                ctx.fillText('' + titleThree + '...', 67, 266)
                ctx.fillText('[' + pms(queuedSongsMap[3].duration) + ']', 598, 266)
                ctx.fillText(queuedSongsMap[4].index + 1 + '.', 38, 314)
                ctx.fillText('' + titleFour + '...', 67, 314)
                ctx.fillText('[' + pms(queuedSongsMap[4].duration) + ']', 598, 314)
                ctx.fillText(queuedSongsMap[5].index + 1 + '.', 38, 362)
                ctx.fillText('' + titleFive + '...', 67, 362)
                ctx.fillText('[' + pms(queuedSongsMap[5].duration) + ']', 598, 362)
                overlayCanvas = canvas.toBuffer()
                return overlayCanvas;
            } else if (queuedSongsMap[4]) {
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
                let titleS0 = queuedSongsMap[0].title;
                let titleZero = titleS0.slice(0, 32);
                let titleS1 = queuedSongsMap[1].title;
                let titleOne = titleS1.slice(0, 32);
                let titleS2 = queuedSongsMap[2].title;
                let titleTwo = titleS2.slice(0, 32);
                let titleS3 = queuedSongsMap[3].title;
                let titleThree = titleS3.slice(0, 32);
                let titleS4 = queuedSongsMap[4].title;
                let titleFour = titleS4.slice(0, 32);
                ctx.fillText(queuedSongsMap[0].index + 1 + '.', 38, 122)
                ctx.fillText('' + titleZero + '...', 67, 122)
                ctx.fillText('[' + pms(queuedSongsMap[0].duration) + ']', 598, 122)
                ctx.fillText(queuedSongsMap[1].index + 1 + '.', 38, 170)
                ctx.fillText('' + titleOne + '...', 67, 170)
                ctx.fillText('[' + pms(queuedSongsMap[1].duration) + ']', 598, 170)
                ctx.fillText(queuedSongsMap[2].index + 1 + '.', 38, 218)
                ctx.fillText('' + titleTwo + '...', 67, 218)
                ctx.fillText('[' + pms(queuedSongsMap[2].duration) + ']', 598, 218)
                ctx.fillText(queuedSongsMap[3].index + 1 + '.', 38, 266)
                ctx.fillText('' + titleThree + '...', 67, 266)
                ctx.fillText('[' + pms(queuedSongsMap[3].duration) + ']', 598, 266)
                ctx.fillText(queuedSongsMap[4].index + 1 + '.', 38, 314)
                ctx.fillText('' + titleFour + '...', 67, 314)
                ctx.fillText('[' + pms(queuedSongsMap[4].duration) + ']', 598, 314)
                overlayCanvas = canvas.toBuffer()
                return overlayCanvas;
            } else if (queuedSongsMap[3]) {
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
                let titleS0 = queuedSongsMap[0].title;
                let titleZero = titleS0.slice(0, 32);
                let titleS1 = queuedSongsMap[1].title;
                let titleOne = titleS1.slice(0, 32);
                let titleS2 = queuedSongsMap[2].title;
                let titleTwo = titleS2.slice(0, 32);
                let titleS3 = queuedSongsMap[3].title;
                let titleThree = titleS3.slice(0, 32);
                ctx.fillText(queuedSongsMap[0].index + 1 + '.', 38, 122)
                ctx.fillText('' + titleZero + '...', 67, 122)
                ctx.fillText('[' + pms(queuedSongsMap[0].duration) + ']', 598, 122)
                ctx.fillText(queuedSongsMap[1].index + 1 + '.', 38, 170)
                ctx.fillText('' + titleOne + '...', 67, 170)
                ctx.fillText('[' + pms(queuedSongsMap[1].duration) + ']', 598, 170)
                ctx.fillText(queuedSongsMap[2].index + 1 + '.', 38, 218)
                ctx.fillText('' + titleTwo + '...', 67, 218)
                ctx.fillText('[' + pms(queuedSongsMap[2].duration) + ']', 598, 218)
                ctx.fillText(queuedSongsMap[3].index + 1 + '.', 38, 266)
                ctx.fillText('' + titleThree + '...', 67, 266)
                ctx.fillText('[' + pms(queuedSongsMap[3].duration) + ']', 598, 266)
                overlayCanvas = canvas.toBuffer()
                return overlayCanvas;
            } else if (queuedSongsMap[2]) {
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
                let titleS0 = queuedSongsMap[0].title;
                let titleZero = titleS0.slice(0, 32);
                let titleS1 = queuedSongsMap[1].title;
                let titleOne = titleS1.slice(0, 32);
                let titleS2 = queuedSongsMap[2].title;
                let titleTwo = titleS2.slice(0, 32);
                ctx.fillText(queuedSongsMap[0].index + 1 + '.', 38, 122)
                ctx.fillText('' + titleZero + '...', 67, 122)
                ctx.fillText('[' + pms(queuedSongsMap[0].duration) + ']', 598, 122)
                ctx.fillText(queuedSongsMap[1].index + 1 + '.', 38, 170)
                ctx.fillText('' + titleOne + '...', 67, 170)
                ctx.fillText('[' + pms(queuedSongsMap[1].duration) + ']', 598, 170)
                ctx.fillText(queuedSongsMap[2].index + 1 + '.', 38, 218)
                ctx.fillText('' + titleTwo + '...', 67, 218)
                ctx.fillText('[' + pms(queuedSongsMap[2].duration) + ']', 598, 218)
                overlayCanvas = canvas.toBuffer()
                return overlayCanvas;
            } else if (queuedSongsMap[1]) {
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
                let titleS0 = queuedSongsMap[0].title;
                let titleZero = titleS0.slice(0, 32);
                let titleS1 = queuedSongsMap[1].title;
                let titleOne = titleS1.slice(0, 32);
                ctx.fillText(queuedSongsMap[0].index + 1 + '.', 38, 122)
                ctx.fillText('' + titleZero + '...', 67, 122)
                ctx.fillText('[' + pms(queuedSongsMap[0].duration) + ']', 598, 122)
                ctx.fillText(queuedSongsMap[1].index + 1 + '.', 38, 170)
                ctx.fillText('' + titleOne + '...', 67, 170)
                ctx.fillText('[' + pms(queuedSongsMap[1].duration) + ']', 598, 170)
                overlayCanvas = canvas.toBuffer()
                return overlayCanvas;
            } else if (queuedSongsMap[0]) {
                console.log("ooohoohoohho")
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
                let titleS0 = queuedSongsMap[0].title;
                let titleZero = titleS0.slice(0, 32);
                ctx.fillText(queuedSongsMap[0].index + 1 + '.', 38, 122)
                ctx.fillText('' + titleZero + '...', 67, 122)
                ctx.fillText('[' + pms(queuedSongsMap[0].duration) + ']', 598, 122)
                overlayCanvas = canvas.toBuffer()
                return overlayCanvas;
            }
        }
        else {
            overlayCanvas = null;
            return overlayCanvas;
        }
    }
}