import * as dotenv from 'dotenv';

dotenv.config();

export const environment = {
  discordBotToken: process.env.DISCORD_BOT_TOKEN,
  youtubeApiEndpoint: process.env.YOUTUBE_API_ENDPOINT,
};
