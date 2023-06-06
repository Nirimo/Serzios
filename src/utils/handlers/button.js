const { lstatSync, readdirSync } = require("node:fs");
module.exports = client => {
    readdirSync("./src/buttons").forEach(category =>{
        readdirSync(`./src/buttons/${category}`).filter(file => lstatSync(`./src/buttons/${category}/${file}`).isFile() && file.endsWith(".js")).forEach(file => {
            const buttonName = file.split(".")[0];
            const button = require(`../../buttons/${category}/${file}`);
            client.buttons.set(buttonName, button);
        });
    });
};