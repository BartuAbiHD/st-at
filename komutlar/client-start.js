const Discord = require('discord.js');
const db = require('quick.db');


exports.run = async(client, message, args) => {

  const embed = new Discord.RichEmbed()
           .setColor('GREEN')
          .setTimestamp()
  .setAuthor(`Successful!`)
.setFooter(`${client.user.username}`, client.user.avatarURL)
            .setDescription(`**Web Dashboard** was successfully run! Anyone can log in now. \nEnforcement code: B0093`)
        message.channel.send({embed})

}

exports.conf = {
enabled: true,
guildOnly: true,
permLevel: 0,
aliases: [],
kategori: "Yardım"

}

exports.help = {
name: "client-start",
description: "Bot hakkında kısa bilgiyi gösterir.",
usage: "+yardım"

}