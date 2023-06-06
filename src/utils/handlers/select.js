const { lstatSync, readdirSync } = require("node:fs");
module.exports = client => {
    readdirSync("./src/selects").forEach(category =>{
        readdirSync(`./src/selects/${category}`).filter(file => lstatSync(`./src/selects/${category}/${file}`).isFile() && file.endsWith(".js")).forEach(file => {
            const selectName = file.split(".")[0];
            const select = require(`../../selects/${category}/${file}`);
            client.selects.set(selectName, select);
        });
    });
};