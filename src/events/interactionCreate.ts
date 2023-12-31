import { Interaction } from "discord.js";
import { handleDownloadCommand } from "../commands/download";

export async function handleInteractionCreate(interaction: Interaction) {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;

  switch (commandName) {
    case "download_mp3":
      await handleDownloadCommand(interaction);
      break;
    case "ping":
      await interaction.reply("Pong!");
      break;
    // other case statements for other commands
  }
}
