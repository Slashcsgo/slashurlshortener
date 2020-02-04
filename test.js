let testModule = require('./modules/url-handler');

let req = {
    body: {
        url: 'github.com/'
    }
}

testModule.shorten(req)