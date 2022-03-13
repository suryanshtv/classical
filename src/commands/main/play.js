module.exports = {
    name: "play",
    category: "main",
    aliases: ["p"],
    description: "base commands removed",
    args: false,
    usage: "Nothing.",
    permission: [],
    owner: false,
    player: false,
    inVoiceChannel: false,
    sameVoiceChannel: false,
   execute: async (message, args, client) => {
       message.reply("🌸 I had deprecated the use of prefix based commands, and shifted to \"slash\" commands to follow the guidelines of discord.\n Please use \`/play\` or for more details type \`/help\`")
   }
}