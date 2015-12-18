'use strict';

var _dec, _dec2, _class;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = undefined;

var _core = require('angular2/core');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = exports.App = (_dec = (0, _core.Component)({
  selector: 'app'
}), _dec2 = (0, _core.View)({
  templateUrl: 'app/app.html'
}), _dec(_class = _dec2(_class = function App(elementRef) {
  _classCallCheck(this, App);

  this.elementRef = elementRef;
}) || _class) || _class);

App.parameters = [_core.ElementRef];