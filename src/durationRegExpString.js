(function (global, factory) {
    'use strict';

    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory());
    } else if (typeof module !== 'undefined' && module.exports) {
        // CommonJS. Define export.
        module.exports = factory();
    } else {
        // Browser globals
        global.durationRegExpString = factory();
    }
}(this, function () {
    'use strict';

    var amount = '[\\.,0-9]+';

    return (
        '^P(' + amount + 'Y|)(' + amount + 'M|)(' + amount + 'W|)(' + amount + 'D|)' +
        '(T(' + amount + 'H|)(' + amount + 'M|)(' + amount + 'S|))?$'
    );
}));

