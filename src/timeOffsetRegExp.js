(function (global, factory) {
    'use strict';

    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['./durationRegExpString'],
            function (durationRegExpString) {
                return factory(durationRegExpString);
            });
    } else if (typeof module !== 'undefined' && module.exports) {
        // CommonJS. Define export.
        module.exports = factory(require('./durationRegExpString'));
    } else {
        // Browser globals
        global.timeOffsetRegExp = factory(global.durationRegExpString);
    }
}(this, function (durationRegExpString) {
    'use strict';
    return new RegExp('^-?' + durationRegExpString.substr(1));
}));
