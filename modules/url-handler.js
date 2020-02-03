//make url auth module
const express = require('express');
let app = express();


let urlDict = {
    '/test01': 'http://vk.com'
};

let authentificate = function(req, res, next){
    if(!!urlDict[req.url]){
        res.redirect(urlDict[req.url]);
    }
    else{
        res.send('404! URL NOT FOUND...');
    }
}

let shorten = function(req, res, next){
    let incomingUrl = req.body.url;
    let protocolPatten = /http(s)?:\/\//;
    let protocol = incomingUrl.match(protocolPatten);
    incomingUrl = incomingUrl.replace(protocolPatten, '');

    if(!Object.values(urlDict).includes(protocol)){

    }
}
module.exports.auth = authentificate;