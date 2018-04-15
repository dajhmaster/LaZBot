async function doYoda( obj ) {
  try {
    
    if( !obj.command.args.text || obj.command.args.text === 'help' ) { return obj.help( obj.command ); }
    
    //Args passed to command
    let { text } = obj.command.args;

    //Do stuff here for doYoda
    //...
    let num = Math.floor(Math.random() * Math.floor(yodaAnswers.length));
    let replyObj = {};
    replyObj.title = 'Grand Master Yoda';
    replyObj.description = '`'+obj.command.prefix+obj.command.cmd+' '+text+'`\n\n';
    replyObj.description += '**Yoda says**: ';
    replyObj.description += ''+yodaAnswers[num]+'\n';
    replyObj.color = '0x697711';
    replyObj.image = 'https://media.discordapp.net/attachments/416390341533368321/425001368760352768/4729607-yoda-wallpaper-1.png';
    
    obj.success(replyObj);

  } catch(e) {
    obj.error('yoda.doYoda', e);
  }
}

async function doYodaTrans( obj ) {
  const fetch = require('snekfetch');
  try {
    
    //Args passed to command
    let { text } = obj.command.args;
    console.log("Recieved request to translate: \"" +text+ "\"");

    //Do stuff here for doYodaTrans
    //...
    fetch.get("http://api.funtranslations.com/translate/yoda.json?text=" + text).then(res => {
      if( res.body.contents.text == '' ) {
        return obj.help( obj.command )};
      let replyObj = {};
      replyObj.title = 'Here is your result:';
      replyObj.footer = 'Yodify';
      replyObj.footerIcon = 'https://images-ext-2.discordapp.net/external/EPINlHR4ujgujdFeej3qD2i2dSr25Kd0GtuXWjYs0G8/http/www.yodaspeak.co.uk/yoda-small1.gif';
      replyObj.description = '**Yoda translation for **: `'+text+'`\n';
      replyObj.description += '```asciidoc\n'+res.body.contents.translated+'```\n';
      replyObj.color = '0x697711';
      
      obj.success(replyObj);
    }).catch(err => {
      obj.fail( "Too Many Requests, this API is rate limited" );
      //obj.error('yoda.doYodaTrans - Fetch Error',err);        
    });

  } catch(e) {
    obj.error('yoda.doYodaTrans', e);
  }
}

const yodaAnswers = [
	"*Yes*, I sense this is.",
	"*No*, I sense this is.",
	"The answer you seek is *yes*.",
  "Seagulls, quit poking me!",
	"The answer you seek is *within you*.",
	"Simple question you ask. *Yes*, I answer.",
	"Simple question you ask. *No*, I answer.",
  "Seagulls, quit poking me!",
	"Difficult question you ask. *Yes*, I answer.",
	"Difficult question you ask. *No*, I answer.",
	"Use the Force. Answers you seek can be found *in the Force*.",
	"Use the Force. *Teach you it will*.",
	"Use the Force. *Let it guide you*.",
  "Seagulls, quit poking me!",
	"*Search your feelings*. Answer this question it will.",
	"Many questions you ask.",
  "This even Yoda does not know.",
  "Seagulls, quit poking me!"
	
];

module.exports = { 
  doYoda: async ( obj ) => {
    return await doYoda( obj );
  }, 
  doYodaTrans: async ( obj ) => {
    return await doYodaTrans( obj );
  }
};
