module.exports = async (client, player) => {
	const eqDefault  = [
        { band: 0, gain: 0.03 },
        { band: 1, gain: 0.03 },
        { band: 2, gain: 0.025 },
        { band: 3, gain: 0.025 },
        { band: 4, gain: 0.025 },
    ];
	client.logger.log(`Player has been created in ${player.guild}`, "log");
	return await player.setEQ(eqDefault)

}