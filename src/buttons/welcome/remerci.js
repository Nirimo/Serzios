const Discord = require("discord.js")
module.exports = {
    run: async (client, interaction) => {
        interaction.reply(`${interaction.user.username} lui souhaite la bienvenue !`)
    }
}