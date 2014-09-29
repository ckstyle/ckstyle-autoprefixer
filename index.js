var autoprefixer = require('autoprefixer')

function autoprefix(code, options) {
    code = autoprefixer.process(code, options).css
    return code
}

module.exports = autoprefix