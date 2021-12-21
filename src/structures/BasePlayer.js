const { Message } = require("discord.js");
const { Structure } = require("erela.js");

let nowPlayingMessage;
Structure.extend(
    "Player",
    (Player) =>
        class extends Player {
            /**
             * Sets now playing message for deleting next time
             * @param {Message} message
             */
            async setNowplayingMessage(message) {
                if (this.nowPlayingMessage && !this.nowPlayingMessage.deleted)
                    await this.nowPlayingMessage.delete();
                nowPlayingMessage = message;
                return (this.nowPlayingMessage = message);
            }
            async deleteNowPlayingMessage() {
                if (nowPlayingMessage && !nowPlayingMessage.deleted)
                    await nowPlayingMessage.delete();
                return true
            }

        }
);
