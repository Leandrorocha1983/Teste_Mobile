const {join} = require('path')
exports.config = {
    hostname: '127.0.0.1', // ip local
    port: 4723,
    path: '/wd/hub',
    specs: [
        './test/specs/**/*spec.js'
    ],
    framework: 'mocha',
    capabilities:[{
        "platformName": "Android",
        "platformVersion": "9.0",
        "deviceName": "ebac-qa",
        "automationName": "UiAutomator2",
        "app": join(process.cwd(), './app/android/Android-NativeDemoApp-0.4.0.apk'),
        "appWaitActivity": '.MainActivity',
        "appActivity": ".SplashActivity", 
        "appPackage": "com.wdiodemoapp"
    }]
}

