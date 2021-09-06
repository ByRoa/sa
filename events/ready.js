
const chalk = require('chalk');//Lord Creative
const moment = require('moment');//Lord Creative
const Discord = require('discord.js');//Lord Creative//Lord Creative
const ayarlar = require('../ayarlar.json');//Lord Creative
//Lord Creative
var prefix = ayarlar.prefix;//Lord Creative
//Lord Creative
module.exports = client => {//Lord Creative
var oyun = [//Lord Creative
        "Roa 💖 Croxy",//Lord Creative
    ];//Lord Creative
//Lord Creative
    setInterval(function() {//Lord Creative
//Lord Creative
        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);//Lord Creative
//Lord Creative
        client.user.setActivity(oyun[random], "" );//Lord Creative//Lord Creative
        }, 2 * 2000 );//Lord Creative
  
  
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);//Lord Creative
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);//Lord Creative
  client.user.setStatus("online");//Lord Creative
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Oyun ismi ayarlandı!`);//Lord Creative//Lord Creative
};  //Lord Creative
//Lord Creative
////////// lord creative