import { ActionRowBuilder, EmbedBuilder } from "discord.js";

export type EmbedBuilderWithComponents = {
  embeds: EmbedBuilder[];
  components: ActionRowBuilder[];
}