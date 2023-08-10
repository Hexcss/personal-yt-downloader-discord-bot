import * as dotenv from 'dotenv';

dotenv.config();

export const environment = {
  discordBotToken: process.env.DISCORD_BOT_TOKEN,
  discordClientId: process.env.DISCORD_CLIENT_ID,
  discordGuildId: process.env.DISCORD_GUILD_ID,
  youtubeApiEndpoint: process.env.YOUTUBE_API_ENDPOINT,
};
