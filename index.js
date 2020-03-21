/*
const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping tamamdır.");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000)*/

if (process.version.slice(1).split(".")[0] < 8) throw new Error("Node 8.0.0 or higher is required. Update Node on your system.");

const Discord = require('discord.js');
const client = new Discord.Client();
const bot = new Discord.Client();
const {RichEmbed} = require('discord.js');
const { promisify } = require("util");
const readdir = promisify(require("fs").readdir);
const chalk = require('chalk');
const fs = require('fs');
const { stripIndents } = require('common-tags');
const moment = require('moment');


const db = require('quick.db');
const jimp = require('jimp');
const Jimp = require('jimp')
const snekfetch = require('snekfetch');


let komutum = JSON.parse(fs.readFileSync("./komutlar.json", "utf8"));

client.cmdd = komutum



require("./modüller/fonksiyonlar.js")(client);
require('./util/eventLoader')(client);
client.config = require("./config.js");


client.ayarlar = {
        "oynuyor": "MEE6",
        "official_sahip": "689169122604744833",
        "sahip": ['689169122604744833'],
        "isim": "MEE6",
        "webpanel": "https://mee6gg.glitch.me/",
        "versiyon": "1.0.0",
        "prefix": "mee6admin!",
        "renk":  "#60d1f6",
        "version":  "1.0.0",
 };
client.avatarURL = `https://cdn.discordapp.com/attachments/688803433947594796/690573120117014538/mee6.png`
const ayarlar = client.ayarlar;



//var prefix = ayarlar.prefix;

const log = message => {
  console.log(`${chalk.yellow(`»`)} ${message}`);
};

client.on('message', message => {
if (message.content === `<@${client.user.id}>`) {
 const mee6help = new Discord.RichEmbed()
  .setColor('#60d1f6')
  .setAuthor(`MEE6 Plugins Commands`, client.user.avatarURL)
  .addField('**Commands**', '`!help commands`', true)
  .addField('**Levels**', '`!help levels`', true)
 .setThumbnail('https://cdn.discordapp.com/attachments/688803433947594796/690582370092449932/mee6_kare.png')
        message.channel.send(mee6help)
}
});



                         
 
  client.ayar = db;
   







//////////////////////////////////////////////////////////////////////////////////////////
client.on("ready", async () => {
  
  client.appInfo = await client.fetchApplication();
  setInterval( async () => {
    client.appInfo = await client.fetchApplication();
  }, 60000);
  
  require("./modüller/panel.js")(client); 
  
  console.log(`» ${chalk.green(client.user.username)}${chalk.red(",")} ${chalk.blue(client.guilds.size)} ${chalk.yellow("Sunucu'ya")} ${chalk.red("ve")} ${chalk.blue(client.users.size.toLocaleString())} ${chalk.yellow("Kullanıcı'ya")} ${chalk.red("hizmet veriyor.")}`)
  client.user.setStatus("online");
 // client.user.setActivity(client.ayarlar.oynuyor, { type: 'WATCHING' });
  
})
  //////////////////////////////////////////////////////////////////////////////////////////
  
  





//////////////////////////////////////////////////////////////////////////////////////////
const invites = {};


const wait = require('util').promisify(setTimeout);

client.on('ready', () => {

  wait(1000);


  client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});

