[![Build Status](https://travis-ci.org/ikr/tv4-formats.svg?branch=master)](https://travis-ci.org/ikr/tv4-formats)

# About

Provides the implementation of common [JSON Schema](http://json-schema.org/) string format
constraints in the form of
[tv4 validator callbacks.](https://github.com/geraintluff/tv4#addformatformat-validationfunction)
Thus, it's a plug-in for [tv4.](https://github.com/geraintluff/tv4)

# Usage

First, install it, together with tv4 itself, via Node.js'es [npm](https://www.npmjs.org/) into your
project

    $ npm install --save tv4 tv4-formats

Then, in the code

```javascript
var tv4 = require('tv4'),
    formats = require('tv4-formats'),
    assert = require('assert'),
    validator = tv4.freshApi(),
    schema = {type: 'string', format: 'date'};

validator.addFormat(formats);
assert(validator.validate('2014-02-11', schema));  // Valid ISO 8601 date
assert(!validator.validate('2014-02-29', schema)); // Invalid. Only 28 days in this February
assert(!validator.validate('11.02.2014', schema)); // Invalid. Wrong date format
```

Here, the `format: 'date'` part of the schema validation is provided by `tv4-formats` package.

# Supported formats

* date (YYYY-MM-DD)
* date-time (for example, 2014-05-02T12:59:29+00:00)
* email
* uri
* url
* credit-card-number
* [duration](http://en.wikipedia.org/wiki/Iso8601#Durations) (for example, P1DT12H for 1.5 days)
