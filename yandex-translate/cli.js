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
    .parse(process.argv);

module.exports = {
  lang: program.lang || 'en-ru',
  text: program.args[0] || ''
};
