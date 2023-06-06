const { ActionRowBuilder, ButtonBuilder, ButtonStyle, Permissions, ChannelType, PermissionFlagsBits, StringSelectMenuBuilder } = require('discord.js');
const Discord = require("discord.js")
module.exports = {
    run: async (client, interaction) => {
        let embedticket = new Discord.EmbedBuilder()
            .setColor('#1962CB')
            .setAuthor({ name: `Assistance`})
            .addFields({
                name: "Besoin d'aide ?",
                value: "Vous pouvez créer un ticket d'assistance avec le menu ci-dessous.\nNotre équipe de support s'efforcera de vous répondre\n dans les plus brefs délais.\nPour créer un ticket, sélectionnez une des deux options ci-dessous."
            })
            .setTimestamp()
            .setFooter({ text: `SerZios Corp 2023`});
        const selectcatticket = new ActionRowBuilder()
            .addComponents(
                new StringSelectMenuBuilder()
                    .setCustomId('selectcatticket')
                    .setPlaceholder("Catégorie d'aide")
                    .addOptions(
                        {
                            label: 'Question ',
                            description: `Une question spécifique ou une proposition ? N'hésitez pas !`,
                            value: 'first_option',
                        },{
                            label: 'Modération',
                            description: `Vous êtes témoin d'une infraction au règlement ? Signalez la !`,
                            value: 'second_option',
                        }
                    ),
            );
        interaction.channel.send({ embeds: [embedticket], components: [selectcatticket]})
        interaction.reply({content: "Votre message de ticket a bien été envoyé !", ephemeral: true})
    },
    help: {
        description: "Ouvrir un ticket",
        memberPermissions: [PermissionFlagsBits.Administrator],
    }
}