client.on('guildMemberAdd', member => {
  try{
  if (db.has(`dKanal_${member.guild.id}`) === true) {
  member.guild.fetchInvites().then(guildInvites => {
   if (member.user.bot) return
    const ei = invites[member.guild.id];
    
    invites[member.guild.id] = guildInvites;
   
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    
    const inviter = client.users.get(invite.inviter.id);
   
    const kanal = member.guild.channels.get(db.fetch(`dKanal_${member.guild.id}`));
 
    kanal.send(`\`${member.user.tag}\` adlı kullanıcı \`${inviter.tag}\` adlı kullanıcının **${invite.code}** linkine sahip daveti ile sunucuya katıldı!`);
  

   
  });
  } else {
    return
  }
  } catch(err) {
    return
  }
});
//////////////////////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////////////////////
client.on('guildCreate', async guild => {
   var konum = ''
        if(guild.region === "russia") {
            var konum = '_Rusya_ :flag_ru:'
        }
        if(guild.region === "us-west") {
            var konum = '_Batı Amerika_ :flag_us: '
        }
        if(guild.region === "us-south") {
            var konum = '_Güney Amerika_ :flag_us: '
        }
        if(guild.region === "us-east") {
            var konum = '_Doğu Amerika_ :flag_us: '
        }
        if(guild.region === "us-central") {
            var konum = '_Amerika_ :flag_us: '
        }
        if(guild.region === "brazil") {
            var konum = '_Brezilya_ :flag_br:'
        }
        if(guild.region === "singapore") {
            var konum = '_Singapur_ :flag_sg:'
        }
        if(guild.region === "sydney") {
            var konum = '_Sidney_ :flag_sh:'
        }
        if(guild.region === "eu-west") {
            var konum = '_Batı Avrupa_ :flag_eu:'
        }
        if(guild.region === "eu-south") {
            var konum = '_Güney Avrupa_ :flag_eu:'
        }
        if(guild.region === "eu-east") {
            var konum = '_Doğu Avrupa_ :flag_eu:'
        }
        if(guild.region === "eu-central") {
            var konum = '_Avrupa_ :flag_eu:'
        }
        if(guild.region === "hongkong") {
            var konum = '_Hong Kong_ :flag_hk: '
        }
        if(guild.region === "japan") {
            var konum = '_Japonya_ :flag_jp:'
        }
        var tarih = ''
        if(moment(guild.createdAt).format('MM') === '01') {
            var tarih = `${moment(guild.createdAt).format('DD')} Ocak ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '02') {
            var tarih = `${moment(guild.createdAt).format('DD')} Şubat ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '03') {
            var tarih = `${moment(guild.createdAt).format('DD')} Mart ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '04') {
            var tarih = `${moment(guild.createdAt).format('DD')} Nisan ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '05') {
            var tarih = `${moment(guild.createdAt).format('DD')} Mayıs ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '06') {
            var tarih = `${moment(guild.createdAt).format('DD')} Haziran ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '07') {
            var tarih = `${moment(guild.createdAt).format('DD')} Temmuz ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '08') {
            var tarih = `${moment(guild.createdAt).format('DD')} Ağustos ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '09') {
            var tarih = `${moment(guild.createdAt).format('DD')} Eylül ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '10') {
            var tarih = `${moment(guild.createdAt).format('DD')} Ekim ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '11') {
            var tarih = `${moment(guild.createdAt).format('DD')} Kasım ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '12') {
            var tarih = `${moment(guild.createdAt).format('DD')} Aralık ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
  
       
        var guildhook = new Discord.WebhookClient("688687499429806110", "oZMhtds2MBc25_4AiG0tyqu3PCAkngKO_h0ex30UAPuNRGoYaVaNbrmx9z4zwOG6eV6m")
        //https://discordapp.com/api/webhooks/688687499429806110/oZMhtds2MBc25_4AiG0tyqu3PCAkngKO_h0ex30UAPuNRGoYaVaNbrmx9z4zwOG6eV6m
        
        const server = new RichEmbed()
  .setColor('GREEN')
  .setThumbnail(guild.iconURL || guild.defaultİconURL)
  .setTitle(`${guild.name} Adlı Sunucuya Eklendim!`, guild.iconURL || guild.defaultİconURL)
  .setDescription(`Toplam **${client.guilds.size}** sunucudayım!`)
  .addField(`» Sunucu Bilgileri:`, stripIndents`
   Sunucu Adı: _${guild.name}_
   Sunucu Kimliği/ID: _${guild.id}_
   Sunucunun Kurulduğu Tarih: _${tarih}_
   Sunucunun Konumu: ${konum}
   Sunucu Sahibi: _${guild.owner.user.username}#${guild.owner.user.discriminator}_
   Sunucu Sahibi Kimliği/ID: _${guild.owner.user.id}_
   Sunucudaki Toplam Kullanıcı Sayısı: _${guild.members.size}_
   Sunucudaki İnsan Sayısı: _${guild.members.filter(m => !m.user.bot).size}_
   Sunucudaki Bot Sayısı: _${guild.members.filter(m => m.user.bot).size}_
  `)
  .setFooter(`${client.user.username} | Sunucu İzleyici`, client.user.avatarURL)
  guildhook.send(server);
})

client.on("guildDelete", async guild => {
  var konum = ''
        if(guild.region === "russia") {
            var konum = '_Rusya_ :flag_ru:'
        }
        if(guild.region === "us-west") {
            var konum = '_Batı Amerika_ :flag_us: '
        }
        if(guild.region === "us-south") {
            var konum = '_Güney Amerika_ :flag_us: '
        }
        if(guild.region === "us-east") {
            var konum = '_Doğu Amerika_ :flag_us: '
        }
        if(guild.region === "us-central") {
            var konum = '_Amerika_ :flag_us: '
        }
        if(guild.region === "brazil") {
            var konum = '_Brezilya_ :flag_br:'
        }
        if(guild.region === "singapore") {
            var konum = '_Singapur_ :flag_sg:'
        }
        if(guild.region === "sydney") {
            var konum = '_Sidney_ :flag_sh:'
        }
        if(guild.region === "eu-west") {
            var konum = '_Batı Avrupa_ :flag_eu:'
        }
        if(guild.region === "eu-south") {
            var konum = '_Güney Avrupa_ :flag_eu:'
        }
        if(guild.region === "eu-east") {
            var konum = '_Doğu Avrupa_ :flag_eu:'
        }
        if(guild.region === "eu-central") {
            var konum = '_Avrupa_ :flag_eu:'
        }
        if(guild.region === "hongkong") {
            var konum = '_Hong Kong_ :flag_hk: '
        }
        if(guild.region === "japan") {
            var konum = '_Japonya_ :flag_jp:'
        }
        var tarih = ''
        if(moment(guild.createdAt).format('MM') === '01') {
            var tarih = `${moment(guild.createdAt).format('DD')} Ocak ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '02') {
            var tarih = `${moment(guild.createdAt).format('DD')} Şubat ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '03') {
            var tarih = `${moment(guild.createdAt).format('DD')} Mart ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '04') {
            var tarih = `${moment(guild.createdAt).format('DD')} Nisan ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '05') {
            var tarih = `${moment(guild.createdAt).format('DD')} Mayıs ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '06') {
            var tarih = `${moment(guild.createdAt).format('DD')} Haziran ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '07') {
            var tarih = `${moment(guild.createdAt).format('DD')} Temmuz ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '08') {
            var tarih = `${moment(guild.createdAt).format('DD')} Ağustos ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '09') {
            var tarih = `${moment(guild.createdAt).format('DD')} Eylül ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '10') {
            var tarih = `${moment(guild.createdAt).format('DD')} Ekim ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '11') {
            var tarih = `${moment(guild.createdAt).format('DD')} Kasım ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(guild.createdAt).format('MM') === '12') {
            var tarih = `${moment(guild.createdAt).format('DD')} Aralık ${moment(guild.createdAt).format('YYYY HH:mm:ss')} `
        }
  
        

        var guildhook = new Discord.WebhookClient("688687499429806110", "oZMhtds2MBc25_4AiG0tyqu3PCAkngKO_h0ex30UAPuNRGoYaVaNbrmx9z4zwOG6eV6m")
        //https://discordapp.com/api/webhooks/688687499429806110/oZMhtds2MBc25_4AiG0tyqu3PCAkngKO_h0ex30UAPuNRGoYaVaNbrmx9z4zwOG6eV6m
           const server = new RichEmbed()
  .setColor('RED')
  .setThumbnail(guild.iconURL || guild.defaultİconURL)
  .setTitle(`${guild.name} Adlı Sunucudan Atıldım!`, guild.iconURL || guild.defaultİconURL)
  .setDescription(`Toplam **${client.guilds.size}** sunucudayım!`)
  .addField(`» Sunucu Bilgileri:`, stripIndents`
   Sunucu Adı: _${guild.name}_
   Sunucu Kimliği/ID: _${guild.id}_
   Sunucunun Kurulduğu Tarih: _${tarih}_
   Sunucunun Konumu: ${konum}
   Sunucu Sahibi: _${guild.owner.user.username}#${guild.owner.user.discriminator}_
   Sunucu Sahibi Kimliği/ID: _${guild.owner.user.id}_
   Sunucudaki Toplam Kullanıcı Sayısı: _${guild.members.size}_
   Sunucudaki İnsan Sayısı: _${guild.members.filter(m => !m.user.bot).size}_
   Sunucudaki Bot Sayısı: _${guild.members.filter(m => m.user.bot).size}_
  `)
  .setFooter(`${client.user.username} | Sunucu İzleyici`, client.user.avatarURL)
  guildhook.send(server);
})
  //////////////////////////////////////////////////////////////////////////////////////////
  
  
  
  
 

  //////////////////////////////////////////////////////////////////////////////////////////
  client.on("message", async msg => {
  const prefix = await db.fetch(`prefix_${msg.guild.id}`) || client.ayarlar.prefix;
  //const args = msg.content.slice.split(' ');
  const args = msg.content.trim().split(/ +/g);
  const fAK = await  db.fetch(`filtreAK_${msg.guild.id}`);
  let mesaj = args.slice(1).join(' ');
  const filtre = await db.fetch(`filtre_${msg.guild.id}`);
  
 
  if(fAK == 'açık') {
    
    
    
            
      const fltr = filtre
   if (fltr.some(word => msg.content.includes(word))) {
  if (!msg.member.hasPermission("ADMINISTRATOR")) {
    msg.delete()
     
   var k = new Discord.RichEmbed()
        .setColor("BLACK")
        .setAuthor("Filtre Sistemi")
        .setDescription(`Bu sunucuda yasaklanmış bir kelimeyi kullandınız, bu yüzden mesajınızı sildim.`)
        msg.channel.send(k).then(message => message.delete(5000));
     
  return;
  }
  } }
    
  
  
   if (!msg.guild) return;

  if (msg.author.bot) return;
  
 
  if (db.has(`capsE_${msg.guild.id}`) === true) {
    let x = /\w*[A-Z]\w*[A-Z]\w*/g;
    if (msg.content.match(x)) {
      if (mesaj.member.permissions.has("ADMINISTRATOR") === true) return;
      msg.delete();
      let y = await msg.reply(`Bu sunucuda büyük harf engeli açık, bu yüzden büyük harf açıkken yazı yazamazsın!`)
      y.delete(5000);
      return
    };
  };

  
  if (!msg.guild) return;
 
    if (db.has(`küfürE_${msg.guild.id}`) === true) {
    const kufur = new RegExp(/(göt|amk|aq|orospu|oruspu|oç|oc|sik|fuck|yarrak|piç|amq|amcık|çocu|sex|seks|amına|sg|siktir git)/)
  if (kufur.test(msg.content)==true) {
    if (!msg.member.hasPermission("ADMINISTRATOR")) {
      msg.delete()
       msg.channel.send(`<@${msg.author.id}>`).then(message => message.delete(5000));
        var k = new Discord.RichEmbed()
        .setColor("BLACK")
        .setAuthor("Küfür Engeli!")
        .setDescription(`Bu sunucuda küfürler **${client.user.username}** tarafından engellenmektedir! Küfür etmene izin vermeyeceğim!`)
        msg.channel.send(k).then(message => message.delete(5000));
    }
}
    }

     
      if (db.has(`linkE_${msg.guild.id}`) === true) {
        const reklam = new RegExp(/(com|.com|www|dicord.gg|.tk|.pw|https:|http:|.info|.cf|gg|.net|.me|www.|WWW.|.COM|.NET|.TK|DİSCORD.GG|.PW)/)
      if (reklam.test(msg.content)==true) {
        if (!msg.member.hasPermission("ADMINISTRATOR")) {
          msg.delete()
           msg.channel.send(`<@${msg.author.id}>`).then(message => message.delete(5000));
            var ke = new Discord.RichEmbed()
        .setColor("BLACK")
            .setAuthor("link Engeli!")
            .setDescription(`Bu sunucuda linkler **${client.user.username}** tarafından engellenmektedir! Reklam yapmana izin vermeyeceğim!`)
            msg.channel.send(ke).then(message => message.delete(5000));
        }
    }
        }





})


client.on("messageUpdate", async (msg) => {
  
  const prefix = await db.fetch(`prefix_${msg.guild.id}`) || client.ayarlar.prefix;
  //const args = msg.content.slice.split(' ');
  const args = msg.content.trim().split(/ +/g);
  const fAK = await  db.fetch(`filtreAK_${msg.guild.id}`);
  let mesaj = args.slice(1).join(' ');
  const filtre = await db.fetch(`filtre_${msg.guild.id}`);
  
  
  if(fAK == 'açık') {
    
    
    
            
      const fltr = filtre
   if (fltr.some(word => msg.content.includes(word))) {
  if (!msg.member.hasPermission("ADMINISTRATOR")) {
    msg.delete()
     
   var k = new Discord.RichEmbed()
        .setColor("BLACK")
        .setAuthor("Filtre Sistemi")
        .setDescription(`Bu sunucuda yasaklanmış bir kelimeyi kullandınız, bu yüzden mesajınızı sildim.`)
        msg.channel.send(k).then(message => message.delete(5000));
     
  return;
  }
  } }
    
  
  
   if (!msg.guild) return;

  if (msg.author.bot) return;
  
  
  if (db.has(`capsE_${msg.guild.id}`) === true) {
    let x = /\w*[A-Z]\w*[A-Z]\w*/g;
    if (msg.content.match(x)) {
      if (mesaj.member.permissions.has("ADMINISTRATOR") === true) return;
      msg.delete();
      let y = await msg.reply(`Bu sunucuda büyük harf engeli açık, bu yüzden büyük harf açıkken yazı yazamazsın!`)
      y.delete(5000);
      return
    };
  };

  
  if (!msg.guild) return;
  
    if (db.has(`küfürE_${msg.guild.id}`) === true) {
    const kufur = new RegExp(/(göt|amk|aq|orospu|oruspu|oç|oc|sik|fuck|yarrak|piç|amq|amcık|çocu|sex|seks|amına|sg|siktir git)/)
  if (kufur.test(msg.content)==true) {
    if (!msg.member.hasPermission("ADMINISTRATOR")) {
      msg.delete()
       msg.channel.send(`<@${msg.author.id}>`).then(message => message.delete(5000));
        var k = new Discord.RichEmbed()
        .setColor("BLACK")
        .setAuthor("Küfür Engeli!")
        .setDescription(`Bu sunucuda küfürler **${client.user.username}** tarafından engellenmektedir! Küfür etmene izin vermeyeceğim!`)
        msg.channel.send(k).then(message => message.delete(5000));
    }
}
    }

      
      if (db.has(`linkE_${msg.guild.id}`) === true) {
        const reklam = new RegExp(/(com|.com|www|dicord.gg|.tk|.pw|https:|http:|.info|.cf|gg|.net|.me|www.|WWW.|.COM|.NET|.TK|DİSCORD.GG|.PW)/)
      if (reklam.test(msg.content)==true) {
       if (!msg.member.hasPermission("ADMINISTRATOR")) {
          msg.delete()
           msg.channel.send(`<@${msg.author.id}>`).then(message => message.delete(5000));
            var ke = new Discord.RichEmbed()
        .setColor("BLACK")
            .setAuthor("Link Engeli!")
            .setDescription(`Bu sunucuda linkler **${client.user.username}** tarafından engellenmektedir! Reklam yapmana izin vermeyeceğim!`)
            msg.channel.send(ke).then(message => message.delete(5000));
       }
    }
        }

  
});
//////////////////////////////////////////////////////////////////////////////////////////





//////////////////////////////////////////////////////////////////////////////////////////
client.on("message", async message => {
  
  if (!message.guild) return;
  
    if(db.has(`sayac_${message.guild.id}`) === true) {
        if(db.fetch(`sayac_${message.guild.id}`) <= message.guild.members.size) {
            message.channel.send(`Başarıyla \`${db.fetch(`sayac_${message.guild.id}`)}\` kullanıcıya ulaştık! Sayaç sıfırlandı!`)
            db.delete(`sayac_${message.guild.id}`)
        }
    }
})
//////////////////////////////////////////////////////////////////////////////////////////






