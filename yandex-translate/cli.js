var program = require('commander');

var npmPackage = require('./package.json');

// set program version
var version = '';

if (typeof npmPackage.version != 'undefined') {
  version = npmPackage.version;
}
else {
  version = '0.0.1';
}


program
  .version(version)
  .usage('[options] <text>')
  .option('-l, --lang [text]', 'set lang from-to.')
  .option('-t, --text [text]', 'text for translate.')
  .parse(process.argv);

module.exports = {
  text: program.args[0] || '',
  lang: program.lang || 'en-ru'
};
