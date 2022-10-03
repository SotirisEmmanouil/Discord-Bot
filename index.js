const Discord = require("discord.js")
const TOKEN = "MTAyNjUzNTAxOTY1NDY5Njk3MA.GWzV62.12PIXzV1ic3THkpK27cUBdhIZjGJwNIeiU74B8"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]

})

client.on("ready", () =>{
console.log('Logged in!')
})

client.on("messageCreate", (message)=>{
if(message.content == "Hi Bot!"){
    message.reply("Hello! Thats me!")
}
})
client.login(TOKEN)