//////////////////////////////////////////////////////////////////////////////////////////
client.on("guildMemberRemove", async member => {
    if (db.has(`sayac_${member.guild.id}`) === false) return
    if (db.has(`sKanal_${member.guild.id}`) === false) return
    const channel = db.fetch(`sKanal_${member.guild.id}`)
    member.guild.channels.get(channel).send(`**${member.user.tag}** Sunucudan ayrıldı! \`${db.fetch(`sayac_${member.guild.id}`)}\` üye olmamıza son \`${db.fetch(`sayac_${member.guild.id}`) - member.guild.members.size}\` üye kaldı!`)
})


//let ot = JSON.parse(fs.readFileSync("./jsonlar/otoR.json", "utf8"));


client.on("guildMemberAdd", async member => {
  
  if (!member.guild) return;
  
  let prefix = await db.fetch(`prefix_${member.guild.id}`) || client.ayarlar.prefix;
  
  if(db.has(`gc_${member.guild.id}`) === false) return;
  
  const hgK = await db.fetch(`gc_${member.guild.id}`)
  if (!hgK) return;
  
  const giris = db.fetch(`girisM_${member.guild.id}`)
  
    member.guild.channels.get(hgK).send(db.has(`girisM_${member.guild.id}`) ? giris.replace('{kullanıcı}', `<@${member.user.id}>`).replace("{user}", `<@${member.user.id}>`).replace("{sunucu}", `**${member.guild.name}**`).replace("{kişisayısı}", `**${member.guild.members.size}**`) : `<@${member.user.id}> Katıldı! **${client.ayarlar.webpanel}** adresinden veya (\`giriş-mesaj-ayarla\` komutu ile mesajı değiştirilebilir.)`);
});

client.on("guildMemberRemove", async member => {
  
  if (!member.guild) return;
  
  let prefix = await db.fetch(`prefix_${member.guild.id}`) || client.ayarlar.prefix;
  
  if(db.has(`gc_${member.guild.id}`) === false) return;
  
   const hgK = await db.fetch(`gc_${member.guild.id}`)
  if (!hgK) return;
  
  const cikis = db.fetch(`cikisM_${member.guild.id}`)
  
  member.guild.channels.get(hgK).send(db.has(`cikisM_${member.guild.id}`) ? cikis.replace('{kullanıcı}', `**${member.user.username}**`).replace("{user}", `**${member.user.username}**`).replace("{sunucu}", `**${member.guild.name}**`).replace("{kişisayısı}", `**${member.guild.members.size}**`) : `**${member.user.username}** Ayrıldı! **${client.ayarlar.webpanel}** adresinden veya (\`çıkış-mesaj-ayarla\` komutu ile mesaj değiştirilebilir.)`);
});
//////////////////////////////////////////////////////////////////////////////////////////








//////////////////////////////////////////////////////////////////////////////////////////
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube('AIzaSyCJrGp1nROqIEp9mDXd1iV-gl5wYXNeDMs');
const queue = new Map();

