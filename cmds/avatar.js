const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let msg = await message.channel.send("Generating your avatar......");

  if (!message.guild.iconURL) return msg.edit("No avatar found!");

  let avembed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setFooter(message.author.tag)
    .setImage(message.guild.iconURL)
    .setTitle("Your avatar")
    .setDescription("[Icon URL link](" + message.guild.iconURL + ")");

  message.channel.send(avembed);

  msg.delete();
};

module.exports.help = {
  name: "avatar",
  aliases: ["av"]
};
