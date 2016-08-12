(function () {
    'use strict';

    var durationRegExpString = require('./durationRegExpString');

    module.exports = new RegExp('^-?' + durationRegExpString.substr(1));
}());