client.on("message", async message => {
  
  if (!message.guild) return;
  
  let prefix = await db.fetch(`prefix_${message.guild.id}`) || "r!";
  
  var args = message.content.substring(prefix.length).split(" ");
    if (!message.content.startsWith(prefix)) return;
  var searchString = args.slice(1).join(' ');
  var url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
  var serverQueue = queue.get(message.guild.id);
  /*
   var voiceChannel = message.member.voiceChannel;
    if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
      var playlist = await youtube.getPlaylist(url);
      var videos = await playlist.getVideos();
      for (const video of Object.values(videos)) {
        var video2 = await youtube.getVideoByID(video.id);
        await handleVideo(video2, message, voiceChannel, true);
      }
  
  */
    switch (args[0].toLowerCase()) {
        
      case "oynat":
    var voiceChannel = message.member.voiceChannel;
        
    const embed = new RichEmbed()
    .setColor("BLACK")
    .setDescription("Dinlemek istediğin şarkıyı yazmalısın! (Şarkı ismi veya Youtube URLsi)")
    if (!url) return message.channel.send(embed);
        
    const voiceChannelAdd = new RichEmbed()
    .setColor("BLACK")
    .setDescription(`Lütfen herhangi bir sesli kanala katılınız.`)
    if (!voiceChannel) return message.channel.send(voiceChannelAdd);
    var permissions = voiceChannel.permissionsFor(message.client.user);
    if (!permissions.has('CONNECT')) {
      const warningErr = new RichEmbed()
    .setColor("BLACK")
      .setDescription(`Herhangi bir sesli kanala katılabilmek için yeterli iznim yok.`)
      return message.channel.send(warningErr);
    }
    if (!permissions.has('SPEAK')) {
      const musicErr = new RichEmbed()
    .setColor("BLACK")
      .setDescription(`Müzik açamıyorum/şarkı çalamıyorum çünkü kanalda konuşma iznim yok veya mikrofonum kapalı.`)
      return message.channel.send(musicErr);
    }
      if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
      var playlist = await youtube.getPlaylist(url);
      var videos = await playlist.getVideos();
      for (const video of Object.values(videos)) {
        var video2 = await youtube.getVideoByID(video.id);
        await handleVideo(video2, message, voiceChannel, true);
      }
      const PlayingListAdd = new RichEmbed()
    .setColor("BLACK")
      .setDescription(`[${playlist.title}](https://www.youtube.com/watch?v=${playlist.id}) İsimli şarkı oynatma listesine Eklendi.`)
      return message.channel.send(PlayingListAdd);
    } else {
      try {
        var video = await youtube.getVideo(url);
      } catch (error) {
      try {
          var videos = await youtube.searchVideos(searchString, 10);
          
          var r = 1
        
          var video = await youtube.getVideoByID(videos[r - 1].id);
        } catch (err) {
          console.error(err);
          const songNope = new RichEmbed()
    .setColor("BLACK")
          .setDescription(`Aradığınız isimde bir şarkı bulamadım.`) 
          return message.channel.send(songNope);
        }
      }
      return handleVideo(video, message, voiceChannel);
    }
    break
       case "tekrar":
       const e = new RichEmbed()
    .setColor("BLACK")
      .setDescription(`Bir sesli kanalda değilsin.`) 
    if (!message.member.voiceChannel) return message.channel.send(e);
    const p = new RichEmbed()
    .setColor("BLACK")
    .setDescription(`Şuanda herhangi bir şarkı çalmıyor.`)
    if (!serverQueue) return message.channel.send(p);
        
    var u = serverQueue.songs[0]
        
    /*var pla = await youtube.getPlaylist(u);
      var v = await pla.getVideos();*/
      var vi2 = await youtube.getVideoByID(u.id);
      await handleVideo(vi2, message, voiceChannel, true);
    const PlayingListAdd = new RichEmbed()
    .setColor("BLACK")
    .setDescription(`[${u.title}](https://www.youtube.com/watch?v=${u.id}) İsimli şarkı bitince tekrar oynatılacak.`)
    return message.channel.send(PlayingListAdd);
        
    break;
      case "geç":
      const err0 = new RichEmbed()
    .setColor("BLACK")
      .setDescription(`Bir sesli kanalda değilsin.`) 
    if (!message.member.voiceChannel) return message.channel.send(err0);
    const err05 = new RichEmbed()
    .setColor("BLACK")
    .setDescription(`Şuanda herhangi bir şarkı çalmıyor.`)
    if (!serverQueue) return message.channel.send(err05);
    const songSkip = new RichEmbed()
    .setColor("BLACK")
    .setDescription(`Şarkı başarıyla geçildi!`)
    serverQueue.connection.dispatcher.end('');
    message.channel.send(songSkip)
    return undefined;
break;
      case "durdur":
    const err1 = new RichEmbed()
    .setColor("BLACK")
    .setDescription(`Bir sesli kanalda değilsin.`)  
    if (!message.member.voiceChannel) return message.channel.send(err1);
    const err2 = new RichEmbed()
    .setColor("BLACK")
    .setDescription(`Şuanda herhangi bir şarkı çalmıyor.`)
    if (!serverQueue) return message.channel.send(err2);
    serverQueue.songs = [];
    const songEnd = new RichEmbed()
    .setColor("BLACK")
    .setDescription(`Şarkı başarıyla durduruldu ve odadan ayrıldım!`)
    serverQueue.connection.dispatcher.end('');
    message.channel.send(songEnd);
    return undefined;
break;
      case "ses":
      const asd1 = new RichEmbed()
    .setColor("BLACK")
      .setDescription(`Bir sesli kanalda değilsin.`)  
    if (!message.member.voiceChannel) return message.channel.send(asd1);
    const asd2 = new RichEmbed()
    .setColor("BLACK")
    .setDescription(`Şuanda herhangi bir şarkı çalmıyor.`)
    if (!serverQueue) return message.channel.send(asd2);

    if (!args[1]) return message.reply("Ses seviyesi ayarlamak için bir sayı yaz!");
    serverQueue.volume = args[1];
    if (args[1] > 10) return message.channel.send(`Ses seviyesi en fazla \`10\` olarak ayarlanabilir.`)
    serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
    const volumeLevelEdit = new RichEmbed()
    .setColor("BLACK")
    .setDescription(`Ayarlanan Ses Seviyesi: **${args[1]}**`)
    return message.channel.send(volumeLevelEdit);
break;
      case "kuyruk":
      var siralama = 0;
        const a = new RichEmbed()
    .setColor("BLACK")
      .setDescription(`Bir sesli kanalda değilsin.`)  
    if (!message.member.voiceChannel) return message.channel.send(a);
    const b = new RichEmbed()
    .setColor("BLACK")
    .setDescription(`Şuanda herhangi bir şarkı çalmıyor.`)
    if (!serverQueue) return message.channel.send(b);
        
    var k = serverQueue.songs.map(song => `${++siralama} - [${song.title}](https://www.youtube.com/watch?v=${song.id})`).join('\n').replace(serverQueue.songs[0].title, `**${serverQueue.songs[0].title}**`)
        
    const kuyruk = new Discord.RichEmbed()
    .setColor("BLACK")
    .addField("Şarkı Kuyruğu", k)
    return message.channel.send(kuyruk)
break;
case "duraklat":
      if (serverQueue && serverQueue.playing) {
        serverQueue.playing = false;
        serverQueue.connection.dispatcher.pause();
        const asjdhsaasjdha = new RichEmbed()
    .setColor("BLACK")
    .setDescription(`Şarkı başarıyla duraklatıldı!`)
      return message.channel.send(asjdhsaasjdha);
    }
    return message.channel.send('Şuanda herhangi bir şarkı çalmıyor.');
break;
      case "devamet":
      if (serverQueue && !serverQueue.playing) {
        serverQueue.playing = true;
        serverQueue.connection.dispatcher.resume();
        const asjdhsaasjdhaadssad = new RichEmbed()
    .setColor("BLACK")
    .setDescription(`Şarkı başarıyla devam ettiriliyor...`)
      return message.channel.send(asjdhsaasjdhaadssad);
    }
    return message.channel.send('Şuanda herhangi bir şarkı çalmıyor.');
  

  return undefined;
break;
}
async function handleVideo(video, message, voiceChannel, playlist = false) {
  var serverQueue = queue.get(message.guild.id);
  //console.log(video);
  var song = {
    id: video.id,
    title: video.title,
    durationh: video.duration.hours,
    durationm: video.duration.minutes,
		durations: video.duration.seconds,
    url: `https://www.youtube.com/watch?v=${video.id}`,
    thumbnail: `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`,
    requester: message.author.id,
  };
  if (!serverQueue) {
    var queueConstruct = {
      textChannel: message.channel,
      voiceChannel: voiceChannel,
      connection: null,
      songs: [],
      volume: 3,
      playing: true
    };
    queue.set(message.guild.id, queueConstruct);

    queueConstruct.songs.push(song);

    try {
      var connection = await voiceChannel.join();
      queueConstruct.connection = connection;
      play(message.guild, queueConstruct.songs[0]);
    } catch (error) {
      console.error(`Ses kanalına giremedim HATA: ${error}`);
      queue.delete(message.guild.id);
      return message.channel.send(`Ses kanalına giremedim HATA: ${error}`);
    }
  } else {
    serverQueue.songs.push(song);
    //console.log(serverQueue.songs);
    if (playlist) return undefined;

    const songListBed = new RichEmbed()
    .setColor("BLACK")
    .setDescription(`[${song.title}](https://www.youtube.com/watch?v=${song.id}) isimli şarkı kuyruğa eklendi!`)
    return message.channel.send(songListBed);
  }
  return undefined;
}
  function play(guild, song) {
  var serverQueue = queue.get(guild.id);

  if (!song) {
    serverQueue.voiceChannel.leave();
    voiceChannel.leave();
    queue.delete(guild.id);
    return;
  }
  //console.log(serverQueue.songs);

  const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
    .on('end', reason => {
      if (reason === 'İnternetten kaynaklı bir sorun yüzünden şarkılar kapatıldı.');
      else console.log(reason);
      serverQueue.songs.shift();
      play(guild, serverQueue.songs[0]);
    })
    .on('error', error => console.error(error));
  dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
  
  const playingBed = new RichEmbed()
    .setColor("BLACK")
  .setAuthor(`Şuanda Oynatılıyor`, "https://davidjhinson.files.wordpress.com/2015/05/youtube-icon.png")
  .setDescription(`[${song.title}](${song.url})`)
  .addField("Şarkı Süresi", `${song.durationm}:${song.durations}`, true)
  .addField("Şarkıyı Açan Kullanıcı", `<@${song.requester}>`, true)
  .setThumbnail(song.thumbnail)
  serverQueue.textChannel.send(playingBed);
}
  
  
  //etiketli muzuk ewqeqw
  
  
  const prefixMention = new RegExp(`^<@!?${client.user.id}> `);
    const p = String(message.content.match(prefixMention));
  
  if (message.author.bot) return;
  if (!message.content.startsWith(p)) return;
  
  const arg = message.content.slice(p.length).trim().split(/ +/g);
  
    if (!message.content.startsWith(p)) return;
  var searchString = arg.slice(1).join(' ');
  var url = arg[1] ? arg[1].replace(/<(.+)>/g, '$1') : '';
  var serverQueue = queue.get(message.guild.id);
  
    switch (arg[0].toLowerCase()) {
        
      case "oynat":
    var voiceChannel = message.member.voiceChannel;
        
    const embed = new RichEmbed()
    .setColor("BLACK")
    .setDescription("Dinlemek istediğin şarkıyı yazmalısın! (Şarkı ismi veya Youtube URLsi)")
    if (!url) return message.channel.send(embed);
        
    const voiceChannelAdd = new RichEmbed()
    .setColor("BLACK")
    .setDescription(`Lütfen herhangi bir sesli kanala katılınız.`)
    if (!voiceChannel) return message.channel.send(voiceChannelAdd);
    var permissions = voiceChannel.permissionsFor(message.client.user);
    if (!permissions.has('CONNECT')) {
      const warningErr = new RichEmbed()
    .setColor("BLACK")
      .setDescription(`Herhangi bir sesli kanala katılabilmek için yeterli iznim yok.`)
      return message.channel.send(warningErr);
    }
    if (!permissions.has('SPEAK')) {
      const musicErr = new RichEmbed()
    .setColor("BLACK")
      .setDescription(`Müzik açamıyorum/şarkı çalamıyorum çünkü kanalda konuşma iznim yok veya mikrofonum kapalı.`)
      return message.channel.send(musicErr);
    }
      if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
      var playlist = await youtube.getPlaylist(url);
      var videos = await playlist.getVideos();
      for (const video of Object.values(videos)) {
        var video2 = await youtube.getVideoByID(video.id);
        await handleVideo(video2, message, voiceChannel, true);
      }
      const PlayingListAdd = new RichEmbed()
    .setColor("BLACK")
      .setDescription(`[${playlist.title}](https://www.youtube.com/watch?v=${playlist.id}) İsimli şarkı oynatma listesine Eklendi.`)
      return message.channel.send(PlayingListAdd);
    } else {
      try {
        var video = await youtube.getVideo(url);
      } catch (error) {
      try {
          var videos = await youtube.searchVideos(searchString, 10);
          
          var r = 1
        
          var video = await youtube.getVideoByID(videos[r - 1].id);
        } catch (err) {
          console.error(err);
          const songNope = new RichEmbed()
    .setColor("BLACK")
          .setDescription(`Aradığınız isimde bir şarkı bulamadım.`) 
          return message.channel.send(songNope);
        }
      }
      return handleVideo(video, message, voiceChannel);
    }
    break
       case "tekrar":
       const e = new RichEmbed()
    .setColor("BLACK")
      .setDescription(`Bir sesli kanalda değilsin.`) 
    if (!message.member.voiceChannel) return message.channel.send(e);
    const p = new RichEmbed()
    .setColor("RANDOM")
    .setDescription(`Şuanda herhangi bir şarkı çalmıyor.`)
    if (!serverQueue) return message.channel.send(p);
        
    var u = serverQueue.songs[0]
        
    /*var pla = await youtube.getPlaylist(u);
      var v = await pla.getVideos();*/
      var vi2 = await youtube.getVideoByID(u.id);
      await handleVideo(vi2, message, voiceChannel, true);
    const PlayingListAdd = new RichEmbed()
    .setColor("BLACK")
    .setDescription(`[${u.title}](https://www.youtube.com/watch?v=${u.id}) İsimli şarkı bitince tekrar oynatılacak.`)
    return message.channel.send(PlayingListAdd);
        
    break;
      case "geç":
      const err0 = new RichEmbed()
    .setColor("BLACK")
      .setDescription(`Bir sesli kanalda değilsin.`) 
    if (!message.member.voiceChannel) return message.channel.send(err0);
    const err05 = new RichEmbed()
    .setColor("BLACK")
    .setDescription(`Şuanda herhangi bir şarkı çalmıyor.`)
    if (!serverQueue) return message.channel.send(err05);
    const songSkip = new RichEmbed()
    .setColor("BLACK")
    .setDescription(`Şarkı başarıyla geçildi!`)
    serverQueue.connection.dispatcher.end('');
    message.channel.send(songSkip)
    return undefined;
break;
      case "durdur":
    const err1 = new RichEmbed()
    .setColor("BLACK")
    .setDescription(`Bir sesli kanalda değilsin.`)  
    if (!message.member.voiceChannel) return message.channel.send(err1);
    const err2 = new RichEmbed()
    .setColor("BLACK")
    .setDescription(`Şuanda herhangi bir şarkı çalmıyor.`)
    if (!serverQueue) return message.channel.send(err2);
    serverQueue.songs = [];
    const songEnd = new RichEmbed()
    .setColor("BLACK")
    .setDescription(`Şarkı başarıyla durduruldu ve odadan ayrıldım!`)
    serverQueue.connection.dispatcher.end('');
    message.channel.send(songEnd);
    return undefined;
break;
      case "ses":
      const asd1 = new RichEmbed()
    .setColor("BLACK")
      .setDescription(`Bir sesli kanalda değilsin.`)  
    if (!message.member.voiceChannel) return message.channel.send(asd1);
    const asd2 = new RichEmbed()
    .setColor("BLACK")
    .setDescription(`Şuanda herhangi bir şarkı çalmıyor.`)
    if (!serverQueue) return message.channel.send(asd2);

    if (!args[1]) return message.reply("Ses seviyesi ayarlamak için bir sayı yaz!");
    serverQueue.volume = args[1];
    if (args[1] > 10) return message.channel.send(`Ses seviyesi en fazla \`10\` olarak ayarlanabilir.`)
    serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
    const volumeLevelEdit = new RichEmbed()
    .setColor("BLACK")
    .setDescription(`Ayarlanan Ses Seviyesi: **${args[1]}**`)
    return message.channel.send(volumeLevelEdit);
break;
      case "kuyruk":
      var siralama = 0;
        const a = new RichEmbed()
    .setColor("BLACK")
      .setDescription(`Bir sesli kanalda değilsin.`)  
    if (!message.member.voiceChannel) return message.channel.send(a);
    const b = new RichEmbed()
    .setColor("BLACK")
    .setDescription(`Şuanda herhangi bir şarkı çalmıyor.`)
    if (!serverQueue) return message.channel.send(b);
        
    var k = serverQueue.songs.map(song => `${++siralama} - [${song.title}](https://www.youtube.com/watch?v=${song.id})`).join('\n').replace(serverQueue.songs[0].title, `**${serverQueue.songs[0].title}**`)
        
    const kuyruk = new Discord.RichEmbed()
    .setColor("BLACK")
    .addField("Şarkı Kuyruğu", k)
    return message.channel.send(kuyruk)
break;
case "duraklat":
      if (serverQueue && serverQueue.playing) {
        serverQueue.playing = false;
        serverQueue.connection.dispatcher.pause();
        const asjdhsaasjdha = new RichEmbed()
    .setColor("BLACK")
    .setDescription(`Şarkı başarıyla duraklatıldı!`)
      return message.channel.send(asjdhsaasjdha);
    }
    return message.channel.send('Şuanda herhangi bir şarkı çalmıyor.');
break;
      case "devamet":
      if (serverQueue && !serverQueue.playing) {
        serverQueue.playing = true;
        serverQueue.connection.dispatcher.resume();
        const asjdhsaasjdhaadssad = new RichEmbed()
    .setColor("BLACK")
    .setDescription(`Şarkı başarıyla devam ettiriliyor...`)
      return message.channel.send(asjdhsaasjdhaadssad);
    }
    return message.channel.send('Şuanda herhangi bir şarkı çalmıyor.');
  

  return undefined;
break;
}
async function handleVideo(video, message, voiceChannel, playlist = false) {
  var serverQueue = queue.get(message.guild.id);
  //console.log(video);
  var song = {
    id: video.id,
    title: video.title,
    durationh: video.duration.hours,
    durationm: video.duration.minutes,
		durations: video.duration.seconds,
    url: `https://www.youtube.com/watch?v=${video.id}`,
    thumbnail: `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`,
    requester: message.author.id,
  };
  if (!serverQueue) {
    var queueConstruct = {
      textChannel: message.channel,
      voiceChannel: voiceChannel,
      connection: null,
      songs: [],
      volume: 3,
      playing: true
    };
    queue.set(message.guild.id, queueConstruct);

    queueConstruct.songs.push(song);

    try {
      var connection = await voiceChannel.join();
      queueConstruct.connection = connection;
      play(message.guild, queueConstruct.songs[0]);
    } catch (error) {
      console.error(`Ses kanalına giremedim HATA: ${error}`);
      queue.delete(message.guild.id);
      return message.channel.send(`Ses kanalına giremedim HATA: ${error}`);
    }
  } else {
    serverQueue.songs.push(song);
    //console.log(serverQueue.songs);
    if (playlist) return undefined;

    const songListBed = new RichEmbed()
    .setColor("BLACK")
    .setDescription(`[${song.title}](https://www.youtube.com/watch?v=${song.id}) isimli şarkı kuyruğa eklendi!`)
    return message.channel.send(songListBed);
  }
  return undefined;
}
  function play(guild, song) {
  var serverQueue = queue.get(guild.id);

  if (!song) {
    serverQueue.voiceChannel.leave();
    voiceChannel.leave();
    queue.delete(guild.id);
    return;
  }
  //console.log(serverQueue.songs);

  const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
    .on('end', reason => {
      if (reason === 'İnternetten kaynaklı bir sorun yüzünden şarkılar kapatıldı.');
      else console.log(reason);
      serverQueue.songs.shift();
      play(guild, serverQueue.songs[0]);
    })
    .on('error', error => console.error(error));
  dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
  
  const playingBed = new RichEmbed()
    .setColor("BLACK")
  .setAuthor(`Şuanda Oynatılıyor`, "https://davidjhinson.files.wordpress.com/2015/05/youtube-icon.png")
  .setDescription(`[${song.title}](${song.url})`)
  .addField("Şarkı Süresi", `${song.durationm}:${song.durations}`, true)
  .addField("Şarkıyı Açan Kullanıcı", `<@${song.requester}>`, true)
  .setThumbnail(song.thumbnail)
  serverQueue.textChannel.send(playingBed);
}
  
  
  
});
//////////////////////////////////////////////////////////////////////////////////////////






