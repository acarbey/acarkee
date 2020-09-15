let Discord = require("discord.js");
let client = new Discord.Client();
const reqEvent = (event) => require(`../acaretkinlikler/${event}`);
module.exports = client => {
  client.on('message', reqEvent('mesajeklentisi'));
};
