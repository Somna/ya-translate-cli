var request = require('request');
var readline = require('readline');

var cli = require('./cli');

var readStdin = function(callback) {
    var lines = [];
    var rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      terminal: false
    });
    
    rl.on('line', function(line) {
      lines.push(line);
    });
    
    rl.on('close', function() {
      callback(lines.join('\n'));
    });
}


var output = function(text) {
  var translateCallback = function(err, res, body) {
    if (!err) {
      console.log(JSON.parse(body).text[0]);
    }
  }
  
  var endpoint = 'https://translate.yandex.net/api/v1.5/tr.json/translate';
  var apiKey = 'trnsl.1.1.20161110T051108Z.7ee49e46901db747.bce87285480db9e1a8d9a553b02285cc3bbffd06';
  var form = {
    key: apiKey,
    lang: cli.lang,
    text: text,
  };
  request.post(endpoint, {form: form}, translateCallback);
}


if (!cli.text) {
  readStdin(output);
} 
else {
  output(cli.text);
}
