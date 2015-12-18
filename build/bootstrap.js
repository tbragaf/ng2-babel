'use strict';

var _browser = require('angular2/platform/browser');

var _core = require('angular2/core');

var _router = require('angular2/router');

var _app = require('./app/app');

(0, _browser.bootstrap)(_app.App, [(0, _core.provide)(_router.LocationStrategy, { useClass: _router.HashLocationStrategy })]);