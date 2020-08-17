#!/usr/bin/env node


//Modules 

const chalk = require("chalk"),
      request = require("request")
//cli
const {argv} = require('yargs')
.options( {l : {alias : "lookup", require : true,  describe : "Lookup an ip"}})
.usage("zoomip -l <ip>")

const {l} = argv

//Requete

function getip(){
  console.clear()
  console.log(chalk.whiteBright(`
  ███████╗ ██████╗  ██████╗ ███╗   ███╗    ██╗██████╗ 
  ╚══███╔╝██╔═══██╗██╔═══██╗████╗ ████║    ██║██╔══██╗
    ███╔╝ ██║   ██║██║   ██║██╔████╔██║    ██║██████╔╝
   ███╔╝  ██║   ██║██║   ██║██║╚██╔╝██║    ██║██╔═══╝ 
  ███████╗╚██████╔╝╚██████╔╝██║ ╚═╝ ██║    ██║██║     
  ╚══════╝ ╚═════╝  ╚═════╝ ╚═╝     ╚═╝    ╚═╝╚═╝     
                                                  
  
  `))
    this.requests = function(ip){
      
        const url = `http://ip-api.com/json/${ip}?fields=status,as,,continent,country,region,regionName,city,zip,lat,lon,mobile,proxy,query`

        request.get(url, (err, res, body) =>{
          if(err)console.log(err)
          var status = JSON.parse(body).status
          var as = JSON.parse(body).as
          var continent = JSON.parse(body).continent
          var country = JSON.parse(body).country
          var region = JSON.parse(body).region
          var regionName = JSON.parse(body).regionName
          var city = JSON.parse(body).city
          var zip = JSON.parse(body).zip
          var lat = JSON.parse(body).lat
          var lon = JSON.parse(body).lon
          var mobile = JSON.parse(body).mobile
          var proxy = JSON.parse(body).proxy
          var query = JSON.parse(body).query


if(status == "fail"){console.log( chalk.redBright(`\n\n[-]The IP ${query} is Invalid\n\n\n`))}
else{
        console.log(chalk.greenBright(`\n\n[+] Status : ${status}`))
        console.log(chalk.greenBright(`[+] IP : ${query}\n\n`))
        console.log(chalk.blueBright(`[*] Continent : ${continent}`))
        console.log(chalk.blueBright(`[*] Country : ${country}`))
        console.log(chalk.blueBright(`[*] Region : ${region}`))
        console.log(chalk.blueBright(`[*] Region name  : ${regionName}`))
        console.log(chalk.blueBright(`[*] City  : ${city}`))
        console.log(chalk.blueBright(`[*] Zip : ${zip}`))
        console.log(chalk.blueBright(`[*] Latitude : ${lat}`))
        console.log(chalk.blueBright(`[*] Longitude : ${lon}`))
        console.log(chalk.blueBright(`[*] Mobile : ${mobile}`))
        console.log(chalk.blueBright(`[*] Proxy : ${proxy}`))
        console.log(chalk.blueBright(`[*] Provider : ${as}\n\n`))
          }
        })    
   
           
     }
 }

 
 var ip =  new getip
 ip.requests(l)
  