//////////////////////////////////////////////////////////////////////////////////////////
client.on("message",async  message => {

  if (!message.guild) return;
  
let prefix = await db.fetch(`prefix_${message.guild.id}`) || client.ayarlar.prefix;

  if(message.content.startsWith(prefix)) {
        let komutum = client.cmdd
        if(komutum[message.guild.id]) {
            for (var i = 0; i < Object.keys(komutum[message.guild.id]).length; i++) {
                if(message.content.slice(prefix.length) === Object.keys(komutum[message.guild.id][i])[0]) {
                   
                    message.channel.send(komutum[message.guild.id][i][Object.keys(komutum[message.guild.id][i])])
                  
                    return
                }
            }
        }
    }
});
//////////////////////////////////////////////////////////////////////////////////////////







//////////////////////////////////////////////////////////////////////////////////////////
client.on('message', async msg => {
  
  if (!msg.guild) return;
  
  let prefix = await db.fetch(`prefix_${msg.guild.id}`) || client.ayarlar.prefix;
  
  if(!msg.guild.channels.get(db.fetch(`destekK_${msg.guild.id}`))) return
  var s = 'tr'
  var r = 'Destek Ekibi'
  var k = 'destek-kanalı'
    if(db.has(`dil_${msg.guild.id}`) === true) {
        var s = 'en'
        var r = 'Support Team'
        var k = 'support-channel'
    }
  const dil = s
  
  let rol = '';
  let kanal = '';
  
  if (db.has(`destekK_${msg.guild.id}`) === true) {
 kanal = msg.guild.channels.get(db.fetch(`destekK_${msg.guild.id}`)).name
  }
  
  if (db.has(`destekK_${msg.guild.id}`) === false) {
  kanal = k
  }
  
  if (db.has(`destekR_${msg.guild.id}`) === true) {
  rol = msg.guild.roles.get(db.fetch(`destekR_${msg.guild.id}`))
  }
  
  if (db.has(`destekR_${msg.guild.id}`) === false) {
  rol = r
  }
  
  const reason = msg.content.split(" ").slice(1).join(" ");
  if (msg.channel.name== kanal) {
     if (msg.author.bot) return;
    /*if (!msg.guild.roles.exists("name", rol)) return msg.reply(client[dil].desteksistem.rolyok.replace("{rol}", r)).then(m2 => {
            m2.delete(5000)});*/
    if (msg.guild.channels.find(c => c.name === `${client[dil].desteksistem.talep}-${msg.author.discriminator}`)) {
      
      msg.author.send(client[dil].desteksistem.aciktalepozel.replace("{kisi}", msg.author.tag).replace("{kanal}", `${msg.guild.channels.get(msg.guild.channels.find(c => c.name === `${client[dil].desteksistem.talep}-${msg.author.discriminator}`).id)}`))
      msg.guild.channels.find(c => c.name === `${client[dil].desteksistem.talep}-${msg.author.discriminator}`).send(client[dil].desteksistem.aciktalep.replace("{kisi}", msg.author.tag).replace("{sebep}", msg.content))
      
      msg.delete()
      return
    }
    if(msg.guild.channels.find(c => c.name === client[dil].desteksistem.kategori)) {
      msg.guild.createChannel(`${client[dil].desteksistem.talep}-${msg.author.discriminator}`, "text").then(c => {
      const category = msg.guild.channels.find(c => c.name === client[dil].desteksistem.kategori)
      c.setParent(category.id)
      let role = msg.guild.roles.find(r => r.name === rol.name);
      let role2 = msg.guild.roles.find(r => r.name === "@everyone");
      c.overwritePermissions(role, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      c.overwritePermissions(role2, {
          SEND_MESSAGES: false,
          READ_MESSAGES: false
      });
      c.overwritePermissions(msg.author, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });

      const embed = new Discord.RichEmbed()
    .setColor("BLACK")
      .setAuthor(`Destek Sistemi`)
      .setDescription(`_**Merhaba ${msg.author}!**_ \nYetkililer senle kısa bir süre içinde ilgilenecektirler! Kahveni al ve bekle..`)
      .addField(`Destek Talebi Hakkında Bilgilendirme`, `Talebi kapatmak için \`${prefix}kapat\` yazabilirsin.`)
      .addField(`Destek Talebi Sebebi`, `${msg.content}`, true)
      .addField(`Destek Talebini Açan Kullanıcı`, `<@${msg.author.id}>`, true)
          .setTimestamp()
.setFooter(`${client.user.username}`, client.user.avatarURL)
      c.send({ embed: embed });
      c.send(`** @here | 📞Destek Talebi! **`)
        //\n**${msg.author.tag}** adlı kullanıcı \`${msg.content}\` sebebi ile Destek Talebi açtı!
      msg.delete()
      }).catch(console.error);
    }
  }

  if (msg.channel.name== kanal) {
    if(!msg.guild.channels.find(c => c.name === client[dil].desteksistem.kategori)) {
      msg.guild.createChannel(client[dil].desteksistem.kategori, 'category').then(category => {
      category.setPosition(1)
      let every = msg.guild.roles.find(c => c.name === "@everyone");
      category.overwritePermissions(every, {
        VIEW_CHANNEL: false,
        SEND_MESSAGES: false,
        READ_MESSAGE_HISTORY: false
      })
      msg.guild.createChannel(`${client[dil].desteksistem.talep}-${msg.author.discriminator}`, "text").then(c => {
      c.setParent(category.id)
      let role = msg.guild.roles.find(c => c.name === rol.name);
      let role2 = msg.guild.roles.find(c => c.name === "@everyone");
      c.overwritePermissions(role, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      c.overwritePermissions(role2, {
          SEND_MESSAGES: false,
          READ_MESSAGES: false
      });
      c.overwritePermissions(msg.author, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });

           const embed = new Discord.RichEmbed()
    .setColor("BLACK")
      .setAuthor(`Destek Sistemi`)
      .setDescription(`_**Merhaba ${msg.author}!**_ \nYetkililer senle kısa bir süre içinde ilgilenecektirler! Kahveni al ve bekle..`)
      .addField(`Destek Talebi Hakkında Bilgilendirme`, `Talebi kapatmak için \`${prefix}kapat\` yazabilirsin.`)
      .addField(`Destek Talebi Sebebi`, `${msg.content}`, true)
      .addField(`Destek Talebini Açan Kullanıcı`, `<@${msg.author.id}>`, true)
          .setTimestamp()
.setFooter(`${client.user.username}`, client.user.avatarURL)
      c.send({ embed: embed });
      c.send(`** @here | 📞Destek Talebi! **`)
        //\n**${msg.author.tag}** adlı kullanıcı \`${msg.content}\` sebebi ile Destek Talebi açtı!
      msg.delete()
      }).catch(console.error);
    })
  }
}
})

