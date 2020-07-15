module.exports.run = async (bot, message, args) => {
  const Embed = {
	color: 0xe46c09,
	author: {
		name: 'Cipher',
		icon_url: 'https://cdn.discordapp.com/avatars/636440738825240596/3fcaaac7e92a9dab4f419d5d27c69d14.png?size=2048',
	},
	thumbnail: {
		url: 'https://cdn.discordapp.com/avatars/636440738825240596/3fcaaac7e92a9dab4f419d5d27c69d14.png?size=2048',
	},
  fields: [
    {
      name: 'About Cipher',
      value: 'Cipher is a simple utility-moderation bot using Node and the Discord.JS library. Cipher is made and hosted on [Glitch](https://glitch.com/).'
    },
    {
      name: '\u200b\nLinks:',
      value: '[Invite me to your server](https://discordapp.com/)\n[Join the Support server](https://discord.gg/YQDaNnH)\nGithub\nOur Website\nDonate',
      inline: 'true'
    },
    {
      name: '\u200b\nBot Details',
      value: 'Node v. 12.13.0',
      inline: 'true'
    }
  ],
  timestamp: new Date(),
	footer: {
		text: 'Made by Dervi#0001 | 1.0.0 Dev',
		icon_url: 'https://images-ext-1.discordapp.net/external/ntKazU8m8JZfF5lsIPwUgCtaHCCexCYn51cibThEwxs/%3Fsize%3D256%26f%3D.gif/https/cdn.discordapp.com/avatars/480090986232676364/a_2e6c53db12a1f1126cd9c28dc68675a1.gif?width=205&height=205',
	},
};
message.channel.send({ embed: Embed });
};

module.exports.help = {
  name: "about"
};