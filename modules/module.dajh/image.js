const { get : fetch } = require('snekfetch');

const animals = {
  //"cat": {
  //  fetch: async () => fetch("https://aws.random.cat/meow"),
  //  get: async ( resp ) => resp.body.file
  //},

  "dog": {
    fetch: async ( args ) => {
      const url = args ? `https://dog.ceo/api/breed/${args}/images/random` : "https://dog.ceo/api/breeds/image/random";
      return fetch( url );
    },
    get: async ( resp ) => resp.body.message
  },

  "bunny": {
    fetch: async () => fetch("https://api.bunnies.io/v2/loop/random/?media=gif,png"),
    get: async ( resp ) => resp.body.media.poster
  }
};


async function doImage( obj ) {
    try {      
      //Args passed to command
      let id = obj.command.subcmd;
      console.log(`Subcmd: ${id}`);
      let { text } = obj.command.args;
      console.log(`Text: ${text}`);
  
      //Do stuff here for doImage
      //...
      // if (!args[0]) {
      if ( !text && !id ) {
          return obj.fail(`Please give me a \`thing\` or choose one of those : ${Object.keys(animals).join(" , ")}`);
        }
        const api = animals[id];
        try {
            if ( !api ) {
                const resp = await fetch(`https://loremflickr.com/400/300/${id}`);
                console.log(`Page Returned: \n${JSON.parse(resp.request)}`);
                //return message.channel.send(new Attachment(resp.body, `random${text[0]}.jpg`));
                let replyObj = {};
                replyObj.title = "Random Image";
                replyObj.description = "Image should be here\n\n";
                replyObj.description += resp.body;
                //replyObj.link = resp.body;
                //replyObj.image = resp.body;
                //replyObj.color = '0x197711';
                
                return obj.success(replyObj);
                    //message.channel.send(new Attachment(resp.body, `random${text[0]}.jpg`))
            }
        } catch (e) {
            return obj.fail(`Sorry I couldn't find any valid API for the search term \`${text}\`, try again!`);
        }
  
        const response = await api.fetch(text);
        const image = await api.get(response);
        //message.channel.send({files: [image]});
        if ( !image.startsWith("http") ) { return obj.fail(`Failed to find image for breed \`${text}\``) };
        let replyObj = {};
        replyObj.title = "Random Image";
        replyObj.link = image;
        replyObj.image = image;
        
        return obj.success(replyObj);
  
    } catch(e) {
      obj.error('animals.doImage',e);
    }
  }
  
  module.exports = { 
    doImage: async ( obj ) => {
      return await doImage( obj );
    }
  };