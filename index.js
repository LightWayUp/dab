const Discord = require("discord.js");
const dbl = require(`discord-bot-list`)
const ms = require("ms");
const economy = require("discord-eco");
const snekfetch = require('snekfetch');
var Jimp = require("jimp");

const PREFIX = "<!";

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
var funny = [
    "https://i.imgur.com/zlWQJhx.gif",
    "https://i.imgur.com/Byx8snE.gifv",
    "https://i.imgur.com/hyKq3.gif",
    "https://i.imgur.com/kxCQ45H.gif",
    "https://i.imgur.com/2J59oyN.gif",
    "https://i.imgur.com/SdCGqW4.gif",
    "https://i.imgur.com/LbXQT.gif",
    "https://imgur.com/BsmAFmi",
    "https://imgur.com/nnnw3JF",
    "https://imgur.com/URDe5ps",
    "https://i.imgur.com/1xN7Hmv.gif",
    "https://i.imgur.com/ZYXMkP1.gif",
    "https://i.imgur.com/hEn5ffE.gif",
    "https://imgur.com/kKI054R",
    "https://imgur.com/tVrlkSH",
    "https://i.imgur.com/sF66Yv5.jpg",
    "https://imgur.com/fPs0Ien",
    "https://i.imgur.com/2yu8zDa.jpg",
    "https://imgur.com/dyA2OWJ",
    "https://i.imgur.com/aDMJODQ.gif",
    "https://imgur.com/tunarZ1",
    "https://i.imgur.com/Un1beKw.jpg",
    "https://imgur.com/dt8ISHk",
];
var rps = [
    ":raised_hand:",
    ":fist:",
    ":v:",
    ":raised_hand:",
    ":fist:",
    ":v:",
    ":raised_hand:",
    ":fist:",
    ":v:",
];
var dice = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "50",
    "51",
];
var workbot = [
    "A dab mascot in Wallmart™.",
    "A fan.",
    "A jumping potato.",
    "A parrot stuck in a snowflake.",
    "A kissing poop emoji.",
    "A bandwidth saver.",
    "A garbage bin.",
    "A 404 Error on Google.",
    "A server raider on Skype™.",
];
var money = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
];
var cookie = [
    "I will beat you in Rock Paper Scissors...",
    "You will talk to a dab.",
    "You will use Discord.",
    "You will get a 404 error on Google.",
    "You will use this bot.",
    "You will blahblahblah.",
    "Someone will beat you in something.",
];

var bot = new Discord.Client(); 

bot.on("ready", function() {
    console.log("<o/");

bot.user.setGame("<!info | Dabbing for " + bot.guilds.size + " servers.")
       
});

bot.on("ready", function() {
    console.log("Server Count: " + bot.guilds.size);

});

bot.on("message", function(message) {
    if (message.content.startsWith("S: ")) message.react("❌") + message.react("⭕") ;

});

