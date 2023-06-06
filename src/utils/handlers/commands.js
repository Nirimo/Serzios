const { lstatSync, readdirSync } = require('node:fs');
const { ApplicationCommandType } = require('discord.js');

module.exports = async client => {
    readdirSync('./src/commands').forEach(category =>{
        readdirSync(`./src/commands/${category}`).filter(file => lstatSync(`./src/commands/${category}/${file}`).isFile() && file.endsWith('.js')).forEach(async file => {
            const command = require(`../../commands/${category}/${file}`);
            const commandName = file.split(".")[0];

            client.slashs.push({
                name: commandName,
                description: command.help.description,
                type: ApplicationCommandType.ChatInput,
                defaultMemberPermissions: command.help.memberPermissions || null,
                dmPermissions: command.help.dmPermission || false,
                options: command.help.options
            });

            await client.commands.set(commandName, { run: command.run, help: Object.assign(command.help, { name: commandName, category }) });
        });
    });
};