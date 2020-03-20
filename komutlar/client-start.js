const Discord = require('discord.js');
const db = require('quick.db');


exports.run = async(client, message, args) => {

        message.channel.send(`**MEE6 Web Dashboard** was successfully run! Anyone can log in now. \nEnforcement code: B0093`)
  console.log('refresh')

}

exports.conf = {
enabled: true,
guildOnly: true,
permLevel: 0,
aliases: [],

}

exports.help = {
name: "client-start",
description: "Bot hakkında kısa bilgiyi gösterir.",
usage: "+yardım"

}