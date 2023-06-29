const { ActionRowBuilder, ButtonBuilder, ButtonStyle, PermissionFlagsBits, GatewayIntentBits, ActivityType } = require('discord.js');
const moment = require("moment");
const Discord = require("discord.js")
module.exports = async (client, params) => {
    var userIcon = params.user.displayAvatarURL();
    let embednewlogs = new Discord.EmbedBuilder()
        .setColor('#1962cc')
        .setAuthor({ name: `Nouveau membre`})
        .setThumbnail(userIcon)
        .setDescription(`<@${params.user.id}> (${params.user.username}#${params.user.discriminator}) vient de rejoindre le serveur`)
        .addFields(
            {
            name: "ID:",
            value: `||${params.user.id}||`,
            inline: false
        },{
            name: `Date de création:`,
            value:
            `${moment(params.user.createdAt).format("DD/MM/YYYY")}
            (<t:${parseInt(params.user.createdTimestamp / 1000)}:R>)
            `,
            inline: true
        })
        .setTimestamp()
        .setFooter({ text: "SerZios Corp 2023"});
        let embednew = new Discord.EmbedBuilder()
            .setColor('#1962cc')
            .setAuthor({ name: `Bienvenue @${params.user.username}#${params.user.discriminator}`})
            .setThumbnail(userIcon)
            .setDescription(`On espère que tu passeras un bon moment sur SerZios.coa !\nSi tu as des questions, n'hésite pas à déposer un ticket en <#1096404720001744916>`)
            .setTimestamp()
            .setFooter({ text: "SerZios Corp 2023"});
        const remercier = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('remerci')
                    .setLabel(`Souhaiter la bienvenue`)
                    .setStyle(ButtonStyle.Secondary)
            )
    client.channels.fetch('1123219750860881960').then(chan => {chan.send({embeds: [embednew], components: [remercier]})});
    client.channels.cache.get(`1096404315398217748`).send({embeds: [embednewlogs]})
};
