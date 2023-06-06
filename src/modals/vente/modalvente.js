const { ActionRowBuilder, ButtonBuilder, ButtonStyle, Permissions, ChannelType, PermissionFlagsBits, StringSelectMenuBuilder } = require('discord.js');
const Discord = require("discord.js")

module.exports = {
    run: async (client, interaction) => {
        const title = interaction.fields.getTextInputValue('titleventeinput');
	    const desc = interaction.fields.getTextInputValue('descventeinput');
        const price = interaction.fields.getTextInputValue('priceventeinput');
        var userIcon = interaction.user.displayAvatarURL();
        let embedvente = new Discord.EmbedBuilder()
            .setColor('#1962CB')
            .setAuthor({ name: `Vente de @${interaction.user.username}#${interaction.user.discriminator}`, iconURL: userIcon})
            .setThumbnail(userIcon)
            .addFields({
                name: `Titre:`,
                value: `${title}`
            },{
                name: `Type:`,
                value: `${client.brouillon["type"][interaction.user.id]}`
            },{
                name: `Description:`,
                value: `${desc}`
            },{
                name: `Prix:`,
                value: `${price} €`
            }
            )
            .setTimestamp()
            .setFooter({ text: `SerZios Corp 2023`});
        client.channels.cache.get(`1107708474940473364`).send({embeds: [embedvente]})
        interaction.reply({content: "Votre vente a été envoyée", ephemeral: true })
        
    }
}