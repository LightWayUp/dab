const Discord = require("discord.js");
const dbl = require(`discord-bot-list`)
const ms = require("ms");
const snekfetch = require('snekfetch');
var Jimp = require("jimp");
const YTDL = require("ytdl-core")

function generatehex() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}

var servers = [];

function play(connection, message) {
    var server = servers[message.guild.id];

    server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));

    server.queue.shift();

    server.dispatcher.on("end", function() {
        if (server.queue[0]) play(connection, message);
        else connection.disconnect();
    });
}

const PREFIX = "<!";

var fortunes = [
    "Yes",
    "Ofc.",
    "Go away!",
    ";-;",
    "y u do dis",
    "Ask me later.",
    "Nope",
    "Maybe",
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

var servers = [];

bot.on("ready", function() {
    console.log("<o/");
});

bot.on("ready", () => {
    const snacks = require('snekfetch');
  snacks.post(`https://discordbots.org/api/bots/${bot.user.id}/stats`)
   .set("Authorization", process.env.DBL_TOKEN)
   .send({
    server_count: bot.guilds.size
   })
.then(() => console.log("mk"))
});

bot.on("ready", function() {
    console.log("Server Count: " + bot.guilds.size);
    bot.user.setGame("<!info | Dabbing in " + bot.guilds.size + " servers.")

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
    
    if (message.channel.type === 'dm') return;
    
    let defined = ``;
        defined = message.author.id;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase())  {
        //Music
        case "play":
        const voiceChannel = message.member.voiceChannel;
     
        if (!args[1]){
            return message.channel.sendMessage("You need to give me a link that you want to play in a voice channel!");
        }
     
        if (!voiceChannel){
        return message.channel.sendMessage("You need to be in a voice channel!");
        }
        voiceChannel.join()
        .then(connection => {
        let stream = YTDL(args.join(" "), {audioonly: true});
        YTDL.getInfo(args.join(" "), function(err, info) {
        const title = info.title
        console.log(`${message.author.tag}, Queued the song '${title}.'`)
        message.channel.sendMessage(`Playing **\${info.title}\** in the voice channel!`)
        })
        const dispatcher = connection.playStream(stream);
            dispatcher.on('end', () => {
            voiceChannel.leave();
        }).catch(e =>{
                    console.error(e);
        });
        })
            break;
        case "stop":
        var server = servers[message.guild.id];
     
        if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
        message.channel.send(":x: Stopped!");
        console.log(`Stopped. User: ${message.author.tag}'`)
            break;
        
        //Info
        case "dminfo":
            var embed = new Discord.RichEmbed()
                .addField("Info", "`<!info info` (Get the list of info commands.)")
                .addField("-", "`<!info games` (Get the list of games commands.)")
                .addField("-", "`<!info botinfo` (Get the list of botinfo commands.)")
                .addField("-", "`<!info rp` (Get the list of roleplay commands.)")
                .addField("-", "`<!info music` (Get the list of music commands.)")
                .addField("-", "`<!info developer` (Get the list of developer commands.)")
                .setDescription("Prefix: <!")
                .setFooter("Made by Vanished#3101")
                message.author.sendEmbed(embed);

                var embed = new Discord.RichEmbed()
                    .addField("Info Command List", "`<!info` (An info command.)")
                    .addField("-", "`<!dminfo` (A dminfo command.)")
                    .setFooter("<o/")
                    message.author.sendEmbed(embed);

                var embed = new Discord.RichEmbed()
                    .addField("Games Command List", "`<!8ball` (An 8ball command.)")
                    .addField("-", "`<!puns` (A puns command.)")
                    .addField("-", "`<!noticeme` (An noticeme command.)")
                    .addField("-", "`<!funny` (A funny command.)")
                    .addField("-", "`<!rps` (A rps command.)")
                    .addField("-", "`<!dice` (A dice command.)")
                    .addField("-", "`<!work` (A work command.)")
                    .addField("-", "`<!cookie` (A cookie command.)")
                    .setFooter("<o/")
                    message.author.sendEmbed(embed);

            var embed = new Discord.RichEmbed()
                .addField("Bot Info Command List", "`<!botstatus`, `<!botinfo` (A botinfo command.)")
                .addField("-", "`<!hoststatus`, `<!hostinfo` (A hoststatus command.)")
                .addField("-", "`<!donate` (A donate command.)")
                .addField("-", "`<!repo` (A GitHub repository command.)")
                .addField("-", "`<!report` (A report command.)")
                .addField("-", "`<!ping` (A ping command.)")
                .setFooter("<o/")
                message.author.sendEmbed(embed);

            var embed = new Discord.RichEmbed()
                .addField("Roleplay Command List", "`<!cry` (A cry command.)")
                .addField("-", "`<!dmspam` (A dmspam command.)")
                .addField("-", "`<!poop` (A poop command.)")
                .addField("-", "`<!punch` (A punch command.)")
                .addField("-", "`<!eat` (An eat command.)")
                .addField("-", "`<!drink` (A drink command.)")
                .addField("-", "`<!sneeze` (A sneeze command.)")
                .addField("-", "`<!dab` (A dab command.)")
                .addField("-", "`<!breath` (A breath command.)")
                .addField("-", "`<!cough` (A cough command.)")
                .addField("-", "`<!stab` (A stab command.)")
                .addField("-", "`<!happy` (A happy command.)")
                .setFooter("<o/")
                message.author.sendEmbed(embed);

            var embed = new Discord.RichEmbed()
                .addField("Music Command List", "`<!play` (A play command.)")
                .addField("-", "`<!stop` (A stop command)")
                .setFooter("<o/")
                message.author.sendEmbed(embed);

            var embed = new Discord.RichEmbed()
                .addField("Developer Commands", "`<!eval` (An eval command.)")
                .addField("-", "`<!answer` (An answer command.)")
                .addField("-", "`<!sendfile` (A sendfile command.)")
                .setFooter("<o/")
                message.author.sendEmbed(embed);

            break;
        case "info":
        if (!args[1]) {
            var embed = new Discord.RichEmbed()
                .addField("Info", "`<!info info` (Get the list of info commands.)")
                .addField("-", "`<!info games` (Get the list of games commands.)")
                .addField("-", "`<!info botinfo` (Get the list of botinfo commands.)")
                .addField("-", "`<!info rp` (Get the list of roleplay commands.)")
                .addField("-", "`<!info music` (Get the list of music commands.)")
                .addField("-", "`<!info developer` (Get the list of developer commands.)")
                .setDescription("Prefix: <!")
                .setFooter("Made by Vanished#3101")
                message.channel.sendEmbed(embed);
        }
        if (args[1] === "info") {
                var embed = new Discord.RichEmbed()
                    .addField("Info Command List", "`<!info` (An info command.)")
                    .addField("-", "`<!dminfo` (A dminfo command.)")
                    .setFooter("<o/")
                    message.channel.sendEmbed(embed);
        }
        if (args[1] === "games") {
                var embed = new Discord.RichEmbed()
                    .addField("Games Command List", "`<!8ball` (An 8ball command.)")
                    .addField("-", "`<!puns` (A puns command.)")
                    .addField("-", "`<!noticeme` (An noticeme command.)")
                    .addField("-", "`<!funny` (A funny command.)")
                    .addField("-", "`<!rps` (A rps command.)")
                    .addField("-", "`<!dice` (A dice command.)")
                    .addField("-", "`<!work` (A work command.)")
                    .addField("-", "`<!cookie` (A cookie command.)")
                    .setFooter("<o/")
                    message.channel.sendEmbed(embed);
        }
        if (args[1] === "botinfo") {
            var embed = new Discord.RichEmbed()
                .addField("Bot Info Command List", "`<!botstatus`, `<!botinfo` (A botinfo command.)")
                .addField("-", "`<!hoststatus`, `<!hostinfo` (A hoststatus command.)")
                .addField("-", "`<!donate` (A donate command.)")
                .addField("-", "`<!repo` (A GitHub repository command.)")
                .addField("-", "`<!report` (A report command.)")
                .addField("-", "`<!ping` (A ping command.)")
                .setFooter("<o/")
                message.channel.sendEmbed(embed);
        }
        if (args[1] === "rp") {
            var embed = new Discord.RichEmbed()
                .addField("Roleplay Command List", "`<!cry` (A cry command.)")
                .addField("-", "`<!dmspam` (A dmspam command.)")
                .addField("-", "`<!poop` (A poop command.)")
                .addField("-", "`<!punch` (A punch command.)")
                .addField("-", "`<!eat` (An eat command.)")
                .addField("-", "`<!drink` (A drink command.)")
                .addField("-", "`<!sneeze` (A sneeze command.)")
                .addField("-", "`<!dab` (A dab command.)")
                .addField("-", "`<!breath` (A breath command.)")
                .addField("-", "`<!cough` (A cough command.)")
                .addField("-", "`<!stab` (A stab command.)")
                .addField("-", "`<!happy` (A happy command.)")
                .setFooter("<o/")
                message.channel.sendEmbed(embed);
        }
        if (args[1] === "music") {
            var embed = new Discord.RichEmbed()
                .addField("Music Command List", "`<!play` (A play command.)")
                .addField("-", "`<!stop` (A stop command)")
                .setFooter("<o/")
                message.channel.sendEmbed(embed);
        }
        if (args[1] === "dev") {
            var embed = new Discord.RichEmbed()
                .addField("Developer Commands", "`<!eval` (An eval command.)")
                .addField("-", "`<!answer` (An answer command.)")
                .addField("-", "`<!sendfile` (A sendfile command.)")
                .setFooter("<o/")
                message.channel.sendEmbed(embed);
        }
            break;
        
        //Games
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
        case "funny":
        if (args[0]) {
            message.channel.sendMessage(funny[Math.floor(Math.random() * funny.length)]);
            message.channel.sendMessage(":joy:")
        }
            break;
        case "rps":
        if (args[1]) {
            message.channel.sendMessage("I choose: **" + rps[Math.floor(Math.random() * rps.length)] + "**. You choose: **" + args[1] + "**. I win! :tada: I do not care about the rules.");
        } else {
        message.channel.sendMessage("What do you choose?")
        }
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
        const workkkk = new Discord.RichEmbed()
                .setDescription(`Fortune Cookie says:`)
                .addField(`🍪`,cookie[Math.floor(Math.random() * cookie.length)])
            message.channel.send(workkkk);
            break;
        
        //BotInfo
        case "report":
        let memberhah = ("267025484028706816");
        let msg = args.slice(1).join(" ")
        var embed = new Discord.RichEmbed()
            .addField("**REPORT ALERT!**", "**>** Reporter: " + message.author.tag +"\n**>** Reporter ID: " + message.author.id + "\n**>** Message ID: " + message.id + "\n**>** Report Message: " + msg)
            .addField("**Stalker Info:**", "**>** Guild Name: " + message.guild.name + "\n**>** Message Date: " + message.createdAt + "\n**>** Channel Name: " + message.channel.name + "\n**>** Channel ID: " + message.channel.id)
            .setThumbnail(message.author.avatarURL);

        if (!msg) {
            return message.channel.send("Please provide a question/report to send to the owner.");
        }

            message.guild.member(memberhah).send(embed);
            message.delete();
            message.channel.send("The report message has been sent! The owner will answer to your ticket soon.")
                break;
        case "ping":
        message.channel.send("**Pinging.**").then((message)=>{
                 message.edit("**Pinging..**")
                     message.edit("**Pinging...**")
                         message.edit("**Pinging.**")
                             message.edit("**Pinging..**")
                                 message.edit("**Pong!** " + "`" + bot.ping.toFixed() + "ms" + "`")});
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
                .addField("Total Users:", "7893", true)
                .addField("Bot Ping:", bot.ping.toFixed(), true)
                .addField("Total Channels:", "916", true)
                .setDescription("<o/")
                .setFooter("<o/")
                message.channel.sendEmbed(embed);
            break;
        case "hoststatus":
        case "hostinfo":
            var embed = new Discord.RichEmbed()
                .addField("Host Status", "<o/")
                .addField("Host:", "Heroku", true)
                .addField("Slug Size:", "115.9 MB of 500 MB", true)
                .addField("Framework:", "Node.js", true)
                .addField("Web Status:", "OFF", true)
                .addField("Worker Status", "ON", true)
                .addField("Owner(s):", "Vanished#3101", true)
                .setFooter("Made by Vanished#3101")
                message.channel.sendEmbed(embed);
            break;
        case "donate":
            var embed = new Discord.RichEmbed()
                .addField("<o/", "Donate to us via PayPal!")
                .addField("PayPal Link:", "[PayPal](https://www.paypal.me/VanishedP)")
                .setFooter("<o/")
                message.channel.sendEmbed(embed);
            break;
        case "repo":
            var embed = new Discord.RichEmbed()
                .addField("<o/", "Open Source Code")
                .addField("GitHub Link:", "[GitHub](https://github.com/VanishedP/dab)")
                .setFooter("<o/")
                message.channel.sendEmbed(embed);
            break;
        case "invite":
            var embed = new Discord.RichEmbed()
                .addField("<o/", "Invite me to your server!")
                .addField("Invite Link:","[Invite](https://discordbots.org/bot/364399994242859008)")
                .setFooter("<o/")
                message.channel.sendEmbed(embed);
            break;
        
        //RP
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
        case "cough":
        let userrrrrrrrrrrrrrrrrrrrrrrz = message.mentions.users.first();
        if (userrrrrrrrrrrrrrrrrrrrrrrz) return message.reply("No mentions please.");

        Jimp.read("greyy.png", function (err, lenna) {
            if (err) throw err;
            lenna.write("cough.jpg"); // save
        Jimp.loadFont(Jimp.FONT_SANS_128_WHITE).then(function (font) {
            lenna.print(font, 20, 150, "* " + message.author.username + " coughed.")
                 .write("cough.jpg"); // save
        });
        });

        setTimeout(function() {
            message.channel.sendFile("cough.jpg");
        }, ms("2s"));
            break;
        case "stab":
        let userrrrrrrrrrrrrrrrrrrrrrrzsk = message.mentions.users.first();
        if (userrrrrrrrrrrrrrrrrrrrrrrzsk) return message.reply("No mentions please.");

        let argzssk = args[1]
        if (!argzssk) return message.reply("Please provide someone to stab.");

        Jimp.read("greyy.png", function (err, lenna) {
            if (err) throw err;
            lenna.write("stab.jpg"); // save
        Jimp.loadFont(Jimp.FONT_SANS_128_WHITE).then(function (font) {
            lenna.print(font, 20, 150, "* " + message.author.username + " stabbed " + args[1] + "!")
                 .write("stab.jpg"); // save
        });
        });

        setTimeout(function() {
            message.channel.sendFile("stab.jpg");
        }, ms("2s"));
            break;
        case "happy":
        let userrrrrrrrrrrrrrrrrrrrrrrzlol = message.mentions.users.first();
        if (userrrrrrrrrrrrrrrrrrrrrrrzlol) return message.reply("No mentions please.");

        Jimp.read("greyy.png", function (err, lenna) {
            if (err) throw err;
            lenna.write("happy.jpg"); // save
        Jimp.loadFont(Jimp.FONT_SANS_128_WHITE).then(function (font) {
            lenna.print(font, 20, 150, "* " + message.author.username + " is happy.")
                 .write("happy.jpg"); // save
        });
        });

        setTimeout(function() {
            message.channel.sendFile("happy.jpg");
        }, ms("2s"));
            break;

        //Developer
        case "answer":
        if (message.author.id !== "267025484028706816") return;
        let status = args[2]
        let msgh = args.slice(2).join(" ")
        var embed = new Discord.RichEmbed()
            .addField("**Ticket Answer**", "**>** Ticket Status: " + status +"\n**>** Answer: " + msgh)
            .setThumbnail(message.author.avatarURL);

            message.guild.member(args[1]).send(embed);
            message.delete();
            message.channel.send("Ticket answer sent.")
                break;
        case "sendfile":
            if (message.author.id !== "267025484028706816") return;
            message.channel.send("Sending...");
            message.channel.sendFile(args[1]);
            break;
        case "eval":
        if (message.author.id !== "267025484028706816") return;
        let evaa = message.content.split(" ").slice(1).join(" ");
            message.channel.sendMessage(eval(evaa));
            break;
        default:
            message.react("\❌")
    }
});

bot.login(process.env.BOT_TOKEN);