client.on('message', async message => {
    if(!message.guild.channels.get(db.fetch(`destekK_${message.guild.id}`))) return

  if (!message.guild) return;
  
  let prefix = await db.fetch(`prefix_${message.guild.id}`) || client.ayarlar.prefix;
  
  var s = 'tr'
  var r = 'Destek Ekibi'
    if(db.has(`dil_${message.guild.id}`) === true) {
        var s = 'en'
        var r = 'Support Team'
    }
  const dil = s
  
if (message.content.toLowerCase().startsWith(prefix + `kapat`)) {
  if (!message.channel.name.startsWith(`${client[dil].desteksistem.talep}-`)) return message.channel.send(`Bu komut sadece Destek Talebi kanallarında kullanılabilir.`);

  const embed = new Discord.RichEmbed()
    .setColor("BLACK")
  .setAuthor(`Destek Talebi Kapatma`)
  .setDescription(`Destek talebini kapatma işlemini onaylamak için, \n10 saniye içinde \`evet\` yazınız.`)
          .setTimestamp()
.setFooter(`${client.user.username}`, client.user.avatarURL)
  message.channel.send({embed})
  .then((m) => {
    message.channel.awaitMessages(response => response.content === 'evet', {
      max: 1,
      time: 10000,
      errors: ['time'],
    })
    .then((collected) => {
        message.channel.delete();
      })
      .catch(() => {
        m.edit('Destek talebi kapatma isteği zaman aşımına uğradı.').then(m2 => {
            m2.delete()
        }, 3000);
      });
  });
  }
});
//////////////////////////////////////////////////////////////////////////////////////////






//////////////////////////////////////////////////////////////////////////////////////////
client.on("messageDelete", message => {
  
  if (message.author.bot) return;
  
    

db.set(`atan_${message.channel.id}`, `${message.author.tag}`)
db.set(`mesaj_${message.channel.id}`, message.content)
  
  //if (!logA[message.guild.id]) return;
  
  var user = message.author;
  
  //var kanal = message.guild.channels.get(logA[message.guild.id].log);
  
  if (db.has(`log_${message.guild.id}`) === false) return;
  
  var kanal = message.guild.channels.get(db.fetch(`log_${message.guild.id}`))
  if (!kanal) return;
  
  const embed = new Discord.RichEmbed()
    .setColor("BLACK")
  .setAuthor(`Bir Mesaj Silindi!`, message.author.avatarURL)
  .addField("Kullanıcı Tag", message.author.tag, true)
  .addField("ID", message.author.id, true)
  .addField("Silinen Mesaj", "```" + message.content + "```")
  .setThumbnail(message.author.avatarURL)
  kanal.send(embed);
  
});

