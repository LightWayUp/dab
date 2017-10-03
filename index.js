const Discord = require("discord.js");

const TOKEN = "MzY0Mzk5OTk0MjQyODU5MDA4.DLPNdQ.Pv4Q5dx_LT7z7nTIC1k6_jdxJAI";
const PREFIX = "<o/!";

var fortunes = [
    "Yes.",
    "Ofc.",
    "Go away!",
    ";-;",
    "y u do dis",
    "Ask me later.",
];
var fortunes2 = [
    "LOL",
    "What's the worst thing about throwing a party in space? You have to **PLANET**",
    "Yesterday a clown held the door open for me. I thought it was a nice jester",
    "I was walking through a quarry and said to the foreman, That's a big rock! Boulder, he replied.So I puffed out my chest and shouted: Look at that enormous rock over there!",
    "How do you make antifreeze? Steal her blanket.",
    "It was an emotional wedding. Even the cake was in tiers.",
    "Waffles are just pancakes with abs, duh.",
    "**Deer:** I will fight you with my bear hands! **Bear:** Oh deer...",
    "**Mug:** You look glassy! **Glass Cup:** You look Mugnifficent!",
    "What kind of shorts do clouds wear? Thunderwear.",
    "What do you call a fake noodle? An impasta",
    "Why did a banana go to the doctor? It wasn't peeling well!",
    "ERROR 404: No more puns found. Max reached. jk",
];    

var bot = new Discord.Client(); 

bot.on("ready", function() {
    console.log("Ready");
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase())  {
        case "ping":
            message.channel.sendMessage("Pong!");
            break;
        case "info":
            var embed = new Discord.RichEmbed()
                .addField("Info", "-help (Sends this message)")
                .addField("-8ball (The magic 8ball)", "-puns (Send a random pun. Duh.)")
                .setDescription("Prefix: <o/!")
                .setFooter("Made by Vanished#3101")
                .setImage(lol.png)
                message.channel.sendEmbed(embed);
            break;
        case "8ball":
            if (args[1]) {
                message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
            } else {
            message.channel.sendMessage("Can't read that")
            }
            break;
        case "puns":
        if (args[0]) {
            message.channel.sendMessage(fortunes2[Math.floor(Math.random() * fortunes2.length)]);
        } else {
        message.channel.sendMessage("Can't read that")
        }
            break;
        default:
            message.channel.sendMessage("Invalid command");
    }
});

bot.login(process.env.BOT_TOKEN);
