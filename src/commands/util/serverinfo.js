const Discord = require("discord.js");
const moment = require("moment");
const { Permissions, ChannelType } = require("discord.js");
module.exports = {
    run: async (client, interaction ) => {
        await interaction.deferReply();
        var serverIcon = interaction.guild.iconURL({ dynamic: true });
        let embedserverinfo = new Discord.EmbedBuilder()
                .setColor('#1962CB')
                .setAuthor({ name: `${interaction.guild.name}`, iconURL: serverIcon})
                .addFields({
                    name: 'General',
                    value: 
                    `
                    Nom: ${interaction.guild.name}
                    Propriétaire: <@${interaction.guild.ownerId}>
                    Date de création: ${moment(interaction.guild.createdAt).format("DD/MM/YYYY")} (<t:${parseInt(interaction.guild.createdTimestamp / 1000)}:R>)
                    Boost: ${interaction.guild.premiumSubscriptionCount ? interaction.guild.premiumSubscriptionCount : "❌"} (${interaction.guild.premiumTier ? "Level 0" : interaction.guild.premiumTier })
                    Langue: :flag_fr: Français
                    `,
                    inline: false,
                },{
                    name: `📚 Channels`,
                    value: 
                    `
                      ${interaction.guild.channels.cache.filter((c) => c.type === ChannelType.GuildText).size} Channels écrits
                      ${interaction.guild.channels.cache.filter((c) => c.type === ChannelType.GuildVoice).size} Channels Vocal
                      ${interaction.guild.channels.cache.filter((c) => c.type === ChannelType.GuildCategory).size} Catégories

                        ➜ ${interaction.guild.channels.cache.size} Total
                    `,
                    inline: false,
                },{
                    name: `👨‍👩‍👦‍👦 Membres`,
                    value: 
                    `
                    ${interaction.guild.members.cache.filter((p) => p.permissions.has(Discord.PermissionsBitField.Flags.Administrator) && !p.user.bot).size} Administrateur
                    ${interaction.guild.members.cache.filter((p) => !p.user.bot && !p.permissions.has(Discord.PermissionsBitField.Flags.Administrator)).size} Membres
                    ${interaction.guild.members.cache.filter((p) => p.user.bot).size} Bots

                        ➜ ${interaction.guild.members.cache.size} Total

                    Merci de nous avoir rejoins
                    `,
                    inline: false,
                })
                .setThumbnail(serverIcon)
                .setTimestamp()
                .setFooter({ text: "SerZios Corp 2023"});
        interaction.editReply({ embeds: [embedserverinfo]});

    },
    help: {
        description: "connaitre les informations du serveur"
    }

};