const Discord = require('discord.js');
const db = require('quick.db');


exports.run = async(client, message, args) => {

message.channel.send("Real Code")

}

exports.conf = {
enabled: true,
guildOnly: true,
permLevel: 0,
aliases: ['afkol', 'afk-ol'],
kategori: "kullanıcı"

}

exports.help = {
name: "afk",
description: "Sunucuda veya başka bir sunucuda afk olmanızı sağlar ve birisi sizi etiketleyince afk olduğunuzu sebebi ile belirtir.",
usage: "afk <sebep>"

}