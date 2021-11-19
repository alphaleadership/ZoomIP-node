const {argv} = require('yargs')
.options( {l : {alias : "lookup", require : true,  describe : "Lookup an ip"}})
.usage("zoomip -l <ip>")


const {l} = argv
var getip = require("./zoomip")
 var ip =  new getip
 ip.requests(l)
  
