const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("548112441473761293")
setInterval(function() {
channel.send(`by [مجهول/nasto] GG`);
}, 30)
})

client.login(process.env.BOT_TOKEN);