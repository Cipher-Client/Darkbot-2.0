module.exports.run = async (bot, message, args) => {
  const Embed = {
	color: 0xe46c09,
	author: {
		name: 'Cipher\'s bot commands',
		icon_url: 'https://cdn.discordapp.com/avatars/636440738825240596/3fcaaac7e92a9dab4f419d5d27c69d14.png?size=2048',
	},
	description: 'The text that\'s displayed below are some of the my useful commands.',
	thumbnail: {
		url: 'https://cdn.discordapp.com/avatars/636440738825240596/3fcaaac7e92a9dab4f419d5d27c69d14.png?size=2048',
	},
	fields: [
		{
			name: '\u200b\n**:clown: Fun Commands**',
			value: '`*8ball` - ask something and i\'ll answer the question\n`*coinflip` - Flip a coin\n`*rolldice` - I will roll a dice for you :game_die:\n`*say` - I will input your text when you use this command.\n`*crouton` - ***C R O U T O N***\n **Last but not the least, MEMES**\n`*meme` - Sends a random meme post from no where.',
		},
    {
      name: '\u200b\n**:hammer: Moderation Commands**',
      value: '`*purge` - Purges or deletes a message from the past.\n`*warn` - Warns the user when he/she hasdbeen a bad wumpus.\n`*mute` - Mutes the user for an amount of time or **forever**. RIP.\n`*kick` - Forces the user to abandon ship.\n`*ban` - Obliterates the user from this server and will never come back.',
    },
    {
      name: '\u200b\n**:pencil2: Information Commands**',
      value: '`*help` - Displays this help message.\n`*about` - Sends information about the bot owner, invite link for the bot and etc.\n`*ping` - Checks bot response rate.\n`*serverinfo` - Sends information about your server.'
    }
	],
	timestamp: new Date(),
	footer: {
		text: 'Cipher',
		icon_url: 'https://cdn.discordapp.com/avatars/636440738825240596/3fcaaac7e92a9dab4f419d5d27c69d14.png?size=2048'
	}
};
message.channel.send({ embed: Embed });
};

module.exports.help = {
  name: "help",
  aliases: "hell"
}
