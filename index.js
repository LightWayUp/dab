const Discord = require("discord.js");

const TOKEN = "MzY0Mzk5OTk0MjQyODU5MDA4.DLz-6w.UmHDyyvLiZC-DJzwWZJnthJD6mo";
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
    "I wasn't originally going to get a brain transplant, but then I changed my mind.",
    "Yesterday I accidentally swallowed some food coloring. The doctor says I'm OK, but I feel like I've dyed a little inside.",
    "Did you hear about the guy whose whole left side was cut off? He's all right now.",
    "I'd tell you a chemistry joke but I know I wouldn't get a reaction.",
    "I wondered why the baseball was getting bigger. Then it hit me.",
    "Why don't some couples go to the gym? Because some relationships don't work out.",
    "A friend of mine tried to annoy me with bird puns, but I soon realized that toucan play at that game.",
    "Have you ever tried to eat a clock? It's very time consuming.",
    "Did you hear about the guy who got hit in the head with a can of soda? He was lucky it was a soft drink.",
    "When notes get in treble, bass-ically they get put behind bars. The alto-nate punishment is to push them off a clef and hope they land flat on sharp objects.",
];    

var bot = new Discord.Client(); 

bot.on("ready", function() {
    console.log("Ready");
    
bot.user.setGame("<o/!info | Donate: paypal.me/VanishedP")

});

bot.on("guildMemberAdd", function(member) {
    member.guild.channels.find("name", "general").sendMessage(member.toString() + " Welcome to this server! :ok_hand:");

});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase())  {
        case "ping":
                message.channel.send("**Pinging...**");
                message.channel.send("**Pong!**" + "`" + bot.ping + "ms" + "`");
            break;
        case "info":
            var embed = new Discord.RichEmbed()
                .addField("Info", "-help (Sends this message)")
                .addField("-8ball (The magic 8ball)", "-puns (Send a random pun. Duh.)")
                .addField("-avatar (Send a pic of your profile pic. Yes, that makes sense.)", "-noticeme (Notices you. wink wink)")
                .addField("-ping (Ping! Pong!)", "Comin soon bud!")
                .setDescription("Prefix: <o/!")
                .setFooter("Made by Vanished#3101")
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
        message.channel.sendMessage("Hm.")
        }
            break;
        case "avatar":
        message.channel.sendMessage(message.author.avatarURL);
            break;
        case "noticeme":
        if (args[0]) {
            message.channel.sendMessage("Nope, son.");
        } else {
        message.channel.sendMessage("smh")
        }
            break;
        case "invite":
            message.channel.sendMessage("https://discordapp.com/oauth2/authorize?client_id=364399994242859008&scope=bot&permissions=20040010000");
            break;
        case "dmspam":
        if (args[1]) {
            message.channel.send("**Damn, son...** " + args[1] + " got DM spammed by <@" + message.author.id + "> 0-0");
        } else {
        message.channel.sendMessage(":face_palm: Mention someone, son!")
        }
            break;
        case "profile":
            var embed = new Discord.RichEmbed()
                .addField("<o/", "Profile card for <@" + message.author.id + ">")
                .addField("Last message:", + message.author.content)
                message.channel.sendEmbed(embed);
            break;
        case "dmhelp":
            var embed = new Discord.RichEmbed()
                .addField("Info", "-help (Sends this message)")
                .addField("-8ball (The magic 8ball)", "-puns (Send a random pun. Duh.)")
                .addField("-avatar (Send a pic of your profile pic. Yes, that makes sense.)", "-noticeme (Notices you. wink wink)")
                .setDescription("Prefix: <o/!")
                .setFooter("Made by Vanished#3101")
                message.author.sendEmbed(embed);
                message.channel.sendMessage("Help sent in dms! :wink:")
            break;
        case "test":
            message.channel.sendMessage("Zis iz a testz :wink:")
        default:
            message.channel.sendMessage("I do not recognize that. Use <o/!info to get the list of commands.");
    }
});

bot.login(process.env.BOT_TOKEN);