client.on("messageUpdate", async (oldMsg, newMsg) => {
  
  if (oldMsg.author.bot) return;
  
 // if (!logA[oldMsg.guild.id]) return;
  
  var user = oldMsg.author;
  
  //var kanal = oldMsg.guild.channels.get(logA[oldMsg.guild.id].log);
  
  if (db.has(`log_${oldMsg.guild.id}`) === false) return;
  
  var kanal = oldMsg.guild.channels.get(db.fetch(`log_${oldMsg.guild.id}`))
  if (!kanal) return;
  
  const embed = new Discord.RichEmbed()
    .setColor("BLACK")
  .setAuthor(`Bir Mesaj Düzenlendi!`, oldMsg.author.avatarURL)
  .addField("Kullanıcı Tag", oldMsg.author.tag, true)
  .addField("ID", oldMsg.author.id, true)
  .addField("Eski Mesaj", "```" + oldMsg.content + "```")
  .addField("Yeni Mesaj", "```" + newMsg.content + "```")
  .setThumbnail(oldMsg.author.avatarURL)
  kanal.send(embed);
  
});

client.on("roleCreate", role => {
  
 // if (!logA[role.guild.id]) return;
  
  if (db.has(`log_${role.guild.id}`) === false) return;
  
  var kanal = role.guild.channels.get(db.fetch(`log_${role.guild.id}`))
  if (!kanal) return;
  
  const embed = new Discord.RichEmbed()
    .setColor("BLACK")
  .setAuthor(`Bir Rol Oluşturuldu!`, role.guild.iconURL)
  .addField("Rol", `\`${role.name}\``, true)
  .addField("Rol Rengi Kodu", `${role.hexColor}`, true)
  kanal.send(embed);
  
});

client.on("roleDelete", role => {
  
 // if (!logA[role.guild.id]) return;
  
  if (db.has(`log_${role.guild.id}`) === false) return;
  
 var kanal = role.guild.channels.get(db.fetch(`log_${role.guild.id}`))
  if (!kanal) return;
  
  const embed = new Discord.RichEmbed()
    .setColor("BLACK")
  .setAuthor(`Bir Rol Kaldırıldı!`, role.guild.iconURL)
  .addField("Rol", `\`${role.name}\``, true)
  .addField("Rol Rengi Kodu", `${role.hexColor}`, true)
  kanal.send(embed);
  
});

client.on("roleUpdate", role => {
  
 // if (!logA[role.guild.id]) return;
  
  if (db.has(`log_${role.guild.id}`) === false) return;
  
  var kanal = role.guild.channels.get(db.fetch(`log_${role.guild.id}`))
  if (!kanal) return;
  
  const embed = new Discord.RichEmbed()
    .setColor("BLACK")
  .setAuthor(`Bir Rol Güncellendi!`, role.guild.iconURL)
  .addField("Rol", `\`${role.name}\``, true)
  .addField("Rol Rengi Kodu", `${role.hexColor}`, true)
  kanal.send(embed);
  
});

