const cheerio = require('cheerio');
const request = require("request");

request({
    uri: "http://hydra-services.prod-las.cdk.com/hydra-graph/route/base-view/hydraProperties",
}, function(error, response, body) {

    if(error){

    }

    const $ = cheerio.load(body);

    console.log($('h1').length);

    // var hydraProperties = $('body > ul')[0];
    // var toggleProperties = $('body > ul')[1];
    //
    // const loadToggleProperties = cheerio.load(toggleProperties);
    // var li = [];
    // loadToggleProperties('li').each(function (i, elem) {
    //   console.log(loadToggleProperties('elem span[class="key"]').innerHTML);
    //   console.log(loadToggleProperties('elem span[class="value"]').innerHTML);
    // });
    //
    // console.log(li);

});