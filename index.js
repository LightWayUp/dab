const Discord = require("discord.js");
const dbl = require(`discord-bot-list`)

const client = new dbl({
   token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM2NDM5OTk5NDI0Mjg1OTAwOCIsImJvdCI6dHJ1ZSwiaWF0IjoxNTA3NzI4NzA1fQ.3zFSPSkjAAo550TMIVp_CJ-1YcgOi-Rgcj6NI3gy16E",
   id: "364399994242859008"
})

client.postStats(22, (err, res) => {
    if(err) {
        console.error(err)
    } else {
        console.log(res)
    }
})

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
    if (message.content.startsWith("back")) message.channel.sendMessage("<@" + message.author.id + "> I removed your **AFK**") ;

});

bot.on("message", function(message) {
    if (message.content.startsWith("<@364399994242859008>")) message.channel.send("Hello! To get the list of my commands type in: **<!info**!") ;

});

bot.on("message", function(message) {
    if (message.content.startsWith("Back")) message.channel.sendMessage("<@" + message.author.id + "> I removed your **AFK**") ;

});

bot.on("message", function(message) {
    if (message.content.startsWith("BACK")) message.channel.sendMessage("<@" + message.author.id + "> I removed your **AFK**") ;

});

bot.on("message", function(message) {
    if (message.content.startsWith("bAck")) message.channel.sendMessage("<@" + message.author.id + "> I removed your **AFK**") ;

});

