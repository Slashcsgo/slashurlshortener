const express = require('express');
const randomString = require('randomstring');
const shortUrlSettings = {length: 6, charset: 'alphanumeric'};
const path = require('path');
const logger = require('morgan');
const urlHandler = require('./modules/url-handler');
let bodyParser = require('body-parser');
let app = express();
let urls = {
    '/test01': 'http://vk.com'
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
        res.send('slashcs.xyz' + shorten);
    }
});
// app.use(function(req, res, next){
//     if(!!urls[req.url]){
//         res.redirect(urls[req.url]);
//     }
//     else{
//         res.send('404! URL NOT FOUND');
//     }
//     next();
// });
app.use(urlHandler.auth);

app.listen(80, function(){
    console.log('app listening on 80 port')
});