const Discord = require("discord.js")
const { ActionRowBuilder, Events, ModalBuilder, TextInputBuilder, TextInputStyle, ButtonBuilder, ButtonStyle, PermissionFlagsBits, ApplicationCommandType, ApplicationCommandOptionType } = require('discord.js');
module.exports = {
    run: async (client, interaction ) => {
        const chanel = interaction.options.getChannel('channel');
        const timefin = interaction.options.getInteger('time');
        interaction.reply({content: "Votre event à bien été envoyé", ephemeral: true})
        client.total["coffre"] = 0;
        client.embeds["embeds"] = new Discord.EmbedBuilder()
            .setColor('#1962CB')
            .setAuthor({ name: `Classement actuel des scores (en temps réel).`})
            .addFields(
                {
                    name: `Informations`,
                    value: `${client.lastmember["id"] == undefined ? "Personne n'a encore recupéré de coin": `La dernière personne ayant extrait les coins est <@${client.lastmember["id"]}> avec un total de ${client.lastcoin["numbercoin"]} coins`}.\nAttention, les participants sont limités à 3 extractions (3 clics).\n 1 extraction (1 clic) est attribué en supplément pour tout ceux qui boostent le serveur.`
                }
            )
            .setTimestamp()
            .setFooter({ text: `SerZios Corp 2023`});
        client.button["button"] = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setCustomId('prendre')
                        .setLabel(`${client.total["coffre"]} coins`)
                        .setStyle(ButtonStyle.Primary),
                    new ButtonBuilder()
                        .setCustomId('compter')
                        .setLabel(`Compter mes coins`)
                        .setStyle(ButtonStyle.Secondary)
                );
        client.msg["texte"] = await chanel.send({content: `Juste en dessous de ce message, vous trouverez un bouton affichant un nombre de coins qui augmente progressivement avec le temps.\n\nCes coins sont stockés dans un réservoir commun partagé par tous les utilisateurs du serveur.Les coins se génèrent de manière cadencée toutes les minutes et s’accumulent dans le réservoir.\nLorsqu'une personne clique sur le bouton, elle collecte tous les coins et le réservoir est vidé.\n\nVotre score pour le classement sera déterminé par le total des coins que vous avez collectés.`})
        client.msg["message"] = await chanel.send({embeds: [client.embeds["embeds"]], components: [client.button["button"]]})
        client.msg["interval"] = setInterval(async () => {
            client.total["coffre"] = client.total["coffre"] + 1;
            client.button["button"].components[0].setLabel(`${client.total["coffre"]} coins`);
            client.msg["message"].edit({embeds: [client.embeds["embeds"]], components: [client.button["button"]]});
        }, 1000)
        function wait(delay) {
            return new Promise(function(resolve) {
              setTimeout(resolve, delay);
            });
        }
        wait(((timefin*60)*60)*1000).then(function() {
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
        });
},
    help: {
        description: "Lancer un event",
        memberPermissions: [PermissionFlagsBits.Administrator],
        options: [
            {
                name: "channel",
                description: "Channel de l'event",
                type: ApplicationCommandOptionType.Channel,
                required: true,
            },{
                name: "time",
                description: "Temps de l'event (en heures)",
                type: ApplicationCommandOptionType.Integer,
                required: true,
            }
        ],
    }
}