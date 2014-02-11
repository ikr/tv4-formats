(function () {
    'use strict';

    var moment = require('moment');

    exports.date = function (value) {
        if (/^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(value) && moment(value, 'YYYY-MM-DD').isValid()) {
            return null;
        }

        return 'A valid date in YYYY-MM-DD format expected';
    };

    exports['date-time'] = function (value) {
        if (
            /[0-9]{4,}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}[+-][0-9]{2}:[0-9]{2}/.test(value) &&
            moment(value).isValid()
        ) {
            return null;
        }

        return 'A valid ISO 8601 date/time string expected';
    };
}());
