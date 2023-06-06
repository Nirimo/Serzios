const { ActionRowBuilder, ButtonBuilder, ButtonStyle, Permissions, ChannelType, PermissionFlagsBits, StringSelectMenuBuilder } = require('discord.js');
const Discord = require("discord.js")

module.exports = {
    run: async (client, interaction) => {
        const selected = interaction.values.join(', ');
        if (selected === "first_option") reason = "Question";
        if (selected === "second_option") reason = "Modération";
        interaction.guild.channels.create({
            name: `ticket-${interaction.user.username}`,
            type: ChannelType.GuildText,
            parent: `1109829847187992596`,
            permissionOverwrites: [{
                id: interaction.guild.roles.everyone,
                allow: [PermissionFlagsBits.SendMessages],
                deny: [PermissionFlagsBits.ViewChannel],
            },{
                id: interaction.user.id,
                allow: [PermissionFlagsBits.SendMessages, PermissionFlagsBits.ViewChannel],
                deny: [],
            },{
                id: "1100178079902617713",
                allow: [PermissionFlagsBits.SendMessages, PermissionFlagsBits.ViewChannel],
                deny: [],
            }]
        }).then(chan => {
        let embedopenticket = new Discord.EmbedBuilder()
                .setColor('#1962CB')
                .setAuthor({ name: `Ticket de @${interaction.user.username}#${interaction.user.discriminator} transmis avec succès`})
                .setDescription("Votre ticket a bien été envoyé à notre équipe.\nMerci de patentier avant de recevoir une réponse. Le délai est d'environ 2 heures.\nIl est important de souligner qu'il n'est pas nécessaire de mentionner un membre une fois la demande soumise.\nNous traiterons forcément votre cas dans les plus brefs délais.")
                .setTimestamp()
                .addFields({
                    name: "Type de ticket",
                    value: `${reason}`,
                })
                .setFooter({ text: `SerZios Corp 2023`});
        const closeticket = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setCustomId('closeticket')
                        .setLabel(`Fermer le ticket`)
                        .setStyle(ButtonStyle.Danger)
                )
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
        chan.send({embeds: [embedopenticket], components: [closeticket]}).then((msg) => msg.pin());
        interaction.update({components: [selectcatticket]})
        })
    }
}