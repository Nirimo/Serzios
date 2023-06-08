const Discord = require("discord.js")
const { ActionRowBuilder, Events, ModalBuilder, TextInputBuilder, TextInputStyle, ButtonBuilder, ButtonStyle, PermissionFlagsBits, ApplicationCommandType, ApplicationCommandOptionType } = require('discord.js');
module.exports = {
    run: async (client, interaction ) => {
        const chestEntries = Object.entries(client.chest);
        const sortedEntries = chestEntries.sort((a, b) => b[1].number - a[1].number);
        const topEntries = sortedEntries.slice(0, 1); 
        let leaderboard;
        topEntries.forEach((entry, index) => {
            const memberId = entry[0];
            const member = client.users.cache.get(memberId);
            leaderboard = member;
        });

        console.log(leaderboard);
    },
    help: {
        description: "Connaitre le ping du bot",
        memberPermissions: [PermissionFlagsBits.Administrator],
    }
}