bot.on("message", function(message) {
    if (message.content.startsWith("<@364399994242859008>")) message.channel.send("Hello! To get the list of my commands type in: **<!info**!") ;

});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase())  {
        case "ping":
               message.channel.send("**Pinging.**").then((message)=>{
                        message.edit("**Pinging..**")
                            message.edit("**Pinging...**")
                                message.edit("**Pinging.**")
                                    message.edit("**Pinging..**")
                                        message.edit("**Pong!** " + "`" + bot.ping.toFixed() + "ms" + "`")});
            break;
        case "8ball":
            if (args[1]) {
                message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
            } else {
            message.channel.sendMessage("A question, please.")
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
        const snekfetchh = require('snekfetch');
        
        const urll = message.author.avatarURL;
        snekfetchh.get(urll)
            .then(r=>message.channel.send("", {files:[{attachment: r.body}]}));
            break;
        case "noticeme":
        if (args[0]) {
            message.channel.sendMessage("Nope, son.");
        } else {
        message.channel.sendMessage("smh")
        }
            break;
        case "profile":
             var embed = new Discord.RichEmbed()
                .addField("<o/", "Profile card for <@" + message.author.id + ">")
                .setThumbnail(message.author.avatarURL)
                .addField("Discord Username:", message.author.username)
                .addField("Discord #:", message.author.tag)
                .addField("Last message sent:", message.author.lastMessage)
                .addField("Discord User ID:", message.author.id)
                message.channel.send(embed)
            break;
        case "dminfo":
            var embed = new Discord.RichEmbed()
                .addField("Info", "`<!info-general` (Get the list of general commands.)")
                .addField("-", "`<!info-misc` (Get the list of misc commands.)")
                .addField("-", "`<!info-bot` (Get the list of info commands.)")
                .addField("-", "`<!info-rp` (Get the list of roleplay commands.)")
                .addField("-", "`<!info-mod` (Get the list of moderation commands.)")
                .addField("-", "`<!info-games` (Get the list of games commands.)")
                .addField("-", "`<!info-eco` (Get the list of economy commands.)")
                .addField("-", "`<!info-image` (Get the list of image commands.)")
                .addField("-", "`<!info-search` (Get the list of search commands.)")
                .addField("-", "`<!info-mc` (Get the list of minecraft commands.)")
                .addField("-", "`<!info-math` (Get the list of math commands.)")
                .addField("-", "`<!info-im` (Get the list of image manipulation commands.)")
                .setDescription("Prefix: <!")
                .setFooter("Made by Vanished#3101")
                message.author.sendEmbed(embed);
        case "1111":
            var embed = new Discord.RichEmbed()
                .addField("General Commands", "`<!info` (Send the list of commands.)")
                .addField("-", "`<!invite` (Sends you the link to invite <o/.)")
                .addField("-", "`<!donate` (Send you the donate link to support <o/.)")
                .setFooter("<o/")
                message.author.sendEmbed(embed);
        case "11111":
            var embed = new Discord.RichEmbed()
                .addField("Misc Commands", "`<!avatar` (Gives you a nice pic of your avatar.)")
                .addField("-", "`<!8ball` (The magic 8ball!.)")
                .addField("-", "`<!puns` (Sends a pun. Duh.)")
                .addField("-", "`<!profile` (Shows your profile card.)")
                .addField("-", "`<!ping` (Check your ping!)")
                .addField("-", "`<!noticeme` (It simply notices you.)")
                .setFooter("<o/")
                message.author.sendEmbed(embed);
        case "11112":
            var embed = new Discord.RichEmbed()
                .addField("Roleplay Commands", "`<!dmspam` (A roleplay command.)")
                .addField("-", "`<!roundhousekick` (A roleplay command.)")
                .addField("-", "`<!poop` (A roleplay command.)")
                .addField("-", "`<!cry` (A roleplay command.)")
                .addField("-", "`<!punch` (A roleplay command.)")
                .addField("-", "`<!eat` (A roleplay command.)")
                .addField("-", "`<!drink` (A roleplay command.)")
                .addField("-", "`<!sneeze` (A roleplay command.)")
                .addField("-", "`<!dab` (A roleplay command.)")
                .addField("-", "`<!breath` (A roleplay command.)")
                .setFooter("<o/")
                message.author.sendEmbed(embed);
        case "11113":
            var embed = new Discord.RichEmbed()
                .addField("Bot Info Commands", "`<!botinfo`,`<!botstatus` (Gives you the current bot info.)")
                .addField("-", "`<!hostinfo`,`<!hoststatus` (Gives you the current host info.)")
                .setFooter("<o/")
                message.author.sendEmbed(embed);
        case "11114":
            var embed = new Discord.RichEmbed()
                .addField("Moderation Commands", "`<!kick` (A moderator kick command.)")
                .addField("-", "`<!ban` (A moderator ban command.)")
                .addField("-", "`<!unban` (A moderator unban command.)")
                .addField("-", "`<!mute` (A moderator mute command.)")
                .addField("-", "`<!clear` (A moderator message clear command.)")
                .setFooter("<o/")
                message.author.sendEmbed(embed);
        case "11115":
            var embed = new Discord.RichEmbed()
                .addField("Games Command List", "`<!8ball` (The mythical 8ball.)")
                .addField("-", "`<!rps` (A rock-paper-scissors game.)")
                .addField("-", "`<!dice` (A dice roll game.)")
                .addField("-", "`<!cookie` (A fortune cookie game.)")
                .setFooter("<o/")
                message.author.sendEmbed(embed);
        case "11116":
            var embed = new Discord.RichEmbed()
                .addField("Economy Command List", "`<!bal`,`<!balance` (Check your server balance.)")
                .addField("-", "`<!work` (Work for money.)")
                .setFooter("<o/")
                message.author.sendEmbed(embed);
        case "11117":
            var embed = new Discord.RichEmbed()
                .addField("Image Command List", "`<!funny` (Sends a random pic of something funny.)")
                .addField("-", "`<!funny` (Sends a random pic of something funny.)")
                .setFooter("<o/")
                message.author.sendEmbed(embed);
        case "11118":
            var embed = new Discord.RichEmbed()
                .addField("Search Command List", "`<!youtube` (Search up YouTube.)")
                .addField("-", "`<!google` (Search up Google.)")
                .addField("-", "`<!imgur` (Search up something on Imgur.)")
                .setFooter("<o/")
                message.author.sendEmbed(embed);
        case "11119":
             var embed = new Discord.RichEmbed()
                .addField("Minecraft Commands", "`<!achievement` (A minecraft achievement image generator.)")
                .addField("-", "`<!skin` (Shows you a Minecraft skin.)")
                .setFooter("<o/")
                message.author.sendEmbed(embed);
        case "11120":
             var embed = new Discord.RichEmbed()
                .addField("Math Commands", "`<!plus` (A math plus command.)")
                .addField("-", "`<!minus` (A math minus command.)")
                .addField("-", "`<!multiply` (A math multiply command.)")
                .addField("-", "`<!divide` (A math divide command.)")
                .setFooter("<o/")
                message.author.sendEmbed(embed);
        case "11121":
             var embed = new Discord.RichEmbed()
                .addField("Image Manipulation Commands", "`<!greyscale` (An image greyscale command.)")
                .addField("-", "`<!contrast` (An image contrast command.)")
                .addField("-", "`<!blur` (An image blur command.)")
                .addField("-", "`<!pixelate` (An image pixelate command.)")
                .setFooter("<o/")
                message.author.sendEmbed(embed);
            break;
        case "info":
            var embed = new Discord.RichEmbed()
                .addField("Info", "`<!info-general` (Get the list of general commands.)")
                .addField("-", "`<!info-misc` (Get the list of misc commands.)")
                .addField("-", "`<!info-bot` (Get the list of info commands.)")
                .addField("-", "`<!info-rp` (Get the list of roleplay commands.)")
                .addField("-", "`<!info-mod` (Get the list of moderation commands.)")
                .addField("-", "`<!info-games` (Get the list of games commands.)")
                .addField("-", "`<!info-eco` (Get the list of economy commands.)")
                .addField("-", "`<!info-image` (Get the list of image commands.)")
                .addField("-", "`<!info-mc` (Get the list of minecraft commands.)")
                .addField("-", "`<!info-math` (Get the list math commands.)")
                .addField("-", "`<!info-im` (Get the list of image manipulation commands.)"
                .setDescription("Prefix: <!")
                .setFooter("Made by Vanished#3101")
                message.channel.sendEmbed(embed);
            break;
        case "info-general":
            var embed = new Discord.RichEmbed()
                .addField("General Commands", "`<!info` (Send the list of commands.)")
                .addField("-", "`<!invite` (Sends you the link to invite <o/.)")
                .addField("-", "`<!donate` (Send you the donate link to support <o/.)")
                .setFooter("<o/")
                message.channel.sendEmbed(embed);
            break;
        case "info-misc":
            var embed = new Discord.RichEmbed()
                .addField("Misc Commands", "`<!avatar` (Gives you a nice pic of your avatar.)")
                .addField("-", "`<!puns` (Sends a pun. Duh.)")
                .addField("-", "`<!profile` (Shows your profile card.)")
                .addField("-", "`<!ping` (Check your ping!)")
                .addField("-", "`<!noticeme` (It simply notices you.")
                .setFooter("<o/")
                message.channel.sendEmbed(embed);
            break;
        case "info-rp":
                var embed = new Discord.RichEmbed()
                    .addField("Roleplay Commands", "`<!dmspam` (A roleplay command.)")
                    .addField("-", "`<!roundhousekick` (A roleplay command.)")
                    .addField("-", "`<!poop` (A roleplay command.)")
                    .addField("-", "`<!cry` (A roleplay command.)")
                    .addField("-", "`<!punch` (A roleplay command.)")
                    .addField("-", "`<!eat` (A roleplay command.)")
                    .addField("-", "`<!drink` (A roleplay command.)")
                    .addField("-", "`<!sneeze` (A roleplay command.)")
                    .addField("-", "`<!dab` (A roleplay command.)")
                    .addField("-", "`<!breath` (A roleplay command.)")
                    .setFooter("<o/")
                    message.channel.sendEmbed(embed);
            break;
        case "info-bot":
                var embed = new Discord.RichEmbed()
                    .addField("Bot Info Commands", "`<!botinfo`,`<!botstatus` (Gives you the current bot info.)")
                    .addField("-", "`<!hostinfo`,`<!hoststatus` (Gives you the current host info.)")
                    .setFooter("<o/")
                    message.channel.sendEmbed(embed);
            break;
        case "info-mod":
            var embed = new Discord.RichEmbed()
                .addField("Moderation Commands", "`<!kick` (A moderator kick command.)")
                .addField("-", "`<!ban` (A moderator ban command.)")
                .addField("-", "`<!unban` (A moderator unban command.)")
                .addField("-", "`<!mute` (A moderator mute command.)")
                .addField("-", "`<!clear` (A moderator message clear command.)")
                .setFooter("<o/")
                message.channel.sendEmbed(embed);
            break;
        case "info-games":
            var embed = new Discord.RichEmbed()
                .addField("Games Command List", "`<!8ball` (The mythical 8ball.)")
                .addField("-", "`<!rps` (A rock-paper-scissors game.)")
                .addField("-", "`<!dice` (A dice roll game.)")
                .addField("-", "`<!cookie` (A fortune cookie game.)")
                .setFooter("<o/")
                message.channel.sendEmbed(embed);
            break;
        case "info-eco":
            var embed = new Discord.RichEmbed()
                .addField("Economy Command List", "`<!bal`,`<!balance` (Check your server balance.)")
                .addField("-", "`<!work` (Work for money.)")
                .setFooter("<o/")
                message.channel.sendEmbed(embed);
            break;
        case "info-image":
            var embed = new Discord.RichEmbed()
                .addField("Image Command List", "`<!funny` (Sends a random pic of something funny.)")
                .addField("-", "`<!funny` (Sends a random pic of something funny.)")
                .setFooter("<o/")
                message.channel.sendEmbed(embed);
            break;
        case "info-search":
            var embed = new Discord.RichEmbed()
                .addField("Search Command List", "`<!youtube` (Search up something on YouTube.)")
                .addField("-", "`<!google` (Search up something on Google.)")
                .addField("-", "`<!imgur` (Search up something on Imgur.)")
                .setFooter("<o/")
                message.channel.sendEmbed(embed);
            break;
        case "info-mc":
             var embed = new Discord.RichEmbed()
                .addField("Minecraft Commands", "`<!achievement` (A minecraft achievement image generator.)")
                .addField("-", "`<!skin` (Shows you a Minecraft skin.)")
                .setFooter("<o/")
            break;
        case "info-math":
             var embed = new Discord.RichEmbed()
                .addField("Math Commands", "`<!plus` (A math plus command.)")
                .addField("-", "`<!minus` (A math minus command.)")
                .addField("-", "`<!multiply` (A math multiply command.)")
                .addField("-", "`<!divide` (A math divide command.)")
                .setFooter("<o/")
                message.channel.sendEmbed(embed);
            break;
        case "info-im":
             var embed = new Discord.RichEmbed()
                .addField("Image Manipulation Commands", "`<!greyscale` (An image greyscale command.)")
                .addField("-", "`<!contrast` (An image contrast command.)")
                .addField("-", "`<!blur` (An image blur command.)")
                .addField("-", "`<!pixelate` (An image pixelate command.)")
                .setFooter("<o/")
                message.channel.sendEmbed(embed);
            break;
        case "test":
            message.channel.sendMessage("Zis iz a testz :wink:")
            break;
        case "funny":
        if (args[0]) {
            message.channel.sendMessage(funny[Math.floor(Math.random() * funny.length)]);
            message.channel.sendMessage(":joy:")
        } else {
        message.channel.sendMessage("FUNNEYZ LOL")
        }
            break;
        case "botstatus":
        case "botinfo":
            var embed = new Discord.RichEmbed()
                .addField("Bot Info", "<o/")
                .addField("Bot Status:", "Stable", true)
                .addField("Memory Status:", "Stable", true)
                .addField("GitHub Repo Status:", "Updated", true)
                .addField("Host Status:", "Unknown", true)
                .addField("Server Count:", bot.guilds.size, true)
                .addField("Bot Libary:", "discord.js", true)
                .addField("Total Users:", + bot.users.size, true)
                .addField("Bot Ping:", bot.ping.toFixed(), true)
                .addField("Total Channels:", + bot.channels.size, true)
                .setDescription("<o/")
                .setFooter("<o/")
                message.channel.sendEmbed(embed);
            break;
        case "donate":
            var embed = new Discord.RichEmbed()
                .addField("<o/", "Donate to us via PayPal!")
                .addField("PayPal Link:", "https://www.paypal.me/VanishedP")
                .setFooter("<o/")
                message.channel.sendEmbed(embed);
            break;
        case "repo":
            var embed = new Discord.RichEmbed()
                .addField("<o/", "Open Source Code")
                .addField("GitHub Link:", "https://github.com/VanishedP/dab")
                .setFooter("<o/")
                message.channel.sendEmbed(embed);
            break;
        case "invite":
            var embed = new Discord.RichEmbed()
                .addField("<o/", "Invite me to your server!")
                .addField("Invite Link:","https://discordbots.org/bot/364399994242859008")
                .setFooter("<o/")
                message.channel.sendEmbed(embed);
            break;
        case "afk":
        if (args[1]) {
            message.channel.sendMessage("<@" + message.author.id + "> I set your **AFK**:" + " " + args[1])
        } else {
            message.channel.sendMessage(":face_palm: You gotta tell me why u are gonna be **AFK**!")
        }
            break;
        case "hoststatus":
        case "hostinfo":
            var embed = new Discord.RichEmbed()
                .addField("Host Status", "<o/")
                .addField("Host:", "Heroku", true)
                .addField("Slug Size:", "14.9 MB of 500 MB", true)
                .addField("Framework:", "Node.js", true)
                .addField("Web Status:", "OFF", true)
                .addField("Worker Status", "ON", true)
                .addField("Owner(s):", "Vanished#3101", true)
                .setFooter("Made by Vanished#3101")
                message.channel.sendEmbed(embed);
            break;
        case "kick":
        if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("You are not allowed to execute this command!");
        if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")) return message.reply("I do not have the **KICK_MEMBERS** permission.");
        let user = message.mentions.users.first();
        let reason = message.content.split(" ").slice(2).join(" ");
        let modlog = bot.channels.find("name", "mod-log");

        if(!modlog) return message.reply("This server doesent have the mod-log channel!");
        if (message.mentions.users.size < 1) return message.reply(":face_palm: Mention someone please.");
        if(!reason) return message.reply ("Give me a reason for your kick.");
        if (!message.guild.member(user).kickable) return message.reply("I cant kick someone if it has a higher role than me!");

        message.guild.member(user).kick();

        message.delete()
        var modlogs = new Discord.RichEmbed()
        .setAuthor(`${user.username} is kicked`, user.displayAvatarURL)
        .addField("Kick Information:", `**Kicked User:** ${user.tag}\n**Moderator:** ${message.author.tag}\n**Reason:** ${reason}`);
        message.channel.sendEmbed(modlogs);
        modlog.send({
        })
            break;
        case "ban":
        if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("You are not allowed to execute this command!");
        if(!message.guild.member(bot.user).hasPermission("BAN_MEMBERS")) return message.reply("I do not have the **BAN_MEMBERS** permission.");
        let userr = message.mentions.users.first();
        let reasonn = message.content.split(" ").slice(2).join(" ");
        let modlogg = bot.channels.find("name", "mod-log");

        if(!modlogg) return message.reply("This server doesent have the mod-log channel!");
        if (message.mentions.users.size < 1) return message.reply(":face_palm: Mention someone please.");
        if(!reasonn) return message.reply ("Give me a reason for your ban.");
        if (!message.guild.member(userr).bannable) return message.reply("I cant kick someone if it has a higher role than me!");

        message.guild.member(userr).ban();

        message.delete()
        var modlogss = new Discord.RichEmbed()
        .setAuthor(`${userr.username} is banned`, userr.displayAvatarURL)
        .addField("Ban Information:", `**Banned User:** ${userr.tag}\n**Moderator:** ${message.author.tag}\n**Reason:** ${reasonn}`);
        message.channel.sendEmbed(modlogss);
        modlogg.send({
        })
            break;
        case "unban":
        if (args[2]) {
        if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("You are not allowed to execute this command!");
        if(!message.guild.member(bot.user).hasPermission("BAN_MEMBERS")) return message.reply("I do not have the **BAN_MEMBERS** permission.");
        let userrr = message.mentions.users.first();
        let reasonnn = message.content.split(" ").slice(2).join(" ");
        let modloggg = bot.channels.find("name", "mod-log");

        if(!modloggg) return message.reply("This server doesent have the mod-log channel!");
        if(!reasonnn) return message.reply ("Give me a reason for your unban.");

        message.guild.unban(args[1])

        message.delete()
        var modlogssss = new Discord.RichEmbed()
        .setAuthor(`User 372104600280367105 is unbanned`)
        .addField("Unban Information:", `**Unbanned User:** 372104600280367105\n**Moderator:** ${message.author.tag}\n**Reason:** ${reasonnn}`);
        message.channel.sendEmbed(modlogssss);
        modloggg.send({
        })
        } else {
        message.channel.send(":face_palm: Give me the tag of the banned user and give me a reason for the unban!")
        }
            break;
        case "rps":
        if (args[1]) {
            message.channel.sendMessage("I choose: **" + rps[Math.floor(Math.random() * rps.length)] + "**. You choose: **" + args[1] + "**. I win! :tada: I do not care about the rules.");
        } else {
        message.channel.sendMessage("What do you choose?")
        }
            break;
        case "nick":
            message.guild.member(bot.user).setNickname('kiss me')
            break;
        case "mute":
        if(!message.guild.member(message.author).hasPermission("MUTE_MEMBERS")) return message.reply("You are not allowed to execute this command!");
        if(!message.guild.member(bot.user).hasPermission("MUTE_MEMBERS")) return message.reply("I do not have the **MUTE_MEMBERS** permission.");
        let member = message.mentions.members.first();
        if(!member) return message.reply(":face_palm: Mention someone!");
        let muteRole = message.guild.roles.find("name", "Muted");
        if(!muteRole) return message.reply("Please create a role called **Muted** without any permissions.");
        let params = message.content.split(" ").slice(1);
        let time = params[1];
        if(!time) return message.reply("Please provide a time. **Example:** <!mute @Vanished#3101 3m");
        let muteh = message.content.split(" ").slice(3).join(" ");
        if(!muteh) return message.reply ("Give me a reason for your mute.");

        member.addRole(muteRole.id);
        message.delete()
        var mute = new Discord.RichEmbed()
        .setAuthor(`User ${member.user.username} is muted`)
        .addField("Mute Information:", `**Muted User:** ${member.user.tag}\n**Moderator:** ${message.author.tag}\n**Reason:** ${muteh}\n**Time:** ${ms(ms(time), {long: true})}`);
        message.channel.sendEmbed(mute);

        setTimeout(function() {
            member.removeRole(muteRole.id);
            message.author.sendMessage(`**${member.user.username}** is now unmuted. Mute time: ${ms(ms(time), {long: true})}`);
        }, ms(time));
             break;
        case "bal":
        case "balance":
        economy.fetchBalance(message.author.id + message.guild.id).then((i) => {
            const embed = new Discord.RichEmbed()
                .setDescription(`**${message.author.username}'s** Bank`)
                .addField(`Account Owner:`,message.author.username,true)
                .addField(`Account Balance:`,i.money,true)
            message.channel.send({embed});
        })
              break;
        case "dice":
            message.channel.sendMessage("**Rolling...**")
            message.channel.sendMessage("**Rolled!** You rolled **" + dice[Math.floor(Math.random() * dice.length)] + "**! I rolled **" + dice[Math.floor(Math.random() * dice.length)] + "**. <:dice:373895915414618112>");
            break;
        case "work":
        let defineduser = ``;
            defineduser = message.author.id;
        economy.updateBalance(defineduser + message.guild.id, parseInt(dice[Math.floor(Math.random() * dice.length)])).then((i) => {
        });
        const workk = new Discord.RichEmbed()
                .setDescription(`Work Receipt`)
                .addField(`Worked as:`,workbot[Math.floor(Math.random() * workbot.length)])
            message.channel.send(workk);
            break;
        case "cookie":
        let defined = ``;
            defined = message.author.id;
        economy.updateBalance(defined + message.guild.id, parseInt(dice[Math.floor(Math.random() * dice.length)])).then((i) => {
        });
        const workkkk = new Discord.RichEmbed()
                .setDescription(`Fortune Cookie says:`)
                .addField(`🍪`,cookie[Math.floor(Math.random() * cookie.length)])
                .setFooter("You got money from the cookie!")
            message.channel.send(workkkk);
            break;
        case "google":
        if (args[1]) {
        let gs = message.content.split(" ").slice(1).join("%20");
        message.channel.send(`<:g_:376454342796115978> Google Search Link:\nhttps://www.google.ba/search?dcr=0&ei=V7r8WdqkHIura9SjiNgP&q=${gs}`);
        } else {
           message.channel.send("Please provide a search query.");
        }
            break;
        case "youtube":
        if (args[1]) {
        let yts = message.content.split(" ").slice(1).join("+");
        message.channel.send(`<:yt:376453183532171274> YouTube Search Link:\nhttps://www.youtube.com/results?search_query=${yts}`);
        } else {
           message.channel.send("Please provide a search query.");
        }
            break;
        case "achievement":
        const snekfetch = require('snekfetch');
        let [title, contents] = args.join(" ").split("|");
        if(!contents) {
            [title, contents] = ["Achievement Get!", title];
        }
        let achieve = "Achievement+Get!"
        let line = message.content.split(" ").slice(1).join("+");
        let rnd = Math.floor((Math.random() * 39) + 1);
        if(args.join(" ").toLowerCase().includes("burn")) rnd = 38;
        if(args.join(" ").toLowerCase().includes("cookie")) rnd = 21;
        if(args.join(" ").toLowerCase().includes("cake")) rnd = 10;
          
        if(title.length > 22 || contents.length > 22) return message.edit("Max Length: 22 Characters.").then(message.delete.bind(message), 2000);
        const url = `https://www.minecraftskinstealer.com/achievement/a.php?i=${rnd}&h=${achieve}&t=${line}`;
        snekfetch.get(url)
            .then(r=>message.channel.send("", {files:[{attachment: r.body}]}));
            message.delete();
            break;
        case "clear":
        if(!message.guild.member(message.author).hasPermission("MUTE_MEMBERS")) return message.reply("You are not allowed to execute this command!");
        if(!message.guild.member(bot.user).hasPermission("MUTE_MEMBERS")) return message.reply("I do not have the **MUTE_MEMBERS** permission.");
        const userrr = message.mentions.users.first();
        const amount = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[2])
        if (!amount) return message.reply('Please specify a number of messages to delete! (1-100)');
        message.channel.fetchMessages({
         limit: amount,
        }).then((messages) => {
         if (userrr) {
         const filterBy = userrr ? userrr.id : Client.userrr.id;
         messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
         }
         message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
         message.reply('Cleared **' + args[1] + '** messages! :wastebasket:')
        });
            break;
        case "imgur":
        if (args[1]) {
        let im = message.content.split(" ").slice(1).join("+");
        message.channel.send(`<:imgur:377096709505024004> Imgur Search Link:\nhttps://https://imgur.com/search/score?q=${im}`);
        } else {
           message.channel.send("Please provide a search query.");
        }
            break;
        case "skin":
        if (args[1]) {
        const snekfetch = require('snekfetch');
        let skins = message.content.split(" ").slice(1).join("");
        const urll = `https://www.minecraftskinstealer.com/skin.php?u=${skins}&s=700`;
        snekfetch.get(urll)
         .then(r=>message.channel.send("", {files:[{attachment: r.body}]}));
        message.channel.send(`<:minecraft:377102754256125962>`);
        } else {
           message.channel.send("Please provide a valid Minecraft Username.");
        }
            break;
        case "eval":
        if (message.author.id !== "267025484028706816") return;
        let evaa = message.content.split(" ").slice(1).join(" ");
            message.channel.sendMessage(eval(evaa));
            break;
        case "plus":
        let plus = message.content.split(" ").slice(1).join("+");
        let timemmm = plus[1];
        if(!timemmm) return message.reply("Please provide a math task using **+**");

        var embed = new Discord.RichEmbed()
        .addField("Math Information:", `**Input:** :inbox_tray: ${plus}\n**Output:** :outbox_tray: ${eval(plus)}`)
        .setFooter("<o/")
        message.channel.sendEmbed(embed);
            break;
        case "minus":
        let minus = message.content.split(" ").slice(1).join("-");
        let timem = minus[1];
        if(!timem) return message.reply("Please provide a math task using **-**");

        var embed = new Discord.RichEmbed()
        .addField("Math Information:", `**Input:** :inbox_tray: ${minus}\n**Output:** :outbox_tray: ${eval(minus)}`)
        .setFooter("<o/")
        message.channel.sendEmbed(embed);
            break;
        case "multiply":
        let multiply = message.content.split(" ").slice(1).join("*");
        let timemm = multiply[1];
        if(!timemm) return message.reply("Please provide a math task using *****");

        var embed = new Discord.RichEmbed()
        .addField("Math Information:", `**Input:** :inbox_tray: ${multiply}\n**Output:** :outbox_tray: ${eval(multiply)}`)
        .setFooter("<o/")
        message.channel.sendEmbed(embed);
            break;
        case "divide":
        let divide = message.content.split(" ").slice(1).join("/");
        let timemmz = multiply[1];
        if(!timemmz) return message.reply("Please provide a math task using **/**");

        var embed = new Discord.RichEmbed()
        .addField("Math Information:", `**Input:** :inbox_tray: ${multiply}\n**Output:** :outbox_tray: ${eval(multiply)}`)
        .setFooter("<o/")
        message.channel.sendEmbed(embed);
            break;
        case "cry":
        let userlj = message.mentions.users.first();
        if (userlj) return message.reply("No mentions please.");

        Jimp.read("greyy.png", function (err, lenna) {
            if (err) throw err;
            lenna.write("cry.jpg"); // save
        Jimp.loadFont(Jimp.FONT_SANS_128_WHITE).then(function (font) {
            lenna.print(font, 20, 150, "* " + message.author.username + " cries...")
                 .write("cry.jpg"); // save
        });
        });

        setTimeout(function() {
            message.channel.sendFile("cry.jpg");
        }, ms("2s"));
            break;
        case "dmspam":
        let userrrlj = message.mentions.users.first();
        if (userrrlj) return message.reply("No mentions please.");

        let argzz = args[1]
        if (!argzz) return message.reply("Please provide someone to dmspam.");

        Jimp.read("greyy.png", function (err, lenna) {
            if (err) throw err;
            lenna.write("dmspam.jpg"); // save
        Jimp.loadFont(Jimp.FONT_SANS_128_WHITE).then(function (font) {
            lenna.print(font, 20, 150, "* " + message.author.username + " dmspammed " + args[1] + " !")
                 .write("dmspam.jpg"); // save
        });
        });

        setTimeout(function() {
            message.channel.sendFile("dmspam.jpg");
        }, ms("2s"));
            break;
        case "poop":
        let userrrrlj = message.mentions.users.first();
        if (userrrrlj) return message.reply("No mentions please.");

        Jimp.read("greyy.png", function (err, lenna) {
            if (err) throw err;
            lenna.write("poop.jpg"); // save
        Jimp.loadFont(Jimp.FONT_SANS_128_WHITE).then(function (font) {
            lenna.print(font, 20, 150, "* " + message.author.username + " pooped...")
                 .write("poop.jpg"); // save
        });
        });

        setTimeout(function() {
            message.channel.sendFile("poop.jpg");
        }, ms("2s"));
            break;
        case "punch":
        let userrrrrrlj = message.mentions.users.first();
        if (userrrrrrlj) return message.reply("No mentions please.");

        let arggggg = args[1]
        if (!arggggg) return message.reply("Please provide something to punch.");

        Jimp.read("greyy.png", function (err, lenna) {
            if (err) throw err;
            lenna.write("punch.jpg"); // save
        Jimp.loadFont(Jimp.FONT_SANS_128_WHITE).then(function (font) {
            lenna.print(font, 20, 150, "* " + message.author.username + " punched " + args[1] + " !")
                 .write("punch.jpg"); // save
        });
        });

        setTimeout(function() {
            message.channel.sendFile("punch.jpg");
        }, ms("2s"));
            break;
        case "eat":
        let userrrrrrrrlj = message.mentions.users.first();
        if (userrrrrrrrlj) return message.reply("No mentions please.");

        let argz = args[1]
        if (!argz) return message.reply("Please provide something to eat.");

        Jimp.read("greyy.png", function (err, lenna) {
            if (err) throw err;
            lenna.write("eat.jpg"); // save
        Jimp.loadFont(Jimp.FONT_SANS_128_WHITE).then(function (font) {
            lenna.print(font, 20, 150, "* " + message.author.username + " is eating " + args[1] + " .")
                 .write("eat.jpg"); // save
        });
        });

        setTimeout(function() {
            message.channel.sendFile("eat.jpg");
        }, ms("2s"));
            break;
        case "drink":
        let arggg = args[1]
        if (!arggg) return message.reply("Please provide something to drink.");
            
        let userrrrrrrrrlj = message.mentions.users.first();
        if (userrrrrrrrrlj) return message.reply("No mentions please.");

        Jimp.read("greyy.png", function (err, lenna) {
            if (err) throw err;
            lenna.write("drink.jpg"); // save
        Jimp.loadFont(Jimp.FONT_SANS_128_WHITE).then(function (font) {
            lenna.print(font, 20, 150, "* " + message.author.username + " is drinking " + args[1] + " .")
                 .write("drink.jpg"); // save
        });
        });

        setTimeout(function() {
            message.channel.sendFile("drink.jpg");
        }, ms("2s"));
            break;
        case "sneeze":
        let userrrrrrrrrr = message.mentions.users.first();
        if (userrrrrrrrrr) return message.reply("No mentions please.");

        Jimp.read("greyy.png", function (err, lenna) {
            if (err) throw err;
            lenna.write("sneeze.jpg"); // save
        Jimp.loadFont(Jimp.FONT_SANS_128_WHITE).then(function (font) {
            lenna.print(font, 20, 150, "* " + message.author.username + " sneezed...")
                 .write("sneeze.jpg"); // save
        });
        });

        setTimeout(function() {
            message.channel.sendFile("sneeze.jpg");
        }, ms("2s"));
            break;
        case "dab":
        let userrrrrrrrrrrr = message.mentions.users.first();
        if (userrrrrrrrrrrr) return message.reply("No mentions please.");

        Jimp.read("greyy.png", function (err, lenna) {
            if (err) throw err;
            lenna.write("dab.jpg"); // save
        Jimp.loadFont(Jimp.FONT_SANS_128_WHITE).then(function (font) {
            lenna.print(font, 20, 150, "* " + message.author.username + " dabbed! <o/")
                 .write("dab.jpg"); // save
        });
        });

        setTimeout(function() {
            message.channel.sendFile("dab.jpg");
        }, ms("2s"));
            break;
        case "breath":
        let userrrrrrrrrrrrrrrrrrrrrrr = message.mentions.users.first();
        if (userrrrrrrrrrrrrrrrrrrrrrr) return message.reply("No mentions please.");

        Jimp.read("greyy.png", function (err, lenna) {
            if (err) throw err;
            lenna.write("breath.jpg"); // save
        Jimp.loadFont(Jimp.FONT_SANS_128_WHITE).then(function (font) {
            lenna.print(font, 20, 150, "* " + message.author.username + " is breathing.")
                 .write("breath.jpg"); // save
        });
        });

        setTimeout(function() {
            message.channel.sendFile("breath.jpg");
        }, ms("2s"));
            break;
        case "greyscale":
        Jimp.read(message.author.avatarURL, function (err, lenna) {
            if (err) throw err;
            lenna.greyscale()
                 .write("grey.jpg");
        });

        setTimeout(function() {
            message.channel.sendFile("grey.jpg");
        }, ms("2s"));
            break;
        case "contrast":
        Jimp.read(message.author.avatarURL, function (err, lenna) {
            if (err) throw err;
            lenna.contrast( +1 )
                 .write("contrast.jpg");
        });

        setTimeout(function() {
            message.channel.sendFile("contrast.jpg");
        }, ms("2s"));
            break;
        case "blur":
        Jimp.read(message.author.avatarURL, function (err, lenna) {
            if (err) throw err;
            lenna.blur( 1 )
                 .write("blur.jpg");
        });

        setTimeout(function() {
            message.channel.sendFile("blur.jpg");
        }, ms("2s"));
            break;
        case "pixelate":
        Jimp.read(message.author.avatarURL, function (err, lenna) {
            if (err) throw err;
            lenna.pixelate(10)
                 .write("pixel.jpg");
        });

        setTimeout(function() {
            message.channel.sendFile("pixel.jpg");
        }, ms("2s"));
            break;
        default:
            message.react("\❌")
    }
});

bot.login(process.env.BOT_TOKEN);
