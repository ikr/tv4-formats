(function (global, factory) {
    'use strict';

    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([
            'validator',
            'moment',
            './src/dateTimeRegExp',
            './src/uriRegExp',
            './src/durationRegExp',
            './src/timeOffsetRegExp'
        ], /*jshint maxparams: 6 */
        function (validator,
            moment,
            dateTimeRegExp,
            uriRegExp,
            durationRegExp,
            timeOffsetRegExp) {
                factory(validator,
                    moment,
                    dateTimeRegExp,
                    uriRegExp,
                    durationRegExp,
                    timeOffsetRegExp);
            });
    } else if (typeof module !== 'undefined' && module.exports) {
        // CommonJS. Define export.
        module.exports = factory(
            require('validator'),
            require('moment'),
            require('./src/dateTimeRegExp'),
            require('./src/uriRegExp'),
            require('./src/durationRegExp'),
            require('./src/timeOffsetRegExp')
        );
    } else {
        // Browser globals
        global.tv4Formats = factory(
            global.validator,
            global.moment,
            global.dateTimeRegExp,
            global.uriRegExp,
            global.durationRegExp,
            global.timeOffsetRegExp
        );
    }
}(this, /*jshint maxparams: 6 */
    function (validator, moment, dateTimeRegExp, uriRegExp, durationRegExp, timeOffsetRegExp) {
    'use strict';

    var dateRegExp = /^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/,
        guidRegExp =
            /^\{?[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}\}?$/;

    function date(value) {
        if (dateRegExp.test(value) && moment(value, 'YYYY-MM-DD').isValid()) {
            return null;
        }

        return 'A valid date in YYYY-MM-DD format expected';
    }

    function dateTime(value) {
        if (
            dateTimeRegExp.test(value) &&
            moment(value).isValid()
        ) {
            return null;
        }

        return 'A valid ISO 8601 date/time string expected';
    }

    function email(value) {
        if (validator.isEmail(value)) {
            return null;
        }

        return 'E-mail address expected';
    }

    function uri(value) {
        if (uriRegExp.test(value)) {
            return null;
        }

        return 'URI expected';
    }

    function url(value) {
        if (validator.isURL(value)) {
            return null;
        }

        return 'URL expected';
    }

    function creditCardNumber(value) {
        if (validator.isCreditCard(value)) {
            return null;
        }

        return 'A valid credit card number format expected';
    }

    function duration(value) {
        return durationRegExp.test(value) ? null : 'ISO 8601 duration is expected';
    }

    function timeOffset(value) {
        return timeOffsetRegExp.test(value) ? null : 'A signed ISO 8601 duration is expected';
    }

    function guid(value) {
        return guidRegExp.test(value) ? null : 'A valid GUID is expected';
    }

    // Exposed public methods
    return {
        'date': date,
        'date-time': dateTime,
        'email': email,
        'uri': uri,
        'url': url,
        'credit-card-number': creditCardNumber,
        'duration': duration,
        'time-offset': timeOffset,
        'guid': guid
    };
}));
