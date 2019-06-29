const { Client, RichEmbed } = require('discord.js');
const client = new Client();
const version = '0.1.0';

client.on('ready', () => {
    console.log('Bot Online');
    console.log('Bot Version = ' + version);
    client.user.setActivity('something random | >help', "PLAYING");
});

client.on('message', message => {
    if (message.content === '>test') {
        message.channel.send('Tests: embedtest')
    }
    if (message.content === '>embedtest') {
        const embedtest = new RichEmbed()
            .setTitle('Embed Test')
            .setColor(0xFF0000)
            .setDescription('Test the embed feature of the bot. \n Test.')
        message.channel.send(embedtest);
    }
    if (message.content === '>help') {
        const help = new RichEmbed()
            .setTitle('Help')
            .setColor(0x00FF00)
            .setDescription('No Commands Currently available. Check back later.')
        message.channel.send(help);
    }
    if (message.content === '>Random') {
        
    }
});

client.login('');