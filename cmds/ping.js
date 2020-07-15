module.exports.run = async (client, message, args, command) => {
  const m = await message.channel.send("Please Wait...");
  m.edit(`**Latency is \`${m.createdTimestamp - message.createdTimestamp}\`ms.\nAPI Latency is \`${Math.round(client.ping)}\`ms**`);
}

module.exports.help = {
  name: "ping",
}