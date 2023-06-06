const { lstatSync, readdirSync } = require("node:fs");
module.exports = client => {
    readdirSync("./src/modals").forEach(category =>{
        readdirSync(`./src/modals/${category}`).filter(file => lstatSync(`./src/modals/${category}/${file}`).isFile() && file.endsWith(".js")).forEach(file => {
            const selectName = file.split(".")[0];
            const select = require(`../../modals/${category}/${file}`);
            client.modals.set(selectName, select);
        });
    });
};