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
  
  
message.channel.send(`<:XMARK6:690583258022412299> You aren't ranked yet. Send some messages first, then try again`)
  
}//embed tanımlarını değiştrelim  realcode yazalım


exports.conf = {
enabled: true,
guildOnly: true,
permLevel: 0,
aliases: [],
kategori: "help"

}

exports.help = {
name: "rank",
description: "",
usage: "help"

}