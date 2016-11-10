var request = require('request');
var cli = reuqire('./cli');

var translateCallback = function(err, res, body) {
  if (!err) {
    console.log(body);
  }  
}

var endpoint = 'https://translate.yandex.net/api/v1.5/tr.json/translate';
var apiKey = 'trnsl.1.1.20161110T051108Z.7ee49e46901db747.bce87285480db9e1a8d9a553b02285cc3bbffd06';
var form = {
  key: apiKey,
  lang: cli.lang,
  text: cli.text,  
};

request.post(endpoint, {form: form}, translateCallback);
