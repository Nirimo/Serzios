const { ActionRowBuilder, ButtonBuilder, ButtonStyle, Permissions, ChannelType, PermissionFlagsBits, StringSelectMenuBuilder, GatewayIntentBits, ActivityType } = require('discord.js');
module.exports = async (client, oldState, newState) => {
    if(!oldState.channel && newState.channelId == "1104515972485877841"){
        console.log(`Demande de création d'un vocal de ${newState.member.user.username}#${newState.member.user.discriminator}`)
        oldState.guild.channels.create({
            name: `Vocal de ${newState.member.user.username}`,
            type: ChannelType.GuildVoice,
            parent: "1104515117237932114",
        }).then(chan => {
            newState.member.voice.setChannel(chan)
        });
    } else if(!newState.channel) {
        if(oldState.channel.name.includes("Vocal de") && oldState.channel.members.size === 0) {
            oldState.channel.delete()
        }
    }
};