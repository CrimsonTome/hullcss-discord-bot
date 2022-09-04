const { MessageEmbed } = require('discord.js');
const client = require("../index");

client.on('guildScheduledEventCreate', async guildScheduledEvent =>{
    const channel = client.channels.cache.get('973686987787751534')
    const embed = new MessageEmbed()
    .setColor('GREEN')
    .setFooter({text: `Created by ${guildScheduledEvent.creator.tag}`})
    .setTimestamp()
    .setTitle(guildScheduledEvent.name)
    .setImage(`https://cdn.discordapp.com/guild-events/${guildScheduledEvent.id}/${guildScheduledEvent.image}.png`)
    .addField('Description', `${guildScheduledEvent.description}`)

    if(guildScheduledEvent.entityType !== 'EXTERNAL'){
        embed.addField('Location', `${guildScheduledEvent.channel.name} - [Link](https://discordapp.com/channels/427865794467069962/${guildScheduledEvent.channelId})`)
    }
    else{ 
        embed.addField('Location', `External - ${guildScheduledEvent.entityMetadata.location}`)}

    embed.addField('Start Date and Time', ` ${guildScheduledEvent.scheduledStartAt.toLocaleString('en-UK', { timeZone: "Europe/London" })}`, true)

    if(guildScheduledEvent.scheduledEndAt !== null)
    {
        embed.addField('End Date and Time', `${guildScheduledEvent.scheduledEndAt.toLocaleString("en-UK", { timeZone: "Europe/London" })}`, true)
    }
    
    embed.addField('InviteURL', `${guildScheduledEvent.url}`)
    
    channel.send({ embeds: [embed]})
})