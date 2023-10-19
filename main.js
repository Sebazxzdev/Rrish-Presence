console.clear()

process.on("uncaughtException", (err) => console.log(`\x1b[91m\x1b[1m${err.message}\n${err.stack}\x1b[0m`))
process.on("unhandledRejection", (err) => console.log(`\x1b[91m\x1b[1m${err.message}\n${err.stack}\x1b[0m`))

const { Client, RichPresence } = require("discord.js-selfbot-v13")

const client = new Client({ checkUpdate: false })
const settings = require("./config.js")

client.login(settings.Token).then(() => {
    client.user.setActivity(
        new RichPresence()
        .setApplicationId(settings.BotId)
        .setType("PLAYING")
        .setName(settings.Presence.Title)
        .setDetails(settings.Presence.Description)
        .setState(settings.Presence.State)
        .setAssetsLargeImage(settings.Presence.Logo)
        .setButtons(
            { name: settings.Presence.Buttons.Website.Name, url: settings.Presence.Buttons.Website.URL },
            { name: settings.Presence.Buttons.Discord.Name, url: settings.Presence.Buttons.Discord.URL }
        )
    )

    setInterval(() => client.user.setActivity(
        new RichPresence()
        .setApplicationId(settings.BotId)
        .setType("PLAYING")
        .setName(settings.Presence.Title)
        .setDetails(settings.Presence.Description)
        .setState(settings.Presence.State)
        .setAssetsLargeImage(settings.Presence.Logo)
        .setButtons(
            { name: settings.Presence.Buttons.Website.Name, url: settings.Presence.Buttons.Website.URL },
            { name: settings.Presence.Buttons.Discord.Name, url: settings.Presence.Buttons.Discord.URL }
        )
    ), 10800000)
    
    console.log(`Ready on ${client.user.tag}`)
})


/*
  | CODIGO DE RISH PRESENCE (RPC)
  | VENTA: 3,5$ (CODIGO)
  | CREADO POR: sebas.planethost (DISCORD)
  | ALGUNA DUDA ESCRIBIR AL DISCORD
*/