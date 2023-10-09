import { REST, Routes } from 'discord.js';
import { environment } from '../config/environment';

const commands = [
    {
        name: 'download_mp3',
        description: 'Download YouTube video as MP3',
        options: [
            {
                name: 'url',
                type: 3,
                description: 'URL of the YouTube video',
                required: true,
            },
        ],
    },
    {
        name: 'ping',
        description: 'Replies with Pong!',
    }
];

const token = environment.discordBotToken; // Replace with your bot token

const rest = new REST({ version: '10' }).setToken(token as string);

(async () => {
    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(Routes.applicationGuildCommands((environment.discordClientId as string), (environment.discordGuildId as string)), {
            body: commands,
        });

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();
