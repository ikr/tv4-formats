(function () {
    'use strict';

    var moment = require('moment'),
        validator = require('validator'),
        dateTimeRegExp = require('./src/dateTimeRegExp'),
        uriRegExp = require('./src/uriRegExp'),
        durationRegExp = require('./src/durationRegExp'),
        dateRegExp = /^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/;

    exports.date = function (value) {
        if (typeof value !== 'string' || (dateRegExp.test(value) && moment(value, 'YYYY-MM-DD').isValid())) {
            return null;
        }

        return 'A valid date in YYYY-MM-DD format expected';
    };

    exports['date-time'] = function (value) {
        if (
            typeof value !== 'string' || (
            dateTimeRegExp.test(value) &&
            moment(value).isValid())
        ) {
            return null;
        }

        return 'A valid ISO 8601 date/time string expected';
    };

    exports.email = function (value) {
        if (typeof value !== 'string' || validator.isEmail(value)) {
            return null;
        }

        return 'E-mail address expected';
    };

    exports.uri = function (value) {
        if (typeof value !== 'string' || uriRegExp.test(value)) {
            return null;
        }

        return 'URI expected';
    };

    exports.url = function (value) {
        if (typeof value !== 'string' || validator.isURL(value)) {
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
        return (typeof value !== 'string' || durationRegExp.test(value)) ? null : 'ISO 8601 duration is expected';
    };
}());
