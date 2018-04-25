async function doPing( obj ) {
    try {      
      //Args passed to command
      let { text } = obj.command.args;
      let ping = Math.floor(obj.instance.client.ping);
  
      //Do stuff here for doPing
      //...
      let replyObj = {};
      replyObj.title = 'Discord API Latency';
      replyObj.description = `API Latency is ${ping}ms`;
      replyObj.color = '0x197711';
      
      obj.success(replyObj);
  
    } catch(e) {
      obj.error('ping.doPing',e);
    }
  }
  
  module.exports = { 
    doPing: async ( obj ) => {
      return await doPing( obj );
    }
  };