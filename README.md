# About

Provides the implementation of common [JSON Schema](http://json-schema.org/) string format
constraints in the form of
[tv4 validator callbacks.](https://github.com/geraintluff/tv4#addformatformat-validationfunction)
Thus, it's a plug-in for [tv4.](https://github.com/geraintluff/tv4)

# Usage

First, install it, together with tv4 itself, via Node.js'es [npm](https://www.npmjs.org/) into your
project

    npm install --save tv4 tv4-formats

Then, in the code

    var tv4 = require('tv4'),
        formats = require('tv4-formats'),
        assert = require('assert'),
        validator = tv4.freshApi(),
        schema = {type: 'string', format: 'date'};

    validator.addFormat(formats);
    assert(validator.validate('2014-02-11', schema));  // Valid ISO 8601 date
    assert(!validator.validate('2014-02-29', schema)); // Invalid. Only 28 days in this February

Here, the `format: 'date'` part of the schema validation is provided by `tv4-formats` package.

# Supported formats

* date
* ...
