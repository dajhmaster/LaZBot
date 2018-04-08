async function doUrban( obj ) {
    const fetch = require('snekfetch');
    try {
      
      if( obj.command.args.text === 'help' ) { return obj.help( obj.command ); }
      
      //Args passed to command
      let { text } = obj.command.args;
      console.log("Recieved request to search for \"" +text+ "\"");
  
      //Do stuff here for doUrban
      //...      
      fetch.get("https://api.urbandictionary.com/v0/define?term=" + text).then(res => {
        if(res.body.list[0] === undefined | res.body.list[0].word == "") {
          return obj.help( obj.command );
        }
        let num = Math.floor(Math.random() * Math.floor(res.body.list.length));
        num = obj.command.subcmd ? num : 0 ;
        const definition = res.body.list[num].definition;
        const word = res.body.list[num].word;
        const Author = res.body.list[num].author;
        const exam = res.body.list[num].example;
        const thumb = res.body.list[num].thumbs_up;
        const thumbdown = res.body.list[num].thumbs_down;
        const link = res.body.list[num].permalink;
      
      let replyObj = {};
      replyObj.uthorName = "Urban Dictionary";
      replyObj.title = word;
      replyObj.link = link;
      replyObj.description = "*" +definition+ "*\n\n";
      //replyObj.color = '0x197711';
      
      obj.success(replyObj);
      }).catch(err => {
        obj.error('ping.doUrban - Fetch Error',err);
      });
  
    } catch(e) {
      obj.error('ping.doUrban',e);
    }
  }

async function urbanRandom( obj ) {
  console.log("What?!");
}
  
  module.exports = { 
    doUrban: async ( obj ) => {
      return await doUrban( obj );
    },
    urbanRandom: async ( obj ) => {
      return await doUrban( obj );
    }
  };