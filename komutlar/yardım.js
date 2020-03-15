const Discord = require('discord.js');
const db = require('quick.db');


exports.run = async(client, message, args) => {

  const embed = new Discord.RichEmbed()
           .setColor('RED')
          .setTimestamp()
  .setAuthor(`Hata!`)
.setFooter(`${client.user.username}`, client.user.avatarURL)
            .setDescription(`Bot siteden yönetilmektedir. \nBotta bir bug veya hata alırsanız bize bildirmekten çekinmeyin. \n\n[Botu Ekle](https://discordapp.com/oauth2/authorize?client_id=630273610438934534&scope=bot&permissions=2146958847) \n[Yönetim Paneli](https://gex.glitch.me/) \n[Destek Sunucusu](https://discord.gg/7EUt7gM)`)
  .addField('Bilgilendirme', 'Bildiğiniz üzere **Real Code** tekrardan açıldı buraya gelerek botunuzu şaha kaldıracak kodlara erişebilirsiniz. Sizleri seviyorum görüşmek dileğiyle.. \n[Buraya tıkla ve ışınlan](https://discord.gg/48Qe7uN)')
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