const Discord = require("discord.js"),
  db = require("quick.db"),
  ayarlar = require("../config.json");

exports.run = async (client, message, args) => {
  try {
        const embed = new Discord.RichEmbed()
        .setTitle("İşte! Webpanel;")
      .setColor("GREEN")
      .setDescription(
        `Hemen [tıklayarak](https://anka-stat-panel.glitch.me/) webpanele ücretsiz bir şekilde ulaşabilirsiniz! [Tıkla!](https://anka-stat-panel.glitch.me/)`
      );
    message.channel.send(embed);
    return;  
  } catch (err) {
    const embed = new Discord.RichEmbed()
      .setColor("RED")
      .setDescription(
        `Sanırım bir sorun var! Lütfen bunu destek sunucumuza gelip bildir! [Destek Sunucumuz](${ayarlar.sunucu})`
      );
    message.channel.send(embed);
    return;
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["dashboard", "website"]
};

exports.help = {
  name: "webpanel",
  description: "webpanel",
  usage: "webpanel"
};
