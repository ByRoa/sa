const Discord = require('discord.js');//Lord Creative

exports.run = async (client, message, args) => {//Lord Creative
//Lord Creative
let kayityetkililordcreative = '819843998612324355' // KAYIT YETKİLİSİ İD //
let verlordcreative = '884473020071165972' // VERİLECEK ROL ID 1 //
let allordcreative = '819892528337256458' // ALINACAK ROL ID//
let taglordcreative = '主' //DEĞİŞTİRİLECEK İSMİN ÖNÜNE GELEN
//Lord Creative
  if(!message.member.roles.has(kayityetkililordcreative)) //Lord Creative
  if(!message.member.hasPermission("ADMINISTRATOR"))//Lord Creative
  return message.channel.send(`Bu Komutu Sadece Ayarlanmış Kayıt Sorumluları Kullanabilir.`);//Lord Creative
  let member = message.mentions.members.first()//Lord Creative//Lord Creative
  let isim = args.slice(1).join()//Lord Creative
  let nick = args.slice(2).join()//Lord Creative
  let yas = args.slice(3).join()//Lord Creative
  if (!member) return message.channel.send('**Bir Üye Etiketlemelisin**')//Lord Creative//Lord Creative
  if (!isim) return message.channel.send('**Bir İsim Yazmalısın **')//Lord Creative
  if (!nick) return message.channel.send('**Bir Nick Yazmalısın **')//Lord Creative
  if (!yas) return message.channel.send('**Bir Yaş Yazmalısın **')//Lord Creative
  //Lord Creative
  setTimeout(function(){//Lord Creative
  member.setNickname(`${isim} | ${nick} [${yas}]`)//Lord Creative//Lord Creative
  },500)//Lord Creative//Lord Creative
  setTimeout(function(){//Lord Creative//Lord Creative
  member.addRole(verlordcreative)//Lord Creative
  },500)//Lord Creative
  setTimeout(function(){//Lord Creative
  member.removeRole(allordcreative)//Lord Creative
  },500)//Lord Creative
  //Lord Creative
  const emoji = client.emojis.find(emoji => emoji.name === "");//Lord Creative
 let embed = new Discord.RichEmbed()//Lord Creative
 //Lord Creative

}; 

exports.conf = { //Lord Creative
  enabled: true, //Lord Creative
  guildOnly: true, //Lord Creative
  aliases: ['oyuncu','o'], //Lord Creative
  permLevel: 0
}
exports.help = { //Lord Creative
  name: 'k',//Lord Creative
  description: "kayıt etme komutu.",//Lord Creative
  usage: 'k <yeni nick>'//Lord Creative//Lord Creative
}