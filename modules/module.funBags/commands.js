/** EXPORTS **/
module.exports = {
 
  getWeather: async ( obj ) => {
    try {
      return await require('./weather.js')["getWeather"]( obj );
    } catch(e) { obj.error('weather.getWeather.js',e); }
  },
  
  getForecast: async ( obj ) => {
	  try {
	      return await require('./weather.js')["getForecast"]( obj );
	  } catch(e) { obj.error('weather.getForecast.js',e); }
  },
      
  doSpirit: async ( obj ) => {
    try {
      return await require('./spirit.js')["doSpirit"]( obj );
    } catch(e) { obj.error('spirit.doSpirit.js',e); }
  }
  ,
  
  doUrban: async ( obj ) => {
    try {
      return await require('./urban.js')["doUrban"]( obj );
    } catch(e) { obj.error('urban.doUrban.js',e); }
  },
  urbanAll: async ( obj ) => {
    try {
      return await require('./urban.js')["urbanAll"]( obj );
    } catch(e) { obj.error('urban.urbanAll.js',e); }
  },
  urbanRandom: async ( obj ) => {
    try {
      return await require('./urban.js')["urbanRandom"]( obj );
    } catch(e) { obj.error('urban.urbanRandom.js',e); }
  },

  doQuote: async ( obj ) => {
    try {
      return await require('./quote.js')["doQuote"]( obj );
    } catch(e) { obj.error('quote.doQuote.js',e); }
  },
  doQTorgue: async ( obj ) => {
	    try {
	      return await require('./quote.js')["doQTorgue"]( obj );
	    } catch(e) { obj.error('quote.doQTorgue.js',e); }
  },
  doQPsycho: async ( obj ) => {
    try {
      return await require('./quote.js')["doQPsycho"]( obj );
    } catch(e) { obj.error('quote.doQPsycho.js',e); }
  },
  doQJack: async ( obj ) => {
    try {
      return await require('./quote.js')["doQJack"]( obj );
    } catch(e) { obj.error('quote.doQJack.js',e); }
  },
  doQLotto: async ( obj ) => {
    try {
      return await require('./quote.js')["doQLotto"]( obj );
    } catch(e) { obj.error('quote.doQLotto.js',e); }
  }  
  
}