var path = require('path');

var createPattern = function (pattern) {
    return {
        pattern: pattern,
        included: true,
        served: true,
        watched: false
    };
};

var initShim = function (files, es5) {
    if (es5.sham === true) {
        files.unshift(createPattern(path.resolve(require.resolve('es5-sham'))));    
    }
    if (es5.shim !== false) {
        files.unshift(createPattern(path.resolve(require.resolve('es5-shim'))));    
    }
};
initShim.$inject = ['config.files', 'config.es5'];

module.exports = {
    'framework:es5-shim': ['factory', initShim]
};
