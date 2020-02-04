//make url auth module
const express = require('express');
const randomString = require('randomstring');
const shortUrlSettings = {length: 6, charset: 'alphanumeric'};
let app = express();


let urlDict = {
    '/test01': 'http://vk.com',
    'ghghgh': 'https://github.com/'
};

let authentificate = function(req, res, next){
    if(!!urlDict[req.url]){
        res.redirect(urlDict[req.url]);
    }
    else{
        res.send('404! URL NOT FOUND...');
    }
}

let shorten = function(req){
    let incomingUrl = req.body.url;
    let protocolPatten = /https?:\/\//;
    let wrongProtocolPattern = /([\s\S]+:\/\/)/;
    let protocol;
    if (incomingUrl.match(protocolPatten)){
        protocol = incomingUrl.match(protocolPatten)[0];
        incomingUrl = incomingUrl.replace(protocolPatten, '');
    }
    else{
        protocol = 'https://';
        incomingUrl = incomingUrl.replace(wrongProtocolPattern, '');
    }
    console.log(protocol + '   ' + incomingUrl);
    if(!Object.values(urlDict).includes(protocol + incomingUrl)){
        //new
    }
    else{
        //exists
    }
}


module.exports.auth = authentificate;
module.exports.shorten = shorten;