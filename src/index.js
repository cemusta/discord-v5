require('dotenv').config()
const logger = require('./logger').logger
const { handler } = require('./handler')
const { Client } = require('discord.js')
const client = new Client()

const TOKEN = process.env.TOKEN

client.on('ready', () => {
  logger.info(`Logged in as ${client.user.tag}!`)
  // console.log(client.user)
})

client.on('message', msg => handler(msg))

logger.info('started')

client.login(TOKEN)
