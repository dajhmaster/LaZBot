async function doBot( obj ) {
    try {      
      //Args passed to command
      let { text } = obj.command.args;
  
      //Do stuff here for doBot
      //...
      let replyObj = {};
      replyObj.title = `Bot information for ${obj.instance.client.user.username}`;
      replyObj.thumbnail = obj.instance.client.user.avatarURL;
      replyObj.fields = [];
      replyObj.fields.push( {title: "Bot Users", text: obj.instance.client.users.size.toLocaleString(), inline: true} );
      replyObj.fields.push( {title: "Bot Servers", text: obj.instance.client.guilds.size.toLocaleString(), inline: true} );
      replyObj.fields.push( {title: "Bot Channels", text: obj.instance.client.channels.size.toLocaleString(), inline: true} );
      
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