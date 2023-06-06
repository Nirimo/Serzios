const Discord = require("discord.js")
module.exports = {
    run: async (client, interaction ) => {
        const chestEntries = Object.entries(client.chest);
        const sortedEntries = chestEntries.sort((a, b) => b[1].number - a[1].number);

        const topEntries = sortedEntries.slice(0, 10); // Obtenir les 10 premiers membres

        let leaderboard = "Leaderboard:\n";
        topEntries.forEach((entry, index) => {
            const memberId = entry[0];
            const coins = entry[1].number;
            const member = client.users.cache.get(memberId);

        leaderboard += `${index + 1}. ${member} - Coins: ${coins}\n`;
        });

        console.log(leaderboard);
    },
    help: {
        description: "Connaitre le ping du bot"
    }
}