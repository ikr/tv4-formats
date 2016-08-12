(function () {
    'use strict';

    var amount = '[\\.,0-9]+';

    module.exports = (
        '^P(' + amount + 'Y|)(' + amount + 'M|)(' + amount + 'W|)(' + amount + 'D|)' +
        '(T(' + amount + 'H|)(' + amount + 'M|)(' + amount + 'S|))?$'
    );
}());
