(function () {
    'use strict';

    var validator = require('validator'),
        moment = require('moment'),
        dateTimeRegExp = require('./src/dateTimeRegExp'),
        uriRegExp = require('./src/uriRegExp'),
        durationRegExp = require('./src/durationRegExp'),
        timeOffsetRegExp = require('./src/timeOffsetRegExp'),
        dateRegExp = /^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/,
        guidRegExp =
            /^\{?[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}\}?$/;

    exports.date = function (value) {
        if (dateRegExp.test(value) && moment(value, 'YYYY-MM-DD').isValid()) {
            return null;
        }

        return 'A valid date in YYYY-MM-DD format expected';
    };

    exports['date-time'] = function (value) {
        if (
            dateTimeRegExp.test(value) &&
            moment(value).isValid()
        ) {
            return null;
        }

        return 'A valid ISO 8601 date/time string expected';
    };

    exports.email = function (value) {
        if (validator.isEmail(value)) {
            return null;
        }

        return 'E-mail address expected';
    };

    exports.uri = function (value) {
        if (uriRegExp.test(value)) {
            return null;
        }

        return 'URI expected';
    };

    exports.url = function (value) {
        var tldRequired = value.indexOf('localhost') === -1;

        if (validator.isURL(value, { 'require_tld': tldRequired })) {
            return null;
        }

        return 'URL expected';
    };

    exports['credit-card-number'] = function (value) {
        if (validator.isCreditCard(value)) {
            return null;
        }

        return 'A valid credit card number format expected';
    };

    exports.duration = function (value) {
        return durationRegExp.test(value) ? null : 'ISO 8601 duration is expected';
    };

    exports['time-offset'] = function (value) {
        return timeOffsetRegExp.test(value) ? null : 'A signed ISO 8601 duration is expected';
    };

    exports.guid = function (value) {
        return guidRegExp.test(value) ? null : 'A valid GUID is expected';
    };
}());
