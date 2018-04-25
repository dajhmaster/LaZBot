async function doXKCD( obj ) {
    const fetch = require('snekfetch');
    try {      
      //Args passed to command
      //let { text } = obj.command.args;
  
      //Do stuff here for doXKCD
      //...
      /*{
          "num": 1977,
          "safe_title": "Paperwork",
          "alt": "Plus, the photo was geotagged,
           my unlocked password manager was visible on the laptop, 
           AND you could see my naked reflection in the dark part of the screen.",
          "img": "https://imgs.xkcd.com/comics/paperwork.png",
          "title": "Paperwork"
        }*/

      let comic = !obj.command.subcmd ? `${Math.floor(Math.random() * Math.floor(1977))}/` : "";
      //num = obj.command.subcmd ? num : 0 ;

      
      fetch.get(`https://xkcd.com/${comic}info.0.json`).then(res => {
        //if ( res.body.result_type === "no_results" ) {
        //  return obj.fail("Sorry, ***" +text+ "*** was not found :cry:");
        //}
        //num = obj.command.subcmd ? num : 0 ;


      let replyObj = {};
      replyObj.title = `xkcd | ${res.body.title}`;
      replyObj.link = `https://xkcd.com/${res.body.num}/`;
      replyObj.image = res.body.img;
      //replyObj.color = '0x197711';
      
      obj.success(replyObj);
      }).catch(err => {
        obj.error('xkcd.doXKCD - Fetch Error',err);
      });
  
    } catch(e) {
      obj.error('xkcd.doXKCD',e);
    }
  }
  
  module.exports = { 
    doXKCD: async ( obj ) => {
      return await doXKCD( obj );
    }
  };