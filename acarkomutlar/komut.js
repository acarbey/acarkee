const Discord = require('discord.js');
const db = require('quick.db');
const acar = require('../ayarlar.json');
exports.run = async (client, message, args) => {

 if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Guard hatası: x03-He')
  if (!args[0]) return message.channel.send(`Bot kontrolü sağlamak için .guard kontrol veya .guard kontrol 1 ile 6 ya kadar yazarak botları kontrol edebilirsiniz.`)
  if (args[0] !== 'kontrol' && args[0] !== 'ekle') return message.channel.send(`Botları kontrol edemiyorum.`)

    if (args[0] == 'kontrol') {
    let i = await db.fetch(`küfürFiltre_${message.guild.id}`)
  message.channel.send(`Bütün Guard botları şuan da sorunsuz çalışıyor.`).then(msg => msg.delete(2000));    
     
  } 

  if (args[0] == 'ekle' ) {
  
  message.channel.send(`Başarıyla IDyi yetkili ve üst yönetim olarak kayıt ettim.`).then(msg => msg.delete(5000));
  
  }
 
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["guard"],
  permLvl: 4
};
exports.help = {
  name: "guard",
  description: "Kod test etmek için kullanılır.",
  usage: "guard"
};
exports.acar = {
    acardizini: 'acar-guard.js',
    acarprefix: acar.prefix,
};