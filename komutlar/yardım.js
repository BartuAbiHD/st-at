const Discord = require('discord.js');
const db = require('quick.db');


exports.run = async(client, message, args) => {

  const embed = new Discord.RichEmbed()
           .setColor('RED')
          .setTimestamp()
  .setAuthor(`Hata!`)
.setFooter(`${client.user.username}`, client.user.avatarURL)
            .setDescription(`Bot siteden yönetilmektedir. \nBotta bir bug veya hata alırsanız bize bildirmekten çekinmeyin. \n\n[Yönetim Paneli](https://denemneneee.glitch.me/) \n[Destek Sunucusu](https://discord.gg/dqnHfZ)`)
        message.channel.send({embed})

}

exports.conf = {
enabled: true,
guildOnly: true,
permLevel: 0,
aliases: ['help', 'y', 'yadrım'],
kategori: "Yardım"

}

exports.help = {
name: "yardım",
description: "Bot hakkında kısa bilgiyi gösterir.",
usage: "+yardım"

}