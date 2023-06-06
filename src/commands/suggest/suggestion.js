const Discord = require("discord.js")
const { ActionRowBuilder, Events, ModalBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');
module.exports = {
    run: async (client, interaction ) => {
        const modalsuggest = new ModalBuilder()
			.setCustomId('modalsuggest')
			.setTitle('Suggestion');
		const titleInput = new TextInputBuilder()
			.setCustomId('titleinput')
			.setLabel("Quelle est le titre de votre suggestion ?")
			.setStyle(TextInputStyle.Short);
		const descInput = new TextInputBuilder()
			.setCustomId('descinput')
			.setLabel("Quelle est votre suggestion ?")
			.setStyle(TextInputStyle.Paragraph);
		const firstActionRow = new ActionRowBuilder().addComponents(titleInput);
		const secondActionRow = new ActionRowBuilder().addComponents(descInput);
		modalsuggest.addComponents(firstActionRow, secondActionRow);
		interaction.showModal(modalsuggest);
    },
    help: {
        description: "Faire une suggestion"
    }
}
