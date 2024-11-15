const { MessageActionRow, MessageSelectMenu } = require('discord.js');

module.exports = {
	name: 'roles',
	aliases: [''],
	/**
	 *
	 * @param {Client} client
	 * @param {Message} message
	 * @param {String[]} args
	 */
	run: async (client, message) => {
		const row4 = new MessageActionRow().addComponents(
			new MessageSelectMenu()
				.setCustomId('miscSelect')
				.setPlaceholder('Select your misc roles')
				.setMinValues(0)
				.setMaxValues(2)
				.addOptions([
					{
						label: 'Events Ping',
						description: 'Get notified of events!',
						value: 'events',
					},
					{
						label: 'CourseWork Help Ping',
						description:
							'If you want to help out within our coursework-help channel',
						value: 'ACWPing',
					},
				])
		);

		message.channel.send({
			content: 'Select your Misc roles',
			components: [row4],
		});
	},
};
