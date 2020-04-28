const environment = process.env.NODE_ENV || "development";

if (environment === "development") {
  console.log("[DEV ENV] Using credentials from .env");
  require("dotenv").config();
}

const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.DISCORD_TOKEN);