client.on('voiceStateUpdate', (oldMember, newMember) => {
  
 // if (!logA[oldMember.guild.id]) return;
  
  if (db.has(`log_${oldMember.guild.id}`) === false) return;
  
  var kanal = oldMember.guild.channels.get(db.fetch(`log_${oldMember.guild.id}`))
  if (!kanal) return;
  
  let newUserChannel = newMember.voiceChannel
  let oldUserChannel = oldMember.voiceChannel

  if(oldUserChannel === undefined && newUserChannel !== undefined) {

    const embed = new Discord.RichEmbed()
    .setColor("BLACK")
    .setDescription(`${newMember.user.tag} adlı kullanıcı \`${newUserChannel.name}\` isimli sesli kanala giriş yaptı!`)
    kanal.send(embed);
    
  } else if(newUserChannel === undefined){

    const embed = new Discord.RichEmbed()
    .setColor("BLACK")
    .setDescription(`${newMember.user.tag} adlı kullanıcı bir sesli kanaldan çıkış yaptı!`)
    kanal.send(embed);
    
    
  }
});
//////////////////////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////////////////////
client.on("message", async message => {
      const prefixMention = new RegExp(`^<@!?${client.user.id}>`);
    if (message.channel.type === "dm") return;

  if (message.author.bot) return;

  var user = message.mentions.users.first() || message.author;
  if (!message.guild) user = message.author;

  var user = message.mentions.users.first() || message.author;
  if (!message.guild) user = message.author;



     let i = await db.fetch(`prefix_${message.guild.id}`) || client.ayarlar.prefix;

    let prefix;
    if (i) {
        prefix = message.content.match(prefixMention) ? message.content.match(prefixMention)[0] + " " : i;
    } else {
        prefix = message.content.match(prefixMention) ? message.content.match(prefixMention)[0] + " " : `${message.guild.commandPrefix}`;
    }

    if (message.author.bot) return;
    if (message.author.id === client.user.id) return;
    if (message.content.indexOf(prefix) !== 0) return;
    const args = message.content.substring(prefix.length).split(" ");
    const command = args.shift().toLowerCase();
//////////////////////////////////////////////////////////////////////////////////////////

    
   




  //////////////////////////////////////////////////////////////////////////////////////////
    if (command === 'profil' || command === 'profile') {
      message.channel.startTyping()
      var xp = db.fetch(`puancik_${user.id + message.guild.id}`);
        var lvl = db.fetch(`seviye_${user.id + message.guild.id}`);  
        var user = message.mentions.users.first() || message.author;
        let memberID = await db.fetch(`memberID_${user.id}`);
        if (memberID == null) memberID = 'Biyografi mesaji ayarlanmamis.'
        let membername = await db.fetch(`membername_${user.id}`);
        if (membername == null) membername = `${user.tag}`
        let memberBadge = await db.fetch(`memberBadge_${user.id}`);
        
    


        if (memberBadge == null) memberBadge = `https://cdn.discordapp.com/attachments/461622592688619520/472923575049781268/profile.png`
        let memberBadge2 = await db.fetch(`memberBadge2_${user.id}`);
        if (memberBadge2 == null) memberBadge2 = `https://cdn.discordapp.com/attachments/461622592688619520/472923575049781268/profile.png`
        let memberBadge3 = await db.fetch(`memberBadge3_${user.id}`);
        if (memberBadge3 == null) memberBadge3 = `https://cdn.discordapp.com/attachments/461622592688619520/472923575049781268/profile.png`
        let memberBadge4 = await db.fetch(`memberBadge4_${user.id}`);
        if (memberBadge4 == null) memberBadge4 = `https://cdn.discordapp.com/attachments/461622592688619520/472923575049781268/profile.png`
        let memberBadge5 = await db.fetch(`memberBadge5_${user.id}`);
        if (memberBadge5 == null) memberBadge5 = `https://cdn.discordapp.com/attachments/461622592688619520/472923575049781268/profile.png`
        let memberBadge6 = await db.fetch(`memberBadge6_${user.id}`);
        if (memberBadge6 == null) memberBadge6 = `https://cdn.discordapp.com/attachments/461622592688619520/472923575049781268/profile.png`
        // https://cdn.discordapp.com/attachments/531535859594297364/533260601162465280/paraR.png
      
				const bg = await Jimp.read("https://cdn.discordapp.com/attachments/521363740755623986/528277129989849130/unknown.png");
				const userimg = await Jimp.read(user.avatarURL);
				const onay = await Jimp.read(`${memberBadge}`);
				const ekip = await Jimp.read(`${memberBadge2}`);
				const destek = await Jimp.read(`${memberBadge3}`);
				const mod = await Jimp.read(`${memberBadge4}`);
        const partner = await Jimp.read(`${memberBadge5}`);
        const paraR = await Jimp.read(`${memberBadge6}`);
				var font;
				if (membername.length < 12) font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
				else if (membername.length > 12) font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
				else font = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK);
				var font2;
				if (user.tag.length < 15) font2 = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
				else if (user.tag.length > 15) font2 = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
				else font2 = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK);
				var font3;
				if (user.tag.length < 34) font3 = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
				else if (user.tag.length > 34) font3 = await Jimp.loadFont(Jimp.FONT_SANS_16_WHITE);
				else font3 = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK);
				var font4;
				if (user.tag.length < 15) font4 = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
				else if (user.tag.length > 15) font4 = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
				else font4 = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK);
				await bg.print(font, 365, 45, `${membername}`);
				await bg.print(font2, 40, 300, `Xp: ${xp || 0}`);
				await bg.print(font2, 40, 340, `Seviye: ${lvl || 0}`);
				await bg.print(font3, 40, 380, `Biyografi: ${memberID}`);
				await userimg.resize(210, 220);
				await (!userimg.resize(214, 220));
				await onay.resize(32, 32);
				await ekip.resize(32, 32);
				await destek.resize(32, 32);
				await mod.resize(32, 32);
        await partner.resize(32, 32);
        await paraR.resize(32, 32);
        await bg.composite(paraR, 370, 100).write("./img/paraR/" + client.user.id + "-" + user.id + ".png");
        await bg.composite(onay, 410, 100).write("./img/onay/" + client.user.id + "-" + user.id + ".png");
        await bg.composite(ekip, 490, 100).write("./img/ekip/" + client.user.id + "-" + user.id + ".png");
        await bg.composite(destek, 450, 100).write("./img/destek/" + client.user.id + "-" + user.id + ".png");
        await bg.composite(mod, 530, 100).write("./img/mod/" + client.user.id + "-" + user.id + ".png");
        await bg.composite(partner, 500, 100).write("./img/mod/" + client.user.id + "-" + user.id + ".png");
        await bg.composite(userimg, 143, 27.8).write("./img/userimg/" + client.user.id + "-" + user.id + ".png");
      
				  setTimeout(function () {
message.channel.send(`:pencil: **| ${user.username} adlı kullanıcının profil kartı**`)
						message.channel.send(new Discord.Attachment("./img/userimg/" + client.user.id + "-" + user.id + ".png"));
				  }, 1000);
				  setTimeout(function () {
					fs.unlink("./img/userimg/" + client.user.id + "-" + user.id + ".png");
				  }, 10000);
      message.channel.stopTyping()
    }


    if (command === "bioayarla" || command === "biyografi" || command === "biyografi-ayarla" || command === "hakkında") {

      var biyo = args.slice(0).join(' ');
      if (biyo.length < 1) return message.reply('Lütfen biyografinizi yazınız!')

        if (args.join(' ').length > 35) return message.channel.send(`${red} En fazla 35 karakter girebilirsiniz.`)
        
        if (!args.join(" ") && args.join(" ").toLowerCase() === `none`)
            return message.channel.send(`Uyarı: Geçerli bir yazı yazmalısın.\nDoğru kullanım: ${prefix}biyografi bot adamdır.`)
        let newMessage;
        if (args.join(" ").toLowerCase() === `none`) newMessage = '';
        else newMessage = args.join(" ").trim();
       const i = await db.set(`memberID_${message.author.id}`, newMessage)
            return message.channel.send(`Yeni biyografin ayarlandı.`)
        }
    
  
    if (command === "isim" || command === "isimayarla") {
        if (args.join(' ').length > 15) return message.channel.send(`En fazla 15 karakter girebilirsiniz.`)

        var isim = args.slice(0).join(' ');
        if (isim.length < 1) return message.reply('Lütfen bir isim giriniz!')

        
        let newMessage;

      
  

        if (args.join(" ").toLowerCase() === `none`) newMessage = '';
        else newMessage = args.join(" ").trim();
      const i = await db.set(`membername_${message.author.id}`, newMessage)
            return message.channel.send(`Yeni ismin ayarlandı.`)
        }
    
  
        if (command === "rozet-parar") {
          if (message.author.id !== "520997295014281228" && message.author.id == "593048354209005578" ) return message.channek.send(`Bu komutu kullanmak için yetkin bulunmuyor.`);
          const i = await db.set(`memberBadge6_${user.id}`, "https://cdn.discordapp.com/attachments/531535859594297364/533260601162465280/paraR.png")
              return message.channel.send(`Verdim.`)
          
      }

    if (command === "rozet-onayla") {
        if (message.author.id !== "520997295014281228"  && message.author.id == "593048354209005578" ) return message.channek.send(`Bu komutu kullanmak için yetkin bulunmuyor.`);
        const i = await db.set(`memberBadge_${user.id}`, "https://cdn.discordapp.com/attachments/474685686075621376/480845736347435015/401725450470031362.png")
            return message.channel.send(`Kullanıcıya onay rozeti verilmiştir.`)
        
    }
  
    if (command === "rozet-konay" || command === "rozet-konayla") {
        if (message.author.id !== "520997295014281228" && message.author.id == "593048354209005578" ) return message.channel.send(`Bu komutu kullanmak için yetkin bulunmuyor.`);
        const i = await db.set(`memberBadge_${user.id}`, "https://cdn.discordapp.com/attachments/461622592688619520/472923575049781268/profile.png")
            return message.channel.send(`Kullanıcıdan onay rozeti alınmıştır.`)
        
    }
  
    if (command === "rozet-yetkili" || command === "rozet-ekip") {
        if (message.author.id !== "520997295014281228" && message.author.id == "593048354209005578" ) return message.channel.send(`Bu komutu kullanmak için yetkin bulunmuyor.`);
        const i = await db.set(`memberBadge2_${user.id}`, "https://cdn.discordapp.com/attachments/474685686075621376/480845736347435009/401723658491527168.png")
            return message.channel.send(`Kullanıcıya ekip rozeti verilmiştir.`)
        
    }
  
    if (command === "rozet-kyetkili" || command === "rozet-kekip") {
        if (message.author.id !== "520997295014281228" && message.author.id == "593048354209005578" ) return message.channel.send(`Bu komutu kullanmak için yetkin bulunmuyor.`);
        const i = await db.set(`memberBadge2_${user.id}`, "https://cdn.discordapp.com/attachments/461622592688619520/472923575049781268/profile.png")
            return message.channel.send(`Kullanıcıdan ekip rozeti alınmıştır.`)
        
    }
  
    if (command === "rozet-destekci" || command === "rozet-destekçi") {
        if (message.author.id !== "520997295014281228" && message.author.id == "593048354209005578" ) return message.channel.send(`Bu komutu kullanmak için yetkin bulunmuyor.`);
        const i = await db.set(`memberBadge3_${user.id}`, "https://cdn.discordapp.com/attachments/474685686075621376/480845737006202881/401725034453925889.png")
            return message.channel.send(`Kullanıcıya destekçi rozeti verilmiştir.`)
        
    }
  
    if (command === "rozet-kdestekci" || command === "rozet-kdestekçi") {
        if (message.author.id !== "520997295014281228" && message.author.id == "593048354209005578" ) return message.channel.send(`Bu komutu kullanmak için yetkin bulunmuyor.`);
        const i = await db.set(`memberBadge3_${user.id}`, "https://cdn.discordapp.com/attachments/461622592688619520/472923575049781268/profile.png")
            return message.channel.send(`Kullanıcıdan destekçi rozeti alınmıştır.`)
        
    }
  
    if (command === "rozet-mod" || command === "rozet-moderator") {
        if (message.author.id !== "520997295014281228" && message.author.id == "593048354209005578" ) return message.channel.send(`Bu komutu kullanmak için yetkin bulunmuyor.`);
        const i = await db.set(`memberBadge4_${user.id}`, "https://cdn.discordapp.com/attachments/474685686075621376/480845735647117312/401724520806875139.png")
            return message.channel.send(`Kullanıcıya moderator rozeti verilmiştir.`)
        
    }
  
    if (command === "rozet-kmod" || command === "rozet-kmoderator") {
        if (message.author.id !== "520997295014281228" && message.author.id == "593048354209005578" ) return message.channel.send(`Bu komutu kullanmak için yetkin bulunmuyor.`);
        const i = await db.set(`memberBadge4_${user.id}`, "https://cdn.discordapp.com/attachments/461622592688619520/472923575049781268/profile.png")
            return message.channel.send(`Kullanıcıdan moderator rozeti alınmıştır.`)
        
    }
})
//////////////////////////////////////////////////////////////////////////////////////////







//////////////////////////////////////////////////////////////////////////////////////////
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`Yardım komutu aktif edildi.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.english = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  //log(`${chalk.red(files.length)} ${chalk.green("komut yüklenecek.")}`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    //log(`${chalk.green("Yüklenen komut:")} ${chalk.blue(props.help.name)}.`);
    client.english.set(props.help.enname, props)
  });
});


client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};



client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
     
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};
//////////////////////////////////////////////////////////////////////////////////////////





 
//////////////////////////////////////////////////////////////////////////////////////////
  client.on("message", async msg => {
  
  const request = require('node-superfetch');
  const db = require('quick.db');

  if (msg.channel.type === "dm") return;
  if(msg.author.bot) return;  
  
  if (msg.content.length > 7) {
    
    db.add(`puancik_${msg.author.id + msg.guild.id}`, 1)
};

  if (db.fetch(`puancik_${msg.author.id + msg.guild.id}`) > 250) {
    
    db.add(`seviye_${msg.author.id + msg.guild.id}`, 1)
    
    msg.channel.send(`Tebrik ederim <@${msg.author.id}>! Seviye atladın ve **${db.fetch(`seviye_${msg.author.id + msg.guild.id}`)}** seviye oldun!`)
    
    db.delete(`puancik_${msg.author.id + msg.guild.id}`)
    
  };
});
//////////////////////////////////////////////////////////////////////////////////////////




client.login('NjkwNTY3OTUwMTkyNjA3MzUz.XnTYxA.IbI-mUkdQgdJf8s-7Up1jst0PDQ')
