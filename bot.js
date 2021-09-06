const Discord = require("discord.js");//Lord Creative
const client = new Discord.Client();//Lord Creative
const ayarlar = require("./ayarlar.json");//Lord Creative
client.queue = new Map();//Lord Creative
const fs = require("fs");//Lord Creative
const db = require("quick.db");//Lord Creative
const moment = require("moment");//Lord Creative//Lord Creative
require("./util/eventLoader")(client);//Lord Creative
//Lord Creative
client.on('guildMemberAdd', async member => {//Lord Creative
  //Lord Creative
  let tag = await db.fetch(`tag_${member.guild.id}`);//Lord Creative
  let tagyazi;//Lord Creative
  if (tag == null) tagyazi = member.setNickname(`${member.user.username}`)//Lord Creative
  else tagyazi = member.setNickname(`${tag} | ${member.user.username}`)//Lord Creative
});//Lord Creative
var prefix = ayarlar.prefix;//Lord Creative
//Lord Creative
const log = message => {//Lord Creative
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);//Lord Creative
};//Lord Creative
//Lord Creative
client.commands = new Discord.Collection();//Lord Creative
client.aliases = new Discord.Collection();//Lord Creative
fs.readdir("./komutlar/", (err, files) => {//Lord Creative
  if (err) console.error(err);//Lord Creative
  files.forEach(f => {//Lord Creative
    let props = require(`./komutlar/${f}`);//Lord Creative
    log(`Yüklenen komut: ${props.help.name}.`);//Lord Creative
    client.commands.set(props.help.name, props);//Lord Creative
    props.conf.aliases.forEach(alias => {//Lord Creative
      client.aliases.set(alias, props.help.name);//Lord Creative
    });//Lord Creative
  });//Lord Creative
});//Lord Creative
//Lord Creative
/////////////////////// KAYIT KOMUTLARI/////////////////////Lord Creative
//Lord Creative//Lord Creative
client.on("guildMemberAdd", (member, message) => {//Lord Creative
  if (member.guild.id !== "819840276397948959") return; // SUNUCU İD LORD CREATİVE //
  let aylartoplam = {//Lord Creative
    "01": "Ocak",//Lord Creative
    "02": "Şubat",//Lord Creative
    "03": "Mart",//Lord Creative
    "04": "Nisan",//Lord Creative
    "05": "Mayıs",//Lord Creative
    "06": "Haziran",//Lord Creative
    "07": "Temmuz",//Lord Creative
    "08": "Ağustos",//Lord Creative
    "09": "Eylül",//Lord Creative
    "10": "Ekim",//Lord Creative
    "11": "Kasım",//Lord Creative
    "12": "Aralık"//Lord Creative
  };
  let aylar = aylartoplam;//Lord Creative
  let user = client.users.get(member.id);//Lord Creative
  require("moment-duration-format");//Lord Creative
  let eskiNick = member.user.username;
  const id = "819897066859790336"; //----------------------------- KANAL ID LORD CREATİVE //-----------------
  const channel = member.guild.channels.get(id);
  const kurulus = new Date().getTime() - user.createdAt.getTime();//Lord Creative
  const gün = moment.duration(kurulus).format("D");//Lord Creative
  var kontrol;//Lord Creative
  if (gün < 7) kontrol = "FAKE ÜYE!";//Lord Creative
  if (gün > 7) kontrol = "Güvenilir Kullanıcı!";//Lord Creative
  channel.send(//Lord Creative
    `Hoşgeldin ${member} seninle ${//Lord Creative
    member.guild.members.size
    } kişiyiz!  \n\n  Kaydının yapılması İsim Nick Yas Yazman gerekli. \n\n  Hesap Kuruluş Zamanı: ${moment(//Lord Creative
      user.createdAt//Lord Creative
    ).format("DD")} ${aylar[moment(user.createdAt).format("MM")]} ${moment(//Lord Creative
      user.createdAt//Lord Creative
    ).format(//Lord Creative
      "YYYY HH:mm:ss"//Lord Creative
    )}  \n\n Bu Kullanıcı: **${kontrol}**\n\n <@&819843998612324355> Rolündeki yetkililer seninle ilgilenecektir.`//Lord Creative
  );//Lord Creative
});//Lord Creative

////////////////////////////////////////////////////////Lord Creative////////////////////////////