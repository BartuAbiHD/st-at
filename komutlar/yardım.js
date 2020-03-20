const Discord = require('discord.js');
const db = require('quick.db');


exports.run = async(client, message, args) => {

  const embed = new Discord.RichEmbed()
  .setColor('60d1f6')
  .setAuthor(`MEE6 Plugins Commands`, client.user.avatarURL)
  .addField('**Commands**', '`!help commands`')
  .addField('', '')
        message.channel.send({embed})

}

exports.conf = {
enabled: true,
guildOnly: true,
permLevel: 0,
aliases: ['help', 'y','h', 'yadrım'],
kategori: "Yardım"

}

exports.help = {
name: "yardım",
description: "Bot hakkında kısa bilgiyi gösterir.",
usage: "+yardım"

}