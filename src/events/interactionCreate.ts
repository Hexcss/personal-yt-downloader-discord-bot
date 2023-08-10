import { Interaction } from "discord.js";
import { handleDownloadCommand } from "../commands/download";

export async function handleInteractionCreate(interaction: Interaction) {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;

  switch (commandName) {
    case "download":
      await handleDownloadCommand(interaction);
      break;
    // other case statements for other commands
  }
}
