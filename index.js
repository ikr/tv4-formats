(function () {
    'use strict';

    var moment = require('moment');

    exports.date = function (value) {
        if (/^\d{4,}-\d{2}-\d{2}$/.test(value) && moment(value, 'YYYY-MM-DD').isValid()) {
            return null;
        }

        return 'A valid date in YYYY-MM-DD format expected';
    };
}());
