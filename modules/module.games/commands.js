module.exports = { 
  doYoda: async ( obj ) => {
    return await require('./yoda.js').doYoda( obj );
  }, 
  doYodaTrans: async ( obj ) => {
    return await require('./yoda.js').doYodaTrans( obj );
  }
};