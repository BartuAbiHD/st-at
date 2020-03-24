const config = {
    "ownerID": "id", //kendi IDınızı yazınız
    "admins": ["id", "id2"],
    "token": "token", //botunuzun tokenini yazınız
    "dashboard" : {
      "oauthSecret": "oauthsecret", //botunuzun secretini yazınız
      "callbackURL": `https://sitelink.glitch.me/callback`, //site URLnizi yazınız /callback kısmını silmeyiniz!
      "sessionSecret": "xyzxyz", //kalsın
      "domain": "https://sitelink.glitch.me" //site URLnizi yazınız!
    }
  };
  
  module.exports = config;