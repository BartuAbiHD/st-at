const fs = require('fs');
const Discord = require('discord.js');
const db = require('quick.db');
const chalk = require('chalk')
//r izin = db.fetch(`calisimmi_${message.channel.id}`)
  
module.exports = async message => {
  const db = require("quick.db")

  let client = message.client;
  
  const ayarlar = client.ayarlar
  
  //if (!client.users.get(client.user.id).hasPermission("SEND_MESSAGES")) return message.reply(`Yeterli izinlere sahip değilim! \n**İhtiyacım Olan Yetki:** \n\`Mesaj Gönder\``)
  
  if (!message.guild) return;
 //var izinS = db.fetch(`os_${message.channel.id}_os`)
  //var izin = db.fetch(`calisimmi_${message.channel.id}`)
  
    
 
let prefix;
  
if (db.has(`prefix_${message.guild.id}`) === true) {
  prefix = db.fetch(`prefix_${message.guild.id}`)
}
  
if (db.has(`prefix_${message.guild.id}`) === false) {
  prefix = client.ayarlar.prefix
}
  
  var args = message.content.split(' ').slice(1)
  
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(' ')[0].slice(prefix.length);
  
  /*if (client.commands.has(command) === false) {
      const embed = new Discord.RichEmbed()
					.setDescription(`Bu komut Bot Sahibi tarafından devre dışı bırakılmış!`)
					.setColor("RANDOM")
				message.channel.send({embed})
    }*/
  //let params = message.content.split(' ').slice(1);

//  let perms = client.elevation(message);

  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
   } else if (client.english.has(command)) {
    cmd = client.english.get(command);
    }
  
  var dill = 'tr'
	if(db.has(`dil_${message.guild.id}`) === true) {
		var dill = "en"
	}
	const dil = client[dill]
  
  
  
  db.add(`sunucuxp_${message.guild.id}`, 1)
  
  var y = db.fetch(`sunucuxp_${message.guild.id}`);
  
  if (y === 50) {
    db.set(`premium_${message.guild.id}`, "aktif")
    let e = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`Tebrikler ${message.guild.name}!`)
    .setDescription(`Sunucu Puanı başarıyla **${y}** puana ulaştı! Premium mod aktif edildi!`)
    message.channel.send(e)
    message.guild.owner.send(e)
  }
 /* const embed22 = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setDescription(`**${message.guild.name}** Adlı sunucuda **${message.author.tag}** adlı kullanıcı **${cmd.help.name}** komutunu kullandı.`)
 client.guilds.get('613657570653110283').channels.get('614475160170397720').send(embed22)*/
  if (cmd) {
    

   
    

    cmd.run(client, message, args, dil, dill);
    
  }
  
};
