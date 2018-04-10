async function doUser( obj ) {
    try {      
      //Args passed to command
      let { text } = obj.command.args;
  
      //Do stuff here for doUser
      //...
      //let replyObj = {};
      //replyObj.title = 'Discord API Latency';
      //replyObj.description = "API Latency is " +ping+ "ms";
      //replyObj.color = '0x197711';
      
      //obj.success(replyObj);

      const Discord = require('discord.js');
      let reply = new Discord.RichEmbed();
      reply.setAuthor( obj.message.author.username , obj.message.author.avatarURL );
      reply.setTitle('You are using ' +obj.instance.client.user.username);
      reply.setThumbnail(obj.instance.client.user.avatarURL, { height: 10, width: 10});
      reply.addField("Bot Users" , obj.instance.client.users.size.toLocaleString(), true);
      reply.addField("Bot Servers" , obj.instance.client.guilds.size.toLocaleString(), true);
      reply.addField("Bot Channels" , obj.instance.client.channels.size.toLocaleString(), true);
      reply.setFooter(obj.instance.client.user.username+" | Discord User Information");
      obj.message.channel.send(reply);
      obj.silentSuccess();
  
    } catch(e) {
      obj.error('ping.doUser',e);
    }
  }
  
  module.exports = { 
    doUser: async ( obj ) => {
      return await doUser( obj );
    }
  };