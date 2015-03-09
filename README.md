# jscs-json-reporter [![npmVersion](http://img.shields.io/npm/v/jscs-json-reporter.svg)](https://www.npmjs.org/package/jscs-json-reporter)
[![Build Status](https://travis-ci.org/aj-dev/jscs-json-reporter.svg?branch=master)](https://travis-ci.org/aj-dev/jscs-json-reporter)
[![Dependencies](https://david-dm.org/aj-dev/jscs-json-reporter.svg)](https://david-dm.org/aj-dev/jscs-json-reporter#info=dependencies&view=table)
[![DevDependencies](https://david-dm.org/aj-dev/jscs-json-reporter/dev-status.svg)](https://david-dm.org/aj-dev/jscs-json-reporter#info=devDependencies&view=table) [![npm](https://img.shields.io/npm/dm/jscs-json-reporter.svg)](https://www.npmjs.com/package/jscs-json-reporter)


A JSON reporter for [node-jscs](https://github.com/mdevils/node-jscs) and [grunt-jscs](https://github.com/jscs-dev/grunt-jscs).

## Getting started
Install using npm:

`npm install jscs-json-reporter --save-dev`

## Usage

#### When using with [node-jscs](https://github.com/mdevils/node-jscs)
Set the path to `jscs-json-reporter`. Command line example:

`jscs app.js --reporter node_modules/jscs-json-reporter/jscs-json-reporter.js`

Report will be written to `jscs-report.json` in current working directory.

#### When using with [grunt-jscs](https://github.com/jscs-dev/grunt-jscs)
Configure `jscs` in `Gruntfile.js` so that `reporter` points to `jscs-json-reporter.js` and `reporterOutput` points to some JSON file.

```javascript
jscs: {
    src: [
    	'path/to/files/*.js',
    	'another/path/to/files/**/*.js'
    ],
    options: {
        reporter: '/path/to/jscs-json-reporter.js',
        reporterOutput: '/path/to/jscs-report.json'
    }
}
```

## Example
![alt text](https://raw.githubusercontent.com/aj-dev/jscs-json-reporter/master/jscs-json-reporter.png 'JSCS JSON Reporter example')

`"explainedError"` key contains a preformatted string with detailed error info.

When used inside HTML `<pre></pre>` tags it is displayed like this:
![alt text](https://raw.githubusercontent.com/aj-dev/jscs-json-reporter/master/explained-error-preformatted.png 'Explained error property preformatted example')

## Important!
Generated JSON file size might be very large depending on the number of errors. For instance, a file containing 4500 errors is around 2.85 MB.

## License
Licensed under the MIT license. Copyright (c) 2015 Audrius Jakumavicius
