const { ActionRowBuilder, ButtonBuilder, ButtonStyle, Permissions, ChannelType, PermissionFlagsBits, StringSelectMenuBuilder } = require('discord.js');
const Discord = require("discord.js")

module.exports = {
    run: async (client, interaction) => {
        const title = interaction.fields.getTextInputValue('titlerechinput');
	    const desc = interaction.fields.getTextInputValue('descrechinput');
        var userIcon = interaction.user.displayAvatarURL();
        let embedrecherche = new Discord.EmbedBuilder()
            .setColor('#1962CB')
            .setAuthor({ name: `Recherche de @${interaction.user.username}#${interaction.user.discriminator}`, iconURL: userIcon})
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
            },
            )
            .setTimestamp()
            .setFooter({ text: `SerZios Corp 2023`});
        client.channels.cache.get(`1104517354299334736`).send({embeds: [embedrecherche]})
        interaction.reply({content: "Votre recherche a été envoyée", ephemeral: true })
        
    }
}