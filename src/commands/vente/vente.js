const Discord = require("discord.js")
const { ActionRowBuilder, Events, ModalBuilder, TextInputBuilder, TextInputStyle, ApplicationCommandType, ApplicationCommandOptionType } = require('discord.js');
module.exports = {
    run: async (client, interaction ) => {
        const type = interaction.options.getString('type');
        client.brouillon["type"][interaction.member.id] = type;
        const modalvente = new ModalBuilder()
			.setCustomId('modalvente')
			.setTitle('VENTE');
		const titleVenteInput = new TextInputBuilder()
			.setCustomId('titleventeinput')
			.setLabel("Titre")
            .setPlaceholder("Titre de votre annonce")
            .setRequired(true)
			.setStyle(TextInputStyle.Short);
		const descVenteInput = new TextInputBuilder()
			.setCustomId('descventeinput')
			.setLabel("Description")
            .setRequired(true)
            .setPlaceholder("Description de votre annonce")
			.setStyle(TextInputStyle.Paragraph);
        const priceVenteInput = new TextInputBuilder()
			.setCustomId('priceventeinput')
			.setLabel("Prix")
            .setRequired(true)
            .setPlaceholder("Prix de votre annonce")
			.setStyle(TextInputStyle.Short);
		const firstActionRow = new ActionRowBuilder().addComponents(titleVenteInput);
		const secondActionRow = new ActionRowBuilder().addComponents(descVenteInput);
        const thirdActionRow = new ActionRowBuilder().addComponents(priceVenteInput);
		modalvente.addComponents(firstActionRow, secondActionRow, thirdActionRow);
		interaction.showModal(modalvente);
    },
    help: {
        description: "Faire une vente",
        options: [
            {
                name: "type",
                description: "Le type de votre annonce",
                type: ApplicationCommandOptionType.String,
                required: true,
                choices: [{
                    name: "service",
                    value: "service",
                    description: "Proposer un service"
                },{
                    name: "creation",
                    value: "creation",
                    description: "Proposer une création"
                }]
                
            }
        ],
    }
}
