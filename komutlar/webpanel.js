const Discord = require("discord.js"),
  db = require("quick.db"),
  ayarlar = require("../config.json");

exports.run = async (client, message, args) => {
  try {
        const embed = new Discord.RichEmbed()
        .setTitle("İşte! Webpanel;")
      .setColor("GREEN")
      .setDescription(
        `Hemen [tıklayarak]() webpanele ücretsiz bir şekilde ulaşabilirsiniz! [Tıkla!]()`
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
  aliases: ["panel-sil", "sıfırla"],
  permLevel: 3
};

exports.help = {
  name: "panel-sıfırla",
  description: "panel-sıfırla",
  usage: "panel-sıfırla"
};
