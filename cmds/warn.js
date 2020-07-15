const Discord = require("discord.js");
const fs = require("fs");

exports.run = (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.reply("You don't have permission to do that!");
  let reason = args.slice(1).join(" ");
  let user = message.mentions.users.first();
  if (message.mentions.users.size < 1)
    return message.reply("You must mention someone to warn them.");
  if (reason.length < 1)
    return message.reply("You must have a reason for the warning.");

  message.delete();

  message.channel.send(`${user.tag} has been warned for ${reason}`);
  message.delete();

  let dmsEmbed = new Discord.RichEmbed()
    .setTitle("Warn")
    .setColor("#00ff00")
    .setDescription(`${user.tag} have been warned on \`${message.guild.name}\``)
    .addField("Warned by", message.author.tag)
    .addField("Reason", reason);

  let warnlog = message.guild.channels.find(`name`, "logs");
  if (!warnlog) return message.channel.send("Couldn't find `logs` channel.");

  warnlog.send(dmsEmbed);
  user.send(dmsEmbed);

  message.delete();

  message.channel.send(`${user.tag} has been warned for ${reason}`);
  message.delete();
};

exports.help = {
  name: "warn"
};
