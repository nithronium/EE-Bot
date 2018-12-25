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

//New Command !colorme colorname, allows users to get their own color on server
//Define colors below before the code piece in the form of;
// "color-name" : "hex-code-of-color"
var colors = {
	"salmon" : "FA8072",
	"red" : "FF0000",
	"darkred" : "8B0000",
	"golden" : "FFD700"}

client.on('message', msg => {
	var colorrole = msg.content;
	colorrole = colorrole.split(" ");
	if (colorrole[0] === "!colorme")
	{
		var colorexist = Object.keys(colors).includes(colorrole[1]);
		let colorhex = wtf8.decode(wtf8.encode(colorrole[1]));
		colorhex = colors[colorhex];

		if (colorexist) {
			var role = msg.guild.roles.find(r => r.name === colorrole[1]);
			if (!role) {
				msg.guild.createRole({
					name: colorrole[1],
					color: colorhex,
							})
					}
			else {
				console.log("role already exists"); 
				}
		let colorrolename = msg.guild.roles.find(role => role.name === colorrole[1]);
		msg.member.setRoles([colorrolename]).catch(console.error);
			
					}
		else {
			msg.reply(wtf8.decode(wtf8.encode("I am sorry, I don't know what color is this :(")));
			}
	}
});

 
client.login('INSERT_YOUR_TOKEN_HERE');
