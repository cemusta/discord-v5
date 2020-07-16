// const logger = require('./logger').logger
const { MessageEmbed } = require('discord.js')
var chance = require('chance').Chance()

const printInvite = (msg, user) => {
  const embed = new MessageEmbed()
    .setTitle('Invite link for V5 bot 🦇')
    .setColor(4079253)
    .setURL(`https://discord.com/oauth2/authorize?client_id=${user.id}&scope=bot`)
  msg.channel.send(embed)
}

const printUsage = (msg) => {
  const embed = new MessageEmbed()
    .setColor(855328)
    .setDescription('this is a simple [open source](https://github.com/cemusta/discord-v5) dice roller discord bot for vampire the masquerade v5. Inspired from [Malkav bot](https://ko-fi.com/post/Malkav-Discord-dice-roller-for-Vampire-the-Masque-E1E6QKL0).')
    .addField('Usage', `\`@V5_bot help\` or \`.help\` to display this help message.
    \`@V5_bot help\` or \`.invite\` to displays invite link.
    Dice roll commands are listed below:`)
    .addField('Single roll', '`.roll`', true)
    .addField('Multi roll', '`.roll n` (n>1)', true)
    .setFooter('🦇 discord-V5, version 0.1')

  msg.channel.send(embed)
}

const handleRolls = (msg, diceCount) => {
  let num = parseInt(diceCount)
  if (isNaN(num)) {
    num = 1
  } else {
    num = num > 20 ? 20 : num < 1 ? 1 : num
  }

  const rolls = chance.rpg(`${num}d10`)
  msg.reply(`rolled ${num} ${num > 1 ? 'dices' : 'dice'}, results:\n ${rolls}`)
}

const handler = (msg, user) => {
  // TODO: implement a better parser & validation & handler here...
  const commands = msg.content.split(' ')

  if (msg.mentions.users.has(user.id)) {
    switch (commands[1]) {
      case 'help':
        printUsage(msg)
        break
      case 'invite':
        printInvite(msg, user)
        break
      default:
        break
    }
  } else if (commands[0] === '.roll') {
    handleRolls(msg, commands[1])
  } else if (commands[0] === '.help') {
    printUsage(msg)
  } else if (commands[0] === '.invite') {
    printInvite(msg, user)
  }
}

module.exports = {
  handler
}
