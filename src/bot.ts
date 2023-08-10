import { Client, GatewayIntentBits } from 'discord.js';
import axios from 'axios';
import { environment } from './config/environment';

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

const token = environment.discordBotToken; // Replace with your bot token

client.once('ready', () => {
    console.log('Bot is ready!');
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (commandName === 'download') {
      const url = (interaction.options as any).getString('url');

        // Send a request to your API
        try {
            const response = await axios.post((environment.youtubeApiEndpoint as string), { url: url });
            const downloadLink = response.data; // Assuming your API returns a direct link

            await interaction.reply(`Here's your download link: ${downloadLink}`);
        } catch (error) {
            await interaction.reply('There was an error processing your request.');
        }
    }
});

client.login(token as string);
