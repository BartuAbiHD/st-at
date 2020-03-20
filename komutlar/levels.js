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


 message.channel.send(`Here is **${message.guild.name}**'s leaderboard: https://mee6gg.glitch.me/leaderboard/${message.guild.id}`);

 
}//embed tanımlarını değiştrelim  realcode yazalım


exports.conf = {
enabled: true,
guildOnly: true,
permLevel: 0,
aliases: [],
kategori: "help"

}

exports.help = {
name: "levels",
description: "Bot hakkında kısa bilgiyi gösterir.",
usage: "help"

}