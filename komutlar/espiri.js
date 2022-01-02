const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   message.channel.send(':thinking:  Hemen Yazıyorum... :stuck_out_tongue_winking_eye: ').then(message => {
   var espriler = [' **aynen kardeşim aç kapıyı aras kargo ** ' ,' **yapmicam espri lan banane ** ' ,' **espri bulamadım ** ' ,' **büyük su küçük suya sucuk demiş ** ' ,' **lan bırak espriyi artık yav** ' ,' **napim espriyi** ' ,' **En acı on nedir? Biberon.** ' ,' **Sandalye boş mu? Hayır, Arçelik.** ' ,' **Bok altın olsaydı fakir götsüz doğardı.** ' ,' **Yağmur yağmış, kar peynir!** ' ,' **Seni görünce; \ngözlerim dolar, \nkulaklarım euro** ' ,' **İshal olmuş böceğe ne denir? -Cırcır Böceği**' ,'**Burger King, bende vezir**,'];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
            message.edit(`${espri}`);
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['espiriyap', 'espiri',], // knk virgül ekleyip daha çok ekleyebilirsin bak
  permLevel: 0
};

exports.help = {
  name: 'Espri',
  description: 'Espri Yapar',
  usage: 'Espri'
};
//ama calışmıyo yazıyom