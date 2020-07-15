module.exports.run = async (bot, message, args) => {
  message.channel.send("Yes, Ban Hammer is working! Here's a picture of a taco to celebrate.", { files: ["https://i.vgy.me/W0qdh0.png"] });
}
module.exports.help = {
  name: 'pin'
}