const Discord = require('discord.js');
const db = require('quick.db');


exports.run = async(client, message, args) => {

  const embed = new Discord.RichEmbed()
           .setColor('#7289DA')
          .setTimestamp()
  .setAuthor(`${client.user.username}`, client.user.avatarURL)
.setFooter(`2020 © ${client.user.username}`, client.user.avatarURL)
            .addField(`Dikkat!`, `Bot siteden yönetilmektedir. \nBotta bir bug veya hata alırsanız bize bildirmekten çekinmeyin. \n\n[Yönetim Paneli](https://denemneneee.glitch.me/) \n[]()`)
        message.channel.send({embed})

}

exports.conf = {
enabled: true,
guildOnly: true,
permLevel: 0,
aliases: ['help', 'y', 'yadrım'],
kategori: "kullanıcı"

}

exports.help = {
name: "yardım",
description: "Sunucuda veya başka bir sunucuda afk olmanızı sağlar ve birisi sizi etiketleyince afk olduğunuzu sebebi ile belirtir.",
usage: "afk <sebep>"

}