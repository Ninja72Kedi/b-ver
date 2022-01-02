const Discord = require('discord.js');
const client = new Discord.Client({ disableMentions: 'everyone' });
const ayarlar = require('./ayarlar.json');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

//küfürler
client.on('message', msg => {
  if (msg.content.toLowerCase() === "amk") {
    msg.delete();
    msg.reply("KÜFÜR ETMEK YASAKTIR :x:")
  }
   if (msg.content.toLowerCase() === "oç") {
    msg.delete();
    msg.reply("KÜFÜR ETMEK YASAKTIR :x:")
  }
  
   if (msg.content.toLowerCase() === "ananı sikim") {
    msg.delete();
    msg.reply("KÜFÜR ETMEK YASAKTIR :x:")
  }
  
  if (msg.content.toLowerCase() === "götünü sikim") {
    msg.delete();
    msg.reply("KÜFÜR ETMEK YASAKTIR :x:")
  }
  
  if (msg.content.toLowerCase() === "amcık") {
    msg.delete();
    msg.reply("KÜFÜR ETMEK YASAKTIR :x:")
  }
  
  
  if (msg.content.toLowerCase() === "oc") {
    msg.delete();
    msg.reply("KÜFÜR ETMEK YASAKTIR :x:")
  }
  //buralara yapıştır
  
  
    if (msg.content.toLowerCase() === "orospu cocugu") {
    msg.delete();
    msg.reply("KÜFÜR ETMEK YASAKTIR :x:")
  }
  
      if (msg.content.toLowerCase() === "ananın dar gotune gireyim") {
    msg.delete();
    msg.reply("KÜFÜR ETMEK YASAKTIR :x:")
  }
  
  
      if (msg.content.toLowerCase() === "amcik") {
    msg.delete();
    msg.reply("KÜFÜR ETMEK YASAKTIR :x:")
  }
  

      if (msg.content.toLowerCase() === "kahbe") {
    msg.delete();
    msg.reply("KÜFÜR ETMEK YASAKTIR :x:")
  }  
  
  
        if (msg.content.toLowerCase() === "karını sikim") {
    msg.delete();
    msg.reply("KÜFÜR ETMEK YASAKTIR :x:")
  }
  
  
        if (msg.content.toLowerCase() === "bacını sikim") {
    msg.delete();
    msg.reply("KÜFÜR ETMEK YASAKTIR :x:")
  }
  
  
        if (msg.content.toLowerCase() === "göt") {
    msg.delete();
    msg.reply("KÜFÜR ETMEK YASAKTIR :x:")
  }
  
  
        if (msg.content.toLowerCase() === "sg") {
    msg.delete();
    msg.reply("KÜFÜR ETMEK YASAKTIR :x:")
  }
  
        if (msg.content.toLowerCase() === "siktir git") {
    msg.delete();
    msg.reply("KÜFÜR ETMEK YASAKTIR :x:")
  }
  
        if (msg.content.toLowerCase() === "ananı yiyim") {
    msg.delete();
    msg.reply("KÜFÜR ETMEK YASAKTIR :x:")
  }
  
  
  
        if (msg.content.toLowerCase() === "anana matkapla girim") {
    msg.delete();
    msg.reply("KÜFÜR ETMEK YASAKTIR :x:")
  }
  
  
  
  
  
  
});//bunun dışına çıkma sakın X
//

//otocevap
client.on ('message', msg => {
  
  //aç
  if (msg.content.toLowerCase() === ayarlar.prefix + "otoaç") {
    if (ayarlar.otoc === "açık") {
      msg.reply("Otocevap zaten açık")
    }
    
    if (ayarlar.otoc != "açık") {
      ayarlar.otoc = "açık"
      msg.reply("Otocevap açıldı")
    }
  }
  
  //kapat
   if (msg.content.toLowerCase() === ayarlar.prefix + "otokapat") {
    if (ayarlar.otoc != "açık") {
      msg.reply("Otocevap zaten kapalı")
    }
    
    if (ayarlar.otoc === "açık") {
      ayarlar.otoc = "kapalı"
      msg.reply("otocevap kapatıldı")
    }
  }
});




