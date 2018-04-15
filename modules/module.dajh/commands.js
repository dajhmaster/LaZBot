module.exports = { 
    doPing: async ( obj ) => {
      return await require('./ping.js').doPing( obj );
    }, 
    doParse: async ( obj ) => {
      return await require('./parse.js').doParse( obj );
    }, 
    doUrban: async ( obj ) => {
      return await require('./urban.js').doUrban( obj );
    }, 
    urbanRandom: async ( obj ) => {
      return await require('./urban.js').urbanRandom( obj );
    }, 
    urbanAll: async ( obj ) => {
      return await require('./urban.js').urbanAll( obj );
    }, 
    doXKCD: async ( obj ) => {
      return await require('./xkcd.js').doXKCD( obj );
    }, 
    doBot: async ( obj ) => {
      return await require('./bot.js').doBot( obj );
    }, 
    doImage: async ( obj ) => {
      return await require('./image.js').doImage( obj );
    }
  };