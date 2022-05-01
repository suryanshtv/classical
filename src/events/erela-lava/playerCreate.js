module.exports = async (client, player) => {
	const eqDefault  = [
        { band: 0, gain: 0.0025 },
        { band: 1, gain: 0.0025 },
        { band: 2, gain: 0.005 },
        { band: 3, gain: 0.005 },
        { band: 4, gain: 0.005 },
    ];
	client.logger.log(`Player has been created in ${player.guild}`, "log");
	return await player.setEQ(eqDefault)

}