//otocevap kelimeler
client.on ('message', msg => {
  if (ayarlar.otoc === "açık") {
    if (msg.content.toLowerCase() === "sa") {
      msg.reply("as")
    }
  }
  
  if (ayarlar.otoc === "açık") {
    if (msg.content.toLowerCase() === "selam") {
      msg.reply("aleyküm selam")
    }
  }

  if (ayarlar.otoc === "açık") {
    if (msg.content.toLowerCase() === "nasılsın") {
      msg.reply("iyi,sen?")
    }
  } 

  if (ayarlar.otoc === "açık") {
    if (msg.content.toLowerCase() === "selamlar") {
      msg.reply("Merhabalar,Hoşgeldin")
    }
  } 

  
    if (ayarlar.otoc === "açık") {
    if (msg.content.toLowerCase() === "günaydın") {
      msg.reply("günaydın")
    }
  } 

     if (ayarlar.otoc === "açık") {
    if (msg.content.toLowerCase() === "iyi akşamlar") {
      msg.reply("iyi akşamlar")
    }
  }  

  
      if (ayarlar.otoc === "açık") {
    if (msg.content.toLowerCase() === "iyi akşamlar gençler") {
      msg.reply("iyi akşamlar")
    }
  } 
  
  
  
  
});
//






//Gif At
client.on ('message', msg => {
  
  if (msg.content.toLowerCase() === ayarlar.prefix + "gif hello") {
    msg.delete();
    msg.reply("https://tenor.com/view/hello-there-private-from-penguins-of-madagascar-hi-wave-hey-there-gif-16043627")
  }

});

//






//level
const snekfetch = require('snekfetch');
let points = JSON.parse(fs.readFileSync('./xp.json', 'utf8'));
var f = [];
function factorial (n) {
  if (n == 0 || n == 1)
    return 1;
  if (f[n] > 0)
    return f[n];
  return f[n] = factorial(n-1) * n;
};
function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}
client.on("message", async message => {
    if (message.channel.type === "dm") return;
  if (message.author.bot) return;
  var user = message.mentions.users.first() || message.author;
  if (!message.guild) user = message.author;
  if (!points[user.id]) points[user.id] = {
    points: 0,
    level: 0,
  };
  let userData = points[user.id];
  userData.points++;
  let curLevel = Math.floor(0.1 * Math.sqrt(userData.points));
  if (curLevel > userData.level) {
    userData.level = curLevel;
        var user = message.mentions.users.first() || message.author;
message.channel.send(`👌**| ${user.username} Başarı İle Level Atladın 😎😎**`)
    }
fs.writeFile('./xp.json', JSON.stringify(points), (err) => {
    if (err) console.error(err)
  })

   if (message.content.toLowerCase() === "level") {
    message.reply(`\n**Ad** ${user.username}\n**Seviye:** ${userData.level}\n**EXP:** ${userData.points}`)
     
  }
})
//


//etiketlenince
client.on("message",message=>{
    if(message.content ===`<@!${client.user.id}>`) return message.channel.send(`Etiketleme meşgulum`);
})
//

client.on("message", msg=> {
    if (msg.content.toLowerCase() === "kurallar") {
      msg.reply('**Kurallar**: ✅  Kurallar için lütfen kurallar kanalına göz atın...')
    }
});






const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});
client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.on('ready', () => {


  
  

  
  // Oynuyor Kısmı
  
      var actvs = [
        `${prefix}yardım ${client.guilds.cache.size} sunucuyu`,
        `${prefix}yardım ${client.users.cache.size} Kullanıcıyı`, 
        `${prefix}yardım`
    ];
    
    client.user.setActivity("Know Bot:https://discord.gg/3BttZWdtKK");
    
  
      console.log ('_________________________________________');
      console.log (`Kullanıcı İsmi     : ${client.user.username}`);
      console.log (`Sunucular          : ${client.guilds.cache.size}`);
      console.log (`Kullanıcılar       : ${client.users.cache.size}`);
      console.log (`Prefix             : ${ayarlar.prefix}`);
      console.log (`Durum              : Bot Çevrimiçi!`);
      console.log ('_________________________________________');
    
    });


client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

client.login(process.env.token);
 
client.on("ready", () => {
  client.channels.cache.get("924307763851591759").join();   
})