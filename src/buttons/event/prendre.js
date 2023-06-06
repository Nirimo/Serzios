const Discord = require("discord.js")
module.exports = {
    run: async (client, interaction) => {
        if((client.clic["clic"][interaction.user.id] == undefined ? 0 : client.clic["clic"][interaction.user.id]) < (interaction.member.roles.cache.has("1094207583432216676") == false ? 3 : 4)){
            client.clic["clic"][interaction.user.id] = (client.clic["clic"][interaction.user.id] == undefined ? 0 : client.clic["clic"][interaction.user.id]) + 1;
            client.lastmember["id"] = interaction.user.id;
            client.lastcoin["numbercoin"] = client.total["coffre"]; 
            client.chest[interaction.user.id] = {
                number: (client.chest[interaction.user.id]?.number ?? 0) + client.total["coffre"]
              };
            client.embeds["embeds"].spliceFields(0, 1, {
                name: 'Informations',
                value: `${client.lastmember["id"] == undefined ? "Personne n'a encore recupéré de coin": `La dernière personne ayant extrait les coins est <@${client.lastmember["id"]}> avec un total de ${client.lastcoin["numbercoin"]} coins`}.\nAttention, les participants sont limités à 3 extractions (3 clics).\n 1 extraction (1 clic) est attribué en supplément pour tout ceux qui boostent le serveur.`
            });
            interaction.reply({content: `Vous avez récupérer ${client.total["coffre"]} coins ( ${client.clic["clic"][interaction.user.id]} / ${(interaction.member.roles.cache.has("1094207583432216676") == false ? 3 : 4)} clics)`, ephemeral: true});
            client.total["coffre"] = 0;
            client.button["button"].components[0].setLabel(`${client.total["coffre"]} coins`);
            const chestEntries = Object.entries(client.chest);
            const sortedEntries = chestEntries.sort((a, b) => b[1].number - a[1].number);
            const topEntries = sortedEntries.slice(0, 10); 
            let leaderboard = " ";
            topEntries.forEach((entry, index) => {
                const memberId = entry[0];
                const coins = entry[1].number;
                const member = client.users.cache.get(memberId);
                leaderboard += `${index + 1}. ${member} - Coins: ${coins}\n`;
            });
            client.embeds["embeds"].setDescription(leaderboard);
        } else {
            interaction.reply({content: "Vous avez utilisé le maximum de clics", ephemeral: true});
        }

    }
}