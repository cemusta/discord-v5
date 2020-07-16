# V5 bot 

this is project is simple, dice roller Discord bot for vampire the masquerade v5. Inspired from [Malkav bot](https://ko-fi.com/post/Malkav-Discord-dice-roller-for-Vampire-the-Masque-E1E6QKL0).

## Prerequesites

This bot needs one environment variable that comes from Discord application page.
You need to create an app and a bot from discord page, add bot's `TOKEN` as a environment variable.
After this variables supplied, you can install packages via `npm i` and start local app with `npm run dev`.

If everything configured correctly you will see these success logs.

>some-date-info: Logged in as V5_bot 🦇

>some-date-info: invite link: https://discord.com/oauth2/authorize?client_id=your_client_id&scope=bot

## Inviting bot to a channel

In order to invite your bot, you need to use invitation oauth link, link is printed as log when you run the application.
You can also make bot print it after adding it to a server and using the `invite` command.

## Bot commands

### help

help shows usage details, can be invoked by mentioning the bot and help like `@V5_bot help` or `.help`

### invite

intive shows invitation link, can be invoked by mentioning the bot and help like `@V5_bot invite` or `.invite`

### roll (n)

rolls single or multiple d10 dices and shows results, can be invoked via `.roll` directly for single dice roll or `.roll 5` with a number of dices.

## Dependencies

- Discord.js, https://discord.js.org/
- Chance, https://chancejs.com/
