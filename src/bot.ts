import { Client, GatewayIntentBits } from "discord.js";
import express from "express";
import { environment } from "./config/environment";
import { handleInteractionCreate } from "./events/interactionCreate";

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

const app = express();
const PORT = process.env.PORT || 3001;

app.get('/health', (req, res) => {
   res.status(200).send("OK");
});

app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
});

client.once("ready", () => {
  console.log("Bot is ready!");
});

client.on("interactionCreate", handleInteractionCreate);

client.login(environment.discordBotToken);
