const Discord = require("discord.js")
module.exports = {
    run: async (client, interaction) => {
        interaction.reply({
            content: `Vous avez ${client.chest[interaction.user.id]?.number ?? 0} ${client.chest[interaction.user.id]?.number === 1 ? "coin" : "coins"}`,
            ephemeral: true
          });
    }
}