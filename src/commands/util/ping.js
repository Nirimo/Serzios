const Discord = require("discord.js")
module.exports = {
    run: async (client, interaction ) => {
        await interaction.deferReply();
        let embedping = new Discord.EmbedBuilder()
            .setColor('#1962CB')
            .setAuthor({ name: `⚙️ Latences du bot`})
            .setDescription(" ")
            .setTimestamp()
            .addFields(
                { name: ` Latences BOT`, value: `${Date.now() - interaction.createdTimestamp} ms`, inline: false },
                { name: ` Latences API`, value: `${Math.round(client.ws.ping)} ms`, inline: false },
            )
            .setFooter({ text: `SerZios Corp 2023`});
        interaction.editReply({ embeds: [embedping]})
    },
    help: {
        description: "Connaitre le ping du bot"
    }
}