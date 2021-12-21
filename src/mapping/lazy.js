module.exports = {
    async lazy(ms) {
        if (ms <= 100) {
            let message = `Ooh? I am so fast!`;
            return message;
        } else if (ms <= 500) {
            let message = `Aaah! I am slow!`;
            return message;
        } else {
            let message = `Senpai ne? Am I alive?`;
            return message
        }
    }
}