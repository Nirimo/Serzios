const Discord = require("discord.js")
module.exports = {
    run: async (client, interaction) => {
        interaction.channel.delete();
    }
}