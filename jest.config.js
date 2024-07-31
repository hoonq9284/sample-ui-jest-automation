/** @type {import('jest').Config} */
module.exports = {
    testEnvironment: 'node',
    testTimeout: 30000,
    reporters: [
        'default',
        [
            './node_modules/jest-html-reporter', {
                pageTitle: 'Test Report',
                outputPath: './test-report.html',
                includeFailureMsg: true,
                includeStackTrace: false,
                includeSuiteFailure: true,
                includeConsoleLog: true,
                append: false,
                useCssFile: true
            }
        ]
    ]
};