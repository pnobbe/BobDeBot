const Discord = require('discord.js');
const client = new Discord.Client();
const listedUsers = [
  new User('Goopy', '167637273712656384'),
  new User('Kippie', '123115117062782979'),
  new User('Moron', '201036334033403904'),
  new User('Aroxis', '111277040094687232')
];

let sanitizedUIDs = [];

for(i = 0; i < listedUsers.length; i++) {
  sanitizedUIDs.push(listedUsers[i].uID);
}

function User(uname, uID) {
  this.uname = uname;
  this.uID = uID;
}

client.on('message', msg => {
  if (sanitizedUIDs.indexOf(msg.author.id) > 0) {
    msg.react('🤡');
  }
  console.log(msg.author.id);
  console.log(sanitizedUIDs);
  console.log(sanitizedUIDs.indexOf(msg.author.id));
});

client.login('secret');
