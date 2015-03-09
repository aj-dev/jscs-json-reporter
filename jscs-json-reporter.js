var fs = require('fs');
var path = require('path');

/**
 * @param {Array.<Errors>} errorsCollection
 */
module.exports = function (errorsCollection) {

    'use strict';

    var config = this.options;

    var reporter = {
        /**
         * @description An errors object that will be converted to JSON string.
         */
        errorsObj: {
            totalCount: 0,
            errors: []
        },

        /**
         * @description Create report and output to file.
         * @this reporter
         */
        report: function () {
            errorsCollection.forEach(this.processCollection, this);
            this.outputToFile(this.errorsObj);
        },

        /**
         * @description Iterates over each errors collection, updates total count and populates `errors` array.
         * @param {Object} errors Errors collection
         * @this reporter
         */
        processCollection: function (errors) {
            if (!errors.isEmpty()) {
                this.errorsObj.totalCount += errors.getErrorCount();
                errors.getErrorList().forEach(function (error) {
                    this.errorsObj.errors.push(this.mapError(error, errors));
                }, this);
            }
        },

        /**
         *
         * @param {Object} error JSCS error object
         * @param {Object} errors Errors collection for a certain rule
         * @returns {Object} Mapped error object
         * @this reporter
         */
        mapError: function (error, errors) {
            return {
                message: error.message,
                filename: error.filename,
                line: error.line,
                column: error.column,
                rule: error.rule,
                explainedError: errors.explainError(error, false)
            };
        },

        /**
         * @description Outputs results to file
         * @this reporter
         */
        outputToFile: function () {
            var outputPath,
                data = JSON.stringify(this.errorsObj, null, 4);

            if (this.isReporterOutputSet()) {
                console.log(data);
            } else {
                outputPath = path.resolve(process.cwd(), 'jscs-report.json');
                fs.writeFileSync(outputPath, data);
                console.log('>> jscs report written to', outputPath);
            }
        },

        /**
         * @description Checks whether reporter output path is set in `config`.
         * `reporterOutput` property can only be set using `grunt-jscs`.
         * @returns {Boolean}
         * @this reporter
         */
        isReporterOutputSet: function () {
            return !!(config && config.reporterOutput);
        }
    };

    reporter.report();
};
