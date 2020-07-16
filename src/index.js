require('dotenv').config()
const logger = require('./logger').logger
const { handler } = require('./handler')
const { Client } = require('discord.js')
const client = new Client()

const TOKEN = process.env.TOKEN

client.on('ready', () => {
  logger.info(`Logged in as ${client.user.tag}!`)
  // console.log(client.user)
  logger.info(`invite link: https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot`)
})

client.on('message', msg => handler(msg, client.user))

client.login(TOKEN)
