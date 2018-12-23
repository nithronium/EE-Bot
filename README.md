
# EE-Bot
a Discord bot that uses **node.js**, **discord.js** and **WTF-8 encoding**

WTF-8 allows EE Bot to write special characters such as ö,ç,ş,i,ğ,ü.
# Requirements
You need to have a discord bot and token already set up for this configuration to work. If you don't know how you can set up a discord app please use the guide [here](https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token). After you have created your bot, please save the **TOKEN** as shown on the tutorial.
You also need *node.js*, *discord.js*, *wtf-8* installed on your device.

# Deployment

Install ***node.js version +8.x.x***, then;

Without voice support: `npm install discord.js`
With voice support ([node-opus](https://www.npmjs.com/package/node-opus)): `npm install discord.js node-opus`
With voice support ([opusscript](https://www.npmjs.com/package/opusscript)): `npm install discord.js opusscript`

WTF-8 encoding ([wtf-8](https://www.npmjs.com/package/wtf-8)) : `npm install wtf-8` 

After you have successfully installed *node.js*, *discord.js* and *wtf-8* run the command
`wget https://github.com/nithronium/EE-Bot/raw/master/main.js`

Then edit the **main.js** file. Simply add new commands under the 5th line. An example of adding a new command would be like this;
`var myCommands.set("my_call_text","bot_response_text");`

Also add the **TOKEN** you have when you created the discord bot at the last line of **main.js** file.

Once you have done these changes & additions, run the command;
`node main.js`

Your bot should be running and listening the messages on the server. 


Optionally, you can install *nodemon* for monitoring the changes and seeing the errors live.

If you decide to install [nodemon](https://nodemon.io/), use the command
```npm install -g nodemon```

Then initiate the main.js as
`nodemon --inspect main.js`

# Commands 
There is only one pre-defined command which is ***!commands*** and prints all the commands you have set. This allows users to know what commands they have & they can use. Other than that, all the other commands are up to you.

# Troubleshooting
Please create issue if you have any problems on the code. 
# Roadmap

 - Add support for playing music
 - Add function that gives role with pre-defined color to users who call the command.
 - Add `!suggest parameter`, a command that suggests movie/music/book to user.
 - Add support for bot to send random messages for being more responsive.
 - Add support for bot to upload files for users. Such as PDFs for exams or other stuff.
