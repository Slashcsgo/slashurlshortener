const express = require('express');
const randomString = require('randomstring');
const shortUrlSettings = {length: 6, charset: 'alphanumeric'};
const path = require('path');
const logger = require('morgan');
let bodyParser = require('body-parser');
let app = express();
let urls = {
    '/test': 'http://vk.com'
};
app.use(logger('tiny'));

app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, 'static')));


app.post('/', function(req, res){
    let url = req.body.url;
    if(!Object.values(urls).includes('http://' + url) && url){
        let shorten = '/' + randomString.generate(shortUrlSettings);
        urls[shorten] = 'http://' + url;
        console.log('slashcs.xyz' + shorten)
        console.log(urls)
        res.send(shorten);
    }
});
app.use(function(req, res, next){
    if(!!urls[req.url]){
        res.redirect(urls[req.url]);
    }
    else{
        res.send('404! URL NOT FOUND');
    }
    next();
});

app.listen(3000, function(){
    console.log('app listening on 3000 port')
});