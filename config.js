const config = {
    "ownerID": "id", //kendi IDınızı yazınız
    "admins": ["id", "id2"],
    "token": "token", //botunuzun tokenini yazınız
    "dashboard" : {
      "oauthSecret": "oauthSecret", //botunuzun secretini yazınız
      "callbackURL": `https://projeismi.glitch.me/callback`, //site URLnizi yazınız /callback kısmını silmeyiniz!
      "sessionSecret": "xyzxyz", //kalsın
      "domain": "https://projeismi.glitch.me" //site URLnizi yazınız!
    }
  };
  
  module.exports = config;