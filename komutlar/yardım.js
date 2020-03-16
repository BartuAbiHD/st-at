const Discord = require('discord.js');
const db = require('quick.db');


exports.run = async(client, message, args) => {

  const embed = new Discord.RichEmbed()
           .setColor('RED')
          .setTimestamp()
  .setAuthor(`Hata!`)
.setFooter(`${client.user.username}`, client.user.avatarURL)
            .setDescription(`YENİ BOTA GEÇTİK EKLEMEYİ UNUTMAYIN! \n**BU BOT YAKIN ZAMANDA KAPANACAKTIR!** \n\n[Botu Ekle](https://discordapp.com/oauth2/authorize?client_id=689171084867665989&scope=bot&permissions=2146958847) \n[Destek Sunucusu](https://discord.gg/7EUt7gM)`)
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