const client = require("../index");


client.on('ready', () => {
    console.log('HullCSS is online')
    client.user.setActivity(`-help`, {type:"WATCHING"})



    const guild = client.guilds.cache.get('744586833135927366');
    setInterval(() =>{
        const memberCount = guild.members.cache.filter(m => !m.user.bot).size;
        const channel = guild.channels.cache.get('857995452052799538');
        channel.setName(`Humans: ${memberCount.toLocaleString()}`);
    }, 600000);

   })
