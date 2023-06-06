const { ActionRowBuilder, ButtonBuilder, ButtonStyle, Permissions, ChannelType, PermissionFlagsBits, StringSelectMenuBuilder } = require('discord.js');
const Discord = require("discord.js")

module.exports = {
    run: async (client, interaction) => {
        const title = interaction.fields.getTextInputValue('titleinput');
	    const desc = interaction.fields.getTextInputValue('descinput');
        var userIcon = interaction.user.displayAvatarURL();
        let embedsuggestion = new Discord.EmbedBuilder()
            .setColor('#1962CB')
            .setAuthor({ name: `Suggestion de @${interaction.user.username}#${interaction.user.discriminator}`, iconURL: userIcon})
            .setThumbnail(userIcon)
            .addFields({
                name: `${title}`,
                value: `${desc}`
            })
            .setTimestamp()
            .setFooter({ text: `SerZios Corp 2023 |`});
        client.channels.cache.get(`1108784216696684666`).send({embeds: [embedsuggestion]}).then(msg => {
            msg.react("1110947773060227103")
            msg.react("1110947756647915580")
        interaction.reply({content: "Votre suggestion a été envoyée", ephemeral: true })
        })
    }
}