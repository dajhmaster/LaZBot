(function() {

    module.exports.Get = function( message, messageParts, channel ) {

    	var get = {};
        var details = messageParts[1].charAt(0) === '-' ? false : true;  
        var sheet = !details ? messageParts[1].substr(1,messageParts[1].length) : messageParts[1];
        
        get[sheet] = {};
        
    	for( var i = 2; i < messageParts.length; i+=2 ) {

    		if( typeof(messageParts[i]) !== "undefined" || messageParts[i] !== "" ) { 
 
    			get[sheet][messageParts[i]] = isNaN(messageParts[i+1]) ? messageParts[i+1] : parseInt(messageParts[i+1]);
    			if( typeof( get.on ) === "undefined" ) { get.on = ""; }
	        	get.on += get.on ? "|"+messageParts[i] : messageParts[i];

    		}
 
    	}
           
        var sheetURL = channel.spreadsheet;
        var ruleURL = sheetURL+"?get="+encodeURIComponent(JSON.stringify(get));
        console.log( sheetURL+"?get="+JSON.stringify(get) );
        
        var request = require('request');
        request(ruleURL, function (error, response, body) {
          
        	if( typeof(body) === "undefined" || body.length === 0 ) { return; }
		
			try {
			    var body = JSON.parse(body);
			    var replyBuilder = require("../utilities/replyBuilder.js");
			    return details ? replyBuilder.replyDetails( message, body.data ) : replyBuilder.replyData( message, body.data );
			} catch(e) {
			    console.error(e);
			    console.error(response);
			    return;
			}
		
        });
        
    }

}());

