const { EmbedBuilder } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	...new SlashCommandBuilder()
		.setName('8ball')
		.setDescription('Answer your deepest questions')
		.addStringOption((option) =>
			option
				.setName('question')
				.setDescription('Your question')
				.setRequired(true)
		),

	/**
	 *
	 * @param {Client} client
	 * @param {CommandInteraction} interaction
	 * @param {String[]} args
	 */

	run: async (client, interaction) => {
		const questionToSend = interaction.options.getString('question');

		const Responses = ['Yes', 'No', 'Maybe', 'It is likely', 'It is unlikely'];

		const embed = new EmbedBuilder()
			.setColor(0x3fb618)
			.setFooter({ text: `Called By: ${interaction.user.tag}` })
			.setTimestamp()
			.setTitle('8ball')
			.addFields({
				name: `${questionToSend}`,
				value: `${Responses[Math.floor(Math.random() * Responses.length)]}`,
			});
		interaction.reply({ embeds: [embed] });
	},
};
