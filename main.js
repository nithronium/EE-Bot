const wtf8 = require('wtf-8');
const Discord = require('discord.js');
const client = new Discord.Client();

var myCommands = new Map();

myCommands.set("ping", "pong");
myCommands.set("hey bot!", "hey human!");


client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 });


client.on('message', msg => {
  if (msg.content === "!commands") {
	  var command_list = "```";
	  for (const entry of myCommands.entries()) {
		  command_list = command_list + wtf8.decode(wtf8.encode(entry[0])) + "  -  " + wtf8.decode(wtf8.encode(entry[1])) + "\n \n";
		  }
		command_list = command_list + "```";
	  msg.reply(command_list); 
  }
  else {
 for (const entry of myCommands.entries()) {
  if (msg.content === entry[0]) {
 msg.reply(wtf8.decode(wtf8.encode(entry[1])));
  }} }
}
 );


 
client.login('INSERT_YOUR_TOKEN_HERE');