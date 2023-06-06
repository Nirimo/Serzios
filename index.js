console.log("BOT en cours de lencement");
const { Client, Collection } = require('discord.js');
const config = require('./config');
const { readdirSync } = require("node:fs")
require("dotenv").config();
const client = new Client({intents: config.intents});
client.brouillon = {};
client.brouillon["type"] = {};
client.chest = {};
client.clic = {};
client.clic["clic"] = {};
client.total = {};
client.msg = {};
client.button = {};
client.embeds = {};
client.lastmember = {};
client.lastcoin = {};
['commands', 'buttons', 'selects', 'modals'].forEach(x => client[x] = new Collection());
client.slashs = [];
readdirSync("./src/utils/handlers").forEach(handler => require(`./src/utils/handlers/${handler}`)(client));


client.login(process.env.TOKEN)