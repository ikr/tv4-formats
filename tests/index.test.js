describe('tv4-formats', function () {
    'use strict';

    var assert = require('assert'),
        formats = require('../index.js');

    describe('date', function () {
        it('is defined', function () {
            assert.strictEqual(typeof formats.date, 'function');
        });

        it('returns no error for a valid ISO 8601 date', function () {
            assert.strictEqual(formats.date('2014-02-11'), null);
        });

        it('complains about 30th of February, mentioning the expected format', function () {
            assert(/YYYY-MM-DD/.test(formats.date('2014-02-30')));
        });

        it('complains when the date format is wrong', function () {
            assert(formats.date('11.02.2014').length > 0);
        });

        it('complains when it\'s not a date at all', function () {
            assert(formats.date('BOO!').length > 0);
        });
    });

    describe('date-time', function () {
        it('is defined', function () {
            assert.strictEqual(typeof formats['date-time'], 'function');
        });

        it('returns no error for a valid ISO 8601 UTC date and time with a TZ offset', function () {
            assert.strictEqual(formats['date-time']('2014-02-11T15:19:59+00:00'), null);
        });

        it('returns no error for a valid ISO 8601 UTC date and time with no TZ offset', function () {
            assert.strictEqual(formats['date-time']('2014-02-11T15:19:59Z'), null);
        });

        it('returns no error for a valid ISO 8601 UTC date-time with a TZ offset and fractional seconds', function () {
            assert.strictEqual(formats['date-time']('2014-02-11T15:19:59.000+00:00'), null);
        });

        it('it complains on garbage', function () {
            assert(formats['date-time']('jsdfhdfsb hjsbdfhbdhbbfd hjsdb').length > 0);
        });

        it('complains on a date-time in a wrong format 1', function () {
            assert(formats['date-time']('2014-02-11 16:31:14').length > 0);
        });

        it('complains on a date-time in a wrong format 1', function () {
            assert(formats['date-time']('2013-W06-5T09:30:26 Z').length > 0);
        });
    });

    describe('email', function () {
        it('is defined', function () {
            assert.strictEqual(typeof formats.email, 'function');
        });

        it('validates positively', function () {
            assert.strictEqual(formats.email('ivan.krechetov+special-tag@gmail.com'), null);
        });

        it('validates negatively', function () {
            assert(formats.email('#not_an_email').length > 0);
        });
    });

    describe('uri', function () {
        it('is defined', function () {
            assert.strictEqual(typeof formats.uri, 'function');
        });

        it('validates positively', function () {
            assert.strictEqual(formats.uri('http://krechetov.net/'), null);
        });

        it('accepts just a name', function () {
            assert.strictEqual(formats.uri('foobar'), null);
        });

        it('accepts an absolute path', function () {
            assert.strictEqual(formats.uri('/var/log/nginx/access.log'), null);
        });

        it('accepts a ./ relative path', function () {
            assert.strictEqual(formats.uri('./export.xml'), null);
        });

        it('accepts a ../ relative path', function () {
            assert.strictEqual(formats.uri('../export.xml'), null);
        });

        it('validates negatively', function () {
            assert(formats.uri('+41 43 000 00 00 Grüezi').length > 0);
        });
    });

    describe('url', function () {
        it('is defined', function () {
            assert.strictEqual(typeof formats.url, 'function');
        });

        it('validates positively', function () {
            assert.strictEqual(formats.url('https://ikr.su/'), null);
        });

        it('validates negatively', function () {
            assert(formats.url('#clearly# :not: a URL').length > 0);
        });
    });

    describe('credit-card-number', function () {
        it('is defined', function () {
            assert.strictEqual(typeof formats['credit-card-number'], 'function');
        });

        it('validates positively', function () {
            assert.strictEqual(formats['credit-card-number']('4242424242424242'), null);
        });

        it('validates negatively on garbage', function () {
            assert(formats['credit-card-number']('MA CC NUM').length > 0);
        });

        it('validates negatively on a number violating the checksum', function () {
            assert(formats['credit-card-number']('1000000000000000').length > 0);
        });
    });

    describe('duration', function () {
        it('is defined', function () {
            assert.strictEqual(typeof formats.duration, 'function');
        });

        [
            'P1Y', 'P2M', 'P3W', 'P4D', // days
            'PT1H', 'PT2M', 'PT3S', // times
            'P3Y6M4DT12H30M5S', 'P23DT23H', 'P1Y3WT24H', // combined
            'P0.5Y', 'P0,5Y', 'PT0.5H' // fractions
        ].forEach(function (validDuration) {
            it('validates valid "' + validDuration + '" durantion positively', function () {
                assert.strictEqual(formats.duration(validDuration), null);
            });
        });

        [
            'P1', '2M', 'PW', 'P4D2', 'PT1Y', 'P2S', 'P3Y6M4D12H30M5S', 'PT0.5'
        ].forEach(function (invalidDuration) {
            it('validates invalid "' + invalidDuration + '" durantion negatively', function () {
                assert(formats.duration(invalidDuration).length);
            });
        });


    });
});
