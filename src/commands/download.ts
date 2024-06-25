import { CommandInteraction, EmbedBuilder } from "discord.js";
import axios from "axios";
import { environment } from "../config/environment";
import { createDownloadEmbed } from '../utils/embedBuilder';

export async function handleDownloadCommand(interaction: CommandInteraction) {
  const url = (interaction.options as any).getString("url");

  await interaction.deferReply();

  try {

    console.log("Requesting download for:", url);

    const response = await axios.post((environment.youtubeApiEndpoint as string) + "/ytdl/convertmp3", { url: url });

    console.log("Response Status:", response.status);

    if (typeof response.data === "string") {
      const { embeds, components }= createDownloadEmbed(response.data);
      await interaction.editReply({ embeds, components } as { embeds: EmbedBuilder[]});
    } else {
      console.error("Unexpected response format:", response.data);
      await interaction.editReply("There was an error processing your request. Unexpected response format.");
    }
  } catch (error: any) {
    console.error("Error:", error.message);
    console.error(error)
    if (error.response) {
      console.error("Response Status:", error.response.status);
      console.error("Response Data:", error.response.data);
      if (error.response.status === 400) {
          await interaction.editReply("The video took too long to convert.");
      } else {
          await interaction.editReply("There was an error processing your request.");
      }
    } else {
      await interaction.editReply("There was an error processing your request.");
    }
  }
}