bot.on("message", function(message) {
    if (message.content.startsWith("baCk")) message.channel.sendMessage("<@" + message.author.id + "> I removed your **AFK**") ;

});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase())  {
        case "ping":
                message.channel.send("**Pinging...**");
                message.channel.send("**Pong!**" + "`" + bot.ping + "ms" + "`");
                message.react("\👻")
            break;
        case "8ball":
            if (args[1]) {
                message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
                message.react("\👻")
            } else {
            message.channel.sendMessage("Can't read that")
            message.react("\👻")
            }
            break;
        case "puns":
        if (args[0]) {
            message.channel.sendMessage(fortunes2[Math.floor(Math.random() * fortunes2.length)]);
            message.react("\👻")
        } else {
        message.channel.sendMessage("Hm.")
        message.react("\👻")
        }
            break;
        case "avatar":
        message.channel.sendMessage(message.author.avatarURL);
        message.react("\👻")
        message.react("\👻")
            break;
        case "noticeme":
        if (args[0]) {
            message.channel.sendMessage("Nope, son.");
            message.react("\👻")
        } else {
        message.channel.sendMessage("smh")
        }
            break;
        case "invite":
            message.channel.sendMessage("https://discordapp.com/oauth2/authorize?client_id=364399994242859008&scope=bot&permissions=20040010000");
            message.react("\👻")
            message.react("\👻")
            break;
        case "dmspam":
        if (args[1]) {
            message.author.sendMessage("**SPAM REVENGE!!!**")
            message.channel.send("**Damn, son...** " + args[1] + " got DM spammed by <@" + message.author.id + "> 0-0");
            message.react("\👻")
        } else {
        message.channel.sendMessage(":face_palm: Mention someone, son!")
        message.react("\👻")
        }
            break;
        case "profile":
                message.delete()
                message.channel.sendMessage("...")
             var embed = new Discord.RichEmbed()
                .addField("<o/", "Profile card for <@" + message.author.id + ">")
                .setThumbnail(message.author.avatarURL)
                .addField("Discord Username:", message.author.username)
                .addField("Discord #:", message.author.tag)
                .addField("Last message sent:", message.author.lastMessage)
                .addField("Discord User ID:", message.author.id)
                message.channel.send(embed)
                message.react("\👻")
            break;
        case "dminfo":
            var embed = new Discord.RichEmbed()
                .addField("Info", "`<!info-general` (Get the list of general commands.)")
                .addField("-", "`<!info-general` (Get the list of general commands.)")
                .addField("-", "`<!info-misc` (Get the list of misc commands.)")
                .addField("-", "`<!info-bot` (Get the list of info commands.)")
                .addField("-", "`<!info-rp` (Get the list of roleplay commands.)")
                .setDescription("Prefix: <!")
                .setFooter("Made by Vanished#3101")
                message.author.sendEmbed(embed);
                message.react("\👻")
        case "1111":
            var embed = new Discord.RichEmbed()
                .addField("General Commands", "`<!info` (Send the list of commands.)")
                .addField("-", "`<!invite` (Sends you the link to invite <o/.)")
                .addField("-", "`<!donate` (Send you the donate link to support <o/.)")
                .setFooter("<o/")
                message.author.sendEmbed(embed);
                message.react("\👻")
        case "11111":
            var embed = new Discord.RichEmbed()
                .addField("Misc Commands", "`<!avatar` (Gives you a nice pic of your avatar.)")
                .addField("-", "`<!8ball` (The magic 8ball!.)")
                .addField("-", "`<!puns` (Sends a pun. Duh.)")
                .addField("-", "`<!profile` (Shows your profile card.)")
                .addField("-", "`<!ping` (Check your ping!)")
                .addField("-", "`<!noticeme` (It simply notices you.)")
                .addField("-", "`<!funny` (Sends a random pic of something funny.)")
                .setFooter("<o/")
                message.author.sendEmbed(embed);
                message.react("\👻")
        case "11112":
            var embed = new Discord.RichEmbed()
                .addField("Roleplay Commands", "`<!dmspam` (A roleplay command.)")
                .addField("-", "`<!roundhousekick` (A roleplay command.)")
                .addField("-", "`<!poop` (A roleplay command.)")
                .addField("-", "`<!cry` (A roleplay command.)")
                .addField("-", "`<!kick` (A roleplay command.)")
                .addField("-", "`<!punch` (A roleplay command.)")
                .addField("-", "`<!eat` (A roleplay command.)")
                .addField("-", "`<!drink` (A roleplay command.)")
                .addField("-", "`<!sneeze` (A roleplay command.)")
                .addField("-", "`<!dab` (A roleplay command.)")
                .addField("-", "`<!breath` (A roleplay command.)")
                .setFooter("<o/")
                message.author.sendEmbed(embed);
                message.react("\👻")
        case "11113":
            var embed = new Discord.RichEmbed()
                .addField("Bot Info Commands", "`<!botinfo`,`<!botstatus` (Gives you the current bot info.)")
                .addField("-", "`<!hostinfo`,`<!hoststatus` (Gives you the current host info.)")
                .setFooter("<o/")
                message.author.sendEmbed(embed);
                message.react("\👻")
            break;
        case "info":
            var embed = new Discord.RichEmbed()
                .addField("Info", "`<!info-general` (Get the list of general commands.)")
                .addField("-", "`<!info-general` (Get the list of general commands.)")
                .addField("-", "`<!info-misc` (Get the list of misc commands.)")
                .addField("-", "`<!info-bot` (Get the list of info commands.)")
                .addField("-", "`<!info-rp` (Get the list of roleplay commands.)")
                .setDescription("Prefix: <!")
                .setFooter("Made by Vanished#3101")
                message.channel.sendEmbed(embed);
                message.react("\👻")
            break;
        case "info-general":
            var embed = new Discord.RichEmbed()
                .addField("General Commands", "`<!info` (Send the list of commands.)")
                .addField("-", "`<!invite` (Sends you the link to invite <o/.)")
                .addField("-", "`<!donate` (Send you the donate link to support <o/.)")
                .setFooter("<o/")
                message.channel.sendEmbed(embed);
                message.react("\👻")
            break;
        case "info-misc":
            var embed = new Discord.RichEmbed()
                .addField("Misc Commands", "`<!avatar` (Gives you a nice pic of your avatar.)")
                .addField("-", "`<!8ball` (The magic 8ball!.)")
                .addField("-", "<!puns` (Sends a pun. Duh.)")
                .addField("-", "`<!profile` (Shows your profile card.)")
                .addField("-", "`<!ping` (Check your ping!)")
                .addField("-", "`<!noticeme` (It simply notices you.")
                .addField("-", "`<!funny` (Sends a random pic of something funny.)")
                .setFooter("<o/")
                message.channel.sendEmbed(embed);
                message.react("\👻")
            break;
        case "info-rp":
                var embed = new Discord.RichEmbed()
                    .addField("Roleplay Commands", "`<!dmspam` (A roleplay command.)")
                    .addField("-", "`<!roundhousekick` (A roleplay command.)")
                    .addField("-", "`<!poop` (A roleplay command.)")
                    .addField("-", "`<!cry` (A roleplay command.)")
                    .addField("-", "`<!kick` (A roleplay command.)")
                    .addField("-", "`<!punch` (A roleplay command.)")
                    .addField("-", "`<!eat` (A roleplay command.)")
                    .addField("-", "`<!drink` (A roleplay command.)")
                    .addField("-", "`<!sneeze` (A roleplay command.)")
                    .addField("-", "`<!dab` (A roleplay command.)")
                    .addField("-", "`<!breath` (A roleplay command.)")
                    .setFooter("<o/")
                    message.channel.sendEmbed(embed);
                    message.react("\👻")
            break;
        case "info-bot":
                var embed = new Discord.RichEmbed()
                    .addField("Bot Info Commands", "`<!botinfo`,`<!botstatus` (Gives you the current bot info.)")
                    .addField("-", "`<!hostinfo`,`<!hoststatus` (Gives you the current host info.)")
                    .setFooter("<o/")
                    message.channel.sendEmbed(embed);
                    message.react("\👻")
            break;
        case "test":
            message.channel.sendMessage("Zis iz a testz :wink:")
            message.react("\👻")
            message.react("\👻")
            break;
        case "funny":
        if (args[0]) {
            message.channel.sendMessage(funny[Math.floor(Math.random() * funny.length)]);
            message.channel.sendMessage(":joy:")
            message.react("\👻")
        } else {
        message.channel.sendMessage("FUNNEYZ LOL")
        message.react("\👻")
        }
            break;
        case "roundhousekick":
        if (args[1]) {
            message.channel.send("<@" + message.author.id + "> roundhousekicked " + args[1] + " **WOW...**");
            message.react("\👻")
        } else {
        message.channel.sendMessage(":face_palm: Mention someone...")
        message.react("\👻")
        }
            break;
        case "botstatus":
        case "botinfo":
            var embed = new Discord.RichEmbed()
                .addField("Bot Info", "<o/")
                .addField("Bot Status", "Stable", true)
                .addField("Memory Status", "Stable", true)
                .addField("GitHub Repo Status", "Updated", true)
                .addField("Server Count:", bot.guilds.size, true)
                .setDescription("<o/")
                .setFooter("<o/")
                message.channel.sendEmbed(embed);
                message.react("\👻")
                message.react("\👻")
            break;
        case "donate":
            var embed = new Discord.RichEmbed()
                .addField("<o/", "Donate to us via PayPal!")
                .addField("PayPal Link:", "https://www.paypal.me/VanishedP")
                .setFooter("<o/")
                message.channel.sendEmbed(embed);
                message.react("\👻")
                message.react("\👻")
            break;
        case "repo":
            var embed = new Discord.RichEmbed()
                .addField("<o/", "Open Source Code")
                .addField("GitHub Link:", "https://github.com/VanishedP/dab")
                .setFooter("<o/")
                message.channel.sendEmbed(embed);
                message.react("\👻")
            break;
        case "invite":
            var embed = new Discord.RichEmbed()
                .addField("<o/", "Invite me to your server!")
                .addField("Invite Link:","https://discordbots.org/bot/364399994242859008")
                .setFooter("<o/")
                message.channel.sendEmbed(embed);
                message.react("\👻")
            break;
        case "afk":
        if (args[1]) {
            message.channel.sendMessage("<@" + message.author.id + "> I set your **AFK**:" + " " + args[1])
            message.react("\👻")
        } else {
            message.channel.sendMessage(":face_palm: You gotta tell me why u are gonna be **AFK**!")
            message.react("\👻")
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
                message.react("\👻")
            break;
        case "kick":
        if (args[1]) {
            message.channel.send("<@" + message.author.id + "> kicked " + args[1] + " in the face! OoOoOoO");
            message.react("👻")
        } else {
        message.channel.sendMessage(":face_palm: You cannot kick yourself!")
        message.react("👻")
        }
            break;
        case "boo":
        if (args[1]) {
            message.channel.send("<@" + message.author.id + "> BoOoOoOoOoOoOo-ed at " + args[1] + "!");
            message.react("👻")
        } else {
        message.channel.sendMessage(":face_palm: You cannot boo at yourself...")
        message.react("👻")
        }
            break;
        case "punch": 
        if (args[1]) {
            message.channel.send("<@" + message.author.id + "> punched " + args[1] + " :right_facing_fist:");
            message.react("👻")
        } else {
        message.channel.sendMessage(":face_palm: You cannot punch yourself...")
        message.react("👻")
        }
            break;
        case "cry":
            message.channel.send("Be ready for a flood of tears! <@" + message.author.id + "> cries...");
            message.react("👻")
            break;
        case "dab":
            message.channel.send("<@" + message.author.id + "> dabbed **<o/**");
            message.channel.send("<:pugdab:371345447870005249>");
            message.react("👻")
            break;
        case "sneeze":
            message.channel.send("<@" + message.author.id + "> sneezed...");
            message.react("👻")
            break;
        case "poop":
            message.channel.send("It looks like <@" + message.author.id + "> pooped... <:cewlthonk:366636445391126528>");
            message.react("👻")
            break;
        case "breath":
            message.channel.send("<@" + message.author.id + "> is breathing the **oxygen**!");
            message.react("👻")
            break;
        case "eat":
            if (args[1]) {
                message.channel.send("<@" + message.author.id + "> is eating **" + args[1] + "**");
                message.react("👻")
            } else {
            message.channel.sendMessage(":face_palm: Tell me what you want to eat!")
            message.react("👻")
            }
            break;
        case "drink":
            if (args[1]) {
                message.channel.send("<@" + message.author.id + "> is drinking **" + args[1] + "**");
                message.react("👻")
            } else {
            message.channel.sendMessage(":face_palm: Tell me what you want to drink!")
            message.react("👻")
            }
            break;
        default:
            message.react("\👻")
    }
});

bot.login(process.env.BOT_TOKEN);
