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




require("./modüller/fonksiyonlar.js")(client);
require('./util/eventLoader')(client);
client.config = require("./config.js");


client.ayarlar = {
        "oynuyor": "oynuyor",
        "official_sahip": "679694797270810642",
        "sahip": ['679694797270810642'],
        "isim": "mii6",
        "webpanel": "site",
        "versiyon": "0.1",
        "prefix": "!",
        "renk":  "#fff",
        "version":  "0.1",
 };
client.avatarURL = `null`
const ayarlar = client.ayarlar;



//var prefix = ayarlar.prefix;

const log = message => {
  console.log(`${chalk.yellow(`»`)} ${message}`);
};


                         
 
  client.ayar = db;
   







//////////////////////////////////////////////////////////////////////////////////////////
client.on("ready", async () => {
  
  client.appInfo = await client.fetchApplication();
  setInterval( async () => {
    client.appInfo = await client.fetchApplication();
  }, 60000);
  
  require("./modüller/panel.js")(client); 

  
})
  //////////////////////////////////////////////////////////////////////////////////////////
  
  


client.on("guildMemberAdd", async member => {
  let sat = await db.fetch(`kategori_${member.guild.id}`);
  let sa = await db.fetch(`toplamk_${member.guild.id}`);
  let sa1 = await db.fetch(`botk_${member.guild.id}`);
  let sa2 = await db.fetch(`aktif_${member.guild.id}`);
  let sa3 = await db.fetch(`rekor_${member.guild.id}`);
  let sa4 = await db.fetch(`son_${member.guild.id}`);
  if (!sat) return;
  if (!sa) return;
  if (!sa1) return;
  if (!sa2) return;
  if (!sa3) return;
  if (!sa4) return;
  try {
    member.guild.channels
      .get(sa)
      .setName(`» Toplam Üye ${member.guild.memberCount}`);
  } catch (err) {
    return;
  }
  try {
    member.guild.channels.get(sa4).setName(`» Son Üye: ${member.user.tag}`);
  } catch (err) {
    return;
  }
  if (client.users.get(member.id).bot) {
    try {
      member.guild.channels
        .get(sa1)
        .setName(
          `» Toplam Bot ${member.guild.members.filter(m => m.user.bot).size}`
        );
    } catch (err) {
      return;
    }
  }
});

client.on("guildMemberRemove", async member => {
  let sat = await db.fetch(`kategori_${member.guild.id}`);
  let sa = await db.fetch(`toplamk_${member.guild.id}`);
  let sa1 = await db.fetch(`botk_${member.guild.id}`);
  let sa2 = await db.fetch(`aktif_${member.guild.id}`);
  let sa3 = await db.fetch(`rekor_${member.guild.id}`);
  let sa4 = await db.fetch(`son_${member.guild.id}`);
  if (!sat) return;
  if (!sa) return;
  if (!sa1) return;
  if (!sa2) return;
  if (!sa3) return;
  if (!sa4) return;
  try {
    member.guild.channels
      .get(sa)
      .setName(`» Toplam Üye ${member.guild.memberCount}`);
  } catch (err) {
    return;
  }
  if (client.users.get(member.id).bot) {
    try {
      member.guild.channels
        .get(sa1)
        .setName(
          `» Toplam Bot ${member.guild.members.filter(m => m.user.bot).size}`
        );
    } catch (err) {
      return;
    }
  }
});

client.on("message", async message => {
  let sa2 = await db.fetch(`aktif_${message.guild.id}`);
  let kanal = await db.fetch(`rekor_${message.guild.id}`);
  let rekoronline = await db.fetch(`panelrekor_${message.guild.id}`);
  try {
    message.guild.channels
      .get(sa2)
      .setName(
        `» Toplam Aktif ${
          message.guild.members.filter(off => off.presence.status !== "offline")
            .size
        }`
      );
  } catch (err) {
    return;
  }
  if (
    message.guild.members.filter(off => off.presence.status !== "offline")
      .size > rekoronline
  ) {
    db.set(
      `panelrekor_${message.guild.id}`,
      message.guild.members.filter(off => off.presence.status !== "offline")
        .size
    );
    try {
      message.guild.channels
        .get(kanal)
        .setName(
          `» Rekor Aktif ${
            message.guild.members.filter(
              off => off.presence.status !== "offline"
            ).size
          }`
        );
    } catch (err) {
      return;
    }
  }
});


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
client.login('NjgwNjYwOTUzNjQ1NTgwMjk5.XoUC_g.NEIBgkQYzWawWFexwU7zZesIu1I')
