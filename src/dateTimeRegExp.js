(function (global, factory) {
    'use strict';
    /*jshint -W003*/
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory());
    } else if (typeof module !== 'undefined' && module.exports) {
        // CommonJS. Define export.
        module.exports = factory();
    } else {
        // Browser globals
        global.dateTimeRegExp = factory();
    }
}(this, function () {
    'use strict';

    return /^[0-9]{4,}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}(?:\.[0-9]+|)(?:[+-][0-9]{2}:?(?:[0-9]{2}|)|Z)$/;
}));
