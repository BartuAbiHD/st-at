const Discord = require("discord.js"),
  db = require("quick.db"),
  ayarlar = require("../config.json");

exports.run = async (client, message, args) => {
  try {
        const embed = new Discord.RichEmbed()
        .setTitle("İşte! Komutlar;")
      .setColor("GREEN")
      .setDescription(
        `NOT: Eğer botu sizde sunucularınıza eklerseniz; botun sürdürülebilirliğini arttırırsınız :) Eklemek İçin: [Tıkla!](https://discordapp.com/oauth2/authorize?client_id=680660953645580299&scope=bot&permissions=8)`
      ).addField(`🔥 !kur 🔥`, `💡 Bu komut sayesinde panelinizi kurabilirsiniz! İsterseniz adlarını D`)
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
  aliases: ["dashboard", "website"],
  permLevel: 0
};

exports.help = {
  name: "webpanel",
  description: "webpanel",
  usage: "webpanel"
};
