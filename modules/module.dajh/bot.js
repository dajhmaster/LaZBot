async function doBot( obj ) {
    try {      
      //Args passed to command
      let { text } = obj.command.args;
  
      //Do stuff here for doBot
      //let message = await obj.message.channel.send("<a:loading:437843671400972289> Pulling requested information...");
      let reaction = await obj.message.react('437843671400972289');
      // Pause for 2 seconds
      await new Promise(done => setTimeout(done, 2000));

      let replyObj = {};
      replyObj.title = `Bot information for ${obj.instance.client.user.username}`;
      replyObj.thumbnail = obj.instance.client.user.avatarURL;
      replyObj.fields = [];
      replyObj.fields.push( {title: "Bot Users", text: obj.instance.client.users.size.toLocaleString(), inline: true} );
      replyObj.fields.push( {title: "Bot Servers", text: obj.instance.client.guilds.size.toLocaleString(), inline: true} );
      replyObj.fields.push( {title: "Bot Channels", text: obj.instance.client.channels.size.toLocaleString(), inline: true} );
      
      await reaction.remove();
      obj.success(replyObj);
  
    } catch(e) {
      obj.error('ping.doBot',e);
    }
  }
  
  module.exports = { 
    doBot: async ( obj ) => {
      return await doBot( obj );
    }
  };