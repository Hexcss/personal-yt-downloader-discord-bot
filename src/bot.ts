import { Client, GatewayIntentBits } from "discord.js";
import { environment } from "./config/environment";
import { handleInteractionCreate } from "./events/interactionCreate";

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once("ready", () => {
  console.log("Bot is ready!");
});

client.on("interactionCreate", handleInteractionCreate);

client.login(environment.discordBotToken);
