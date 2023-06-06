const Discord = require("discord.js")
const { ActionRowBuilder, Events, ModalBuilder, TextInputBuilder, TextInputStyle, ApplicationCommandType, ApplicationCommandOptionType } = require('discord.js');
module.exports = {
    run: async (client, interaction ) => {
        const type = interaction.options.getString('type');
        client.brouillon["type"][interaction.member.id] = type;
        const modalrecherche = new ModalBuilder()
			.setCustomId('modalrecherce')
			.setTitle('RECHERCHE');
		const titleVenteInput = new TextInputBuilder()
			.setCustomId('titlerechinput')
			.setLabel("Titre")
            .setPlaceholder("Titre de votre recherche")
            .setRequired(true)
			.setStyle(TextInputStyle.Short);
		const descVenteInput = new TextInputBuilder()
			.setCustomId('descrechinput')
			.setLabel("Description")
            .setRequired(true)
            .setPlaceholder("Description de votre recherche")
			.setStyle(TextInputStyle.Paragraph);
		const firstActionRow = new ActionRowBuilder().addComponents(titleVenteInput);
		const secondActionRow = new ActionRowBuilder().addComponents(descVenteInput);
		modalrecherche.addComponents(firstActionRow, secondActionRow);
		interaction.showModal(modalrecherche);
    },
    help: {
        description: "Faire une recherche",
        options: [
            {
                name: "type",
                description: "Le type de votre recherche",
                type: ApplicationCommandOptionType.String,
                required: true,
                choices: [{
                    name: "remuneree",
                    value: "remuneree",
                    description: "Recherhce rémunérée"
                },{
                    name: "benevole",
                    value: "benevole",
                    description: "Recherche bénévole"
                }]
                
            }
        ],
    }
}
