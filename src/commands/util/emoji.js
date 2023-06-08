
const Discord = require("discord.js")
module.exports = {
    run: async (client, interaction ) => {
        // let embedemojilist = new Discord.EmbedBuilder()
        //     .setColor('#79EB67')
        //     .setAuthor({ name: `🎞️ Liste des émojis`})
        //     .setDescription(" ")
        //     .setTimestamp()
        //     .setFooter({ text: `${interaction.guildId}`});
        // const emojiList = interaction.guild.emojis.cache.forEach((e, x) =>{
        //     embedemojilist.addFields({ name: `      ${e}`, value: `**Nom:**\n ${e.name}\n**ID:**\n||${x}||`, inline: true },)
        // })
        interaction.reply({ content: "Commande en réparation"})
            },
            help: {
                description: "Connaitre le ping du bot"
            }
        }