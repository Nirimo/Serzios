const { ActionRowBuilder, ButtonBuilder, ButtonStyle, PermissionFlagsBits, GatewayIntentBits, ActivityType } = require('discord.js');
const moment = require("moment");
const Discord = require("discord.js")
module.exports = async (client, params) => {
    var userIcon = params.user.displayAvatarURL();
    let embednewlogs = new Discord.EmbedBuilder()
        .setColor('#1962cc')
        .setAuthor({ name: `@${params.user.username}#${params.user.discriminator} viens de quitter`})
        .setThumbnail(userIcon)
        .setDescription(`On espère qu'il reviendra sur SerZios.coa !`)
        .setTimestamp()
        .setFooter({ text: "SerZios Corp 2023"});
    client.channels.cache.get(`1096404315398217748`).send({embeds: [embednewlogs]})
};