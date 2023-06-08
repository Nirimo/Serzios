const Discord = require("discord.js")
const { ActionRowBuilder, Events, ModalBuilder, TextInputBuilder, TextInputStyle, ButtonBuilder, ButtonStyle, PermissionFlagsBits, ApplicationCommandType, ApplicationCommandOptionType } = require('discord.js');
module.exports = {
    run: async (client, interaction ) => {
        interaction.reply({content: "L'event vient d'être terminé", ephemeral: true});
        clearInterval(client.msg["interval"]);
        const chestEntries = Object.entries(client.chest);
        const sortedEntries = chestEntries.sort((a, b) => b[1].number - a[1].number);
        const topEntries = sortedEntries.slice(0, 1); 
        let leaderboard;
        topEntries.forEach((entry, index) => {
            const memberId = entry[0];
            const member = client.users.cache.get(memberId);
            leaderboard = member;
        });
        client.msg["texte"].edit({content: " Event terminer ! "})
        client.embeds["embeds"].spliceFields(0, 1, {
            name: 'Informations',
            value: `L'événement est terminé. Félicitation à ${leaderboard} pour sa première place dans le classement. Merci à tous pour votre participation ! les rôles commémoratifs sont distribués aux 10 premiers (à l'entièreté du classement ci-dessus)`
        });
        client.embeds["embeds"].setAuthor({ name: `Classement définitif des scores (clôturé)`})
        client.msg["message"].edit({embeds: [client.embeds["embeds"]], components: []});
        console.log("Event terminer !")
        client.chest = {};
        client.clic = {};
        client.clic["clic"] = {};
        client.total = {};
        client.msg = {};
        client.button = {};
        client.embeds = {};
        client.lastmember = {};
        client.lastcoin = {};
},
    help: {
        description: "Lancer un event",
        memberPermissions: [PermissionFlagsBits.Administrator],
    }
}