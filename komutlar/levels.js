const Discord = require('discord.js');
const db = require('quick.db');
const url = require("url");
const path = require("path");
var express = require('express');
var app = express();
const passport = require("passport");
const session = require("express-session");
const LevelStore = require("level-session-store")(session);
const Strategy = require("passport-discord").Strategy;
const helmet = require("helmet");
const md = require("marked");


exports.run = async(client, message, args) => {

  
  if(args[0] == "commands") {
return message.channel.send(`Here is **${message.guild.name}**'s leaderboard: https://mee6gg.gl.me/leaderboard/690231851167908061`);
}
  

 
}//embed tanımlarını değiştrelim  realcode yazalım


exports.conf = {
enabled: true,
guildOnly: true,
permLevel: 0,
aliases: [],
kategori: "help"

}

exports.help = {
name: "help",
description: "Bot hakkında kısa bilgiyi gösterir.",
usage: "help"

}