const { GatewayIntentBits, ActivityType } = require('discord.js');
module.exports = async (client, params) => {
    client.user.setActivity("SerZios Corp", { type: ActivityType.Watching});
    client.user.setStatus('dnd')
    setInterval(async () => {
        const activityList = [`${client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)} membres`, `SerZios Corp`]
        const activity = activityList[Math.floor(Math.random() * activityList.length)]
        client.user.setActivity(activity, { type: ActivityType.Watching})
    }, 20000)
    console.log(`Le bot regarde ${client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)} membres.`);
    client.application.commands.set(client.slashs);
    console.log("Bot Operationnel")
};