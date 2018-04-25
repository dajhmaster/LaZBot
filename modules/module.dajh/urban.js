async function doUrban( obj ) {
    const fetch = require('snekfetch');
    try {      
      //Args passed to command
      let { text } = obj.command.args;
  
      //Do stuff here for doUrban
      //...      
      fetch.get(`https://api.urbandictionary.com/v0/define?term=${text}`).then(res => {
        if ( res.body.result_type === "no_results" ) {
          return obj.fail(`Sorry, ***${text}*** was not found :cry:`);
        }
        let num = Math.floor(Math.random() * Math.floor(res.body.list.length-1));
        num = (obj.command.subcmd === "random") ? num : 0 ;
        const definition = res.body.list[num].definition;
        const word = res.body.list[num].word;
        const Author = res.body.list[num].author;
        const exam = res.body.list[num].example;
        const thumb = res.body.list[num].thumbs_up;
        const thumbdown = res.body.list[num].thumbs_down;
        const link = res.body.list[num].permalink;
        let title = (obj.command.subcmd === "random") ? `Random Result for ${word}` : `Top Result for ${word}`;
      
        let replyObj = {};
        replyObj.title = title;
        replyObj.link = link;
        replyObj.description = `*** ${definition}***\n\n`;
        
        if ( obj.command.subcmd === "all" ) {
          replyObj.fields = [];
          res.body.list.shift();
          for ( let n in res.body.list ) {
            let field = {};
            let resultNum = Math.floor(n)+2;
            field.inline = true;
            field.title = `Result # ${resultNum}`;
            field.text = `*${res.body.list[n].definition}*\n`;
            replyObj.fields.push( field );
          }
        }
      
      obj.success(replyObj);
      }).catch(err => {
        obj.error('urban.doUrban - Fetch Error',err);
      });
  
    } catch(e) {
      obj.error('urban.doUrban',e);
    }
  }

async function urbanRandom( obj ) {
  console.log("What?!");
}
  
  module.exports = { 
    doUrban: async ( obj ) => {
      return await doUrban( obj );
    }
  };