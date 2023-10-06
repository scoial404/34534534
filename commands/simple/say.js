const { SlashCommandBuilder } = require("@discordjs/builders");
const data = new SlashCommandBuilder()
  .setName("say")
  .setDescription("say cmd :3")
  .addStringOption(option =>
    option
      .setName("text")
      .setDescription("write something =3")
      .setRequired(true)
  );

module.exports = {
  global: false,
  data: data,
  async execute(client, interaction) {
    let msg = interaction.options._hoistedOptions[0].value;
    await interaction.reply({ content: msg, ephemeral: true });
  }
};
