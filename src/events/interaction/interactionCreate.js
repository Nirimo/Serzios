const { InteractionType } = require('discord.js');
module.exports = async (client, interaction) => {
    if(interaction.type === InteractionType.ApplicationCommand){
        const command = client.commands.get(interaction.commandName);
        if(!command) return interaction.reply({ content: "Cette commande n'existe pas"});
        command.run(client, interaction);
    } else if (interaction.isButton()){
        const btn = client.buttons.get(interaction.customId);
        btn.run(client, interaction)
    } else if (interaction.isStringSelectMenu()){
        const select = client.selects.get(interaction.customId);
        select.run(client, interaction);
    } else if (interaction.type === InteractionType.ModalSubmit){
        const modal = client.modals.get(interaction.customId);
        modal.run(client, interaction);
    }
}